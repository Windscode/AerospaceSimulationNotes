import React from 'react';
import StatusPill from './StatusPill';

function Field({title, children}) {
  return <div className="lab-detail-field"><span>{title}</span>{children}</div>;
}

function ChipList({items = []}) {
  if (!items?.length) return <p className="lab-muted-note">待补充</p>;
  return <div className="lab-chip-list">{items.map(item => <em key={item}>{item}</em>)}</div>;
}

function TextList({items = []}) {
  if (!items?.length) return <p className="lab-muted-note">待补充</p>;
  return <ol className="lab-mini-ordered">{items.map(item => <li key={item}>{item}</li>)}</ol>;
}

export function ToolDatabaseCard({tool}) {
  return <article className="lab-database-card lab-tool-card--practical">
    <div className="lab-card-status-row"><StatusPill label="许可" value={tool.licenseType}/><StatusPill label="难度" value={tool.difficulty}/><StatusPill label="成熟度" value={tool.status}/><StatusPill label="可信度" value={tool.confidence}/></div>
    <span className="lab-card-meta">{tool.category}</span>
    <h3>{tool.title}</h3>
    <p>{tool.summary}</p>
    <div className="lab-card-brief"><b>典型用途</b><span>{tool.typicalUse}</span></div>
    <div className="lab-card-brief lab-card-brief--strong"><b>第一步</b><span>{tool.firstRun || tool.starterTask}</span></div>
    <div className="lab-practical-dual">
      <Field title="适合用来"><ChipList items={tool.bestFor}/></Field>
      <Field title="不要拿它做"><ChipList items={tool.notFor}/></Field>
    </div>
    <details className="lab-expand-panel">
      <summary>展开工具档案</summary>
      <div className="lab-detail-grid">
        <Field title="输入"><ChipList items={tool.inputs}/></Field>
        <Field title="输出"><ChipList items={tool.outputs}/></Field>
        <Field title="适合人群"><p>{tool.audience}</p></Field>
        <Field title="证据链用途"><p>{tool.evidenceUse || '作为工具链中的一环，需要保留输入、输出和版本。'}</p></Field>
        <Field title="相关案例"><ChipList items={tool.relatedCases}/></Field>
        <Field title="可组合工具"><ChipList items={tool.relatedTools}/></Field>
      </div>
    </details>
  </article>;
}

export function VehicleDatabaseCard({vehicle}) {
  return <article className="lab-database-card lab-vehicle-database-card lab-real-card">
    <div className="lab-card-status-row"><StatusPill label="状态" value={vehicle.status}/><StatusPill label="可信度" value={vehicle.confidence}/><StatusPill label="国家" value={vehicle.country}/></div>
    <span className="lab-card-meta">{vehicle.category} · {vehicle.organization}</span>
    <h3>{vehicle.title}</h3>
    <p>{vehicle.summary}</p>
    <div className="lab-param-strip">{vehicle.parameterCards?.map(card => <div key={card.label}><span>{card.label}</span><strong>{card.value}</strong></div>)}</div>
    <div className="lab-card-brief lab-card-brief--strong"><b>建模建议</b><span>{vehicle.modelPlan || '先整理公开来源，再建立可验证的简化模型。'}</span></div>
    <details className="lab-expand-panel">
      <summary>展开真实对象档案</summary>
      <div className="lab-detail-grid">
        <Field title="关键参数"><ChipList items={vehicle.keyParameters}/></Field>
        <Field title="公开来源"><ChipList items={vehicle.sourceRefs || vehicle.publicData}/></Field>
        <Field title="可用公开数据"><ChipList items={vehicle.publicData}/></Field>
        <Field title="需要推断的参数"><ChipList items={vehicle.inferredParameters}/></Field>
        <Field title="子系统"><ChipList items={vehicle.subsystems}/></Field>
        <Field title="任务阶段"><TextList items={vehicle.missionPhases}/></Field>
        <Field title="仿真流程"><TextList items={vehicle.simulationFlow}/></Field>
        <Field title="验证检查"><TextList items={vehicle.validationChecks}/></Field>
        <Field title="仿真方向"><ChipList items={vehicle.simulationTopics}/></Field>
        <Field title="可用工具"><ChipList items={vehicle.tools}/></Field>
      </div>
    </details>
  </article>;
}

export function ProjectDatabaseCard({project}) {
  return <article className="lab-database-card">
    <div className="lab-card-status-row"><StatusPill label="活跃度" value={project.activity}/><StatusPill label="难度" value={project.difficulty}/><StatusPill label="可信度" value={project.confidence}/><StatusPill label="示例" value={project.runnableExample ? '可运行' : '待验证'}/></div>
    <span className="lab-card-meta">{project.category} · {project.language} · {project.license}</span>
    <h3>{project.title}</h3>
    <p>{project.summary}</p>
    <div className="lab-card-brief"><b>能做什么</b><span>{project.canDo.join(' / ')}</span></div>
    <details className="lab-expand-panel">
      <summary>展开项目评估</summary>
      <div className="lab-detail-grid">
        <Field title="流程位置"><ChipList items={project.workflowUse}/></Field>
        <Field title="关联工具"><ChipList items={project.relatedTools}/></Field>
        <Field title="学习价值"><p>{project.personalLearning ? '适合作为学习与工程原型入口。' : '更适合作为工程架构参考，不建议一开始就完整复刻。'}</p></Field>
        <Field title="接入判断"><p>先跑通官方示例，再确认输入输出格式，最后判断能否接入本站的任务对象或复现实验。</p></Field>
      </div>
    </details>
  </article>;
}
