import React, {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import StatusPill from './StatusPill';

const positions = [
  { left: 50, top: 18 },
  { left: 78, top: 35 },
  { left: 68, top: 70 },
  { left: 32, top: 70 },
  { left: 22, top: 34 },
  { left: 50, top: 50 },
  { left: 86, top: 58 },
  { left: 15, top: 58 },
];

export default function IntelligenceRadar({items = []}) {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const active = useMemo(() => items.find(item => item.id === activeId) || items[0], [items, activeId]);
  if (!items.length) return null;

  return <section className="lab-radar-console">
    <div className="lab-radar-copy">
      <span>INTELLIGENCE RADAR · 情报雷达</span>
      <h2>从噪声里筛出可用线索。</h2>
      <p>每个光点代表一类持续追踪的情报源。悬停或点击节点，查看它的价值、可信度和应该流向哪个研究模块。</p>
      {active && <article className="lab-radar-brief">
        <header><em>{active.category}</em><div><StatusPill label="优先级" value={active.priority}/><StatusPill label="可信度" value={active.confidence}/></div></header>
        <h3>{active.title}</h3>
        <p>{active.summary}</p>
        <dl><div><dt>来源</dt><dd>{active.sourceHint}</dd></div><div><dt>动作</dt><dd>{active.nextAction}</dd></div></dl>
        <footer>{active.routes.map(route => <span key={route}>{route}</span>)}<Link to="/intelligence">进入情报页 ↗</Link></footer>
      </article>}
    </div>
    <div className="lab-radar-screen" aria-label="前沿情报雷达">
      <div className="lab-radar-grid" />
      <i className="lab-radar-ring ring-1"/><i className="lab-radar-ring ring-2"/><i className="lab-radar-ring ring-3"/><i className="lab-radar-ring ring-4"/>
      <i className="lab-radar-sweep" />
      <div className="lab-radar-core"><span>情报</span><b>{active?.status}</b></div>
      {items.map((item, index) => {
        const pos = positions[index % positions.length];
        return <button key={item.id} className={`lab-radar-node ${item.id === active?.id ? 'active' : ''}`} style={{left: `${pos.left}%`, top: `${pos.top}%`}} onMouseEnter={() => setActiveId(item.id)} onFocus={() => setActiveId(item.id)} onClick={() => setActiveId(item.id)} type="button"><span>{item.category}</span><em>{item.priority}</em></button>;
      })}
    </div>
  </section>;
}
