import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import { labImages, latestUpdates, missionDossiers, featuredProjects } from '../../data/aerolabContent';

const logTypes = [
  { title: 'Daily Research Digest', cn: '每日简报', image: labImages.data, tag: '每日', desc: '快速记录每天看到的新论文、新项目、新工具、新任务动态和数据线索。' },
  { title: 'Reproduction Notes', cn: '实验记录', image: labImages.control, tag: '实验', desc: '记录环境、依赖、命令、输入输出、误差、对照基准和结论。' },
  { title: 'Mission Case Updates', cn: '任务更新', image: labImages.hero, tag: '任务', desc: '围绕火箭、星座、月球、再入等任务案例维护研究进展。' },
  { title: 'Toolchain Review', cn: '工具评估', image: labImages.orbit, tag: '工具', desc: '记录工具链、开源项目、软件版本和工程价值判断。' },
];

export default function LogPage(){
  return <Layout title="研究日志" description="AeroSim Research Lab 研究日志入口">
    <AeroLabFrame active="MINE">
      <LabPageHero eyebrow="MISSION LOG · 日志模块" title="研究日志" text="研究日志承接每天新增的资料、判断、实验和阶段性结论。它不是普通博客，而是前沿情报、飞行器任务、工具库、开源数据和个人项目之间的工作记录。" image={labImages.control} stats={[{label:'归属栏目', value:'我的项目'}, {label:'模式', value:'每日维护'}, {label:'状态', value:'进行中'}]} />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>日志类型</span><h2>日志入口</h2></div><p>具体文章仍用 Docusaurus Blog 维护，入口页负责统一视觉和信息架构。</p></div>
        <div className="lab-cinema-grid">{logTypes.map((item, i) => <article className={`lab-cinema-card ${i===0?'wide':''}`} key={item.title}><img src={item.image} alt={item.cn}/><div><span>{item.tag}</span><h3>{item.cn}</h3><p>{item.desc}</p><footer><em>{item.title}</em></footer></div></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>最近更新</span><h2>更新队列</h2></div><p>这里展示维护节奏，完整文章进入博客系统。</p></div>
        <div className="lab-feature-list">{latestUpdates.map((item, i) => <article className="lab-feature-row" key={item.title}><img src={[labImages.hero, labImages.orbit, labImages.control, labImages.data][i % 4]} alt={item.title}/><div><span>{item.type}</span><h3>{item.title}</h3><p>后续可扩展为正式日志文章、知识条目或复现实验记录。</p></div><strong>{item.date}</strong></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-overlay-panel"><img src={labImages.orbit} alt="研究日志归档"/><div><span>归档系统</span><h3>过程与结论分开。</h3><p>每天维护时，先写日志；成熟内容再转入知识图谱、飞行器任务、工具库、开源与数据或个人项目。</p><p><Link to="/blog">打开博客归档 ↗</Link></p></div></div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>任务关联</span><h2>关联任务</h2></div><p>每条日志最好能指向一个研究域、任务对象或工具链。</p></div>
        <div className="lab-table-grid">{missionDossiers.map(m => <article key={m.title}><span>{m.phase}</span><h3>{m.cn}</h3><p>{m.desc}</p><footer>{m.tags.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>研究流转</span><h2>沉淀方向</h2></div><p>同一条材料不要重复维护，而是根据成熟度流转。</p></div>
        <div className="lab-table-grid">{featuredProjects.map(p => <article key={p.title}><span>{p.title}</span><h3>{p.cn}</h3><p>{p.desc}</p><footer>{p.tags.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
