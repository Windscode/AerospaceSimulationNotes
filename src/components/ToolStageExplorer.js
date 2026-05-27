import React, {useMemo, useState} from 'react';
import StatusPill from './StatusPill';

export default function ToolStageExplorer({lanes = [], tools = []}) {
  const [activeTitle, setActiveTitle] = useState(lanes[0]?.title);
  const activeLane = useMemo(() => lanes.find(lane => lane.title === activeTitle) || lanes[0], [lanes, activeTitle]);
  const laneTools = useMemo(() => {
    const names = new Set(activeLane?.tools || []);
    return tools.filter(tool => names.has(tool.title) || names.has(tool.id) || (activeLane?.tools || []).some(name => tool.relatedTools?.includes(name))).slice(0, 6);
  }, [tools, activeLane]);

  if (!lanes.length || !activeLane) return null;

  return <section className="tool-stage-explorer">
    <div className="tool-stage-head"><span>TOOLCHAIN BY MISSION STAGE · 阶段工具链</span><h2>先选任务阶段，再选工具。</h2><p>工具库不应该只是软件名录。先确定要解决轨道、控制、气动、遥测哪类问题，再看推荐工具、输入输出和入门动作。</p></div>
    <div className="tool-stage-layout">
      <aside className="tool-stage-lanes">
        {lanes.map((lane, index) => <button key={lane.title} type="button" className={lane.title === activeLane.title ? 'active' : ''} onClick={() => setActiveTitle(lane.title)} onMouseEnter={() => setActiveTitle(lane.title)}>
          <em>{String(index + 1).padStart(2, '0')}</em><strong>{lane.title}</strong><span>{lane.tools.join(' / ')}</span>
        </button>)}
      </aside>
      <div className="tool-stage-map">
        <div className="tool-stage-core"><span>MISSION STAGE</span><strong>{activeLane.title}</strong><p>{activeLane.desc}</p></div>
        {laneTools.map((tool, index) => <article key={tool.id} className={`tool-stage-node node-${index + 1}`}>
          <StatusPill label="难度" value={tool.difficulty}/>
          <h3>{tool.title}</h3>
          <p>{tool.typicalUse}</p>
        </article>)}
      </div>
      <aside className="tool-stage-brief">
        <span>阶段说明</span>
        <h3>{activeLane.title}</h3>
        <p>{activeLane.desc}</p>
        <div className="tool-stage-cards">{laneTools.slice(0, 3).map(tool => <article key={tool.id}><strong>{tool.title}</strong><p>{tool.starterTask}</p><footer><StatusPill value={tool.licenseType}/><StatusPill value={tool.confidence}/></footer></article>)}</div>
      </aside>
    </div>
  </section>;
}
