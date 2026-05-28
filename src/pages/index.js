import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import AeroLabFrame from '../components/AeroLabFrame';
import OrbitalResearchConsole from '../components/OrbitalResearchConsole';
import HomeMissionControl from '../components/HomeMissionControl';
import { labImages, quickAccess } from '../data/aerolabContent';
import { tools } from '../data/tools';
import { openSourceProjects, datasets } from '../data/openSource';
import { vehicles } from '../data/vehicles';
import { intelligenceQueue } from '../data/intelligence';
import { knowledgeDomains } from '../data/knowledge';
import { experimentCandidates } from '../data/experiments';

const siteStats = [
  { label: '专业工具', value: String(tools.length) },
  { label: '开源项目', value: String(openSourceProjects.length) },
  { label: '真实对象', value: String(vehicles.length) },
  { label: '知识节点', value: String(knowledgeDomains.length) },
];

const heroRoutes = [
  { title: '今天先做什么', href: '#today', desc: '从情报、对象、工具和实验中挑一个可执行任务' },
  { title: '真实飞行器对象', href: '/missions', desc: 'Falcon 9、长征五号、ISS、天宫、Starlink 等对象档案' },
  { title: '工具链路线', href: '#toolchains', desc: '把 STK / GMAT / Orekit / CFD 工具放入具体任务' },
  { title: '证据与边界', href: '#evidence', desc: '公开来源、假设、验证检查和不可用边界' },
];

const todayActions = [
  {
    title: '先跑通 ISS / 天宫过境链路',
    level: '最容易落地',
    objective: '读取 TLE，计算 24 小时地面站过境，导出 Cesium 轨迹和事件表。',
    inputs: ['CelesTrak TLE', '地面站经纬度', 'UTC 时间段'],
    tools: ['Orekit', 'Python / Jupyter', 'CesiumJS'],
    output: '过境时间表 + 三维回放 + 误差说明',
    href: '/missions',
  },
  {
    title: '建立 Falcon 9 简化入轨模型',
    level: '对象驱动',
    objective: '用公开发动机、尺寸和任务轨道做三自由度入轨近似，不碰真实飞控。',
    inputs: ['任务页面', '发动机公开参数', '目标轨道/TLE'],
    tools: ['RocketCEA', 'GMAT', 'Python'],
    output: '速度增量预算 + 事件时间线 + TLE 对照',
    href: '/missions',
  },
  {
    title: '筛掉“只有名字”的工具条目',
    level: '内容清洗',
    objective: '每个工具必须补齐：适用任务、起步动作、输入输出、坑点和替代关系。',
    inputs: ['官方文档', '示例工程', '许可证'],
    tools: ['工具库', '开源与数据'],
    output: '可执行工具卡，而不是软件名录',
    href: '/tools',
  },
];

const objectWorkflows = vehicles.slice(0, 6).map(vehicle => ({
  title: vehicle.title,
  meta: `${vehicle.category} · ${vehicle.country}`,
  summary: vehicle.modelPlan || vehicle.summary,
  data: (vehicle.publicData || []).slice(0, 3),
  tools: (vehicle.tools || []).slice(0, 4),
  checks: (vehicle.validationChecks || []).slice(0, 2),
}));

const toolchains = [
  {
    title: '轨道传播与过境',
    why: '先把最确定的数据链路跑通，适合 ISS、天宫、Starlink 和低轨卫星。',
    input: 'TLE / 地面站 / 时间范围',
    steps: ['读取 TLE', '传播轨道', '事件探测', '导出轨迹'],
    tools: ['Orekit', 'Python / Jupyter', 'CesiumJS'],
  },
  {
    title: '发射入轨近似',
    why: '把公开新闻和火箭参数转成可验证的速度增量、质量和飞行事件。',
    input: '发动机参数 / 级质量估计 / 目标轨道',
    steps: ['质量假设', '推力曲线', '重力转弯', 'TLE 对照'],
    tools: ['RocketCEA', 'GMAT', 'Python'],
  },
  {
    title: '再入气动热走廊',
    why: '对 Starship、Orion、Apollo 指令舱等对象，先做范围和边界，不冒充高保真。',
    input: '外形尺寸 / 初始速度高度 / 论文曲线',
    steps: ['几何简化', '气动初值', '轨迹积分', '热流/过载对照'],
    tools: ['OpenVSP', 'SU2', 'OpenFOAM', 'ParaView'],
  },
];

