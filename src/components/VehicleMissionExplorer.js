import React, {useMemo, useState} from 'react';
import StatusPill from './StatusPill';

function InlineList({items = []}) {
  return <div className="lab-inline-list">{items.map(item => <em key={item}>{item}</em>)}</div>;
}

function StepList({items = []}) {
  return <ol className="lab-step-list">{items.map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, '0')}</b><span>{item}</span></li>)}</ol>;
}

export default function VehicleMissionExplorer({vehicles = []}) {
  const [activeId, setActiveId] = useState(vehicles[0]?.id);
  const active = useMemo(() => vehicles.find(item => item.id === activeId) || vehicles[0], [vehicles, activeId]);
  if (!vehicles.length || !active) return null;

  return <section className="lab-vehicle-explorer lab-vehicle-explorer--deep">
    <div className="lab-vehicle-head">
      <span>VEHICLE MISSION EXPLORER · 飞行器任务剖面</span>
      <h2>从真实对象拆出仿真任务。</h2>
      <p>点击一个航天对象，不只是看百科参数，而是看它能形成哪些公开数据、估计参数、建模边界、验证检查和工具链。</p>
    </div>
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
        <div className="lab-vehicle-plan-note">
          <span>建模边界</span>
          <p>{active.modelPlan}</p>
        </div>
      </div>
      <aside className="lab-vehicle-brief">
        <div className="lab-card-status-row"><StatusPill label="状态" value={active.status}/><StatusPill label="可信度" value={active.confidence}/><StatusPill label="国家" value={active.country}/></div>
        <h3>{active.title}</h3>
        <p>{active.summary}</p>
        <div className="lab-vehicle-params">{active.parameterCards.map(card => <div key={card.label}><span>{card.label}</span><strong>{card.value}</strong></div>)}</div>
        <div className="lab-vehicle-mini-grid">
          <article><span>子系统</span><p>{active.subsystems.join(' / ')}</p></article>
          <article><span>公开数据</span><p>{active.publicData.join(' / ')}</p></article>
          <article><span>推断参数</span><p>{active.inferredParameters.join(' / ')}</p></article>
        </div>
      </aside>
    </div>
    <div className="lab-vehicle-flow lab-vehicle-flow--evidence">
      <div><span>仿真流程</span><h3>{active.title} 的研究路径</h3><p>从公开来源开始，逐步形成可运行模型、可视化结果和验证说明。</p></div>
      {active.simulationFlow.map((step, index) => <article key={step}><em>{String(index + 1).padStart(2, '0')}</em><p>{step}</p></article>)}
      <footer>{active.tools.map(tool => <b key={tool}>{tool}</b>)}</footer>
    </div>
    <div className="lab-vehicle-evidence-panel">
      <article>
        <span>PUBLIC SOURCES</span>
        <h3>资料来源</h3>
        <InlineList items={active.sourceRefs || active.publicData}/>
      </article>
      <article>
        <span>SIMULATION TOPICS</span>
        <h3>可做的仿真问题</h3>
        <InlineList items={active.simulationTopics}/>
      </article>
      <article>
        <span>VALIDATION GATES</span>
        <h3>验证检查</h3>
        <StepList items={active.validationChecks}/>
      </article>
    </div>
  </section>;
}
