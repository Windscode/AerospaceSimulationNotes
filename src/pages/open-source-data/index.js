import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import { labImages, methodCards } from '../../data/aerolabContent';
import { projects } from '../../data/siteContent';

const resourceTypes = [
  { title: '开源项目', label: 'OPEN SOURCE', image: labImages.orbit, desc: '可直接学习或接入航天仿真的开源框架、库、示例和任务工具。', href: '/radar' },
  { title: '公开数据库', label: 'DATA ARCHIVE', image: labImages.data, desc: 'TLE、星历、任务页面、论文图表、机构资料和公开参数入口。', href: '/data' },
  { title: '飞行软件与遥测', label: 'FLIGHT SOFTWARE', image: labImages.control, desc: 'cFS、F Prime、Open MCT 等软件架构、遥测显示和任务控制参考。', href: '/tools' },
  { title: '参数推断方法', label: 'INFERENCE', image: labImages.space, desc: '公开数据不足时，记录如何估计、反推和标注不确定性。', href: '/data' },
];

const sources = [
  { name: 'CelesTrak / Space-Track', type: '轨道数据', desc: 'TLE、空间目标轨道数据和星座跟踪入口。' },
  { name: 'NASA / JPL / ESA / JAXA', type: '机构资料', desc: '任务页面、技术报告、星历、公开图像和工程资料。' },
  { name: 'GitHub / SourceForge', type: '开源项目', desc: '项目源码、示例、issue、release、许可证和复现线索。' },
  { name: '论文 / 技术报告', type: '研究资料', desc: '曲线、误差、模型假设、参数范围和验证门限。' },
];

const categories = ['全部', ...Array.from(new Set(projects.map(p => p.domain)))];

export default function OpenSourceDataPage(){
  const [cat, setCat] = useState('全部');
  const [q, setQ] = useState('');
  const result = useMemo(() => projects.filter(p => (cat === '全部' || p.domain === cat) && JSON.stringify(p).toLowerCase().includes(q.toLowerCase())), [cat, q]);
  return <Layout title="开源与数据" description="航天仿真开源项目、公开数据库和参数推断方法">
    <AeroLabFrame active="OPEN">
      <LabPageHero eyebrow="OPEN SOURCE & DATA · 开源与数据" title="开源与数据" text="把能直接学习、复用、接入或验证的开源项目、公开数据库和参数推断方法集中管理。重点不是收藏链接，而是判断能不能进入航天仿真研究链路。" image={labImages.data} stats={[{label:'资源类型', value:'项目 / 数据'}, {label:'判断重点', value:'可复用'}, {label:'使用方式', value:'先评估'}]} />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>资源入口</span><h2>能用的资源</h2></div><p>先按用途进入资源类型，再进入项目雷达、数据方法或工具链详情。</p></div>
        <div className="lab-cinema-grid">{resourceTypes.map((item, i) => <Link to={item.href} className={`lab-cinema-card ${i === 0 ? 'wide' : ''}`} key={item.title}><img src={item.image} alt={item.title}/><div><span>{item.label}</span><h3>{item.title}</h3><p>{item.desc}</p><footer><em>进入模块</em></footer></div></Link>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>公开来源</span><h2>数据来源</h2></div><p>每个来源都要标注用途、可信度、更新频率和适用边界。</p></div>
        <div className="lab-status-grid">{sources.map((s, i) => <article key={s.name}><span>{String(i + 1).padStart(2,'0')} · {s.type}</span><strong>{s.name}</strong><p>{s.desc}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>开源评估</span><h2>项目矩阵</h2></div><p>优先看许可证、活跃度、文档、示例质量、复现成本和工程价值。</p></div>
        <div className="lab-filter-row"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索 Orekit / Basilisk / cFS / TLE" />{categories.map(c => <button key={c} className={c===cat?'active':''} onClick={()=>setCat(c)}>{c}</button>)}</div>
        <div className="lab-table-grid">{result.map(p => <article key={p.name}><span>{p.domain}</span><h3>{p.name}</h3><p>{p.language} · {p.license} · {p.maturity}</p><p>{p.value}</p><footer><em>{p.rating}</em><em>{p.reproduction}</em></footer></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>参数推断</span><h2>方法卡片</h2></div><p>公开数据不完整时，必须清楚区分事实、估计和猜测。</p></div>
        <div className="lab-table-grid">{methodCards.map(m => <article key={m.title}><span>{m.meta}</span><h3>{m.title}</h3><p>{m.text}</p></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
