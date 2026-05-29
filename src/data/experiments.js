export const experimentCategories = ['全部', '轨道传播', '任务回放', 'GNC闭环', '推进估计', '气动建库', '再入分析', '工具链验证'];

export const personalProjects = [
  {
    id: 'aerosim-research-site',
    title: '航天仿真研究网站',
    status: '持续建设',
    type: '知识系统 / 研究入口',
    objective: '把工具、开源项目、公开数据、真实飞行器、知识图谱和实验记录组织成一个每天可维护的中文航天仿真研究工作台。',
    currentProgress: ['完成站点信息架构重构', '工具库/飞行器/开源数据/知识图谱已改为字段驱动', '真实对象与实验链路开始替代样板模块'],
    nextActions: ['清理冗余 CSS 补丁', '补真实高清图片与来源', '给每个页面增加“新增条目模板”', '接入自动截图审查流程'],
    outputs: ['中文研究网站', '数据驱动内容库', '维护规范', '截图审查记录'],
    relatedPages: ['/tools', '/missions', '/open-source-data', '/knowledge'],
    risks: ['CSS 补丁层过多', '内容还需持续补真实来源', '图片资产仍不足'],
    stack: ['Docusaurus', 'React', 'MDX', 'GitHub Pages']
  },
  {
    id: 'tle-orbit-lab',
    title: 'TLE 轨道传播与过境实验',
    status: '优先落地',
    type: '复现实验 / 任务回放',
    objective: '选择 ISS、天宫或 Starlink，读取公开 TLE，完成轨道传播、过境窗口计算和 Cesium 三维回放。',
    currentProgress: ['已在对象库和数据源中建立 TLE 传播方向', '已明确 CelesTrak / Orekit / CesiumJS 工具链'],
    nextActions: ['写最小 Python/Orekit 示例', '导出轨道状态 CSV', '生成过境窗口表', '做 Cesium 回放页面'],
    outputs: ['轨道 CSV', '过境窗口', 'Cesium 回放', '误差说明'],
    relatedPages: ['/missions', '/open-source-data', '/reproduction-lab'],
    risks: ['时间系统和坐标系容易混用', 'TLE 精度不能夸大', '地面站配置需要明确'],
    stack: ['Orekit', 'Python', 'CesiumJS', 'CelesTrak']
  },
  {
    id: 'launch-ascent-lab',
    title: 'Falcon 9 / 长征五号简化入轨实验',
    status: '设计中',
    type: '动力学 / 推进估计',
    objective: '用公开火箭参数、质量估计和目标轨道建立三自由度入轨近似模型，形成速度增量预算和事件时间线。',
    currentProgress: ['已补 Falcon 9 和长征五号对象档案', '已列出公开数据、推断参数和验证检查'],
    nextActions: ['整理发动机和分级参数', '建立质量随时间变化模型', '做重力转弯近似', '与目标轨道/TLE 对照'],
    outputs: ['Δv 预算', '高度/速度曲线', '事件时间线', '假设边界'],
    relatedPages: ['/missions', '/tools', '/knowledge'],
    risks: ['真实制导不可见', '质量分配需要估计', '不能伪装成高保真发射仿真'],
    stack: ['RocketCEA', 'GMAT', 'Python']
  },
  {
    id: 'reentry-aero-lab',
    title: 'Apollo / Orion 再入气动热初步复现',
    status: '候选',
    type: '再入 / CFD / 验证',
    objective: '从公开历史报告、外形尺寸和论文曲线出发，建立低阶再入走廊和气动热趋势对照。',
    currentProgress: ['已在飞行器对象库和知识图谱中建立再入方向', '已明确 OpenVSP / SU2 / OpenFOAM 工具链'],
    nextActions: ['收集 NASA NTRS 报告', '数字化论文曲线', '建立简化外形', '跑低阶轨迹和热流趋势'],
    outputs: ['热流/过载趋势', '外形假设', '曲线对照', '误差来源'],
    relatedPages: ['/missions', '/open-source-data', '/knowledge'],
    risks: ['CFD 容易只产出漂亮云图', '边界条件和网格必须记录', '再入真实参数不完整'],
    stack: ['OpenVSP', 'SU2', 'OpenFOAM', 'ParaView']
  }
];

