import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import AeroLabFrame from '../components/AeroLabFrame';
import OrbitalResearchConsole from '../components/OrbitalResearchConsole';
import { labImages, quickAccess, latestUpdates, missionStats, featuredProjects, researchDomains, methodCards, missionDossiers } from '../data/aerolabContent';

function Hero() {
  return <section className="lab-hero"><img className="lab-hero-bg" src={labImages.hero} alt="航天仿真研究主视觉"/><div className="lab-hero-shade"/><div className="lab-hero-content"><div className="lab-hero-copy"><div className="lab-kicker">AEROSPACE SIMULATION RESEARCH</div><h1>仿真。<br/>分析。<br/>探索。</h1><p>面向中文用户的航天仿真研究控制台：汇集工程软件、开源项目、公开数据、任务案例、参数推断方法与复现实验记录。</p><div className="lab-hero-actions"><Link to="/intelligence">开始探索 ↗</Link><span>研究情报 · 知识库 · 任务案例</span></div></div><div className="lab-status-panel">{missionStats.map(item => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}<svg viewBox="0 0 220 44" aria-hidden="true"><path d="M2 28 C45 5, 80 42, 115 24 S180 16, 218 6"/><circle cx="55" cy="19" r="4"/><circle cx="118" cy="25" r="4"/><circle cx="178" cy="13" r="4"/></svg></div></div></section>;
}

function ConsoleBand() {
  const digest = latestUpdates.slice(0, 3);
  return <section className="lab-console-band lab-console-band--compact"><div className="lab-update-card"><span>最新更新</span><div><img src={labImages.orbit} alt="最新研究更新"/><article><em>2026-05-25</em><h3>中文航天仿真研究库视觉体系收口</h3><p>设计 · 工程化 · 可维护</p></article></div></div><div className="lab-digest"><span>今日研究简报</span>{digest.map(item => <div key={item.title}><b>{item.title}</b><em>{item.date}</em></div>)}<Link to="/intelligence">进入情报流 ↗</Link></div><div className="lab-quick"><span>研究入口</span><div>{quickAccess.map(item => <Link key={item.title} to={item.href}><b>{item.cn}</b><em>{item.code}</em></Link>)}</div></div><div className="lab-orbit-widget"><div className="lab-orbit-rings"><i/><i/><i/><button>▶</button></div></div></section>;
}

function Projects() {
  return <section className="lab-section lab-projects"><div className="lab-section-index">01</div><div className="lab-section-head"><span>精选研究资产</span><h2>把工具、数据与任务案例组织成可复现研究资产。</h2></div><div className="lab-project-grid">{featuredProjects.map((p, i) => <article className={i === 0 ? 'large' : ''} key={p.title}><img src={p.image} alt={p.title}/><div><span>{p.title}</span><h3>{p.cn}</h3><p>{p.desc}</p><footer>{p.tags.map(tag => <em key={tag}>{tag}</em>)}</footer></div></article>)}</div></section>;
}

function MissionDossiers() {
  return <section className="lab-section lab-projects"><div className="lab-section-index">02</div><div className="lab-section-head"><span>任务案例库</span><h2>用真实任务对象承载知识，而不是只堆工具名。</h2></div><div className="lab-mission-strip">{missionDossiers.map(m => <Link to="/missions" key={m.title}><img src={m.image} alt={m.cn}/><div><span>{m.phase}</span><h3>{m.cn}</h3><p>{m.desc}</p><footer>{m.tags.map(t => <em key={t}>{t}</em>)}</footer></div></Link>)}</div></section>;
}

function SimulationPreview() {
  return <section className="lab-simulation-preview"><div className="lab-section-index">03</div><div className="lab-sim-copy"><span>仿真预览</span><h2>从轨道、气动、控制到任务回放。</h2><p>网站不是只记录资料，而是把公开信息、工程假设、软件工具和复现实验连接起来，形成可追踪的仿真研究链路。</p><Link to="/reproduction-lab">查看复现实验 ↗</Link></div><img src={labImages.orbit} alt="轨道仿真预览"/><div className="lab-sim-metrics"><div><span>马赫数</span><strong>25.3</strong></div><div><span>攻角</span><strong>12.5°</strong></div><div><span>密度</span><strong>0.012</strong></div></div></section>;
}

function DomainsAndMethods() {
  return <section className="lab-section lab-domain-methods"><div className="lab-section-index">04</div><div className="lab-section-head"><span>知识与方法</span><h2>日常维护时，内容进入固定结构，而不是随意堆文章。</h2></div><div className="lab-domain-grid">{researchDomains.map(d => <article key={d.name}><h3>{d.name}</h3><p>{d.text}</p></article>)}</div><div className="lab-method-grid">{methodCards.map(m => <article key={m.title}><span>{m.meta}</span><h3>{m.title}</h3><p>{m.text}</p></article>)}</div></section>;
}

function DataSources() {
  return <section className="lab-data-strip"><div><span>数据来源与参考机构</span><div className="lab-source-row"><b>NASA</b><b>ESA</b><b>SPACEX</b><b>JAXA</b><b>CNES</b><b>OPEN DATA</b></div></div><div className="lab-join"><span>加入研究链路</span><p>订阅更新、沉淀资料、复现实验、维护自己的航天仿真研究库。</p><Link to="/log">查看研究日志 ↗</Link></div></section>;
}

export default function Home() {
  return <Layout title="首页" description="航天仿真研究、工程软件、开源项目、公开数据与复现实验的个人研究控制台"><AeroLabFrame active="HOME"><Hero/><ConsoleBand/><OrbitalResearchConsole/><Projects/><MissionDossiers/><SimulationPreview/><DomainsAndMethods/><DataSources/></AeroLabFrame></Layout>;
}
