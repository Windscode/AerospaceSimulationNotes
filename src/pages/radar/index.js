import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import AeroLabFrame, { LabPageHero } from '../../components/AeroLabFrame';
import { labImages, featuredProjects, missionDossiers } from '../../data/aerolabContent';
import { projects } from '../../data/siteContent';

const domains = ['全部', ...Array.from(new Set(projects.map(p => p.domain)))];

export default function RadarPage() {
  const [domain, setDomain] = useState('全部');
  const [q, setQ] = useState('');
  const result = useMemo(() => projects.filter(p => (domain === '全部' || p.domain === domain) && JSON.stringify(p).toLowerCase().includes(q.toLowerCase())), [domain, q]);
  return <Layout title="项目雷达" description="航天仿真开源项目评估与复现状态">
    <AeroLabFrame active="PROJECTS">
      <LabPageHero eyebrow="OPEN SOURCE RADAR · 开源项目侦察" title="项目雷达" text="不再把 GitHub 仓库当收藏夹。项目必须被放进任务链路，判断成熟度、许可证、复现难度、工程价值和下一步动作。" image={labImages.orbit} stats={[{label:'A 级项目', value:String(projects.filter(p=>p.rating==='A').length)}, {label:'领域数量', value:String(domains.length - 1)}, {label:'当前状态', value:'筛选中'}]} />
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>项目侦察界面</span><h2>项目雷达应该像一套任务侦察界面。</h2></div><p>先用高质量视觉和任务适配解释为什么跟踪这些项目，再把详细矩阵留给后续维护。</p></div>
        <div className="lab-cinema-grid">
          {[...featuredProjects.slice(0,2), ...missionDossiers.slice(0,2)].map((p, i) => <article className={`lab-cinema-card ${i===0?'wide':''}`} key={p.title}><img src={p.image} alt={p.cn}/><div><span>{p.title}</span><h3>{p.cn}</h3><p>{p.desc}</p><footer>{(p.tags || []).map(t => <em key={t}>{t}</em>)}</footer></div></article>)}
        </div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>任务适配</span><h2>项目先服务任务，再进入复现。</h2></div><p>开源项目只有能支撑轨道传播、GNC 闭环、CFD 建库、遥测显示或任务回放，才值得长期跟踪。</p></div>
        <div className="lab-status-grid">{missionDossiers.map((m, i) => <article key={m.title}><span>适配 {String(i+1).padStart(2,'0')}</span><strong>{m.phase}</strong><p>{m.cn}</p><p>{m.tools.join(' / ')}</p></article>)}</div>
      </section>
      <section className="lab-page-section">
        <div className="lab-overlay-panel"><img src={labImages.data} alt="开源项目评估"/><div><span>评估矩阵</span><h3>不是收藏项目，而是评估它能否进入你的研究链路。</h3><p>每个开源项目都要回答：能解决什么仿真问题，是否能复现，许可证是否清楚，是否值得作为工具链基准，是否能支撑某个任务案例。</p></div></div>
      </section>
      <section className="lab-page-section">
        <div className="lab-page-head"><div><span>项目矩阵</span><h2>开源项目评估矩阵</h2></div><p>这里不追求条目数量，先把项目用途、复现状态和工程价值写清楚。</p></div>
        <div className="lab-filter-row"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索项目、语言、许可证、价值判断" />{domains.map(c => <button key={c} className={c===domain?'active':''} onClick={()=>setDomain(c)}>{c}</button>)}</div>
        <div className="lab-table-grid">{result.map(p => <article key={p.name}><span>{p.domain}</span><h3>{p.name}</h3><p>{p.language} · {p.license} · {p.maturity}</p><p>{p.value}</p><footer><em>{p.rating}</em><em>{p.reproduction}</em></footer></article>)}</div>
      </section>
    </AeroLabFrame>
  </Layout>;
}
