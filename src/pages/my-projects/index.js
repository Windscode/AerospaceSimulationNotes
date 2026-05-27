import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import OrbitalResearchConsole from '../../components/OrbitalResearchConsole';
import { labImages, featuredProjects } from '../../data/aerolabContent';
import { experimentCandidates, validationGates, experimentLifecycle } from '../../data/experiments';

const projectTracks = [
  { title: '航天仿真研究网站', label: 'SITE', image: labImages.control, desc: '持续维护这个中文航天仿真研究入口，沉淀工具、资料、项目、案例和知识图谱。', href: '/log' },
  { title: '任务案例与复现实验', label: 'MISSION LAB', image: labImages.orbit, desc: '围绕火箭入轨、星座覆盖、月面着陆和再入环境，逐步建立可复现实验链路。', href: '/reproduction-lab' },
  { title: '工具链实验', label: 'TOOLCHAIN', image: labImages.data, desc: '验证 STK、GMAT、Orekit、Tudat、Basilisk、CFD 和可视化工具之间的组合方式。', href: '/tools' },
  { title: '个人开发路线', label: 'ROADMAP', image: labImages.space, desc: '记录后续要做的航天仿真项目、实验系统、数据整理和网站建设计划。', href: '/blog' },
];

export default function MyProjectsPage(){
  return <Layout title="我的项目" description="个人航天仿真项目、开发日志和复现实验路线">
    <AeroLabFrame active="MINE">
      <LabPageHero eyebrow="PERSONAL PROJECTS · 我的项目" title="我的项目" text="这里不是资料目录，而是个人正在推进的航天仿真研究和开发主线：网站建设、工具链实验、任务案例、复现实验和长期路线图。" image={labImages.control} stats={[{label:'实验候选', value:String(experimentCandidates.length)}, {label:'验证门禁', value:String(validationGates.length)}, {label:'沉淀方式', value:'日志 + 实验'}]} />
      <OrbitalResearchConsole compact />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>项目轨道</span><h2>个人项目线</h2></div><p>把个人研究、开发和复现实验从资料收集里分出来，形成可持续推进的项目主线。</p></div>
        <div className="lab-cinema-grid">{projectTracks.map((p, i) => <Link to={p.href} className={`lab-cinema-card ${i === 0 ? 'wide' : ''}`} key={p.title}><img src={p.image} alt={p.title}/><div><span>{p.label}</span><h3>{p.title}</h3><p>{p.desc}</p><footer><em>进入项目</em></footer></div></Link>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>候选实验</span><h2>实验池</h2></div><p>这些任务会逐步变成可运行、可验证、可归档的实验记录。</p></div>
        <div className="lab-table-grid">{experimentCandidates.map(exp => <article key={exp.id}><span>{exp.category} · {exp.status} · {exp.priority}</span><h3>{exp.title}</h3><p>{exp.objective}</p><p><b>输入：</b>{exp.inputs.join(' / ')}</p><p><b>输出：</b>{exp.outputs.join(' / ')}</p><footer>{exp.tools.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>实验门禁</span><h2>完成标准</h2></div><p>个人项目也要避免“只看起来能跑”，必须留下可复查证据。</p></div>
        <div className="lab-status-grid">{validationGates.map((g, i) => <article key={g.id}><span>门禁 {String(i + 1).padStart(2,'0')}</span><strong>{g.title}</strong><p>{g.desc}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-overlay-panel"><img src={labImages.orbit} alt="个人项目路线"/><div><span>开发路线</span><h3>资料最终要回到项目。</h3><p>工具、开源项目、公开数据、理论知识和飞行器案例，最终都应该服务你的个人航天仿真开发与复现实验，而不是停留在收藏夹里。</p></div></div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>流转记录</span><h2>实验生命周期</h2></div><p>每个项目都按统一生命周期推进，方便后续每天维护。</p></div>
        <div className="lab-table-grid">{experimentLifecycle.map(s => <article key={s.step}><span>{s.step}</span><h3>{s.title}</h3><p>{s.desc}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>可沉淀资产</span><h2>成果形式</h2></div><p>最终产物可以是工具条目、案例页面、实验记录、方法卡片或项目说明。</p></div>
        <div className="lab-table-grid">{featuredProjects.map(p => <article key={p.title}><span>{p.title}</span><h3>{p.cn}</h3><p>{p.desc}</p><footer>{p.tags.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
