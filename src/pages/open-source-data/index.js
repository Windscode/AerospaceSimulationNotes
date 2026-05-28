import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import StatusPill from '../../components/StatusPill';
import DataEvidenceChain from '../../components/DataEvidenceChain';
import { ProjectDatabaseCard } from '../../components/DatabaseCards';
import { labImages, methodCards } from '../../data/aerolabContent';
import { openSourceProjects, datasets } from '../../data/openSource';

const resourceTypes = [
  { title: '开源项目', label: 'OPEN SOURCE', image: labImages.orbit, desc: '可直接学习或接入航天仿真的开源框架、库、示例和任务工具。', href: '/radar' },
  { title: '公开数据库', label: 'DATA ARCHIVE', image: labImages.data, desc: 'TLE、星历、任务页面、论文图表、机构资料和公开参数入口。', href: '/data' },
  { title: '飞行软件与遥测', label: 'FLIGHT SOFTWARE', image: labImages.control, desc: 'cFS、F Prime、Open MCT 等软件架构、遥测显示和任务控制参考。', href: '/tools' },
  { title: '参数推断方法', label: 'INFERENCE', image: labImages.space, desc: '公开数据不足时，记录如何估计、反推和标注不确定性。', href: '/data' },
];

const categories = ['全部', ...Array.from(new Set(openSourceProjects.map(p => p.category)))];

export default function OpenSourceDataPage(){
  const [cat, setCat] = useState('全部');
  const [q, setQ] = useState('');
  const result = useMemo(() => openSourceProjects.filter(p => (cat === '全部' || p.category === cat) && JSON.stringify(p).toLowerCase().includes(q.toLowerCase())), [cat, q]);
  return <Layout title="开源与数据" description="航天仿真开源项目、公开数据库和参数推断方法">
    <AeroLabFrame active="OPEN">
      <LabPageHero eyebrow="OPEN SOURCE & DATA · 开源与数据" title="开源与数据" text="把能直接学习、复用、接入或验证的开源项目、公开数据库和参数推断方法集中管理。重点不是收藏链接，而是判断能不能进入航天仿真研究链路。" image={labImages.data} stats={[{label:'开源项目', value:String(openSourceProjects.length)}, {label:'数据源', value:String(datasets.length)}, {label:'维护方式', value:'数据驱动'}]} />
      <DataEvidenceChain datasets={datasets}/>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>资源入口</span><h2>资源入口</h2></div><p>先按用途进入资源类型，再进入项目评估、数据方法或工具链详情。</p></div>
        <div className="lab-cinema-grid">{resourceTypes.map((item, i) => <Link to={item.href} className={`lab-cinema-card ${i === 0 ? 'wide' : ''}`} key={item.title}><img src={item.image} alt={item.title}/><div><span>{item.label}</span><h3>{item.title}</h3><p>{item.desc}</p><footer><em>进入模块</em></footer></div></Link>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>公开来源</span><h2>数据来源</h2></div><p>每个来源都要标注用途、可信度、更新频率和适用边界。</p></div>
        <div className="lab-status-grid">{datasets.map((s, i) => <article key={s.id}><div className="lab-card-status-row"><StatusPill label="可信度" value={s.confidence}/><StatusPill label="类型" value={s.type}/></div><span>{String(i + 1).padStart(2,'0')} · {s.organization}</span><strong>{s.title}</strong><p>{s.updateCycle} · {s.format}</p><p>{s.scenario}</p><p><b>限制：</b>{s.limitation}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>开源评估</span><h2>项目矩阵</h2></div><p>优先看许可证、活跃度、文档、示例质量、复现成本和工程价值；展开后判断它能不能接入实际仿真链路。</p></div>
        <div className="lab-filter-row"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索 Orekit / Basilisk / cFS / TLE" />{categories.map(c => <button key={c} className={c===cat?'active':''} onClick={()=>setCat(c)}>{c}</button>)}</div>
        <div className="lab-database-toolbar"><strong>{result.length}</strong><span>个匹配项目</span><p>不是收藏项目，而是把项目放入学习、验证、任务回放或工程接口的位置。</p></div>
        <div className="lab-table-grid lab-database-grid">{result.map(p => <ProjectDatabaseCard key={p.id} project={p}/>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>参数推断</span><h2>方法卡片</h2></div><p>公开数据不完整时，必须清楚区分事实、估计和猜测。</p></div>
        <div className="lab-table-grid">{methodCards.map(m => <article key={m.title}><span>{m.meta}</span><h3>{m.title}</h3><p>{m.text}</p></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
