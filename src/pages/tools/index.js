import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { tools, toolCategories, visualAssets } from '../../data/siteContent';

export default function ToolsPage() {
  const [cat, setCat] = useState('全部');
  const [q, setQ] = useState('');
  const result = useMemo(() => tools.filter(t => (cat === '全部' || t.category === cat) && JSON.stringify(t).toLowerCase().includes(q.toLowerCase())), [cat, q]);
  return <Layout title="工程软件栈" description="航天仿真工程软件矩阵与工具评估">
    <main className="asn-page">
      <section className="asn-hero"><img className="asn-hero__image" src={useBaseUrl(visualAssets.tools)} alt="工程软件生态地图"/><div className="container asn-hero__content"><div><div className="asn-badge">工程软件栈</div><h1>把工具放进工作流，而不是只列软件名。</h1><p>覆盖 MATLAB / Simulink、Ansys STK / ODTK / ModelCenter、Fluent、GMAT、Orekit、Tudat、Basilisk、OpenFOAM、SU2、OpenVSP、RocketCEA、Open MCT、Cesium 和 Unreal Engine。</p></div><div className="asn-command-panel"><h3>筛选维度</h3><div className="asn-metric"><span>类别</span><strong>{toolCategories.length - 1}</strong></div><div className="asn-metric"><span>工具条目</span><strong>{tools.length}</strong></div><div className="asn-metric"><span>优先级</span><strong>A / B</strong></div></div></div></section>
      <section className="asn-section container"><div className="asn-filter"><input className="asn-search" value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索工具、厂商、领域，例如 MATLAB、STK、CFD" />{toolCategories.map(c => <button key={c} className={c===cat?'active':''} onClick={()=>setCat(c)}>{c}</button>)}</div><div className="asn-grid asn-grid--3">{result.map(tool => <a className="asn-card asn-data-card" href={tool.url} target="_blank" rel="noreferrer" key={tool.name}><div className="asn-data-card__top"><div><div className="asn-kicker">{tool.category}</div><h3>{tool.name}</h3><div className="asn-data-card__meta">{tool.vendor} · {tool.type} · {tool.maturity}</div></div><span className="asn-priority">{tool.priority}</span></div><p>{tool.role}</p><div className="asn-tags">{tool.domains.map(d => <span className="asn-tag" key={d}>{d}</span>)}</div></a>)}</div></section>
    </main>
  </Layout>;
}
