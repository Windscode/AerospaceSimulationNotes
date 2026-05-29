import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const baseUrl = process.env.SITE_URL || process.argv[2] || 'http://127.0.0.1:4173/AerospaceSimulationNotes/';
const outputDir = process.env.SCREENSHOT_DIR || process.argv[3] || 'site-screenshots';

const pages = [
  { name: 'home', label: '首页', path: '/' },
  { name: 'intelligence', label: '前沿情报', path: '/intelligence' },
  { name: 'missions', label: '飞行器与任务', path: '/missions' },
  { name: 'tools', label: '工具库', path: '/tools' },
  { name: 'open-source-data', label: '开源与数据', path: '/open-source-data' },
  { name: 'knowledge', label: '知识图谱', path: '/knowledge' },
  { name: 'my-projects', label: '我的项目', path: '/my-projects' },
  { name: 'reproduction-lab', label: '复现实验', path: '/reproduction-lab' },
  { name: 'log', label: '研究日志', path: '/log' },
];

function resolveUrl(pagePath) {
  const base = new URL(baseUrl);
  const basePath = base.pathname.endsWith('/') ? base.pathname.slice(0, -1) : base.pathname;
  const normalized = pagePath === '/' ? '/' : pagePath;
  base.pathname = `${basePath}${normalized}`.replace(/\/\/+/g, '/');
  return base.toString();
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function capture() {
  await ensureDir(outputDir);
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1800 },
    deviceScaleFactor: 1,
    colorScheme: 'dark',
  });
  const page = await context.newPage();
  const results = [];

  for (const item of pages) {
    const url = resolveUrl(item.path);
    const file = path.join(outputDir, `${item.name}.png`);
    const fullFile = path.join(outputDir, `${item.name}-full.png`);
    const started = Date.now();
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(1200);
    await page.screenshot({ path: file, fullPage: false });
    await page.screenshot({ path: fullFile, fullPage: true });
    const title = await page.title();
    results.push({ ...item, url, title, viewport: path.basename(file), fullPage: path.basename(fullFile), elapsedMs: Date.now() - started });
  }

  await browser.close();

  const manifest = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    viewport: { width: 1440, height: 1800 },
    pages: results,
  };
  await fs.writeFile(path.join(outputDir, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

  const md = [
    '# 航天仿真研究网站截图审查',
    '',
    `生成时间：${manifest.generatedAt}`,
    `基础地址：${baseUrl}`,
    '',
    '## 页面清单',
    '',
    '| 页面 | 视口截图 | 全页面截图 | 审查重点 |',
    '| --- | --- | --- | --- |',
    ...results.map(item => `| ${item.label} | ${item.viewport} | ${item.fullPage} | 检查首屏、层级、信息密度、交互模块和真实内容是否到位 |`),
    '',
    '## 审查原则',
    '',
    '- 首页要第一眼体现“航天仿真研究工作台”，不能像普通博客。',
    '- 工具、飞行器、开源数据、知识图谱、项目页都要体现真实任务链路。',
    '- 长页面要看 fullPage 截图，不能只看首屏。',
    '- 如果截图暴露标题过大、卡片重复、空泛模块或图片不足，下一轮必须按截图修。',
  ].join('\n');
  await fs.writeFile(path.join(outputDir, 'README.md'), md, 'utf8');
}

capture().catch(error => {
  console.error(error);
  process.exit(1);
});
