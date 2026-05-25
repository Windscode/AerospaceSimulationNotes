import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { projects, missionDossiers, visualAssets } from '../../data/siteContent';

const domains = ['全部', ...Array.from(new Set(projects.map(p => p.domain)))];

export default function RadarPage() {
  const [domain, setDomain] = useState('全部');
  const [q, setQ] = useState('');
  const result = useMemo(() => projects.filter(p => (domain === '全部' || p.domain === domain) && JSON.stringify(p).toLowerCase().includes(q.toLowerCase())), [domain, q]);

  return <Layout title="项目雷达" description="航天仿真开源项目评估与复现状态">
    <main className="asn-page">
      <section className="asn-hero asn-hero--compact">
        <img className="asn-hero__image" src={useBaseUrl(visualAssets.radar)} alt="项目雷达视觉图"/>
        <div className="container asn-hero__content">
          <div>
            <div className="asn-badge">PROJECT RADAR</div>
            <h1>开源项目要能进入任务链路，才值得长期跟踪。</h1>
            <p>项目雷达按领域、语言、许可证、成熟度、复现状态和工程价值筛选，避免把网站做成低质量收藏夹。</p>
          </div>
          <div className="asn-command-panel">
            <h3>雷达指标</h3>
            <div className="asn-metric"><span>A 级项目</span><strong>{projects.filter(p=>p.rating==='A').length}</strong></div>
            <div className="asn-metric"><span>领域</span><strong>{domains.length-1}</strong></div>
            <div className="asn-metric"><span>任务档案</span><strong>{missionDossiers.length}</strong></div>
          </div>
        </div>
      </section>

      <section className="asn-section container">
        <div className="asn-section-head"><span>Mission Fit</span><h2>先看项目能支撑哪个任务档案</h2><p>一个仓库只有能进入轨道传播、GNC 闭环、CFD 建库、遥测显示或任务回放，才值得继续复现。</p></div>
        <div className="asn-dossier-list">
          {missionDossiers.map(item => <article className="asn-dossier-card" key={item.title}><img src={useBaseUrl(item.image)} alt={item.title}/><div><span>{item.type}</span><h3>{item.title}</h3><p>{item.desc}</p><footer>{item.metrics.map(m => <em key={m}>{m}</em>)}</footer></div></article>)}
        </div>
      </section>

      <section className="asn-section container">
        <div className="asn-section-head"><span>Project Matrix</span><h2>项目评估矩阵</h2><p>这里暂时不追求条目数量，先把每个 A 级项目的用途、复现状态和工程价值写清楚。</p></div>
        <div className="asn-filter asn-filter--console"><input className="asn-search" value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索项目、语言、许可证、价值判断" />{domains.map(c => <button key={c} className={c===domain?'active':''} onClick={()=>setDomain(c)}>{c}</button>)}</div>
        <div className="asn-grid asn-grid--2">{result.map(p => <a className="asn-card asn-data-card asn-data-card--rich" href={p.url} target="_blank" rel="noreferrer" key={p.name}><div className="asn-data-card__top"><div><div className="asn-kicker">{p.domain}</div><h3>{p.name}</h3><div className="asn-data-card__meta">{p.language} · {p.license} · {p.maturity}</div></div><span className="asn-priority">{p.rating}</span></div><p>{p.value}</p><div className="asn-tags"><span className="asn-tag">{p.reproduction}</span></div></a>)}</div>
      </section>
    </main>
  </Layout>;
}