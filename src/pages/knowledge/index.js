import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import OrbitalResearchConsole from '../../components/OrbitalResearchConsole';
import { labImages, researchDomains, methodCards, missionDossiers } from '../../data/aerolabContent';

const knowledgeTracks = [
  { title: '轨道力学', en: 'ORBITAL MECHANICS', href: '/docs/tools/orbit-and-mission-analysis', image: labImages.orbit, desc: '轨道传播、摄动、转移、覆盖、通信窗口和任务规划。' },
  { title: '姿态 / GNC', en: 'GNC & ADCS', href: '/docs/intro', image: labImages.control, desc: '姿态动力学、制导、导航、控制、传感器、执行机构和闭环验证。' },
  { title: '推进 / 气动 / 热', en: 'PROPULSION & AERO', href: '/docs/tools/cfd-and-aero', image: labImages.data, desc: '发动机、质量流率、外形建模、气动数据库、CFD 和再入热环境。' },
  { title: '仿真验证', en: 'V&V', href: '/reproduction-lab', image: labImages.hero, desc: '模型假设、误差来源、验证门限、对照工具和复现实验。' },
];

const graphNodes = [
  { title: '运载火箭', desc: '总体、推进、气动、结构、制导、弹道、级间分离。' },
  { title: '卫星', desc: '轨道、姿态、电源、热控、通信、载荷、星务计算机。' },
  { title: '空间站', desc: '交会对接、姿态保持、载人支持、热控、电源和任务运行。' },
  { title: '探测器', desc: '深空转移、导航、推进、通信、着陆和任务规划。' },
];

export default function KnowledgePage(){
  return <Layout title="知识图谱" description="航天仿真理论知识、模块关系和系统学习入口">
    <AeroLabFrame active="GRAPH">
      <LabPageHero eyebrow="KNOWLEDGE GRAPH · 知识图谱" title="知识图谱" text="系统介绍航天仿真相关理论基础，并把火箭、卫星、空间站、探测器等对象与轨道、姿态、推进、气动、热控、结构、通信和验证方法关联起来。" image={labImages.orbit} stats={[{label:'学习方式', value:'图谱化'}, {label:'对象', value:'火箭 / 卫星'}, {label:'输出', value:'理论笔记'}]} />
      <OrbitalResearchConsole compact />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>理论入口</span><h2>知识模块</h2></div><p>从航天对象和仿真问题进入理论，而不是只按教材章节堆目录。</p></div>
        <div className="lab-cinema-grid">{knowledgeTracks.map((track, i) => <Link className={`lab-cinema-card ${i===0?'wide':''}`} to={track.href} key={track.title}><img src={track.image} alt={track.title}/><div><span>{track.en}</span><h3>{track.title}</h3><p>{track.desc}</p><footer><em>进入专题</em></footer></div></Link>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>对象图谱</span><h2>飞行器知识关系</h2></div><p>后续可以扩展成交互式图谱：点击火箭、卫星、空间站，展开对应子系统和理论模块。</p></div>
        <div className="lab-status-grid">{graphNodes.map((d, i) => <article key={d.title}><span>对象 {String(i+1).padStart(2,'0')}</span><strong>{d.title}</strong><p>{d.desc}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>研究领域</span><h2>理论域</h2></div><p>稳定理论内容按研究域沉淀，前沿资料和项目资源不直接混进理论页。</p></div>
        <div className="lab-status-grid">{researchDomains.map((d, i) => <article key={d.name}><span>领域 {String(i+1).padStart(2,'0')}</span><strong>{d.name}</strong><p>{d.text}</p></article>)}</div>
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
