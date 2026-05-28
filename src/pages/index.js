import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import AeroLabFrame from '../components/AeroLabFrame';
import OrbitalResearchConsole from '../components/OrbitalResearchConsole';
import HomeMissionControl from '../components/HomeMissionControl';
import { labImages, quickAccess, featuredProjects, researchDomains, methodCards, missionDossiers } from '../data/aerolabContent';
import { tools } from '../data/tools';
import { openSourceProjects, datasets } from '../data/openSource';
import { vehicles } from '../data/vehicles';
import { intelligenceQueue } from '../data/intelligence';
import { knowledgeDomains } from '../data/knowledge';
import { experimentCandidates } from '../data/experiments';

const siteStats = [
  { label: '专业工具', value: String(tools.length) },
  { label: '开源项目', value: String(openSourceProjects.length) },
  { label: '飞行器条目', value: String(vehicles.length) },
  { label: '知识节点', value: String(knowledgeDomains.length) },
];

const heroRoutes = [
  { title: '前沿情报', href: '/intelligence', desc: '新闻、论文、软件更新进入筛选队列' },
  { title: '专业工具', href: '/tools', desc: '从任务阶段选择 STK / GMAT / Orekit / CFD 工具链' },
  { title: '飞行器库', href: '/missions', desc: '把火箭、卫星、空间站转成仿真对象' },
  { title: '知识图谱', href: '/knowledge', desc: '理论域、对象节点、方法链路相互连接' },
];

function Hero() {
  return <section className="network-hero lab-hero">
    <img className="lab-hero-bg" src={labImages.hero} alt="航天仿真研究主视觉"/>
    <div className="lab-hero-shade"/>
    <div className="network-planet" aria-hidden="true"><i/><i/><i/></div>
    <div className="network-hero-content">
      <div className="network-hero-copy">
        <div className="lab-kicker">AEROSPACE SIMULATION RESEARCH NETWORK</div>
        <h1><span>航天仿真</span><b>研究网络</b></h1>
        <p>探索航天仿真技术的前沿知识、专业工具、开源项目、飞行器数据库、最新研究进展与理论知识图谱，构建个人可维护的航天领域知识中心。</p>
        <div className="network-hero-actions"><Link to="/intelligence">开始探索</Link><Link to="/tools">查看工具库</Link></div>
        <div className="network-stats">{siteStats.map(item => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
      </div>
      <div className="network-route-panel">
        <span>MISSION ROUTES</span>
        {heroRoutes.map((route, index) => <Link key={route.title} to={route.href}><em>{String(index + 1).padStart(2,'0')}</em><strong>{route.title}</strong><p>{route.desc}</p></Link>)}
      </div>
    </div>
  </section>;
}

function ConsoleBand() {
  const digest = intelligenceQueue.slice(0, 3);
  return <section className="lab-console-band lab-console-band--compact"><div className="lab-update-card"><span>最新更新</span><div><img src={labImages.orbit} alt="最新研究更新"/><article><em>2026-05-25</em><h3>中文航天仿真研究库重构</h3><p>信息架构 · 数据驱动 · 研究控制台</p></article></div></div><div className="lab-digest"><span>今日研究简报</span>{digest.map(item => <div key={item.title}><b>{item.title}</b><em>{item.priority}</em></div>)}<Link to="/intelligence">进入前沿情报 ↗</Link></div><div className="lab-quick"><span>核心入口</span><div>{quickAccess.map(item => <Link key={item.title} to={item.href}><b>{item.cn}</b><em>{item.code}</em></Link>)}</div></div><div className="lab-orbit-widget"><div className="lab-orbit-rings"><i/><i/><i/><button>▶</button></div></div></section>;
}

function Projects() {
  return <section className="lab-section lab-projects"><div className="lab-section-index">01</div><div className="lab-section-head"><span>研究资产</span><h2>核心资产</h2><p>工具、数据、任务案例和可视化结果都要能进入可复查的研究链路。</p></div><div className="lab-project-grid">{featuredProjects.map((p, i) => <article className={i === 0 ? 'large' : ''} key={p.title}><img src={p.image} alt={p.title}/><div><span>{p.title}</span><h3>{p.cn}</h3><p>{p.desc}</p><footer>{p.tags.map(tag => <em key={tag}>{tag}</em>)}</footer></div></article>)}</div></section>;
}

function MissionDossiers() {
  return <section className="lab-section lab-projects"><div className="lab-section-index">02</div><div className="lab-section-head"><span>飞行器与任务</span><h2>任务对象</h2><p>真实航天对象是网站的研究抓手：火箭、卫星、月面任务、再入飞行器都会连接工具、数据和方法。</p></div><div className="lab-mission-strip">{missionDossiers.map(m => <Link to="/missions" key={m.title}><img src={m.image} alt={m.cn}/><div><span>{m.phase}</span><h3>{m.cn}</h3><p>{m.desc}</p><footer>{m.tags.map(t => <em key={t}>{t}</em>)}</footer></div></Link>)}</div></section>;
}

function SimulationPreview() {
  return <section className="lab-simulation-preview"><div className="lab-section-index">03</div><div className="lab-sim-copy"><span>任务回放</span><h2>仿真链路</h2><p>把公开信息、工程假设、软件工具、模型结果和复现实验连接起来，形成可追踪的仿真研究路径。</p><Link to="/my-projects">查看我的项目 ↗</Link></div><img src={labImages.orbit} alt="轨道仿真预览"/><div className="lab-sim-metrics"><div><span>工具</span><strong>{tools.length}</strong></div><div><span>案例</span><strong>{vehicles.length}</strong></div><div><span>实验</span><strong>{experimentCandidates.length}</strong></div></div></section>;
}

function DomainsAndMethods() {
  return <section className="lab-section lab-domain-methods"><div className="lab-section-index">04</div><div className="lab-section-head"><span>知识图谱</span><h2>理论与方法</h2><p>稳定内容进入知识图谱，数据不足时用方法卡片说明推断路径和假设边界。</p></div><div className="lab-domain-grid">{researchDomains.map(d => <article key={d.name}><h3>{d.name}</h3><p>{d.text}</p></article>)}</div><div className="lab-method-grid">{methodCards.map(m => <article key={m.title}><span>{m.meta}</span><h3>{m.title}</h3><p>{m.text}</p></article>)}</div></section>;
}

function DataSources() {
  return <section className="lab-data-strip"><div><span>数据来源与参考机构</span><div className="lab-source-row"><b>NASA</b><b>ESA</b><b>SPACEX</b><b>JAXA</b><b>CNES</b><b>OPEN DATA</b></div></div><div className="lab-join"><span>个人项目</span><p>把资料、工具和方法最终沉淀到自己的航天仿真项目与实验记录中。</p><Link to="/my-projects">查看我的项目 ↗</Link></div></section>;
}

export default function Home() {
  return <Layout title="首页" description="航天仿真研究、工程软件、开源项目、公开数据与复现实验的个人研究控制台"><AeroLabFrame active="HOME"><Hero/><ConsoleBand/><HomeMissionControl/><OrbitalResearchConsole/><Projects/><MissionDossiers/><SimulationPreview/><DomainsAndMethods/><DataSources/></AeroLabFrame></Layout>;
}
