import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { projects, visualAssets } from '../../data/siteContent';

const domains = ['全部', ...Array.from(new Set(projects.map(p => p.domain)))];
export default function RadarPage() {
  const [domain, setDomain] = useState('全部');
  const [q, setQ] = useState('');
  const result = useMemo(() => projects.filter(p => (domain === '全部' || p.domain === domain) && JSON.stringify(p).toLowerCase().includes(q.toLowerCase())), [domain, q]);
  return <Layout title="项目雷达" description="航天仿真开源项目评估与复现状态">
    <main className="asn-page">
      <section className="asn-hero"><img className="asn-hero__image" src={useBaseUrl(visualAssets.radar)} alt="项目雷达视觉图"/><div className="container asn-hero__content"><div><div className="asn-badge">项目雷达</div><h1>只收藏链接没有价值，真正重要的是判断和复现。</h1><p>每个项目至少记录领域、语言、许可证、成熟度、复现状态、工程价值和下一步动作。</p></div><div className="asn-command-panel"><h3>雷达指标</h3><div className="asn-metric"><span>A 级项目</span><strong>{projects.filter(p=>p.rating==='A').length}</strong></div><div className="asn-metric"><span>领域</span><strong>{domains.length-1}</strong></div><div className="asn-metric"><span>状态</span><strong>待复现 / 已验证</strong></div></div></div></section>
      <section className="asn-section container"><div className="asn-filter"><input className="asn-search" value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索项目、语言、许可证、价值判断" />{domains.map(c => <button key={c} className={c===domain?'active':''} onClick={()=>setDomain(c)}>{c}</button>)}</div><div className="asn-grid asn-grid--2">{result.map(p => <a className="asn-card asn-data-card" href={p.url} target="_blank" rel="noreferrer" key={p.name}><div className="asn-data-card__top"><div><div className="asn-kicker">{p.domain}</div><h3>{p.name}</h3><div className="asn-data-card__meta">{p.language} · {p.license} · {p.maturity}</div></div><span className="asn-priority">{p.rating}</span></div><p>{p.value}</p><div className="asn-tags"><span className="asn-tag">{p.reproduction}</span></div></a>)}</div></section>
    </main>
  </Layout>;
}
