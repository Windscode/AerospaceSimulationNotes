import React from 'react';
import Link from '@docusaurus/Link';
import { labImages } from '../data/aerolabContent';
import ResearchCommandPalette from './ResearchCommandPalette';

export function LabTopNav() {
  return <header className="lab-top-nav"><Link className="lab-brand" to="/"><span>A</span><div><strong>航天仿真研究库</strong><em>AEROSIM RESEARCH LAB</em></div></Link><nav><Link to="/intelligence">前沿情报</Link><Link to="/missions">飞行器与任务</Link><Link to="/tools">工具库</Link><Link to="/open-source-data">开源与数据</Link><Link to="/knowledge">知识图谱</Link><Link to="/my-projects">我的项目</Link></nav><div className="lab-nav-actions"><ResearchCommandPalette/><Link className="lab-log-btn" to="/log">研究日志 ↗</Link></div></header>;
}

export function LabSideNav({ active = 'HOME' }) {
  const items = [
    { key: 'HOME', label: '首页', href: '/' },
    { key: 'FRONTIER', label: '前沿', href: '/intelligence' },
    { key: 'VEHICLES', label: '飞行器', href: '/missions' },
    { key: 'TOOLS', label: '工具', href: '/tools' },
    { key: 'OPEN', label: '开源', href: '/open-source-data' },
    { key: 'GRAPH', label: '图谱', href: '/knowledge' },
    { key: 'MINE', label: '我的', href: '/my-projects' },
  ];
  return <aside className="lab-side-nav lab-side-nav--seven">{items.map((item, i) => <Link key={item.key} to={item.href} className={item.key === active ? 'active' : ''}><span>{String(i + 1).padStart(2, '0')}</span><b>{item.label}</b></Link>)}</aside>;
}

export function LabPageHero({ eyebrow, title, text, image = labImages.hero, stats = [] }) {
  return <section className="lab-sub-hero"><img src={image} alt={title}/><div className="lab-sub-hero-shade"/><div className="lab-sub-hero-content"><div><span>{eyebrow}</span><h1>{title}</h1><p>{text}</p></div>{stats.length > 0 && <aside>{stats.map(item => <div key={item.label}><em>{item.label}</em><strong>{item.value}</strong></div>)}</aside>}</div></section>;
}

export default function AeroLabFrame({ active, children }) {
  return <main className="lab-site"><LabSideNav active={active}/><LabTopNav/>{children}</main>;
}
