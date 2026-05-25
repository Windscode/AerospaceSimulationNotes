import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import { visualAssets, validationGates, modelInferenceMethods, lifecycle } from '../../data/siteContent';

export default function LabPage(){
  return <Layout title="复现实验室" description="航天仿真复现实验、验证和归档流程">
    <main className="asn-page">
      <section className="asn-hero asn-hero--compact">
        <img className="asn-hero__image" src={useBaseUrl(visualAssets.lab)} alt="复现实验室视觉图"/>
        <div className="container asn-hero__content">
          <div>
            <div className="asn-badge">REPRODUCTION LAB</div>
            <h1>能重新跑通，才算进入知识库。</h1>
            <p>这里不是展示漂亮笔记，而是把工具构建、论文复现、项目运行、基准对比、参数假设和误差分析沉淀成证据链。</p>
            <div className="asn-actions"><Link className="asn-button asn-button--primary" to="/docs/lab/experiment-template">打开实验模板</Link></div>
          </div>
          <div className="asn-command-panel"><h3>实验门禁</h3>{validationGates.slice(0,4).map(c => <div className="asn-metric" key={c.title}><span>{c.title}</span><strong>Gate</strong></div>)}</div>
        </div>
      </section>

      <section className="asn-section container">
        <div className="asn-section-head"><span>Validation Gates</span><h2>复现实验要过六个门禁</h2><p>如果一个资料无法说明来源、输入、输出、误差和适用范围，它就不能成为稳定知识。</p></div>
        <div className="asn-grid asn-grid--3">{validationGates.map(c => <article className="asn-card asn-data-card--rich" key={c.title}><div className="asn-kicker">CHECK</div><h3>{c.title}</h3><p>{c.desc}</p></article>)}</div>
      </section>

      <section className="asn-section container">
        <div className="asn-section-head"><span>Parameter Inference</span><h2>公开数据不足时，必须诚实标注假设</h2><p>航天数据经常不完整，所以网站要把公开事实、工程估计、低阶模型和猜测严格分开。</p></div>
        <div className="asn-inference-grid">{modelInferenceMethods.map((m, i) => <article key={m.title}><span>{String(i+1).padStart(2,'0')}</span><h3>{m.title}</h3><p>{m.desc}</p><strong>{m.output}</strong></article>)}</div>
      </section>

      <section className="asn-section container">
        <div className="asn-lab-panel"><div><span className="asn-kicker">Evidence Chain</span><h2>实验记录最终要变成证据链。</h2><p>每次复现都要能回答：我跑了什么、为什么可信、误差在哪里、下一步怎么改。</p><img src={useBaseUrl(visualAssets.knowledge)} alt="证据链视觉图"/></div><div className="asn-lifecycle">{lifecycle.map(s => <div key={s.step}><span>{s.step}</span><strong>{s.name}</strong><em>{s.desc}</em></div>)}</div></div>
      </section>
    </main>
  </Layout>;
}
