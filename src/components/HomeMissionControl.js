import React, {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import StatusPill from './StatusPill';
import { tools } from '../data/tools';
import { openSourceProjects, datasets } from '../data/openSource';
import { vehicles } from '../data/vehicles';
import { intelligenceQueue } from '../data/intelligence';
import { knowledgeDomains } from '../data/knowledge';
import { experimentCandidates } from '../data/experiments';

const lanes = [
  { id: 'intelligence', title: '情报接收', href: '/intelligence', status: '筛选', items: intelligenceQueue, getName: item => item.title, getMeta: item => `${item.category} · ${item.priority}` },
  { id: 'assets', title: '资产扩充', href: '/open-source-data', status: '整理', items: [...tools, ...openSourceProjects, ...datasets], getName: item => item.title, getMeta: item => item.category || item.type || item.organization },
  { id: 'vehicles', title: '对象建模', href: '/missions', status: '评估', items: vehicles, getName: item => item.title, getMeta: item => `${item.category} · ${item.confidence}` },
  { id: 'knowledge', title: '知识沉淀', href: '/knowledge', status: '归档', items: knowledgeDomains, getName: item => item.title, getMeta: item => item.maturity },
  { id: 'experiments', title: '实验验证', href: '/reproduction-lab', status: '验证', items: experimentCandidates, getName: item => item.title, getMeta: item => `${item.category} · ${item.priority}` },
];

export default function HomeMissionControl() {
  const [activeId, setActiveId] = useState(lanes[0].id);
  const active = useMemo(() => lanes.find(lane => lane.id === activeId) || lanes[0], [activeId]);
  const total = lanes.reduce((sum, lane) => sum + lane.items.length, 0);
  const topItems = active.items.slice(0, 4);

  return <section className="home-mission-control">
    <div className="home-mission-head">
      <span>DAILY MISSION CONTROL · 今日任务控制台</span>
      <h2>今天先处理什么？</h2>
      <p>首页不只做展示入口，而是把前沿情报、工具资源、飞行器对象、知识图谱和复现实验的状态压到一个总控台里。</p>
    </div>
    <div className="home-mission-grid">
      <aside className="home-mission-lanes">
        {lanes.map((lane, index) => <button key={lane.id} type="button" className={lane.id === active.id ? 'active' : ''} onClick={() => setActiveId(lane.id)} onMouseEnter={() => setActiveId(lane.id)}>
          <em>{String(index + 1).padStart(2, '0')}</em>
          <strong>{lane.title}</strong>
          <span>{lane.items.length} 条 / {lane.status}</span>
        </button>)}
      </aside>
      <div className="home-mission-orbit">
        <div className="home-mission-core"><span>TOTAL ASSETS</span><strong>{total}</strong><em>{active.title}</em></div>
        {lanes.map((lane, index) => <button key={lane.id} type="button" className={`home-mission-node node-${index + 1} ${lane.id === active.id ? 'active' : ''}`} onClick={() => setActiveId(lane.id)}><b>{lane.items.length}</b><span>{lane.title}</span></button>)}
      </div>
      <aside className="home-mission-brief">
        <div className="lab-card-status-row"><StatusPill label="状态" value={active.status}/><StatusPill label="数量" value={String(active.items.length)}/></div>
        <h3>{active.title}</h3>
        <p>当前模块有 {active.items.length} 条结构化资产。后续新增数据文件条目后，这里会自动更新。</p>
        <div className="home-mission-list">{topItems.map((item, index) => <Link key={`${active.id}-${index}`} to={active.href}><em>{String(index + 1).padStart(2, '0')}</em><div><strong>{active.getName(item)}</strong><span>{active.getMeta(item)}</span></div></Link>)}</div>
        <Link className="home-mission-entry" to={active.href}>进入{active.title} ↗</Link>
      </aside>
    </div>
  </section>;
}
