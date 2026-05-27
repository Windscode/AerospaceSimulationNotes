import React, {useMemo, useState} from 'react';
import StatusPill from './StatusPill';

const lanes = [
  { key: 'inputs', title: '输入', label: 'INPUT' },
  { key: 'tools', title: '工具', label: 'TOOLS' },
  { key: 'outputs', title: '输出', label: 'OUTPUT' },
  { key: 'validation', title: '验证', label: 'VERIFY' },
];

export default function ExperimentFlowConsole({experiments = []}) {
  const [activeId, setActiveId] = useState(experiments[0]?.id);
  const active = useMemo(() => experiments.find(item => item.id === activeId) || experiments[0], [experiments, activeId]);
  if (!experiments.length || !active) return null;

  return <section className="experiment-flow-console">
    <div className="experiment-flow-head"><span>REPRODUCTION FLOW · 复现实验流</span><h2>从输入到归档。</h2><p>选择一个实验，查看它需要什么输入、用什么工具、产出什么结果，以及怎样验证结论。</p></div>
    <div className="experiment-flow-layout">
      <aside className="experiment-flow-list">
        {experiments.map((exp, index) => <button key={exp.id} type="button" className={exp.id === active.id ? 'active' : ''} onClick={() => setActiveId(exp.id)} onMouseEnter={() => setActiveId(exp.id)}>
          <em>{String(index + 1).padStart(2, '0')} · {exp.category}</em><strong>{exp.title}</strong><span>{exp.status} / {exp.priority}</span>
        </button>)}
      </aside>
      <div className="experiment-flow-pipeline">
        <div className="experiment-flow-core"><span>EXPERIMENT</span><strong>{active.title}</strong><p>{active.objective}</p></div>
        {lanes.map((lane, index) => <article key={lane.key} className={`experiment-flow-lane lane-${index + 1}`}><em>{lane.label}</em><h3>{lane.title}</h3><ul>{(active[lane.key] || []).map(value => <li key={value}>{value}</li>)}</ul></article>)}
      </div>
      <aside className="experiment-flow-brief">
        <div className="lab-card-status-row"><StatusPill label="状态" value={active.status}/><StatusPill label="优先级" value={active.priority}/></div>
        <h3>{active.title}</h3>
        <p>{active.objective}</p>
        <div><span>归档目标</span><strong>{active.archiveTarget}</strong></div>
        <footer>{active.tools.map(tool => <b key={tool}>{tool}</b>)}</footer>
      </aside>
    </div>
  </section>;
}
