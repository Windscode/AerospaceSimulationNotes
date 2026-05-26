import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import { labImages, researchDomains, methodCards, missionDossiers } from '../../data/aerolabContent';

const knowledgeTracks = [
  { title: '轨道与任务分析', en: 'ORBIT & MISSION', href: '/docs/tools/orbit-and-mission-analysis', image: labImages.orbit, desc: '轨道传播、转移、覆盖、通信窗口、任务规划和多工具验证。' },
  { title: '工程软件与工具链', en: 'TOOLCHAIN', href: '/tools', image: labImages.control, desc: 'STK、GMAT、Orekit、Tudat、Basilisk、CFD、Open MCT 等工具的任务链路。' },
  { title: '公开数据与参数推断', en: 'DATA METHODS', href: '/data', image: labImages.data, desc: '公开资料、论文曲线、TLE、发射新闻和工程估计的可追溯方法。' },
  { title: '任务案例与复现实验', en: 'MISSION LAB', href: '/missions', image: labImages.hero, desc: '把火箭、星座、月球、再入任务连接到工具链、数据和验证结果。' },
];

export default function KnowledgePage(){
  return <Layout title="知识库" description="航天仿真研究知识库入口">
    <AeroLabFrame active="KNOWLEDGE">
      <LabPageHero eyebrow="KNOWLEDGE BASE · 知识库" title="研究知识库" text="知识库不是普通文档目录，而是把航天仿真理论、工程软件、任务案例、开源项目、公开数据和复现实验组织成长期可维护的研究资产。" image={labImages.orbit} stats={[{label:'模式', value:'精选整理'}, {label:'入口', value:'研究轨道'}, {label:'输出', value:'笔记'}]} />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>知识轨道</span><h2>先用视觉入口组织知识，再进入文档细节。</h2></div><p>这能避免网站看起来像默认 Docusaurus 文档站，同时保留 Markdown/MDX 的可维护性。</p></div>
        <div className="lab-cinema-grid">{knowledgeTracks.map((track, i) => <Link className={`lab-cinema-card ${i===0?'wide':''}`} to={track.href} key={track.title}><img src={track.image} alt={track.title}/><div><span>{track.en}</span><h3>{track.title}</h3><p>{track.desc}</p><footer><em>进入专题</em></footer></div></Link>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>研究领域</span><h2>稳定知识按研究域沉淀。</h2></div><p>每天新增资料先进入情报流，经过判断后再归档到这些研究域。</p></div>
        <div className="lab-status-grid">{researchDomains.map((d, i) => <article key={d.name}><span>领域 {String(i+1).padStart(2,'0')}</span><strong>{d.name}</strong><p>{d.text}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-overlay-panel"><img src={labImages.control} alt="知识库控制台"/><div><span>可维护知识库</span><h3>页面设计要高级，但维护方式必须简单。</h3><p>视觉入口负责品牌感和导航体验；具体知识仍然用 Markdown/MDX 管理。这样以后你每天新增研究笔记、工具条目、项目评估和实验记录时，不会破坏页面结构。</p></div></div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>任务关联</span><h2>知识最终要回到任务案例。</h2></div><p>工具、数据、理论和项目都要能服务某个仿真任务。</p></div>
        <div className="lab-table-grid">{missionDossiers.map(m => <article key={m.title}><span>{m.phase}</span><h3>{m.cn}</h3><p>{m.desc}</p><footer>{m.tags.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>方法索引</span><h2>方法库入口</h2></div><p>公开数据不足时，方法比堆资料更重要。</p></div>
        <div className="lab-table-grid">{methodCards.map(item => <article key={item.title}><span>{item.meta}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
