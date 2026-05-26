import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const baseUrl = process.env.SITE_BASE_URL || 'https://windscode.github.io/AerospaceSimulationNotes/';
const pages = [
  ['home', ''],
  ['intelligence', 'intelligence/'],
  ['knowledge', 'knowledge/'],
  ['missions', 'missions/'],
  ['tools', 'tools/'],
  ['radar', 'radar/'],
  ['reproduction-lab', 'reproduction-lab/'],
  ['data', 'data/'],
  ['log', 'log/'],
  ['blog-archive', 'blog/'],
  ['knowledge-intro', 'docs/intro/'],
];
const viewports = [
  ['desktop', 1440, 1100, 1],
  ['mobile', 390, 844, 2],
];

fs.rmSync('site-screenshots', { recursive: true, force: true });
fs.mkdirSync('site-screenshots', { recursive: true });

async function loadWithRetry(page, url) {
  let lastError;
  for (let i = 1; i <= 12; i += 1) {
    try {
      const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
      const status = response ? response.status() : 0;
      if (status >= 200 && status < 400) return status;
      lastError = new Error(`HTTP ${status}`);
    } catch (error) {
      lastError = error;
    }
    await page.waitForTimeout(10000);
  }
  throw lastError;
}

const browser = await chromium.launch();
const report = [];

for (const [folder, width, height, scale] of viewports) {
  fs.mkdirSync(path.join('site-screenshots', folder), { recursive: true });
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: scale, isMobile: folder === 'mobile' });
  for (const [name, route] of pages) {
    const url = new URL(route, baseUrl).toString();
    const page = await context.newPage();
    const file = path.join('site-screenshots', folder, `${name}.png`);
    try {
      const status = await loadWithRetry(page, url);
      const metrics = await page.evaluate(() => ({
        scrollHeight: document.documentElement.scrollHeight,
        clientHeight: document.documentElement.clientHeight,
      }));
      await page.screenshot({ path: file, fullPage: true });
      report.push({ folder, name, url, status, file, scrollHeight: metrics.scrollHeight, clientHeight: metrics.clientHeight });
      console.log(`captured ${folder}/${name}`);
    } catch (error) {
      const errorFile = path.join('site-screenshots', folder, `${name}.error.txt`);
      fs.writeFileSync(errorFile, `${url}\n${error.stack || error.message}\n`);
      report.push({ folder, name, url, error: error.message });
      console.error(`failed ${folder}/${name}: ${error.message}`);
    }
    await page.close();
  }
  await context.close();
}

await browser.close();
fs.writeFileSync('site-screenshots/report.json', JSON.stringify(report, null, 2));

const lines = [
  '# Deployed site screenshots',
  '',
  `Base URL: ${baseUrl}`,
  `Captured: ${new Date().toISOString()}`,
  '',
  '| Viewport | Page | Status | Height | Screenshot | URL |',
  '| --- | --- | --- | --- | --- | --- |',
  ...report.map(item => `| ${item.folder} | ${item.name} | ${item.error ? `ERROR: ${item.error.replace(/\|/g, '/')}` : item.status} | ${item.scrollHeight || ''} | ${item.file ? `[${path.basename(item.file)}](${item.file.replace('site-screenshots/', './')})` : ''} | ${item.url} |`),
];
fs.writeFileSync('site-screenshots/README.md', lines.join('\n'));
