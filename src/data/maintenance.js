export const logEntryTypes = [
  {
    id: 'daily-digest',
    title: '每日研究简报',
    purpose: '快速记录当天看到的航天新闻、论文、工具更新、开源项目和数据线索。',
    requiredFields: ['日期', '原始来源', '资料类型', '一句话判断', '价值评分', '路由页面', '下一步'],
    output: '进入前沿情报队列或直接转为工具/对象/数据条目。',
    route: '/intelligence'
  },
  {
    id: 'experiment-note',
    title: '复现实验记录',
    purpose: '记录实验环境、输入数据、运行命令、输出文件、对照基准、失败模式和结论。',
    requiredFields: ['实验目标', '环境版本', '输入来源', '运行命令', '输出文件', '验证检查', '失败记录'],
    output: '进入复现实验页面、我的项目路线图或方法卡片。',
    route: '/reproduction-lab'
  },
  {
    id: 'object-dossier-update',
    title: '飞行器对象更新',
    purpose: '围绕真实飞行器补充公开参数、任务阶段、可推断参数、工具链和验证边界。',
    requiredFields: ['对象名称', '来源', '参数/事件', '可信度', '推断项', '关联工具', '验证方式'],
    output: '进入飞行器与任务档案。',
    route: '/missions'
  },
  {
    id: 'tool-review',
    title: '工具链评估',
    purpose: '判断一个工具是否值得进入工具库：能否跑通示例、输入输出是什么、适合哪类任务。',
    requiredFields: ['工具名', '版本/许可证', '最小示例', '输入输出', '适合任务', '坑点', '替代工具'],
    output: '进入工具库或开源与数据项目矩阵。',
    route: '/tools'
  }
];

export const dailyMaintenanceChecklist = [
  { title: '新增资料先入队', desc: '新闻、论文、工具、仓库和数据源先进入情报队列，不直接写进稳定页面。' },
  { title: '只沉淀可复查内容', desc: '能说明来源、输入、输出、可信度和边界的内容，才进入工具库、对象库或知识图谱。' },
  { title: '每次维护至少有一个下一步', desc: '日志不能只总结，必须留下下一步动作或拒收理由。' },
  { title: '每周清理样板内容', desc: '删掉没有真实对象、真实数据、真实工具链的空模块。' },
  { title: '截图审查视觉结果', desc: '构建完成后用真实页面截图审查：首页、工具、飞行器、开源数据、知识图谱、项目页。' }
];

export const recentWorkLog = [
  {
    date: '2026-05-29',
    title: '从展示站改为研究工作台',
    type: '结构重构',
    summary: '把首页、工具库、飞行器与任务、开源与数据、知识图谱、我的项目、前沿情报和复现实验改成任务驱动结构。',
    changed: ['真实对象档案', '工具选择台', '资源流水线', '知识到实验链路', '个人项目路线图'],
    next: '继续清理冗余 CSS 和空泛视觉模块。'
  },
  {
    date: '2026-05-29',
    title: '飞行器对象进入仿真链路',
    type: '对象库',
    summary: '用 Falcon 9、长征五号、Starship、ISS、天宫、Starlink、天问一号、Orion、Apollo 指令舱替代空泛对象分类。',
    changed: ['公开来源', '推断参数', '仿真流程', '验证检查', '建模边界'],
    next: '给核心对象补真实图片、参数表和来源链接。'
  },
  {
    date: '2026-05-29',
    title: '复现实验页增加完成定义',
    type: '实验流程',
    summary: '每个实验候选增加运行计划、归档文件、失败模式和完成定义，避免实验停留在想法层。',
    changed: ['runPlan', 'artifacts', 'failureModes', 'doneDefinition'],
    next: '优先实现 TLE 轨道传播与过境实验的最小示例。'
  }
];

export const contentRoutingRules = [
  { from: '临时新闻', to: '前沿情报', condition: '来源可信但还没有转成稳定资料。' },
  { from: '真实飞行器参数', to: '飞行器与任务', condition: '能标注来源、可信度和仿真用途。' },
  { from: '工具/项目示例', to: '工具库 / 开源与数据', condition: '能跑通示例或明确输入输出。' },
  { from: '理论与方法', to: '知识图谱', condition: '能连接对象、工具和第一项实验。' },
  { from: '可运行脚本与结果', to: '复现实验 / 我的项目', condition: '有输入、命令、输出、验证和归档文件。' }
];

export const screenshotAuditPages = [
  { title: '首页', path: '/', focus: '第一屏是否有高级感，是否能立刻看出“研究工作台”定位。' },
  { title: '前沿情报', path: '/intelligence', focus: '录入模板、评分、路由和队列是否像工作流，而不是新闻列表。' },
  { title: '飞行器与任务', path: '/missions', focus: '真实对象、证据、推断参数和仿真路径是否清楚。' },
  { title: '工具库', path: '/tools', focus: '是否能按任务选择工具，而不是只看软件名录。' },
  { title: '开源与数据', path: '/open-source-data', focus: '资源是否能跑通、接入任务并产生证据。' },
  { title: '知识图谱', path: '/knowledge', focus: '对象、理论、第一项实验和验证检查是否连起来。' },
  { title: '我的项目', path: '/my-projects', focus: '项目是否有状态、下一步、输出物和风险。' }
];
