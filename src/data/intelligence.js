export const intelligenceCategories = ['全部', '航天新闻', '研究进展', '工程软件', '开源项目', '公开数据', '任务线索'];

export const intelligenceQueue = [
  {
    id: 'daily-launch-and-mission-watch', date: '每日', category: '航天新闻', priority: '中', status: '筛选', value: '任务线索',
    title: '发射任务、星座部署与深空任务动态',
    summary: '跟踪发射时间、载荷、目标轨道、任务阶段和公开图片，判断是否能转入飞行器与任务档案。',
    sourceHint: '航天机构页面 / 发射服务商 / 新闻稿 / TLE',
    nextAction: '记录来源、事件时间、任务对象、公开参数和后续 TLE。',
    routes: ['飞行器与任务', '开源与数据'], confidence: '中'
  },
  {
    id: 'paper-report-intake', date: '每日', category: '研究进展', priority: '高', status: '入队', value: '理论与验证',
    title: '轨道、GNC、推进、气动、热控、结构与飞行软件论文',
    summary: '论文和报告不直接进入知识图谱，先判断是否有模型、参数、曲线、误差指标或可复现实验价值。',
    sourceHint: '论文 / 技术报告 / 机构白皮书',
    nextAction: '提取公式、图表、验证门限、数据可用性和适用边界。',
    routes: ['知识图谱', '复现实验'], confidence: '中高'
  },
  {
    id: 'engineering-tool-update', date: '每周', category: '工程软件', priority: '中', status: '观察', value: '工具链',
    title: 'STK、GMAT、Orekit、Tudat、Basilisk、CFD 工具更新',
    summary: '关注新版本、示例、文档、许可证、安装难度和是否能改进当前研究流程。',
    sourceHint: 'Release / 文档 / 官方博客 / GitHub',
    nextAction: '标记版本变化、影响模块、是否需要重跑示例。',
    routes: ['工具库', '我的项目'], confidence: '中'
  },
  {
    id: 'open-source-project-watch', date: '每周', category: '开源项目', priority: '高', status: '评估', value: '可复用资产',
    title: '可用于航天仿真的开源框架与示例项目',
    summary: '不是看 star 数，而是看能不能运行、能解决什么问题、许可证是否清楚、是否能进入你的任务链路。',
    sourceHint: 'GitHub / NASA / ESA / 大学实验室',
    nextAction: '记录语言、许可证、活跃度、示例质量、可运行性和适配任务。',
    routes: ['开源与数据', '复现实验'], confidence: '中高'
  },
  {
    id: 'public-data-watch', date: '持续', category: '公开数据', priority: '高', status: '整理', value: '数据源',
    title: 'TLE、星历、任务页面、图像、参数表和公开数据库',
    summary: '公开数据要先标注来源、时间、格式、可信度和限制条件，再进入参数推断或任务案例。',
    sourceHint: 'CelesTrak / JPL Horizons / NASA / ESA / 论文附录',
    nextAction: '记录数据格式、更新时间、适用范围和不可用边界。',
    routes: ['开源与数据', '飞行器与任务'], confidence: '高'
  }
];

export const intelligenceWorkflow = [
  { step: '01', title: '发现', desc: '看到新闻、论文、工具、仓库或数据源后，先记录来源和原始链接，不急着总结。' },
  { step: '02', title: '筛选', desc: '判断它是否和轨道、GNC、推进、气动、热控、结构、任务回放或个人项目有关。' },
  { step: '03', title: '评估', desc: '检查可信度、可复现性、许可证、数据完整性、工程价值和学习价值。' },
  { step: '04', title: '路由', desc: '分配到工具库、飞行器任务、开源数据、知识图谱、复现实验或研究日志。' },
  { step: '05', title: '沉淀', desc: '稳定内容进入结构化数据或 Markdown；不成熟内容留在情报队列。' }
];

export const intelligenceSignals = [
  { title: '可直接复现', desc: '有代码、数据、步骤、环境或官方示例。', score: '高' },
  { title: '能补任务对象', desc: '能为某个火箭、卫星、星座、着陆器或再入对象补充参数。', score: '高' },
  { title: '能改进工具链', desc: '能替代现有工具、补充验证链路或降低上手成本。', score: '中高' },
  { title: '只有新闻价值', desc: '只有事件描述，没有可提取参数或工程方法。', score: '低中' }
];
