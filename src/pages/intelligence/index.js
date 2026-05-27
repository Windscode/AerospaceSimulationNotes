import React from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import OrbitalResearchConsole from '../../components/OrbitalResearchConsole';
import { labImages, latestUpdates, missionDossiers, featuredProjects } from '../../data/aerolabContent';
import { intelligenceItems, lifecycle } from '../../data/siteContent';

export default function IntelligencePage(){
  return <Layout title="研究情报" description="每日研究动态与资料收集入口">
    <AeroLabFrame active="DISCOVER">
      <LabPageHero eyebrow="RESEARCH INTELLIGENCE · 研究情报" title="研究情报流" text="每天看到的新论文、新工具、新项目、新任务动态和公开数据先进入情报流。这里不是最终结论，而是研究线索、可信度判断和下一步动作。" image={labImages.data} stats={[{label:'接收节奏', value:'每日'}, {label:'当前状态', value:'筛选中'}, {label:'输出方向', value:'知识库'}]} />
      <OrbitalResearchConsole compact />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>情报墙</span><h2>研究情报页先要像一面任务情报墙。</h2></div><p>资料入口不是普通新闻列表，而是从任务、工具、开源项目和数据来源中筛选值得继续研究的线索。</p></div>
        <div className="lab-cinema-grid">
          {[...featuredProjects.slice(0,2), ...missionDossiers.slice(0,2)].map((item, i) => <article className={`lab-cinema-card ${i===0?'wide':''}`} key={item.title}><img src={item.image} alt={item.cn}/><div><span>{item.title}</span><h3>{item.cn}</h3><p>{item.desc}</p><footer>{(item.tags || []).map(tag => <em key={tag}>{tag}</em>)}</footer></div></article>)}
        </div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>每日简报</span><h2>今日研究简报</h2></div><p>轻量记录，后续再沉淀到知识库、工具矩阵、项目雷达或复现实验。</p></div>
        <div className="lab-feature-list">{latestUpdates.map((item, i) => <article className="lab-feature-row" key={item.title}><img src={[labImages.orbit, labImages.hero, labImages.control, labImages.data][i % 4]} alt={item.title}/><div><span>{item.type}</span><h3>{item.title}</h3><p>进入情报流后需要标注来源、可信度、关联领域、是否可复现以及下一步动作。</p></div><strong>{item.date}</strong></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-overlay-panel"><img src={labImages.control} alt="研究情报控制台"/><div><span>情报接收流程</span><h3>每天新增内容时，先进入情报流，不直接污染知识库。</h3><p>这个页面的设计重点是长期维护：快速接收资料、标记来源、判断价值、分配去向。稳定结论再进入知识库、项目雷达、数据方法或复现实验室。</p></div></div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>情报入口</span><h2>情报入口</h2></div><p>新资料先进入队列，不要直接污染稳定知识库。</p></div>
        <div className="lab-status-grid">{intelligenceItems.map((item, i) => <article key={item.title}><span>{String(i+1).padStart(2,'0')} · {item.date}</span><strong>{item.type}</strong><p>{item.title}</p><p>{item.status}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>流转生命周期</span><h2>从发现到归档</h2></div><p>每天维护的关键不是多，而是每条资料都有状态、有判断、有去向。</p></div>
        <div className="lab-table-grid">{lifecycle.map(s => <article key={s.step}><span>{s.step}</span><h3>{s.name}</h3><p>{s.desc}</p></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
