import React from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import { labImages, methodCards } from '../../data/aerolabContent';

const dataSources = [
  { name: 'NASA / JPL', type: 'Mission & Ephemeris', desc: '任务页面、技术报告、SPICE / Horizons / 图像资料，可用于任务背景、星历和验证参考。' },
  { name: 'ESA / JAXA / CNES', type: 'Agency Data', desc: '航天机构公开任务资料、报告、图像和工程背景，用于交叉验证与资料补充。' },
  { name: 'TLE / Space-Track / CelesTrak', type: 'Orbit Data', desc: '近地目标轨道数据，用于星座覆盖、轨道传播和历史任务复盘。' },
  { name: 'GitHub / Open Source', type: 'Software Evidence', desc: '项目源码、示例、issue、release 和文档，可作为复现实验入口。' },
  { name: 'Papers / Reports', type: 'Research Evidence', desc: '论文曲线、误差指标、模型假设和参数范围，可转为验证门限。' },
  { name: 'News / Launch Updates', type: 'Public Clues', desc: '发射时间、轨道描述、载荷类型和任务阶段，可用于反推初始条件，但必须标注不确定性。' },
];

const dataVisuals = [
  { title: 'Earth Observation Archive', cn: '地球观测资料库', image: labImages.data, tag: 'OPEN DATA', desc: '把任务页面、遥感资料、星历、公开报告和图像资料整理成可追溯的研究入口。' },
  { title: 'Orbit Evidence Chain', cn: '轨道证据链', image: labImages.orbit, tag: 'TLE / EPHEMERIS', desc: '从 TLE、星历、发射时间和任务报道推断轨道条件，并记录误差来源。' },
  { title: 'Mission Control Logs', cn: '任务控制记录', image: labImages.control, tag: 'REPORT / TELEMETRY', desc: '把论文、报告、开源仓库和运行日志变成复现实验可以引用的证据。' },
];

export default function DataPage(){
  return <Layout title="公开数据" description="航天仿真公开数据、资料来源与参数推断方法">
    <AeroLabFrame active="DATA">
      <LabPageHero eyebrow="DATA ARCHIVE" title="DATA & METHODS" text="公开数据、任务资料、论文图表、开源项目和新闻线索并不是直接可用的真值。这里用于记录来源、可信度、适用范围和参数推断方法。" image={labImages.data} stats={[{label:'DATA MODE', value:'OPEN'}, {label:'TRACEABILITY', value:'REQUIRED'}, {label:'UNCERTAINTY', value:'EXPLICIT'}]} />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>DATA VISUAL SYSTEM</span><h2>数据页也必须像任务控制台，而不是资料清单。</h2></div><p>先用大图建立数据场景，再用来源、方法和置信度支撑研究可信度。</p></div>
        <div className="lab-cinema-grid">{dataVisuals.map((item, i) => <article className={`lab-cinema-card ${i===0?'wide':''}`} key={item.title}><img src={item.image} alt={item.cn}/><div><span>{item.tag}</span><h3>{item.cn}</h3><p>{item.desc}</p><footer><em>{item.title}</em></footer></div></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>DATA SOURCES</span><h2>公开数据来源必须可追溯。</h2></div><p>网站每天维护时，新增数据源先标注出处、时间、可信度、适用对象和不可用边界。</p></div>
        <div className="lab-status-grid">{dataSources.map((item, i) => <article key={item.name}><span>{String(i+1).padStart(2,'0')} · {item.type}</span><strong>{item.name}</strong><p>{item.desc}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-overlay-panel"><img src={labImages.orbit} alt="轨道与数据推断"/><div><span>INFERENCE METHODS</span><h3>数据不足时，用方法而不是幻想补齐。</h3><p>可以反推和估计，但必须把事实、假设和误差范围说清楚。这个页面的设计目标是把“公开数据 → 参数估计 → 复现实验 → 验证结论”的链路做得清晰、专业、可维护。</p></div></div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>METHOD CARDS</span><h2>参数推断方法</h2></div><p>每个方法后续都可以独立扩展成一篇说明或实验日志。</p></div>
        <div className="lab-table-grid">{methodCards.map(item => <article key={item.title}><span>{item.meta}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}