import React from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import { labImages, latestUpdates } from '../../data/aerolabContent';
import { intelligenceItems, lifecycle } from '../../data/siteContent';

export default function IntelligencePage(){
  return <Layout title="研究情报" description="每日研究动态与资料收集入口">
    <AeroLabFrame active="DISCOVER">
      <LabPageHero eyebrow="RESEARCH INTELLIGENCE" title="DISCOVER STREAM" text="每天看到的新论文、新工具、新项目、新任务动态和公开数据先进入情报流。这里不是最终结论，而是研究线索、可信度判断和下一步动作。" image={labImages.data} stats={[{label:'INTAKE', value:'DAILY'}, {label:'STATUS', value:'TRIAGE'}, {label:'OUTPUT', value:'KNOWLEDGE'}]} />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>DAILY DIGEST</span><h2>今日研究简报</h2></div><p>轻量记录，后续再沉淀到知识库、工具矩阵、项目雷达或复现实验。</p></div>
        <div className="lab-feature-list">{latestUpdates.map((item, i) => <article className="lab-feature-row" key={item.title}><img src={[labImages.hero, labImages.orbit, labImages.control, labImages.data][i % 4]} alt={item.title}/><div><span>{item.type}</span><h3>{item.title}</h3><p>进入情报流后需要标注来源、可信度、关联领域、是否可复现以及下一步动作。</p></div><strong>{item.date}</strong></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>INTAKE QUEUE</span><h2>情报入口</h2></div><p>新资料先进入队列，不要直接污染稳定知识库。</p></div>
        <div className="lab-table-grid">{intelligenceItems.map(item => <article key={item.title}><span>{item.date} · {item.type}</span><h3>{item.title}</h3><p>{item.status}</p><footer>{item.tags.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>LIFECYCLE</span><h2>从发现到归档</h2></div><p>每天维护的关键不是多，而是每条资料都有状态、有判断、有去向。</p></div>
        <div className="lab-table-grid">{lifecycle.map(s => <article key={s.step}><span>{s.step}</span><h3>{s.name}</h3><p>{s.desc}</p></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
