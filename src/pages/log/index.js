import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import { labImages, latestUpdates, missionDossiers, featuredProjects } from '../../data/aerolabContent';

const logTypes = [
  { title: 'Daily Research Digest', cn: '每日研究简报', image: labImages.data, tag: 'DAILY', desc: '快速记录每天看到的新论文、新项目、新工具、新任务动态和数据线索。' },
  { title: 'Reproduction Notes', cn: '复现实验记录', image: labImages.control, tag: 'LAB', desc: '记录环境、依赖、命令、输入输出、误差、对照基准和结论。' },
  { title: 'Mission Case Updates', cn: '任务案例更新', image: labImages.hero, tag: 'MISSION', desc: '围绕火箭、星座、月球、再入等任务案例维护研究进展。' },
  { title: 'Toolchain Review', cn: '工程软件评估', image: labImages.orbit, tag: 'TOOLS', desc: '记录工具链、开源项目、软件版本和工程价值判断。' },
];

export default function LogPage(){
  return <Layout title="研究日志" description="AeroSim Research Lab 研究日志入口">
    <AeroLabFrame active="LOG">
      <LabPageHero eyebrow="MISSION LOG" title="RESEARCH LOG" text="研究日志用于承接每天新增的资料、判断、实验和阶段性结论。它不是随手博客，而是进入知识库、项目雷达、数据方法和复现实验室之前的工作日志。" image={labImages.control} stats={[{label:'MODE', value:'DAILY'}, {label:'STATUS', value:'WORKING'}, {label:'ARCHIVE', value:'BLOG'}]} />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>LOG TYPES</span><h2>日志入口也要保持品牌视觉，而不是默认博客列表。</h2></div><p>具体文章仍然用 Docusaurus Blog 维护，入口页负责统一视觉和信息架构。</p></div>
        <div className="lab-cinema-grid">{logTypes.map((item, i) => <article className={`lab-cinema-card ${i===0?'wide':''}`} key={item.title}><img src={item.image} alt={item.cn}/><div><span>{item.tag}</span><h3>{item.cn}</h3><p>{item.desc}</p><footer><em>{item.title}</em></footer></div></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>LATEST DIGEST</span><h2>最近研究更新</h2></div><p>这里展示维护节奏，完整文章进入博客系统。</p></div>
        <div className="lab-feature-list">{latestUpdates.map((item, i) => <article className="lab-feature-row" key={item.title}><img src={[labImages.hero, labImages.orbit, labImages.control, labImages.data][i % 4]} alt={item.title}/><div><span>{item.type}</span><h3>{item.title}</h3><p>后续可扩展为正式日志文章、知识条目或复现实验记录。</p></div><strong>{item.date}</strong></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-overlay-panel"><img src={labImages.orbit} alt="研究日志归档"/><div><span>ARCHIVE SYSTEM</span><h3>日志负责收集过程，知识库负责沉淀结论。</h3><p>这能保证你每天维护网站时不会被复杂页面结构拖住：先写日志，再把成熟内容转入知识库、任务案例、数据方法或项目雷达。</p><p><Link to="/blog">OPEN BLOG ARCHIVE ↗</Link></p></div></div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>MISSION LINKS</span><h2>日志与任务案例关联</h2></div><p>每条日志最好能指向一个研究域、任务对象或工具链。</p></div>
        <div className="lab-table-grid">{missionDossiers.map(m => <article key={m.title}><span>{m.phase}</span><h3>{m.cn}</h3><p>{m.desc}</p><footer>{m.tags.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>RESEARCH STACK</span><h2>日志可以沉淀到哪里</h2></div><p>同一条材料不要重复维护，而是根据成熟度流转。</p></div>
        <div className="lab-table-grid">{featuredProjects.map(p => <article key={p.title}><span>{p.title}</span><h3>{p.cn}</h3><p>{p.desc}</p><footer>{p.tags.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
