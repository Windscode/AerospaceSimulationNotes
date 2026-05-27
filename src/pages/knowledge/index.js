import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import OrbitalResearchConsole from '../../components/OrbitalResearchConsole';
import { labImages, methodCards, missionDossiers } from '../../data/aerolabContent';
import { knowledgeDomains, knowledgeObjects, knowledgeEdges } from '../../data/knowledge';

export default function KnowledgePage(){
  return <Layout title="知识图谱" description="航天仿真理论知识、模块关系和系统学习入口">
    <AeroLabFrame active="GRAPH">
      <LabPageHero eyebrow="KNOWLEDGE GRAPH · 知识图谱" title="知识图谱" text="系统介绍航天仿真相关理论基础，并把火箭、卫星、空间站、探测器等对象与轨道、姿态、推进、气动、热控、结构、通信和验证方法关联起来。" image={labImages.orbit} stats={[{label:'理论域', value:String(knowledgeDomains.length)}, {label:'对象节点', value:String(knowledgeObjects.length)}, {label:'关系链', value:String(knowledgeEdges.length)}]} />
      <OrbitalResearchConsole compact />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>理论入口</span><h2>知识模块</h2></div><p>从航天对象和仿真问题进入理论，而不是只按教材章节堆目录。</p></div>
        <div className="lab-cinema-grid">{knowledgeDomains.slice(0,4).map((track, i) => <Link className={`lab-cinema-card ${i===0?'wide':''}`} to={track.docs} key={track.id}><img src={[labImages.orbit, labImages.control, labImages.data, labImages.hero][i % 4]} alt={track.title}/><div><span>{track.type}</span><h3>{track.title}</h3><p>{track.summary}</p><footer>{track.tools.slice(0,3).map(t => <em key={t}>{t}</em>)}</footer></div></Link>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>对象图谱</span><h2>对象节点</h2></div><p>点击式交互后续继续增强；当前先保证对象、子系统、理论域和工具链都能维护。</p></div>
        <div className="lab-status-grid">{knowledgeObjects.map((d, i) => <article key={d.id}><span>对象 {String(i+1).padStart(2,'0')}</span><strong>{d.title}</strong><p>{d.modules.join('、')}</p><footer>{d.relatedDomains.map(domain => <em key={domain}>{domain}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>关系链</span><h2>知识连接</h2></div><p>知识图谱的价值在于说明“为什么这个理论和这个任务对象有关”。</p></div>
        <div className="lab-table-grid lab-graph-edge-grid">{knowledgeEdges.map((edge, i) => <article key={`${edge.from}-${edge.to}`}><span>EDGE {String(i+1).padStart(2,'0')}</span><h3>{edge.from} → {edge.to}</h3><p>{edge.reason}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>研究领域</span><h2>理论域</h2></div><p>稳定理论内容按研究域沉淀，前沿资料和项目资源不直接混进理论页。</p></div>
        <div className="lab-status-grid">{knowledgeDomains.map((d, i) => <article key={d.id}><span>领域 {String(i+1).padStart(2,'0')} · {d.maturity}</span><strong>{d.title}</strong><p>{d.summary}</p><p><b>前置：</b>{d.dependsOn.join(' / ')}</p><footer>{d.tools.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-overlay-panel"><img src={labImages.control} alt="知识图谱控制台"/><div><span>可维护知识体系</span><h3>图谱入口，文档沉淀。</h3><p>视觉入口负责理解结构；具体理论笔记仍然用 Markdown/MDX 管理。这样可以长期扩充，不会让页面变成杂乱资料墙。</p></div></div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>任务关联</span><h2>理论落点</h2></div><p>理论最终要能解释某个飞行器、任务案例或仿真实验。</p></div>
        <div className="lab-table-grid">{missionDossiers.map(m => <article key={m.title}><span>{m.phase}</span><h3>{m.cn}</h3><p>{m.desc}</p><footer>{m.tags.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>方法索引</span><h2>推断方法</h2></div><p>公开数据不足时，方法和假设边界比堆资料更重要。</p></div>
        <div className="lab-table-grid">{methodCards.map(item => <article key={item.title}><span>{item.meta}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
