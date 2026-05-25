import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import { labImages, featuredProjects } from '../../data/aerolabContent';
import { projects } from '../../data/siteContent';

const domains = ['全部', ...Array.from(new Set(projects.map(p => p.domain)))];

export default function RadarPage() {
  const [domain, setDomain] = useState('全部');
  const [q, setQ] = useState('');
  const result = useMemo(() => projects.filter(p => (domain === '全部' || p.domain === domain) && JSON.stringify(p).toLowerCase().includes(q.toLowerCase())), [domain, q]);
  return <Layout title="项目雷达" description="航天仿真开源项目评估与复现状态">
    <AeroLabFrame active="PROJECTS">
      <LabPageHero eyebrow="OPEN SOURCE RADAR" title="PROJECT RADAR" text="不再把 GitHub 仓库当收藏夹。项目必须被放进任务链路，判断成熟度、许可证、复现难度、工程价值和下一步动作。" image={labImages.orbit} stats={[{label:'A-RATED', value:String(projects.filter(p=>p.rating==='A').length)}, {label:'DOMAINS', value:String(domains.length - 1)}, {label:'STATUS', value:'TRIAGE'}]} />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>MISSION FIT</span><h2>项目先服务任务，再进入复现。</h2></div><p>开源项目只有能支撑轨道传播、GNC 闭环、CFD 建库、遥测显示或任务回放，才值得长期跟踪。</p></div>
        <div className="lab-feature-list">{featuredProjects.map((p, i) => <article className="lab-feature-row" key={p.title}><img src={p.image} alt={p.title}/><div><span>{p.title}</span><h3>{p.cn}</h3><p>{p.desc}</p></div><strong>{String(i + 1).padStart(2,'0')}</strong></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>PROJECT MATRIX</span><h2>开源项目评估矩阵</h2></div><p>这里不追求条目数量，先把项目用途、复现状态和工程价值写清楚。</p></div>
        <div className="lab-filter-row"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索项目、语言、许可证、价值判断" />{domains.map(c => <button key={c} className={c===domain?'active':''} onClick={()=>setDomain(c)}>{c}</button>)}</div>
        <div className="lab-table-grid">{result.map(p => <article key={p.name}><span>{p.domain}</span><h3>{p.name}</h3><p>{p.language} · {p.license} · {p.maturity}</p><p>{p.value}</p><footer><em>{p.rating}</em><em>{p.reproduction}</em></footer></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
