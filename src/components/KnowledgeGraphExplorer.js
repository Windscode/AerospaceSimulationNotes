import React, {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import StatusPill from './StatusPill';

function InlineList({items = []}) {
  return <div className="lab-inline-list">{items.map(item => <em key={item}>{item}</em>)}</div>;
}

function MiniSteps({items = []}) {
  return <ol className="lab-step-list lab-step-list--compact">{items.map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, '0')}</b><span>{item}</span></li>)}</ol>;
}

export default function KnowledgeGraphExplorer({domains = [], objects = [], edges = []}) {
  const [activeObjectId, setActiveObjectId] = useState(objects[0]?.id);
  const [activeDomainId, setActiveDomainId] = useState(null);
  const activeObject = useMemo(() => objects.find(item => item.id === activeObjectId) || objects[0], [objects, activeObjectId]);
  const activeDomains = useMemo(() => {
    const ids = new Set(activeObject?.relatedDomains || []);
    return domains.filter(domain => ids.has(domain.id));
  }, [domains, activeObject]);
  const activeDomain = useMemo(() => activeDomains.find(domain => domain.id === activeDomainId) || activeDomains[0], [activeDomains, activeDomainId]);
  const activeEdges = useMemo(() => edges.filter(edge => activeObject?.title && edge.from.includes(activeObject.title.replace(' / 着陆器', '').replace('飞行器', ''))), [edges, activeObject]);

  if (!objects.length || !domains.length) return null;

  return <section className="lab-graph-explorer lab-graph-explorer--deep">
    <div className="lab-graph-head"><span>INTERACTIVE KNOWLEDGE GRAPH · 交互图谱</span><h2>从对象进入理论，再落到实验。</h2><p>选择一个航天对象，查看它关联的子系统、理论域、工具链、第一步实验、输入输出和验证门槛。知识图谱不能只是关系图，必须能指导下一步怎么做。</p></div>
    <div className="lab-graph-layout">
      <aside className="lab-graph-objects">
        {objects.map((item, index) => <button key={item.id} type="button" className={item.id === activeObject?.id ? 'active' : ''} onClick={() => { setActiveObjectId(item.id); setActiveDomainId(null); }} onMouseEnter={() => { setActiveObjectId(item.id); setActiveDomainId(null); }}>
          <em>{String(index + 1).padStart(2, '0')}</em><strong>{item.title}</strong><span>{item.modules.slice(0, 3).join(' / ')}</span>
        </button>)}
      </aside>
      <div className="lab-graph-map">
        <div className="lab-graph-center"><span>OBJECT</span><strong>{activeObject?.title}</strong><p>{activeObject?.modules.join(' · ')}</p></div>
        {activeDomains.map((domain, index) => <button type="button" onClick={() => setActiveDomainId(domain.id)} onMouseEnter={() => setActiveDomainId(domain.id)} className={`lab-graph-domain domain-${index + 1} ${activeDomain?.id === domain.id ? 'active' : ''}`} key={domain.id}>
          <StatusPill value={domain.maturity}/><strong>{domain.title}</strong><p>{domain.summary}</p><footer>{domain.tools.slice(0, 3).map(tool => <em key={tool}>{tool}</em>)}</footer>
        </button>)}
      </div>
      <aside className="lab-graph-brief lab-graph-brief--deep">
        <span>当前对象</span>
        <h3>{activeObject?.title}</h3>
        <p>关联模块：{activeObject?.modules.join('、')}</p>
        <div className="lab-card-brief lab-card-brief--strong"><b>第一项实验</b><span>{activeObject?.firstExperiment}</span></div>
        <div className="lab-card-brief"><b>输出物</b><span>{activeObject?.output}</span></div>
        <div className="lab-graph-brief-list">
          {activeDomains.map(domain => <article key={domain.id} className={activeDomain?.id === domain.id ? 'active' : ''}><strong>{domain.title}</strong><p>{domain.dependsOn.join(' / ')}</p></article>)}
        </div>
        <footer>{activeEdges.length ? activeEdges.map(edge => <p key={`${edge.from}-${edge.to}`}>{edge.from} → {edge.to}：{edge.reason}</p>) : <p>当前对象的关系说明可继续在数据文件中补充。</p>}</footer>
      </aside>
    </div>
    {activeDomain && <div className="lab-graph-domain-panel">
      <article className="lab-graph-domain-main">
        <span>ACTIVE DOMAIN</span>
        <h3>{activeDomain.title}</h3>
        <p>{activeDomain.summary}</p>
        <div className="lab-card-brief lab-card-brief--strong"><b>第一步任务</b><span>{activeDomain.firstTask}</span></div>
        <Link to={activeDomain.docs}>进入相关笔记 ↗</Link>
      </article>
      <article><span>输入</span><InlineList items={activeDomain.inputs}/></article>
      <article><span>输出</span><InlineList items={activeDomain.outputs}/></article>
      <article><span>验证</span><MiniSteps items={activeDomain.validation}/></article>
      <article><span>坑点</span><InlineList items={activeDomain.pitfalls}/></article>
      <article><span>关联对象</span><InlineList items={activeDomain.relatedVehicles}/></article>
    </div>}
  </section>;
}
