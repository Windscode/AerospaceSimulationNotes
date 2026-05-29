export const intelligenceCategories = ['全部', '航天新闻', '研究进展', '工程软件', '开源项目', '公开数据', '任务线索'];

export const intelligenceQueue = [
  {
    id: 'daily-launch-and-mission-watch', date: '每日', category: '航天新闻', priority: '中', status: '筛选', value: '任务线索',
    title: '发射任务、星座部署与深空任务动态',
    summary: '跟踪发射时间、载荷、目标轨道、任务阶段和公开图片，判断是否能转入飞行器与任务档案。',
    sourceHint: '航天机构页面 / 发射服务商 / 新闻稿 / TLE',
    nextAction: '记录来源、事件时间、任务对象、公开参数和后续 TLE。',
    routes: ['飞行器与任务', '开源与数据'], confidence: '中',
    extractFields: ['发射时间', '载荷名称', '目标轨道', '任务阶段', '可用 TLE', '官方图片/视频'],
    rejectReason: '只有宣传描述，没有任务对象、参数或后续数据。',
    example: '某批 Starlink 发射：记录发射批次、目标轨道、部署时间、TLE 更新。'
  },
  {
    id: 'paper-report-intake', date: '每日', category: '研究进展', priority: '高', status: '入队', value: '理论与验证',
    title: '轨道、GNC、推进、气动、热控、结构与飞行软件论文',
    summary: '论文和报告不直接进入知识图谱，先判断是否有模型、参数、曲线、误差指标或可复现实验价值。',
    sourceHint: '论文 / 技术报告 / 机构白皮书',
    nextAction: '提取公式、图表、验证门限、数据可用性和适用边界。',
    routes: ['知识图谱', '复现实验'], confidence: '中高',
    extractFields: ['模型假设', '公式', '图表曲线', '验证指标', '数据来源', '适用范围'],
    rejectReason: '只有概念综述，没有可复现方法、参数或对照结果。',
    example: 'Apollo 再入热流报告：数字化曲线，进入再入复现实验。'
  },
  {
    id: 'engineering-tool-update', date: '每周', category: '工程软件', priority: '中', status: '观察', value: '工具链',
    title: 'STK、GMAT、Orekit、Tudat、Basilisk、CFD 工具更新',
    summary: '关注新版本、示例、文档、许可证、安装难度和是否能改进当前研究流程。',
    sourceHint: 'Release / 文档 / 官方博客 / GitHub',
    nextAction: '标记版本变化、影响模块、是否需要重跑示例。',
    routes: ['工具库', '我的项目'], confidence: '中',
    extractFields: ['版本号', '新增示例', '破坏性变化', '许可证变化', '安装方式', '适用任务'],
    rejectReason: '只是版本号更新，对当前任务链路没有影响。',
    example: 'Orekit 新版本：检查 TLE/事件探测示例是否影响 ISS 过境实验。'
  },
  {
    id: 'open-source-project-watch', date: '每周', category: '开源项目', priority: '高', status: '评估', value: '可复用资产',
    title: '可用于航天仿真的开源框架与示例项目',
    summary: '不是看 star 数，而是看能不能运行、能解决什么问题、许可证是否清楚、是否能进入你的任务链路。',
    sourceHint: 'GitHub / NASA / ESA / 大学实验室',
    nextAction: '记录语言、许可证、活跃度、示例质量、可运行性和适配任务。',
    routes: ['开源与数据', '复现实验'], confidence: '中高',
    extractFields: ['许可证', '语言', '示例入口', '依赖环境', '维护活跃度', '可接入任务'],
    rejectReason: '无法运行、许可证不清、没有文档或只适合概念展示。',
    example: 'Basilisk 示例：跑通姿态稳定实验后进入 GNC 工具链。'
  },
  {
    id: 'public-data-watch', date: '持续', category: '公开数据', priority: '高', status: '整理', value: '数据源',
    title: 'TLE、星历、任务页面、图像、参数表和公开数据库',
    summary: '公开数据要先标注来源、时间、格式、可信度和限制条件，再进入参数推断或任务案例。',
    sourceHint: 'CelesTrak / JPL Horizons / NASA / ESA / 论文附录',
    nextAction: '记录数据格式、更新时间、适用范围和不可用边界。',
    routes: ['开源与数据', '飞行器与任务'], confidence: '高',
    extractFields: ['来源机构', '格式', '更新时间', '参考系/时间系统', '适用范围', '限制条件'],
    rejectReason: '无法确认来源、时间戳或数据含义。',
    example: 'JPL Horizons：用于地月/地火转移初始状态。'
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

export const intakeTemplates = [
  {
    title: '任务新闻模板',
    useFor: '发射、星座部署、深空任务、交会对接、再入返回',
    fields: ['原始链接', '任务对象', '时间', '载荷/目标轨道', '可用图片/视频', '后续 TLE 或任务页面'],
    output: '转入飞行器与任务档案或留在情报队列。'
  },
  {
    title: '论文报告模板',
    useFor: '轨道、GNC、推进、CFD、结构、热控、飞行软件论文',
    fields: ['模型', '数据', '曲线', '验证指标', '适用范围', '可复现实验'],
    output: '转入知识图谱、方法卡片或复现实验。'
  },
  {
    title: '工具更新模板',
    useFor: 'STK、GMAT、Orekit、Tudat、Basilisk、OpenVSP、SU2 等工具',
    fields: ['版本', '变化', '示例', '安装影响', '许可证', '当前任务影响'],
    output: '转入工具库或项目维护记录。'
  },
  {
    title: '公开数据模板',
    useFor: 'TLE、星历、任务页面、NASA 报告、论文附录、图表曲线',
    fields: ['来源机构', '格式', '时间戳', '单位/坐标系', '可信度', '限制'],
    output: '转入开源与数据、飞行器对象或参数推断。'
  }
];

export const scoringRubric = [
  { title: '5 分：能直接进入实验', desc: '有数据、代码、公式、图表或官方示例，能在一周内产出可运行结果。' },
  { title: '4 分：能补关键档案', desc: '能补真实对象参数、任务阶段、工具链或验证检查。' },
  { title: '3 分：值得观察', desc: '方向有价值，但缺少可运行材料或来源还不稳定。' },
  { title: '2 分：只做背景', desc: '适合写概览或趋势，不适合作为工程输入。' },
  { title: '1 分：不收录', desc: '来源不清、没有技术内容、无法验证或明显营销化。' }
];

export const routingMap = [
  { from: '任务新闻', to: '飞行器与任务', condition: '出现真实对象、任务阶段、目标轨道或公开参数。' },
  { from: '论文报告', to: '知识图谱 / 复现实验', condition: '出现模型、公式、曲线、误差指标或可复现步骤。' },
  { from: '工具更新', to: '工具库 / 我的项目', condition: '影响当前工具链、示例或实验环境。' },
  { from: '开源项目', to: '开源与数据 / 复现实验', condition: '能跑示例、许可证清楚、能接入任务链。' },
  { from: '公开数据', to: '开源与数据 / 飞行器与任务', condition: '来源、时间、格式、限制和用途清楚。' }
];
