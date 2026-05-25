import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { labImages, quickAccess, latestUpdates, missionStats, featuredProjects, researchDomains, methodCards } from '../data/aerolabContent';

function SideNav() {
  const items = [
    { label: 'HOME', href: '/' },
    { label: 'DISCOVER', href: '/intelligence' },
    { label: 'LIBRARY', href: '/docs/intro' },
    { label: 'PROJECTS', href: '/radar' },
    { label: 'TOOLS', href: '/tools' },
    { label: 'DATA', href: '/data' },
  ];
  return <aside className="lab-side-nav">{items.map((item, i) => <Link key={item.label} to={item.href} className={i === 0 ? 'active' : ''}><span>{String(i + 1).padStart(2, '0')}</span><b>{item.label}</b></Link>)}</aside>;
}

function TopNav() {
  return <header className="lab-top-nav"><Link className="lab-brand" to="/"><span>A</span><div><strong>AEROSIM</strong><em>RESEARCH LAB</em></div></Link><nav><Link to="/intelligence">EXPLORE</Link><Link to="/docs/intro">KNOWLEDGE</Link><Link to="/radar">PROJECTS</Link><Link to="/tools">TOOLS</Link><Link to="/data">DATA</Link><Link to="/reproduction-lab">LAB</Link></nav><Link className="lab-log-btn" to="/blog">MISSION LOG ↗</Link></header>;
}

function Hero() {
  return <section className="lab-hero"><img className="lab-hero-bg" src={labImages.hero} alt="航天仿真研究主视觉"/><div className="lab-hero-shade"/><div className="lab-hero-content"><div className="lab-hero-copy"><div className="lab-kicker">AEROSPACE SIMULATION RESEARCH</div><h1>SIMULATE.<br/>ANALYZE.<br/>EXPLORE.</h1><p>探索天工程的边界，通过仿真、数据与开源知识推动个人航天仿真研究。</p><div className="lab-hero-actions"><Link to="/intelligence">START EXPLORING ↗</Link><span>SCROLL TO DISCOVER</span></div></div><div className="lab-status-panel">{missionStats.map(item => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}<svg viewBox="0 0 220 44" aria-hidden="true"><path d="M2 28 C45 5, 80 42, 115 24 S180 16, 218 6"/><circle cx="55" cy="19" r="4"/><circle cx="118" cy="25" r="4"/><circle cx="178" cy="13" r="4"/></svg></div></div></section>;
}

function ConsoleBand() {
  return <section className="lab-console-band"><div className="lab-update-card"><span>LATEST UPDATE</span><div><img src={labImages.data} alt="最新研究更新"/><article><em>2024-05-25</em><h3>重构航天仿真研究控制台视觉系统</h3><p>ENGINE · SIMULATION</p></article></div></div><div className="lab-digest"><span>DAILY RESEARCH DIGEST</span>{latestUpdates.map(item => <div key={item.title}><b>{item.title}</b><em>{item.date}</em></div>)}<Link to="/intelligence">VIEW ALL NEWS ↗</Link></div><div className="lab-quick"><span>QUICK ACCESS</span><div>{quickAccess.map(item => <Link key={item.title} to={item.href}><b>{item.title}</b><em>{item.cn}</em></Link>)}</div></div><div className="lab-orbit-widget"><div className="lab-orbit-rings"><i/><i/><i/><button>▶</button></div></div></section>;
}

function Projects() {
  return <section className="lab-section lab-projects"><div className="lab-section-index">01</div><div className="lab-section-head"><span>FEATURED PROJECTS</span><h2>把工具、数据与任务案例组织成可复现研究资产。</h2></div><div className="lab-project-grid">{featuredProjects.map((p, i) => <article className={i === 0 ? 'large' : ''} key={p.title}><img src={p.image} alt={p.title}/><div><span>{p.title}</span><h3>{p.cn}</h3><p>{p.desc}</p><footer>{p.tags.map(tag => <em key={tag}>{tag}</em>)}</footer></div></article>)}</div></section>;
}

function SimulationPreview() {
  return <section className="lab-simulation-preview"><div className="lab-section-index">02</div><div className="lab-sim-copy"><span>SIMULATION PREVIEW</span><h2>从轨道、气动、控制到任务回放。</h2><p>网站不是只记录资料，而是把公开信息、工程假设、软件工具和复现实验连接起来，形成可追踪的仿真研究链路。</p><Link to="/reproduction-lab">VIEW SIMULATION ↗</Link></div><img src={labImages.orbit} alt="轨道仿真预览"/><div className="lab-sim-metrics"><div><span>MACH</span><strong>25.3</strong></div><div><span>AOA</span><strong>12.5°</strong></div><div><span>DENSITY</span><strong>0.012</strong></div></div></section>;
}

function DomainsAndMethods() {
  return <section className="lab-section lab-domain-methods"><div className="lab-section-index">03</div><div className="lab-section-head"><span>KNOWLEDGE & METHODS</span><h2>日常维护时，内容进入固定结构，而不是随意堆文章。</h2></div><div className="lab-domain-grid">{researchDomains.map(d => <article key={d.name}><h3>{d.name}</h3><p>{d.text}</p></article>)}</div><div className="lab-method-grid">{methodCards.map(m => <article key={m.title}><span>{m.meta}</span><h3>{m.title}</h3><p>{m.text}</p></article>)}</div></section>;
}

function DataSources() {
  return <section className="lab-data-strip"><div><span>PARTNERS & DATA SOURCES</span><div className="lab-source-row"><b>NASA</b><b>ESA</b><b>SPACEX</b><b>JAXA</b><b>CNES</b><b>OPEN DATA</b></div></div><div className="lab-join"><span>JOIN THE MISSION</span><p>订阅更新、沉淀资料、复现实验、维护自己的航天仿真研究库。</p><Link to="/blog">SUBSCRIBE UPDATES ↗</Link></div></section>;
}

export default function Home() {
  return <Layout title="首页" description="航天仿真研究、工程软件、开源项目、公开数据与复现实验的个人研究控制台"><main className="lab-site"><SideNav/><TopNav/><Hero/><ConsoleBand/><Projects/><SimulationPreview/><DomainsAndMethods/><DataSources/></main></Layout>;
}
