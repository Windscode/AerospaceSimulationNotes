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

export default function DataPage(){
  return <Layout title="公开数据" description="航天仿真公开数据、资料来源与参数推断方法">
    <AeroLabFrame active="DATA">
      <LabPageHero eyebrow="DATA ARCHIVE" title="DATA & METHODS" text="公开数据、任务资料、论文图表、开源项目和新闻线索并不是直接可用的真值。这里用于记录来源、可信度、适用范围和参数推断方法。" image={labImages.data} stats={[{label:'DATA MODE', value:'OPEN'}, {label:'TRACEABILITY', value:'REQUIRED'}, {label:'UNCERTAINTY', value:'EXPLICIT'}]} />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>DATA SOURCES</span><h2>公开数据来源必须可追溯。</h2></div><p>网站每天维护时，新增数据源先标注出处、时间、可信度、适用对象和不可用边界。</p></div>
        <div className="lab-table-grid">{dataSources.map(item => <article key={item.name}><span>{item.type}</span><h3>{item.name}</h3><p>{item.desc}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>INFERENCE METHODS</span><h2>数据不足时，用方法而不是幻想补齐。</h2></div><p>可以反推和估计，但必须把事实、假设和误差范围说清楚。</p></div>
        <div className="lab-table-grid">{methodCards.map(item => <article key={item.title}><span>{item.meta}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
