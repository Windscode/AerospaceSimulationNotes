import React from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import { labImages, methodCards, missionDossiers } from '../../data/aerolabContent';
import { validationGates, lifecycle } from '../../data/siteContent';

const labVisuals = [
  { title: 'Reproducible Environment', cn: '可重建环境', image: labImages.control, tag: '环境', desc: '记录操作系统、依赖、版本、数据下载来源和运行命令，避免实验只停留在截图。' },
  { title: 'Mission Replay', cn: '任务回放', image: labImages.orbit, tag: '回放', desc: '把轨道、姿态、遥测、事件和图像输出组织成可复查的任务回放。' },
  { title: 'Evidence-linked Conclusion', cn: '证据链结论', image: labImages.data, tag: '证据', desc: '结论必须能追溯到输入、假设、工具、误差和对照基准。' },
];

export default function LabPage(){
  return <Layout title="复现实验" description="航天仿真复现实验、验证和归档流程">
    <AeroLabFrame active="MINE">
      <LabPageHero eyebrow="REPRODUCTION LAB · 内部模块" title="复现实验" text="这是“我的项目”下的实验模块，用于记录工具构建、论文复现、项目运行、基准对比、参数假设和误差分析。能重新跑通，才进入证据链。" image={labImages.control} stats={[{label:'归属栏目', value:'我的项目'}, {label:'环境', value:'可重建'}, {label:'结果', value:'可对比'}]} />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>实验控制台</span><h2>工作台</h2></div><p>先看到实验场景，再进入门禁、证据链、参数推断和任务案例。</p></div>
        <div className="lab-cinema-grid">{labVisuals.map((item, i) => <article className={`lab-cinema-card ${i===0?'wide':''}`} key={item.title}><img src={item.image} alt={item.cn}/><div><span>{item.tag}</span><h3>{item.cn}</h3><p>{item.desc}</p><footer><em>{item.title}</em></footer></div></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>验证门禁</span><h2>实验门禁</h2></div><p>没有来源、输入、输出、误差和适用范围，就不能成为稳定知识。</p></div>
        <div className="lab-status-grid">{validationGates.map((c, i) => <article key={c.title}><span>门禁 {String(i+1).padStart(2,'0')}</span><strong>{c.title}</strong><p>{c.desc}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-overlay-panel"><img src={labImages.hero} alt="任务复现实验"/><div><span>任务驱动验证</span><h3>对象、工具、结果。</h3><p>后续每个案例都会把工具链、公开数据、反推参数、运行脚本和可视化结果连接起来，形成真正可维护的航天仿真研究资产。</p></div></div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>任务案例</span><h2>实验候选</h2></div><p>这些任务案例后续会逐步扩展为完整实验记录。</p></div>
        <div className="lab-table-grid">{missionDossiers.map(m => <article key={m.title}><span>{m.phase}</span><h3>{m.cn}</h3><p>{m.desc}</p><footer>{m.tools.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>参数推断</span><h2>假设边界</h2></div><p>把公开事实、工程估计、低阶模型和猜测分开，是个人研究站可信度的底线。</p></div>
        <div className="lab-table-grid">{methodCards.map(m => <article key={m.title}><span>{m.meta}</span><h3>{m.title}</h3><p>{m.text}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>证据链</span><h2>归档链</h2></div><p>每次复现都要能回答：跑了什么、为什么可信、误差在哪里、下一步怎么改。</p></div>
        <div className="lab-table-grid">{lifecycle.map(s => <article key={s.step}><span>{s.step}</span><h3>{s.name}</h3><p>{s.desc}</p></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
