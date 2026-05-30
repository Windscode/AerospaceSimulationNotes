import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const baseUrl = process.env.SITE_URL || process.argv[2] || 'http://127.0.0.1:4173/AerospaceSimulationNotes/';
const outputDir = process.env.SCREENSHOT_DIR || process.argv[3] || 'site-screenshots';

const pages = [
  { name: 'home', label: '首页', path: '/', focus: '第一屏是否有高级感，是否能立刻看出研究工作台定位。' },
  { name: 'intelligence', label: '前沿情报', path: '/intelligence', focus: '录入模板、评分、路由和队列是否像工作流。' },
  { name: 'missions', label: '飞行器与任务', path: '/missions', focus: '真实对象、证据、推断参数和仿真路径是否清楚。' },
  { name: 'tools', label: '工具库', path: '/tools', focus: '是否能按任务选择工具，而不是只看软件名录。' },
  { name: 'open-source-data', label: '开源与数据', path: '/open-source-data', focus: '资源是否能跑通、接入任务并产生证据。' },
  { name: 'knowledge', label: '知识图谱', path: '/knowledge', focus: '对象、理论、第一项实验和验证检查是否连起来。' },
  { name: 'my-projects', label: '我的项目', path: '/my-projects', focus: '项目是否有状态、下一步、输出物和风险。' },
  { name: 'reproduction-lab', label: '复现实验', path: '/reproduction-lab', focus: '是否能看到运行步骤、归档文件、失败模式和完成定义。' },
  { name: 'log', label: '研究日志', path: '/log', focus: '日志是否像每日维护工作台，而不是普通博客入口。' },
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

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char]));
}

function buildHtml(manifest) {
  const cards = manifest.pages.map(item => `
    <article class="card">
      <div class="meta"><span>${escapeHtml(item.label)}</span><a href="${escapeHtml(item.url)}">打开页面</a></div>
      <h2>${escapeHtml(item.label)}</h2>
      <p>${escapeHtml(item.focus)}</p>
      <div class="links"><a href="${escapeHtml(item.viewport)}">视口截图</a><a href="${escapeHtml(item.fullPage)}">全页面截图</a></div>
      <a class="image" href="${escapeHtml(item.fullPage)}"><img src="${escapeHtml(item.viewport)}" alt="${escapeHtml(item.label)} 视口截图" loading="lazy" /></a>
    </article>`).join('\n');

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>航天仿真研究网站截图审查</title>
  <style>
    :root { color-scheme: dark; --bg:#050914; --panel:#0b1527; --line:rgba(126,229,255,.18); --text:#eef7ff; --muted:rgba(238,247,255,.65); --cyan:#27e7ff; }
    body { margin:0; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: radial-gradient(circle at 40% 0%, rgba(39,231,255,.12), transparent 34rem), var(--bg); color:var(--text); }
    header { padding:56px clamp(20px, 5vw, 70px) 34px; border-bottom:1px solid var(--line); }
    header span { color:var(--cyan); font-size:12px; letter-spacing:.22em; font-weight:800; }
    h1 { margin:14px 0 12px; font-size:clamp(36px, 6vw, 76px); line-height:.95; letter-spacing:-.06em; }
    header p { max-width:860px; color:var(--muted); line-height:1.8; }
    .grid { display:grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap:18px; padding:34px clamp(20px, 5vw, 70px) 70px; }
    .card { border:1px solid var(--line); background:linear-gradient(180deg, rgba(11,21,39,.88), rgba(5,12,26,.78)); padding:18px; box-shadow:0 24px 80px rgba(0,0,0,.28); }
    .meta { display:flex; justify-content:space-between; gap:12px; align-items:center; }
    .meta span { color:var(--cyan); font-size:12px; letter-spacing:.16em; font-weight:800; }
    a { color:var(--cyan); text-decoration:none; }
    .card h2 { margin:12px 0 8px; font-size:24px; }
    .card p { margin:0 0 14px; color:var(--muted); line-height:1.65; }
    .links { display:flex; gap:10px; margin-bottom:14px; }
    .links a, .meta a { border:1px solid var(--line); padding:7px 10px; font-size:12px; font-weight:800; background:rgba(126,229,255,.04); }
    .image { display:block; overflow:hidden; border:1px solid rgba(255,255,255,.08); background:#020711; }
    img { width:100%; display:block; }
    @media (max-width: 900px) { .grid { grid-template-columns:1fr; } }
  </style>
</head>
<body>
  <header>
    <span>SCREENSHOT AUDIT</span>
    <h1>航天仿真研究网站截图审查</h1>
    <p>生成时间：${escapeHtml(manifest.generatedAt)}。这个页面用于真实视觉审查：先看视口截图判断首屏和层级，再打开全页面截图检查长页面是否重复、空泛或标题过大。</p>
  </header>
  <main class="grid">${cards}</main>
</body>
</html>`;
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
  await fs.writeFile(path.join(outputDir, 'index.html'), buildHtml(manifest), 'utf8');

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
    ...results.map(item => `| ${item.label} | ${item.viewport} | ${item.fullPage} | ${item.focus} |`),
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
