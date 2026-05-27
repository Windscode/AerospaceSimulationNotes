import React, {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import StatusPill from './StatusPill';

export default function KnowledgeGraphExplorer({domains = [], objects = [], edges = []}) {
  const [activeObjectId, setActiveObjectId] = useState(objects[0]?.id);
  const activeObject = useMemo(() => objects.find(item => item.id === activeObjectId) || objects[0], [objects, activeObjectId]);
  const activeDomains = useMemo(() => {
    const ids = new Set(activeObject?.relatedDomains || []);
    return domains.filter(domain => ids.has(domain.id));
  }, [domains, activeObject]);
  const activeEdges = useMemo(() => edges.filter(edge => activeObject?.title && edge.from.includes(activeObject.title.replace(' / 着陆器', '').replace('飞行器', ''))), [edges, activeObject]);

  if (!objects.length || !domains.length) return null;

  return <section className="lab-graph-explorer">
    <div className="lab-graph-head"><span>INTERACTIVE KNOWLEDGE GRAPH · 交互图谱</span><h2>对象驱动的知识关系</h2><p>选择一个航天对象，查看它关联的子系统、理论域、工具链和验证方法。后续新增对象或理论域，只需要维护数据文件。</p></div>
    <div className="lab-graph-layout">
      <aside className="lab-graph-objects">
        {objects.map((item, index) => <button key={item.id} type="button" className={item.id === activeObject?.id ? 'active' : ''} onClick={() => setActiveObjectId(item.id)} onMouseEnter={() => setActiveObjectId(item.id)}>
          <em>{String(index + 1).padStart(2, '0')}</em><strong>{item.title}</strong><span>{item.modules.slice(0, 3).join(' / ')}</span>
        </button>)}
      </aside>
      <div className="lab-graph-map">
        <div className="lab-graph-center"><span>OBJECT</span><strong>{activeObject?.title}</strong><p>{activeObject?.modules.join(' · ')}</p></div>
        {activeDomains.map((domain, index) => <Link to={domain.docs} className={`lab-graph-domain domain-${index + 1}`} key={domain.id}>
          <StatusPill value={domain.maturity}/><strong>{domain.title}</strong><p>{domain.summary}</p><footer>{domain.tools.slice(0, 3).map(tool => <em key={tool}>{tool}</em>)}</footer>
        </Link>)}
      </div>
      <aside className="lab-graph-brief">
        <span>当前对象</span>
        <h3>{activeObject?.title}</h3>
        <p>关联模块：{activeObject?.modules.join('、')}</p>
        <div className="lab-graph-brief-list">
          {activeDomains.map(domain => <article key={domain.id}><strong>{domain.title}</strong><p>{domain.dependsOn.join(' / ')}</p></article>)}
        </div>
        <footer>{activeEdges.length ? activeEdges.map(edge => <p key={`${edge.from}-${edge.to}`}>{edge.from} → {edge.to}：{edge.reason}</p>) : <p>当前对象的关系说明可继续在数据文件中补充。</p>}</footer>
      </aside>
    </div>
  </section>;
}
