import React from 'react';
import Link from '@docusaurus/Link';
import { labImages } from '../data/aerolabContent';

export function LabTopNav() {
  return <header className="lab-top-nav"><Link className="lab-brand" to="/"><span>A</span><div><strong>航天仿真研究库</strong><em>AEROSIM RESEARCH LAB</em></div></Link><nav><Link to="/intelligence">研究情报</Link><Link to="/knowledge">知识库</Link><Link to="/missions">任务案例</Link><Link to="/radar">项目雷达</Link><Link to="/tools">工程软件</Link><Link to="/data">数据方法</Link><Link to="/reproduction-lab">复现实验</Link></nav><Link className="lab-log-btn" to="/log">研究日志 ↗</Link></header>;
}

export function LabSideNav({ active = 'HOME' }) {
  const items = [
    { key: 'HOME', label: '首页', href: '/' },
    { key: 'DISCOVER', label: '情报', href: '/intelligence' },
    { key: 'KNOWLEDGE', label: '知识', href: '/knowledge' },
    { key: 'MISSIONS', label: '任务', href: '/missions' },
    { key: 'PROJECTS', label: '项目', href: '/radar' },
    { key: 'TOOLS', label: '工具', href: '/tools' },
    { key: 'DATA', label: '数据', href: '/data' },
    { key: 'LAB', label: '实验', href: '/reproduction-lab' },
  ];
  return <aside className="lab-side-nav lab-side-nav--eight">{items.map((item, i) => <Link key={item.key} to={item.href} className={item.key === active ? 'active' : ''}><span>{String(i + 1).padStart(2, '0')}</span><b>{item.label}</b></Link>)}</aside>;
}

export function LabPageHero({ eyebrow, title, text, image = labImages.hero, stats = [] }) {
  return <section className="lab-sub-hero"><img src={image} alt={title}/><div className="lab-sub-hero-shade"/><div className="lab-sub-hero-content"><div><span>{eyebrow}</span><h1>{title}</h1><p>{text}</p></div>{stats.length > 0 && <aside>{stats.map(item => <div key={item.label}><em>{item.label}</em><strong>{item.value}</strong></div>)}</aside>}</div></section>;
}

export default function AeroLabFrame({ active, children }) {
  return <main className="lab-site"><LabSideNav active={active}/><LabTopNav/>{children}</main>;
}
