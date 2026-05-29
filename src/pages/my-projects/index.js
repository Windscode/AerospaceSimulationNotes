import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import { labImages } from '../../data/aerolabContent';
import { experimentCandidates, validationGates, experimentLifecycle, personalProjects, projectMilestones } from '../../data/experiments';
import '../../css/aerolab-projects-v4.css';

function ProjectDashboard() {
  return <section className="lab-page-section lab-project-dashboard">
    <div className="lab-page-head"><div><span>项目主线</span><h2>个人项目必须有状态、下一步和输出物。</h2></div><p>这里不再展示抽象“项目轨道”，而是记录当前真实推进的研究与开发任务。</p></div>
    <div className="lab-personal-project-grid">{personalProjects.map(project => <article key={project.id}>
      <div className="lab-card-status-row"><span className="lab-status-pill">{project.status}</span><span className="lab-status-pill">{project.type}</span></div>
      <h3>{project.title}</h3>
      <p>{project.objective}</p>
      <div className="lab-project-field"><b>当前进展</b>{project.currentProgress.map(item => <em key={item}>{item}</em>)}</div>
      <div className="lab-project-field lab-project-field--next"><b>下一步</b>{project.nextActions.map(item => <em key={item}>{item}</em>)}</div>
      <footer>{project.stack.map(item => <span key={item}>{item}</span>)}</footer>
      <div className="lab-project-links">{project.relatedPages.map(page => <Link key={page} to={page}>{page.replace('/', '') || 'home'} ↗</Link>)}</div>
    </article>)}</div>
  </section>;
}

function Roadmap() {
  return <section className="lab-page-section lab-project-roadmap">
    <div className="lab-page-head"><div><span>路线图</span><h2>先完成能运行的闭环，再继续扩内容。</h2></div><p>这个页面必须约束后续维护：先让一个实验跑起来，再扩真实对象和数据源。</p></div>
    <div className="lab-roadmap-line">{projectMilestones.map((m, index) => <article key={m.id}>
      <em>{String(index + 1).padStart(2, '0')}</em>
      <span>{m.target}</span>
      <h3>{m.title}</h3>
      <p>{m.desc}</p>
    </article>)}</div>
  </section>;
}

function ExperimentBoard() {
  return <section className="lab-page-section lab-project-experiments">
    <div className="lab-page-head"><div><span>实验池</span><h2>候选实验要有输入、工具、输出和验证。</h2></div><p>只有能被复现、能被对照、能归档的任务，才算真正进入项目。</p></div>
    <div className="lab-experiment-grid">{experimentCandidates.map(exp => <article key={exp.id}>
      <span>{exp.category} · {exp.status} · {exp.priority}</span>
      <h3>{exp.title}</h3>
      <p>{exp.objective}</p>
      <div><b>输入</b>{exp.inputs.map(item => <em key={item}>{item}</em>)}</div>
      <div><b>输出</b>{exp.outputs.map(item => <em key={item}>{item}</em>)}</div>
      <div><b>验证</b>{exp.validation.map(item => <em key={item}>{item}</em>)}</div>
      <footer>{exp.tools.map(t => <strong key={t}>{t}</strong>)}</footer>
    </article>)}</div>
  </section>;
}

function GateAndLifecycle() {
  return <section className="lab-page-section lab-project-gates">
    <div className="lab-page-head"><div><span>项目门禁</span><h2>每个实验都按同一套门禁推进。</h2></div><p>避免“看起来做了很多”，但没有环境、数据、输出、验证和归档。</p></div>
    <div className="lab-project-gate-layout">
      <div className="lab-health-grid">{validationGates.map((g, i) => <article key={g.id}><span>门禁 {String(i + 1).padStart(2,'0')}</span><h3>{g.title}</h3><p>{g.desc}</p></article>)}</div>
      <aside>{experimentLifecycle.map(s => <article key={s.step}><b>{s.step}</b><div><h3>{s.title}</h3><p>{s.desc}</p></div></article>)}</aside>
    </div>
  </section>;
}

export default function MyProjectsPage(){
  return <Layout title="我的项目" description="个人航天仿真项目、开发日志和复现实验路线">
    <AeroLabFrame active="MINE">
      <LabPageHero eyebrow="PERSONAL PROJECTS · 我的项目" title="我的项目路线图" text="这里不做展示型项目墙，而是记录个人正在推进的航天仿真研究任务：站点建设、TLE 过境实验、火箭入轨近似、再入气动热复现。每个项目都有状态、下一步、输出物和风险。" image={labImages.control} stats={[{label:'项目主线', value:String(personalProjects.length)}, {label:'实验候选', value:String(experimentCandidates.length)}, {label:'验证门禁', value:String(validationGates.length)}, {label:'沉淀方式', value:'实验 + 日志'}]} />
      <ProjectDashboard />
      <Roadmap />
      <ExperimentBoard />
      <GateAndLifecycle />
    </AeroLabFrame>
  </Layout>;
}
