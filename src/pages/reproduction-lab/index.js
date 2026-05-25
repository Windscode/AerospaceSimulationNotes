import React from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import { labImages, methodCards } from '../../data/aerolabContent';
import { validationGates, lifecycle } from '../../data/siteContent';

export default function LabPage(){
  return <Layout title="复现实验室" description="航天仿真复现实验、验证和归档流程">
    <AeroLabFrame active="DATA">
      <LabPageHero eyebrow="REPRODUCTION LAB" title="VALIDATION LAB" text="能重新跑通，才算进入知识库。实验室负责把工具构建、论文复现、项目运行、基准对比、参数假设和误差分析沉淀成证据链。" image={labImages.control} stats={[{label:'ENVIRONMENT', value:'REBUILDABLE'}, {label:'COMMANDS', value:'TRACEABLE'}, {label:'RESULTS', value:'COMPARABLE'}]} />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>VALIDATION GATES</span><h2>复现实验要过六个门禁。</h2></div><p>没有来源、输入、输出、误差和适用范围，就不能成为稳定知识。</p></div>
        <div className="lab-table-grid">{validationGates.map(c => <article key={c.title}><span>CHECK</span><h3>{c.title}</h3><p>{c.desc}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>PARAMETER INFERENCE</span><h2>公开数据不足时，必须诚实标注假设。</h2></div><p>把公开事实、工程估计、低阶模型和猜测分开，是个人研究站可信度的底线。</p></div>
        <div className="lab-table-grid">{methodCards.map(m => <article key={m.title}><span>{m.meta}</span><h3>{m.title}</h3><p>{m.text}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>EVIDENCE CHAIN</span><h2>从发现到归档的证据链。</h2></div><p>每次复现都要能回答：跑了什么、为什么可信、误差在哪里、下一步怎么改。</p></div>
        <div className="lab-table-grid">{lifecycle.map(s => <article key={s.step}><span>{s.step}</span><h3>{s.name}</h3><p>{s.desc}</p></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
