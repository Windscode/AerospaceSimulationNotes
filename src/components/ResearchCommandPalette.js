import React, {useEffect, useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import { tools } from '../data/tools';
import { openSourceProjects, datasets } from '../data/openSource';
import { vehicles } from '../data/vehicles';
import { intelligenceQueue } from '../data/intelligence';
import { knowledgeDomains } from '../data/knowledge';
import { experimentCandidates } from '../data/experiments';

function buildEntries() {
  return [
    ...tools.map(item => ({ type: '工具', title: item.title, desc: item.summary, href: '/tools', tags: [item.category, item.licenseType, item.difficulty] })),
    ...openSourceProjects.map(item => ({ type: '开源项目', title: item.title, desc: item.summary, href: '/open-source-data', tags: [item.category, item.language, item.difficulty] })),
    ...datasets.map(item => ({ type: '公开数据', title: item.title, desc: item.scenario, href: '/open-source-data', tags: [item.type, item.organization, item.confidence] })),
    ...vehicles.map(item => ({ type: '飞行器档案', title: item.title, desc: item.summary, href: '/missions', tags: [item.category, item.status, item.confidence] })),
    ...intelligenceQueue.map(item => ({ type: '前沿情报', title: item.title, desc: item.summary, href: '/intelligence', tags: [item.category, item.priority, item.value] })),
    ...knowledgeDomains.map(item => ({ type: '知识图谱', title: item.title, desc: item.summary, href: '/knowledge', tags: [item.type, item.maturity, ...item.tools.slice(0, 1)] })),
    ...experimentCandidates.map(item => ({ type: '复现实验', title: item.title, desc: item.objective, href: '/reproduction-lab', tags: [item.category, item.status, item.priority] })),
  ];
}

export default function ResearchCommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const entries = useMemo(buildEntries, []);
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries.slice(0, 8);
    return entries.filter(item => JSON.stringify(item).toLowerCase().includes(q)).slice(0, 12);
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
        <header><div><span>RESEARCH COMMAND</span><strong>全站研究命令面板</strong></div><button type="button" onClick={() => setOpen(false)}>Esc</button></header>
        <input autoFocus value={query} onChange={event => setQuery(event.target.value)} placeholder="搜索工具、开源项目、飞行器、数据源、实验、知识节点..." />
        <div className="lab-command-results">
          {results.length === 0 && <p className="lab-command-empty">没有匹配条目。后续新增数据后会自动进入这里。</p>}
          {results.map((item, index) => <Link to={item.href} key={`${item.type}-${item.title}-${index}`} onClick={() => setOpen(false)}>
            <em>{item.type}</em>
            <div><strong>{item.title}</strong><p>{item.desc}</p><footer>{item.tags.filter(Boolean).slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</footer></div>
          </Link>)}
        </div>
      </div>
    </div>}
  </>;
}