export const projectMilestones = [
  { id: 'm1', title: '站点结构稳定', target: '当前阶段', desc: '导航、页面结构、数据文件和主要视觉方向稳定下来，停止继续堆样板模块。' },
  { id: 'm2', title: '第一个可运行实验', target: '下一阶段', desc: '优先完成 TLE 轨道传播与过境实验，产出 CSV、窗口表和三维回放。' },
  { id: 'm3', title: '真实对象档案成型', target: '中期', desc: '每个核心对象都补齐公开来源、参数表、仿真路径、验证检查和下一步动作。' },
  { id: 'm4', title: '自动维护流程', target: '长期', desc: '形成新增条目模板、截图审查、日志归档和每周清洗规则。' }
];

export const experimentCandidates = [
  {
    id: 'tle-orbit-replay', title: 'TLE 轨道传播与任务回放', category: '轨道传播', status: '候选', priority: '高',
    objective: '读取公开 TLE，完成轨道传播、地面站过境计算和 Cesium 轨迹回放。',
    inputs: ['TLE', '地面站经纬度', '传播时间范围'], tools: ['Orekit', 'CesiumJS', 'Python / Jupyter'],
    outputs: ['轨道状态 CSV', '过境窗口', '三维回放页面'], validation: ['与 CelesTrak / STK 结果对照', '检查时间系统和坐标系一致性'],
    archiveTarget: '开源与数据 / 飞行器与任务 / 我的项目',
    runPlan: ['从 CelesTrak 获取 ISS 或天宫 TLE', '固定地面站坐标和 UTC 时间段', '用 SGP4/Orekit 输出位置速度 CSV', '计算仰角门限下的过境窗口', '导入 Cesium 做三维回放'],
    artifacts: ['tle.txt', 'ground_station.json', 'orbit_state.csv', 'access_windows.csv', 'cesium.czml', 'validation.md'],
    failureModes: ['TLE 历元过旧', 'UTC/TAI 时间系统混用', '地面站坐标系错误', '只做三维图不输出对照表'],
    doneDefinition: '能重新下载同一历元 TLE，运行脚本生成 CSV、过境窗口和回放文件，并写清误差来源。'
  },
  {
    id: 'small-launch-ascent', title: '小型运载火箭入轨仿真', category: '推进估计', status: '候选', priority: '高',
    objective: '用公开或估计参数建立简化入轨模型，记录质量、推力、气动和飞行程序假设。',
    inputs: ['质量估计', '推力曲线', '比冲', '目标轨道', '气动假设'], tools: ['RocketCEA', 'GMAT', 'Python / Jupyter'],
    outputs: ['入轨轨迹', '速度/高度曲线', '剩余质量', '误差说明'], validation: ['与公开任务描述、TLE 和低阶估算对照'],
    archiveTarget: '飞行器与任务 / 数据方法 / 我的项目',
    runPlan: ['整理发动机数量、推力和比冲公开资料', '建立分级质量和推进剂消耗假设', '写三自由度上升段积分脚本', '输出高度/速度/质量随时间曲线', '与目标轨道速度和任务事件对照'],
    artifacts: ['vehicle_assumptions.yaml', 'ascent_sim.py', 'trajectory.csv', 'dv_budget.md', 'assumption_boundary.md'],
    failureModes: ['把估计质量写成事实', '忽略气动阻力或重力损失', '没有目标轨道对照', '把低阶模型包装成真实制导'],
    doneDefinition: '能说明所有假设来源，输出轨迹和 Δv 预算，并明确该模型只用于总体近似。'
  },
  {
    id: 'adcs-closed-loop', title: '卫星姿态控制闭环', category: 'GNC闭环', status: '设计中', priority: '中高',
    objective: '建立刚体姿态动力学、传感器噪声、执行机构限幅和控制律，形成可重复闭环实验。',
    inputs: ['惯量矩阵', '初始姿态', '控制参数', '传感器噪声'], tools: ['Basilisk', 'Simulink', 'Python / Jupyter'],
    outputs: ['姿态误差', '控制力矩', '执行机构饱和记录'], validation: ['检查稳定时间、稳态误差和能量变化'],
    archiveTarget: '知识图谱 / 我的项目',
    runPlan: ['固定刚体惯量和初始姿态', '选择 PD 或四元数反馈控制律', '加入执行机构限幅和传感器噪声', '输出姿态误差和控制力矩曲线', '检查稳定时间和饱和事件'],
    artifacts: ['adcs_config.yaml', 'attitude_response.csv', 'control_torque.csv', 'stability_report.md'],
    failureModes: ['没有定义姿态参数化', '忽略执行机构限幅', '没有单位检查', '只看收敛曲线不看控制量'],
    doneDefinition: '能复现实验配置，输出姿态响应和控制量，并说明控制律适用范围。'
  },
  {
    id: 'reentry-low-order-aero', title: '再入飞行器气动热初步估计', category: '再入分析', status: '候选', priority: '中',
    objective: '从外形尺寸、初始速度和大气模型估计再入阻力、过载和热流范围。',
    inputs: ['外形尺寸', '质量', '初始状态', '大气模型'], tools: ['OpenVSP', 'SU2', 'OpenFOAM', 'Python / Jupyter'],
    outputs: ['升阻力估计', '热流范围', '轨迹曲线', '假设边界'], validation: ['与论文曲线、教材案例或公开任务剖面对照'],
    archiveTarget: '飞行器与任务 / 知识图谱 / 复现实验',
    runPlan: ['收集 Apollo/Orion 外形和质量公开资料', '建立简化外形或低阶阻力模型', '固定再入初始速度高度走廊', '积分速度/高度/过载/热流趋势', '与公开曲线或教材案例对照'],
    artifacts: ['geometry_notes.md', 'reentry_config.yaml', 'trajectory.csv', 'heat_load_curve.csv', 'comparison_report.md'],
    failureModes: ['边界条件不清', '网格或模型不收敛', '热流模型超出适用范围', '把趋势估计当高保真 CFD'],
    doneDefinition: '能给出趋势曲线、对照来源、误差解释和模型适用范围。'
  }
];

