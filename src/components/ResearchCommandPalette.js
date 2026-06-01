import React, {useEffect, useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import { tools } from '../data/tools';
import { openSourceProjects, datasets } from '../data/openSource';
import { vehicles } from '../data/vehicles';
import { intelligenceQueue } from '../data/intelligence';
import { knowledgeDomains, knowledgeObjects } from '../data/knowledge';
import { experimentCandidates, personalProjects } from '../data/experiments';
import { logEntryTypes, screenshotAuditPages } from '../data/maintenance';

const navigationEntries = [
  { type: '页面入口', title: '首页 · 研究网络总览', desc: '从今日任务、真实对象、工具链和证据边界进入全站。', href: '/', tags: ['首页', '总览', '工作台'] },
  { type: '页面入口', title: '前沿情报 · 录入评分路由', desc: '把新闻、论文、工具更新和公开数据拆成可沉淀的研究线索。', href: '/intelligence', tags: ['情报', '评分', '路由'] },
  { type: '页面入口', title: '飞行器与任务 · 真实对象档案', desc: '从 Falcon 9、长征五号、ISS、天宫等对象进入仿真链路。', href: '/missions', tags: ['飞行器', '任务', '对象'] },
  { type: '页面入口', title: '工具库 · 任务驱动选择台', desc: '按轨道、发射、GNC、CFD、可视化等任务选择工具。', href: '/tools', tags: ['工具', '任务配方', '起步'] },
  { type: '页面入口', title: '开源与数据 · 资源流水线', desc: '判断开源项目和公开数据能否跑通、接入任务并产生证据。', href: '/open-source-data', tags: ['开源', '数据', '证据'] },
  { type: '页面入口', title: '知识图谱 · 对象到理论到实验', desc: '从对象进入理论域、第一步实验、输入输出和验证坑点。', href: '/knowledge', tags: ['知识', '理论', '图谱'] },
  { type: '页面入口', title: '复现实验 · 可运行实验工作台', desc: '记录实验输入、工具、运行步骤、归档文件、失败模式和完成定义。', href: '/reproduction-lab', tags: ['实验', '复现', '归档'] },
  { type: '页面入口', title: '我的项目 · 个人路线图', desc: '记录当前项目状态、下一步、输出物、技术栈和风险。', href: '/my-projects', tags: ['项目', '路线图', '进展'] },
  { type: '页面入口', title: '研究日志 · 每日维护台', desc: '新资料先入队，成熟内容再进入稳定页面。', href: '/log', tags: ['日志', '维护', '截图审查'] },
];

function buildEntries() {
  return [
    ...navigationEntries,
    ...tools.map(item => ({ type: '工具', title: item.title, desc: item.summary, href: '/tools', tags: [item.category, item.licenseType, item.difficulty] })),
    ...openSourceProjects.map(item => ({ type: '开源项目', title: item.title, desc: item.summary, href: '/open-source-data', tags: [item.category, item.language, item.difficulty] })),
    ...datasets.map(item => ({ type: '公开数据', title: item.title, desc: item.scenario, href: '/open-source-data', tags: [item.type, item.organization, item.confidence] })),
    ...vehicles.map(item => ({ type: '飞行器档案', title: item.title, desc: item.summary, href: '/missions', tags: [item.category, item.status, item.confidence] })),
    ...intelligenceQueue.map(item => ({ type: '前沿情报', title: item.title, desc: item.summary, href: '/intelligence', tags: [item.category, item.priority, item.value] })),
    ...knowledgeDomains.map(item => ({ type: '知识域', title: item.title, desc: item.firstTask || item.summary, href: '/knowledge', tags: [item.type, item.maturity, ...item.tools.slice(0, 1)] })),
    ...knowledgeObjects.map(item => ({ type: '知识对象', title: item.title, desc: item.firstExperiment, href: '/knowledge', tags: [...item.modules.slice(0, 2), item.output] })),
    ...experimentCandidates.map(item => ({ type: '复现实验', title: item.title, desc: item.objective, href: '/reproduction-lab', tags: [item.category, item.status, item.priority] })),
    ...personalProjects.map(item => ({ type: '我的项目', title: item.title, desc: item.objective, href: '/my-projects', tags: [item.status, item.type, ...item.stack.slice(0, 1)] })),
    ...logEntryTypes.map(item => ({ type: '日志模板', title: item.title, desc: item.purpose, href: '/log', tags: item.requiredFields.slice(0, 3) })),
    ...screenshotAuditPages.map(item => ({ type: '截图审查', title: item.title, desc: item.focus, href: item.path, tags: ['截图', '审查', '真实页面'] })),
  ];
}

function scoreEntry(item, q) {
  if (!q) return item.type === '页面入口' ? 5 : 0;
  const title = item.title.toLowerCase();
  const type = item.type.toLowerCase();
  const tags = item.tags.filter(Boolean).join(' ').toLowerCase();
  const desc = item.desc.toLowerCase();
  let score = 0;
  if (title.includes(q)) score += 40;
  if (type.includes(q)) score += 18;
  if (tags.includes(q)) score += 12;
  if (desc.includes(q)) score += 6;
  if (item.type === '页面入口') score += 2;
  return score;
}

export default function ResearchCommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const entries = useMemo(buildEntries, []);
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries.filter(item => item.type === '页面入口').slice(0, 9);
    return entries
      .map(item => ({ item, score: scoreEntry(item, q) }))
      .filter(result => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 14)
      .map(result => result.item);
  }, [entries, query]);

  useEffect(() => {
    const onKeyDown = (event) => {
      const isCommand = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k';
      if (isCommand) {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return <>
    <button className="lab-command-trigger" type="button" onClick={() => setOpen(true)}><span>搜索</span><kbd>Ctrl K</kbd></button>
    {open && <div className="lab-command-backdrop" role="dialog" aria-modal="true" aria-label="研究命令面板" onMouseDown={() => setOpen(false)}>
      <div className="lab-command-panel" onMouseDown={event => event.stopPropagation()}>
        <header><div><span>RESEARCH COMMAND</span><strong>全站研究命令面板</strong><p>搜索页面、工具、真实对象、数据源、实验、项目和维护模板。</p></div><button type="button" onClick={() => setOpen(false)}>Esc</button></header>
        <input autoFocus value={query} onChange={event => setQuery(event.target.value)} placeholder="试试：TLE、Falcon、Orekit、再入、截图、工具、实验..." />
        <div className="lab-command-hints"><span>热门入口</span>{['TLE', 'Falcon', 'Orekit', '再入', '截图审查'].map(item => <button type="button" key={item} onClick={() => setQuery(item)}>{item}</button>)}</div>
        <div className="lab-command-results">
          {results.length === 0 && <p className="lab-command-empty">没有匹配条目。可以换成对象名、工具名、任务类型或页面名。</p>}
          {results.map((item, index) => <Link to={item.href} key={`${item.type}-${item.title}-${index}`} onClick={() => setOpen(false)}>
            <em>{item.type}</em>
            <div><strong>{item.title}</strong><p>{item.desc}</p><footer>{item.tags.filter(Boolean).slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</footer></div>
          </Link>)}
        </div>
      </div>
    </div>}
  </>;
}
