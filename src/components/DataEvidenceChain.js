import React, {useMemo, useState} from 'react';
import StatusPill from './StatusPill';

export default function DataEvidenceChain({datasets = []}) {
  const [activeId, setActiveId] = useState(datasets[0]?.id);
  const active = useMemo(() => datasets.find(item => item.id === activeId) || datasets[0], [datasets, activeId]);
  if (!datasets.length || !active) return null;

  const steps = [
    { label: 'SOURCE', title: '来源', value: active.organization },
    { label: 'FORMAT', title: '格式', value: active.format },
    { label: 'USE', title: '用途', value: active.scenario },
    { label: 'LIMIT', title: '限制', value: active.limitation },
    { label: 'EXAMPLE', title: '示例', value: active.exampleUse },
  ];

  return <section className="data-evidence-chain">
    <div className="data-evidence-head"><span>DATA EVIDENCE CHAIN · 数据证据链</span><h2>每个数据源都要有边界。</h2><p>公开数据不是越多越好，关键是能说明来源、格式、用途、限制和示例用法，避免把不可靠数据直接写进仿真结论。</p></div>
    <div className="data-evidence-layout">
      <aside className="data-evidence-list">
        {datasets.map((item, index) => <button key={item.id} type="button" className={item.id === active.id ? 'active' : ''} onClick={() => setActiveId(item.id)} onMouseEnter={() => setActiveId(item.id)}>
          <em>{String(index + 1).padStart(2, '0')} · {item.type}</em><strong>{item.title}</strong><span>{item.organization}</span>
        </button>)}
      </aside>
      <div className="data-evidence-flow">
        <div className="data-evidence-core"><span>DATASET</span><strong>{active.title}</strong><StatusPill label="可信度" value={active.confidence}/></div>
        {steps.map((step, index) => <article key={step.label} className={`data-evidence-step step-${index + 1}`}><em>{step.label}</em><h3>{step.title}</h3><p>{step.value}</p></article>)}
      </div>
      <aside className="data-evidence-brief">
        <div className="lab-card-status-row"><StatusPill label="可信度" value={active.confidence}/><StatusPill label="类型" value={active.type}/></div>
        <h3>{active.title}</h3>
        <p>{active.scenario}</p>
        <div><span>更新周期</span><strong>{active.updateCycle}</strong></div>
        <div><span>限制条件</span><strong>{active.limitation}</strong></div>
      </aside>
    </div>
  </section>;
}
