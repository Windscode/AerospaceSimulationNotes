import React from 'react';
import Link from '@docusaurus/Link';
import { labImages } from '../data/aerolabContent';

export function LabTopNav() {
  return <header className="lab-top-nav"><Link className="lab-brand" to="/"><span>A</span><div><strong>AEROSIM</strong><em>RESEARCH LAB</em></div></Link><nav><Link to="/intelligence">EXPLORE</Link><Link to="/knowledge">KNOWLEDGE</Link><Link to="/missions">MISSIONS</Link><Link to="/radar">PROJECTS</Link><Link to="/tools">TOOLS</Link><Link to="/data">DATA</Link><Link to="/reproduction-lab">LAB</Link></nav><Link className="lab-log-btn" to="/blog">MISSION LOG ↗</Link></header>;
}

export function LabSideNav({ active = 'HOME' }) {
  const items = [
    { label: 'HOME', href: '/' },
    { label: 'DISCOVER', href: '/intelligence' },
    { label: 'KNOWLEDGE', href: '/knowledge' },
    { label: 'MISSIONS', href: '/missions' },
    { label: 'PROJECTS', href: '/radar' },
    { label: 'TOOLS', href: '/tools' },
    { label: 'DATA', href: '/data' },
    { label: 'LAB', href: '/reproduction-lab' },
  ];
  return <aside className="lab-side-nav lab-side-nav--eight">{items.map((item, i) => <Link key={item.label} to={item.href} className={item.label === active ? 'active' : ''}><span>{String(i + 1).padStart(2, '0')}</span><b>{item.label}</b></Link>)}</aside>;
}

export function LabPageHero({ eyebrow, title, text, image = labImages.hero, stats = [] }) {
  return <section className="lab-sub-hero"><img src={image} alt={title}/><div className="lab-sub-hero-shade"/><div className="lab-sub-hero-content"><div><span>{eyebrow}</span><h1>{title}</h1><p>{text}</p></div>{stats.length > 0 && <aside>{stats.map(item => <div key={item.label}><em>{item.label}</em><strong>{item.value}</strong></div>)}</aside>}</div></section>;
}

export default function AeroLabFrame({ active, children }) {
  return <main className="lab-site"><LabSideNav active={active}/><LabTopNav/>{children}</main>;
}
