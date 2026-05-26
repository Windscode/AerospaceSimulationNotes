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

async function captureSegments(page, folder, name, width, height) {
  const metrics = await page.evaluate(() => ({
    scrollHeight: document.documentElement.scrollHeight,
    clientHeight: document.documentElement.clientHeight,
  }));

  const firstFile = path.join('site-screenshots', folder, `${name}__first-screen.png`);
  await page.screenshot({ path: firstFile, fullPage: false });

  const segments = [];
  const segmentStep = Math.max(1, height - 120);
  const maxSegments = Math.ceil(metrics.scrollHeight / segmentStep);
  for (let index = 0; index < maxSegments; index += 1) {
    const y = Math.min(index * segmentStep, Math.max(0, metrics.scrollHeight - height));
    await page.evaluate(scrollY => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(250);
    const file = path.join('site-screenshots', folder, `${name}__segment-${String(index + 1).padStart(2, '0')}.png`);
    await page.screenshot({ path: file, fullPage: false });
    segments.push({ index: index + 1, y, file });
    if (y >= metrics.scrollHeight - height) break;
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  return { scrollHeight: metrics.scrollHeight, clientHeight: metrics.clientHeight, firstFile, segments };
}

const browser = await chromium.launch();
const report = [];

for (const [folder, width, height, scale] of viewports) {
  fs.mkdirSync(path.join('site-screenshots', folder), { recursive: true });
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: scale, isMobile: folder === 'mobile' });
  for (const [name, route] of pages) {
    const url = new URL(route, baseUrl).toString();
    const page = await context.newPage();
    const fullFile = path.join('site-screenshots', folder, `${name}__full.png`);
    try {
      const status = await loadWithRetry(page, url);
      const segmentInfo = await captureSegments(page, folder, name, width, height);
      await page.screenshot({ path: fullFile, fullPage: true });
      report.push({ folder, name, url, status, fullFile, ...segmentInfo });
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
  '## Gallery',
  '',
];
for (const item of report) {
  lines.push(`### ${item.folder} / ${item.name}`);
  lines.push('');
  if (item.error) {
    lines.push(`ERROR: ${item.error}`);
  } else {
    lines.push(`- URL: ${item.url}`);
    lines.push(`- Full height: ${item.scrollHeight}px`);
    lines.push(`- Full page: [${path.basename(item.fullFile)}](${item.fullFile.replace('site-screenshots/', './')})`);
    lines.push(`- First screen: [${path.basename(item.firstFile)}](${item.firstFile.replace('site-screenshots/', './')})`);
    lines.push('- Segments:');
    for (const segment of item.segments) {
      lines.push(`  - ${segment.index}: y=${segment.y}px — [${path.basename(segment.file)}](${segment.file.replace('site-screenshots/', './')})`);
    }
  }
  lines.push('');
}
fs.writeFileSync('site-screenshots/README.md', lines.join('\n'));