const evidenceRules = [
  { title: '公开事实', desc: '机构页面、任务新闻、TLE、论文图表和官方文档必须单独记录来源。' },
  { title: '工程假设', desc: '质量分配、阻力系数、推力节流、姿态约束这类不可见量必须标注为假设。' },
  { title: '验证检查', desc: '每个对象至少要有一个可对照项：轨道、事件时间、过境窗口、曲线趋势或工具示例。' },
  { title: '不可用边界', desc: '没有数据支持的高保真飞控、热防护细节和真实任务参数，不应该写成确定结论。' },
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
        <p>这不是资料导航站，而是个人航天仿真研究工作台：用真实飞行器对象牵引内容，把公开数据、工程假设、工具链、复现实验和知识图谱连成可执行路线。</p>
        <div className="network-hero-actions"><a href="#today">今天做什么</a><Link to="/missions">查看对象库</Link></div>
        <div className="network-stats">{siteStats.map(item => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
      </div>
      <div className="network-route-panel">
        <span>MISSION ROUTES</span>
        {heroRoutes.map((route, index) => route.href.startsWith('#')
          ? <a key={route.title} href={route.href}><em>{String(index + 1).padStart(2,'0')}</em><strong>{route.title}</strong><p>{route.desc}</p></a>
          : <Link key={route.title} to={route.href}><em>{String(index + 1).padStart(2,'0')}</em><strong>{route.title}</strong><p>{route.desc}</p></Link>)}
      </div>
    </div>
  </section>;
}

function ConsoleBand() {
  const digest = intelligenceQueue.slice(0, 3);
  return <section className="lab-console-band lab-console-band--compact"><div className="lab-update-card"><span>最新更新</span><div><img src={labImages.orbit} alt="最新研究更新"/><article><em>2026-05-28</em><h3>真实对象档案与工具链重构</h3><p>飞行器对象 · 开源项目 · 数据源 · 验证边界</p></article></div></div><div className="lab-digest"><span>今日研究简报</span>{digest.map(item => <div key={item.title}><b>{item.title}</b><em>{item.priority}</em></div>)}<Link to="/intelligence">进入前沿情报 ↗</Link></div><div className="lab-quick"><span>核心入口</span><div>{quickAccess.map(item => <Link key={item.title} to={item.href}><b>{item.cn}</b><em>{item.code}</em></Link>)}</div></div><div className="lab-orbit-widget"><div className="lab-orbit-rings"><i/><i/><i/><button>▶</button></div></div></section>;
}

function TodayActions() {
  return <section id="today" className="lab-section lab-action-board"><div className="lab-section-index">01</div><div className="lab-section-head"><span>执行入口</span><h2>今天先处理这三件事。</h2><p>首页不要只摆模块。它应该告诉自己下一步具体做什么、输入是什么、用哪些工具、最后产出什么。</p></div><div className="lab-action-grid">{todayActions.map((action, index) => <article key={action.title}><span>{String(index + 1).padStart(2,'0')} · {action.level}</span><h3>{action.title}</h3><p>{action.objective}</p><div className="lab-action-fields"><div><b>输入</b>{action.inputs.map(i => <em key={i}>{i}</em>)}</div><div><b>工具</b>{action.tools.map(i => <em key={i}>{i}</em>)}</div></div><strong className="lab-action-output">{action.output}</strong><Link to={action.href}>进入对应模块 ↗</Link></article>)}</div></section>;
}

function RealObjectWorkbench() {
  return <section className="lab-section lab-object-workbench"><div className="lab-section-index">02</div><div className="lab-section-head"><span>真实对象</span><h2>用飞行器对象替代空模板。</h2><p>每个对象都必须绑定公开来源、可推断参数、工具链和验证检查。没有这些内容，就只是百科摘抄。</p></div><div className="lab-object-grid">{objectWorkflows.map(item => <article key={item.title}><span>{item.meta}</span><h3>{item.title}</h3><p>{item.summary}</p><div><b>公开数据</b>{item.data.map(d => <em key={d}>{d}</em>)}</div><div><b>工具链</b>{item.tools.map(t => <em key={t}>{t}</em>)}</div><ul>{item.checks.map(c => <li key={c}>{c}</li>)}</ul></article>)}</div><Link className="lab-section-entry" to="/missions">进入飞行器与任务 ↗</Link></section>;
}

function ToolchainBridge() {
  return <section id="toolchains" className="lab-section lab-toolchain-bridge"><div className="lab-section-index">03</div><div className="lab-section-head"><span>工具链</span><h2>工具必须服务具体任务。</h2><p>不要再堆一屏软件名。每条工具链都要明确输入、步骤、输出和适用对象。</p></div><div className="lab-toolchain-grid">{toolchains.map(chain => <article key={chain.title}><span>{chain.input}</span><h3>{chain.title}</h3><p>{chain.why}</p><ol>{chain.steps.map(step => <li key={step}>{step}</li>)}</ol><footer>{chain.tools.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div><Link className="lab-section-entry" to="/tools">进入工具库 ↗</Link></section>;
}

function EvidenceAndBacklog() {
  return <section id="evidence" className="lab-section lab-evidence-board"><div className="lab-section-index">04</div><div className="lab-section-head"><span>证据链</span><h2>区分事实、假设、验证和边界。</h2><p>这个网站真正值钱的不是“看起来像航天”，而是每条内容能说明来源、用途、可信度和下一步动作。</p></div><div className="lab-evidence-layout"><div className="lab-evidence-rules">{evidenceRules.map(rule => <article key={rule.title}><h3>{rule.title}</h3><p>{rule.desc}</p></article>)}</div><aside><span>当前资产</span><strong>{tools.length + openSourceProjects.length + datasets.length + vehicles.length + experimentCandidates.length}</strong><p>工具、开源项目、数据源、真实对象和实验候选会继续被清洗，能验证的进入稳定库，不能验证的留在情报队列。</p><Link to="/open-source-data">查看开源与数据 ↗</Link></aside></div></section>;
}

function DataSources() {
  return <section className="lab-data-strip"><div><span>数据来源与参考机构</span><div className="lab-source-row"><b>NASA</b><b>ESA</b><b>SPACEX</b><b>JAXA</b><b>CNES</b><b>OPEN DATA</b></div></div><div className="lab-join"><span>个人项目</span><p>最终要沉淀到自己的航天仿真项目：可运行脚本、验证记录、可视化回放和清楚的假设边界。</p><Link to="/my-projects">查看我的项目 ↗</Link></div></section>;
}

export default function Home() {
  return <Layout title="首页" description="航天仿真研究、工程软件、开源项目、公开数据与复现实验的个人研究控制台"><AeroLabFrame active="HOME"><Hero/><ConsoleBand/><HomeMissionControl/><TodayActions/><RealObjectWorkbench/><ToolchainBridge/><OrbitalResearchConsole/><EvidenceAndBacklog/><DataSources/></AeroLabFrame></Layout>;
}
