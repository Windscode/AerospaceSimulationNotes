import React, {useMemo, useState} from 'react';
import StatusPill from './StatusPill';

export default function VehicleMissionExplorer({vehicles = []}) {
  const [activeId, setActiveId] = useState(vehicles[0]?.id);
  const active = useMemo(() => vehicles.find(item => item.id === activeId) || vehicles[0], [vehicles, activeId]);
  if (!vehicles.length || !active) return null;

  return <section className="lab-vehicle-explorer">
    <div className="lab-vehicle-head"><span>VEHICLE MISSION EXPLORER · 飞行器任务剖面</span><h2>从对象进入仿真。</h2><p>选择一个航天对象，查看公开参数、可推断参数、子系统、任务阶段、仿真流程和可用工具链。</p></div>
    <div className="lab-vehicle-layout">
      <aside className="lab-vehicle-list">
        {vehicles.map((vehicle, index) => <button key={vehicle.id} type="button" className={vehicle.id === active.id ? 'active' : ''} onClick={() => setActiveId(vehicle.id)} onMouseEnter={() => setActiveId(vehicle.id)}>
          <em>{String(index + 1).padStart(2, '0')} · {vehicle.category}</em>
          <strong>{vehicle.title}</strong>
          <span>{vehicle.status} / {vehicle.confidence}</span>
        </button>)}
      </aside>
      <div className="lab-vehicle-stage">
        <div className="lab-vehicle-orbit">
          <div className="lab-vehicle-core"><span>{active.category}</span><strong>{active.title}</strong></div>
          {active.missionPhases.map((phase, index) => <i key={phase} className={`phase phase-${index + 1}`}><b>{String(index + 1).padStart(2, '0')}</b><span>{phase}</span></i>)}
        </div>
      </div>
      <aside className="lab-vehicle-brief">
        <div className="lab-card-status-row"><StatusPill label="状态" value={active.status}/><StatusPill label="可信度" value={active.confidence}/></div>
        <h3>{active.title}</h3>
        <p>{active.summary}</p>
        <div className="lab-vehicle-params">{active.parameterCards.map(card => <div key={card.label}><span>{card.label}</span><strong>{card.value}</strong></div>)}</div>
        <div className="lab-vehicle-mini-grid"><article><span>子系统</span><p>{active.subsystems.join(' / ')}</p></article><article><span>公开数据</span><p>{active.publicData.join(' / ')}</p></article><article><span>推断参数</span><p>{active.inferredParameters.join(' / ')}</p></article></div>
      </aside>
    </div>
    <div className="lab-vehicle-flow">
      <div><span>仿真流程</span><h3>{active.title} 的研究路径</h3></div>
      {active.simulationFlow.map((step, index) => <article key={step}><em>{String(index + 1).padStart(2, '0')}</em><p>{step}</p></article>)}
      <footer>{active.tools.map(tool => <b key={tool}>{tool}</b>)}</footer>
    </div>
  </section>;
}
