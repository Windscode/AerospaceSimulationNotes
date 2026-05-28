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

  return <section className="tool-stage-explorer tool-stage-explorer--mission">
    <div className="tool-stage-head"><span>TOOLCHAIN BY MISSION STAGE · 阶段工具链</span><h2>先选任务问题，再选工具。</h2><p>工具库最有用的形态不是软件清单，而是一个选择器：你现在要解决什么问题，输入是什么，最后要产出什么证据。</p></div>
    <div className="tool-stage-layout">
      <aside className="tool-stage-lanes">
        {lanes.map((lane, index) => <button key={lane.title} type="button" className={lane.title === activeLane.title ? 'active' : ''} onClick={() => setActiveTitle(lane.title)} onMouseEnter={() => setActiveTitle(lane.title)}>
          <em>{String(index + 1).padStart(2, '0')}</em><strong>{lane.title}</strong><span>{lane.problem || lane.desc}</span>
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
        <div className="tool-stage-io"><p><b>要解决：</b>{activeLane.problem}</p><p><b>输入：</b>{activeLane.input}</p><p><b>输出：</b>{activeLane.output}</p></div>
        <div className="tool-stage-cards">{laneTools.slice(0, 3).map(tool => <article key={tool.id}><strong>{tool.title}</strong><p>{tool.firstRun || tool.starterTask}</p><footer><StatusPill value={tool.licenseType}/><StatusPill value={tool.confidence}/></footer></article>)}</div>
      </aside>
    </div>
  </section>;
}
