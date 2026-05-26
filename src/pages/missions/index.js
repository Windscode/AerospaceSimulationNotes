import React from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import { labImages, missionDossiers, methodCards } from '../../data/aerolabContent';

export default function MissionsPage(){
  return <Layout title="任务案例" description="火箭、轨道、月球、再入等航天仿真任务案例库">
    <AeroLabFrame active="MISSIONS">
      <LabPageHero eyebrow="MISSION DOSSIERS · 任务档案" title="任务案例库" text="任务案例是这个网站的研究主线：把火箭、航天器、轨道、再入、月面任务与工具链、公开数据、参数推断和复现实验连接起来。" image={labImages.hero} stats={[{label:'任务档案', value:String(missionDossiers.length)}, {label:'数据模式', value:'公开 + 估计'}, {label:'可追溯性', value:'必须'}]} />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>任务索引</span><h2>用任务对象组织知识，而不是堆目录。</h2></div><p>每个任务档案都要回答：研究对象是什么，数据从哪里来，参数如何估计，工具怎么验证，结果如何复现。</p></div>
        <div className="lab-mission-grid">{missionDossiers.map((m, i) => <article key={m.title} className={i === 0 ? 'featured' : ''}><img src={m.image} alt={m.cn}/><div><span>{m.phase}</span><h3>{m.cn}</h3><h4>{m.title}</h4><p>{m.desc}</p><footer>{m.tags.map(t => <em key={t}>{t}</em>)}</footer></div></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>数据与工具链</span><h2>每个案例都必须绑定数据来源和工具链。</h2></div><p>这能防止任务案例变成漂亮图片：所有结论必须能追溯到数据、假设、软件和验证结果。</p></div>
        <div className="lab-table-grid">{missionDossiers.map(m => <article key={m.title}><span>{m.phase}</span><h3>{m.cn}</h3><p><b>数据：</b>{m.data.join(' / ')}</p><p><b>工具：</b>{m.tools.join(' / ')}</p><footer>{m.tags.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>参数推断方法</span><h2>公开数据不足时，案例必须说明估计方法。</h2></div><p>你的网站特色不是“资料很多”，而是能诚实说明怎么从公开资料走到可运行的仿真参数。</p></div>
        <div className="lab-table-grid">{methodCards.map(m => <article key={m.title}><span>{m.meta}</span><h3>{m.title}</h3><p>{m.text}</p></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