export const validationGates = [
  { id: 'environment', title: '环境可重建', desc: '记录系统、依赖、版本、命令、路径和配置，别人或未来的自己能重新运行。' },
  { id: 'input', title: '输入可追溯', desc: '所有 TLE、参数、论文曲线、公开数据和估计值都标注来源。' },
  { id: 'output', title: '输出可对比', desc: '输出曲线、表格、事件时间、误差和可视化结果可与基准对照。' },
  { id: 'assumption', title: '假设可解释', desc: '把公开事实、工程估计、低阶模型和猜测分开，不能混写。' },
  { id: 'archive', title: '结论可归档', desc: '结论能回答做了什么、为什么可信、误差在哪里、下一步怎么改。' }
];

export const experimentLifecycle = [
  { step: '01', title: '选题', desc: '从情报、工具库、飞行器档案或个人项目中选择一个可复现实验。' },
  { step: '02', title: '建模', desc: '明确状态量、输入输出、动力学模型、约束和简化假设。' },
  { step: '03', title: '运行', desc: '记录命令、脚本、环境、数据和运行日志。' },
  { step: '04', title: '验证', desc: '用公开基准、工具对照、论文曲线或物理一致性检查结果。' },
  { step: '05', title: '归档', desc: '把实验结果沉淀为日志、方法卡片、工具条目或任务案例。' }
];

export const archiveSchema = [
  { title: 'README.md', desc: '实验目标、运行方式、输入输出和结论摘要。' },
  { title: 'config.yaml', desc: '模型参数、工具版本、坐标系、时间系统和假设。' },
  { title: 'data/', desc: '原始输入、公开来源、处理后的 CSV 或曲线数据。' },
  { title: 'scripts/', desc: '可运行脚本、后处理脚本和生成图表命令。' },
  { title: 'results/', desc: '曲线、表格、回放文件、误差说明和验证报告。' }
];

export const reviewQuestions = [
  { title: '数据从哪来？', desc: '是否能追溯到 TLE、任务页面、论文、报告或官方文档。' },
  { title: '怎么重新跑？', desc: '是否有命令、依赖、版本和最小运行路径。' },
  { title: '对照什么？', desc: '是否有公开基准、工具对照、论文曲线或物理一致性检查。' },
  { title: '哪里不可信？', desc: '是否写清估计参数、低阶模型、误差和不适用范围。' }
];
