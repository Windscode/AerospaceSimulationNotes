import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import { labImages, latestUpdates, missionDossiers, featuredProjects } from '../../data/aerolabContent';

const logStreams = [
  { title: 'Research Digest', cn: '研究简报', image: labImages.data, tag: 'DAILY', desc: '每天搜集到的论文、项目、工具、任务动态先进入研究简报，再决定是否沉淀到知识库。' },
  { title: 'Simulation Notes', cn: '仿真笔记', image: labImages.orbit, tag: 'SIM', desc: '记录轨道、GNC、推进、气动、数据处理和可视化中的具体问题与实验结果。' },
  { title: 'Reproduction Records', cn: '复现实验记录', image: labImages.control, tag: 'LAB', desc: '记录环境、命令、输入、输出、误差和结论，避免研究结果只停留在截图。' },
];

export default function MissionLogPage(){
  return <Layout title="任务日志" description="航天仿真研究日志与每日更新入口">
    <AeroLabFrame active="LOG">
      <LabPageHero eyebrow="MISSION LOG" title="RESEARCH LOG" text="任务日志是这个网站的日常维护入口。最新资料、研究想法、工具试用、复现实验和阶段结论先进入日志，再逐步归档到稳定知识库。" image={labImages.control} stats={[{label:'MODE', value:'DAILY'}, {label:'FORMAT', value:'DIGEST'}, {label:'ARCHIVE', value:'CURATED'}]} />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>LOG STREAMS</span><h2>日志入口也要保持同一套高级设计。</h2></div><p>真正的博客内容可以继续用 Docusaurus 管理，但用户先看到的是统一视觉的任务日志入口。</p></div>
        <div className="lab-cinema-grid">{logStreams.map((item, i) => <article className={`lab-cinema-card ${i===0?'wide':''}`} key={item.title}><img src={item.image} alt={item.cn}/><div><span>{item.tag}</span><h3>{item.cn}</h3><p>{item.desc}</p><footer><em>{item.title}</em></footer></div></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>RECENT UPDATES</span><h2>最近更新</h2></div><p>这里展示的是入口级摘要，详细文章仍可进入原始博客系统。</p></div>
        <div className="lab-feature-list">{latestUpdates.map((item, i) => <article className="lab-feature-row" key={item.title}><img src={[labImages.hero, labImages.orbit, labImages.control, labImages.data][i % 4]} alt={item.title}/><div><span>{item.type}</span><h3>{item.title}</h3><p>状态：进入任务日志，等待归档到情报、知识、项目、工具、数据或实验室。</p></div><strong>{item.date}</strong></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-overlay-panel"><img src={labImages.hero} alt="任务日志归档"/><div><span>ARCHIVE DISCIPLINE</span><h3>日志不是终点，只是研究资产的入口。</h3><p>每天维护时，先记录，再筛选，再归档。真正稳定的内容会进入任务案例、工具链、数据方法、项目雷达或知识库。</p><p><Link to="/blog">OPEN ORIGINAL BLOG ↗</Link></p></div></div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>ARCHIVE TARGETS</span><h2>日志最终流向任务和工具。</h2></div><p>每条日志都应该能关联一个研究对象，而不是孤立存在。</p></div>
        <div className="lab-table-grid">{[...missionDossiers.slice(0,3), ...featuredProjects.slice(0,3)].map(item => <article key={item.title}><span>{item.title}</span><h3>{item.cn}</h3><p>{item.desc}</p><footer>{(item.tags || []).map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
