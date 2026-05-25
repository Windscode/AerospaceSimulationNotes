import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const baseUrl = process.env.SITE_BASE_URL || 'https://windscode.github.io/AerospaceSimulationNotes/';
const pages = [
  ['home', ''],
  ['intelligence', 'intelligence/'],
  ['tools', 'tools/'],
  ['radar', 'radar/'],
  ['reproduction-lab', 'reproduction-lab/'],
  ['data', 'data/'],
  ['knowledge-intro', 'docs/intro/'],
];
const viewports = [
  ['desktop', 1440, 1100, 1],
  ['mobile', 390, 844, 2],
];

fs.mkdirSync('site-screenshots/desktop', { recursive: true });
fs.mkdirSync('site-screenshots/mobile', { recursive: true });

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
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: scale, isMobile: folder === 'mobile' });
  for (const [name, route] of pages) {
    const url = new URL(route, baseUrl).toString();
    const page = await context.newPage();
    const file = path.join('site-screenshots', folder, `${name}.png`);
    try {
      const status = await loadWithRetry(page, url);
      await page.screenshot({ path: file, fullPage: true });
      report.push({ folder, name, url, status, file });
      console.log(`captured ${folder}/${name}`);
    } catch (error) {
      const errorFile = path.join('site-screenshots', folder, `${name}.error.txt`);
      fs.writeFileSync(errorFile, `${url}\n${error.message}\n`);
      report.push({ folder, name, url, error: error.message });
      console.error(`failed ${folder}/${name}: ${error.message}`);
    }
    await page.close();
  }
  await context.close();
}

await browser.close();
fs.writeFileSync('site-screenshots/report.json', JSON.stringify(report, null, 2));
fs.writeFileSync('site-screenshots/README.md', `# Deployed site screenshots\n\nBase URL: ${baseUrl}\nCaptured: ${new Date().toISOString()}\n`);
