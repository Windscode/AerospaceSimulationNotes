import React from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import { labImages, missionDossiers, methodCards } from '../../data/aerolabContent';

const vehicleTypes = [
  { title: '运载火箭', desc: '入轨、级间分离、发动机、气动、飞行程序和轨迹优化。' },
  { title: '卫星与星座', desc: '轨道面、覆盖、通信窗口、姿态控制、载荷和任务规划。' },
  { title: '空间站与飞船', desc: '交会对接、姿态保持、推进补加、热控、电源和载人任务流程。' },
  { title: '探测器与着陆器', desc: '深空转移、制动、下降制导、着陆约束和任务剖面。' },
];

export default function MissionsPage(){
  return <Layout title="飞行器与任务" description="航天飞行器、火箭、卫星、空间站和任务仿真方法">
    <AeroLabFrame active="VEHICLES">
      <LabPageHero eyebrow="VEHICLES & MISSIONS · 飞行器与任务" title="飞行器与任务" text="围绕真实航天对象组织资料：火箭、卫星、空间站、探测器、飞船和再入飞行器。每个对象都要逐步关联公开参数、图片、子系统、仿真方法、工具链和可复现实验。" image={labImages.hero} stats={[{label:'对象类型', value:'火箭 / 卫星'}, {label:'数据模式', value:'公开 + 估计'}, {label:'仿真链路', value:'任务驱动'}]} />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>对象分类</span><h2>航天对象库</h2></div><p>先按真实飞行器和任务对象组织内容，再挂接工具、数据和理论。</p></div>
        <div className="lab-status-grid">{vehicleTypes.map((item, i) => <article key={item.title}><span>对象 {String(i+1).padStart(2,'0')}</span><strong>{item.title}</strong><p>{item.desc}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>任务档案</span><h2>任务案例</h2></div><p>每个任务档案都要回答：研究对象是什么，数据从哪里来，参数如何估计，工具怎么验证，结果如何复现。</p></div>
        <div className="lab-mission-grid">{missionDossiers.map((m, i) => <article key={m.title} className={i === 0 ? 'featured' : ''}><img src={m.image} alt={m.cn}/><div><span>{m.phase}</span><h3>{m.cn}</h3><h4>{m.title}</h4><p>{m.desc}</p><footer>{m.tags.map(t => <em key={t}>{t}</em>)}</footer></div></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>数据与工具链</span><h2>任务证据链</h2></div><p>任务案例不能只展示图片，必须绑定公开数据、工程假设、软件工具和验证结果。</p></div>
        <div className="lab-table-grid">{missionDossiers.map(m => <article key={m.title}><span>{m.phase}</span><h3>{m.cn}</h3><p><b>数据：</b>{m.data.join(' / ')}</p><p><b>工具：</b>{m.tools.join(' / ')}</p><footer>{m.tags.map(t => <em key={t}>{t}</em>)}</footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>参数推断</span><h2>估计方法</h2></div><p>公开资料不完整时，必须清楚说明从事实到仿真参数的推断路径。</p></div>
        <div className="lab-table-grid">{methodCards.map(m => <article key={m.title}><span>{m.meta}</span><h3>{m.title}</h3><p>{m.text}</p></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
