import React, { useMemo, useState } from 'react';
import Link from '@docusaurus/Link';

const stages = [
  {
    key: 'discover',
    label: '发现',
    en: 'DISCOVER',
    route: '/intelligence',
    headline: '新资料先进入前沿情报',
    text: '新闻、论文、工具更新、开源项目和公开数据先进入待筛选状态，不直接污染稳定内容。',
    metric: '每日',
  },
  {
    key: 'evaluate',
    label: '评估',
    en: 'EVALUATE',
    route: '/open-source-data',
    headline: '判断可用性与可信度',
    text: '检查许可证、来源、成熟度、复现难度、数据质量、适用任务和下一步动作。',
    metric: '筛选',
  },
  {
    key: 'mission',
    label: '任务',
    en: 'MISSION',
    route: '/missions',
    headline: '挂接真实航天对象',
    text: '把工具、数据、方法和项目放进火箭、卫星、空间站、探测器或再入任务中。',
    metric: '案例',
  },
  {
    key: 'reproduce',
    label: '实验',
    en: 'REPRODUCE',
    route: '/my-projects',
    headline: '用实验验证结论',
    text: '记录环境、命令、输入、输出、误差和对照基准，能重新跑通才进入证据链。',
    metric: '验证',
  },
  {
    key: 'archive',
    label: '归档',
    en: 'ARCHIVE',
    route: '/knowledge',
    headline: '沉淀为知识图谱',
    text: '成熟内容进入理论图谱、工具库、对象档案、方法卡片或个人项目日志。',
    metric: '图谱',
  },
];

export default function OrbitalResearchConsole({ compact = false }) {
  const [activeKey, setActiveKey] = useState(stages[0].key);
  const activeIndex = stages.findIndex(item => item.key === activeKey);
  const active = stages[activeIndex] || stages[0];
  const orbitStyle = useMemo(() => ({ '--active-index': activeIndex }), [activeIndex]);

  return <section className={`orbital-console ${compact ? 'orbital-console--compact' : ''}`}>
    <div className="orbital-console__copy">
      <span>INTERACTIVE RESEARCH ORBIT · 研究链路</span>
      <h2>研究轨道</h2>
      <p>每天新增内容先进入前沿情报，再经过评估、任务挂接、实验验证，最后沉淀到知识图谱、工具库或个人项目。</p>
      <div className="orbital-console__stage-card">
        <em>{active.en}</em>
        <strong>{active.headline}</strong>
        <p>{active.text}</p>
        <Link to={active.route}>进入{active.label}模块 ↗</Link>
      </div>
    </div>
    <div className="orbital-console__visual" style={orbitStyle} aria-label="研究链路交互轨道">
      <div className="orbit-ring orbit-ring--outer" />
      <div className="orbit-ring orbit-ring--middle" />
      <div className="orbit-ring orbit-ring--inner" />
      <div className="orbit-scan" />
      <div className="orbit-core"><span>{active.metric}</span><b>{active.label}</b></div>
      {stages.map((stage, index) => <button
        key={stage.key}
        className={`orbit-node orbit-node--${index + 1} ${stage.key === activeKey ? 'active' : ''}`}
        onMouseEnter={() => setActiveKey(stage.key)}
        onFocus={() => setActiveKey(stage.key)}
        onClick={() => setActiveKey(stage.key)}
        type="button"
      ><span>{stage.label}</span><em>{stage.en}</em></button>)}
    </div>
  </section>;
}
