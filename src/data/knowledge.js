export const knowledgeDomains = [
  {
    id: 'orbit', title: '轨道与任务分析', type: '理论域', maturity: '基础核心',
    summary: '轨道传播、摄动、转移、星历、覆盖、通信窗口和任务规划。',
    dependsOn: ['数学基础', '坐标系', '时间系统'],
    connectsTo: ['ISS / 天宫', '低轨星座', '深空探测器', '任务回放'],
    tools: ['GMAT', 'Orekit', 'Tudat', 'STK'],
    docs: '/docs/tools/orbit-and-mission-analysis',
    firstTask: '读取 ISS TLE，计算指定地面站 24 小时过境窗口。',
    inputs: ['TLE', '地面站经纬度', 'UTC 时间段', '地球参考系'],
    outputs: ['轨道状态', '访问窗口', '轨迹回放', '误差说明'],
    validation: ['与 CelesTrak/公开过境工具对照', '检查时间系统与坐标系', '记录 TLE 历元'],
    pitfalls: ['把 TLE 当高精度轨道', 'UTC/TAI/TT 混用', '只画轨迹不做误差说明'],
    relatedVehicles: ['ISS', '中国空间站', 'Starlink 低轨星座']
  },
  {
    id: 'gnc', title: 'GNC / ADCS', type: '理论域', maturity: '核心进阶',
    summary: '制导、导航、控制、姿态动力学、传感器、执行机构和闭环验证。',
    dependsOn: ['动力学', '控制理论', '估计理论'],
    connectsTo: ['卫星', '月球着陆器', '再入飞行器'],
    tools: ['Simulink', 'Basilisk', 'NASA 42', 'Python / Jupyter'],
    docs: '/docs/intro',
    firstTask: '建立一个刚体姿态稳定实验，输出姿态角、角速度、控制力矩和收敛时间。',
    inputs: ['惯量矩阵', '初始姿态', '控制律参数', '传感器噪声'],
    outputs: ['姿态响应', '控制量', '稳定时间', '误差曲线'],
    validation: ['单位阶跃/初值响应检查', '能量和角动量趋势检查', '与线性化模型对照'],
    pitfalls: ['直接堆复杂闭环', '没有执行机构饱和', '忽略传感器噪声和坐标系定义'],
    relatedVehicles: ['低轨卫星', '月球着陆器', 'Orion 载人飞船']
  },
  {
    id: 'propulsion', title: '推进与动力系统', type: '理论域', maturity: '工程核心',
    summary: '发动机性能、比冲、推力曲线、质量流率、CEA、推进剂和系统级模型。',
    dependsOn: ['热力学', '流体力学', '燃烧'],
    connectsTo: ['运载火箭', '月球着陆器', '深空探测器'],
    tools: ['RocketCEA', 'Cantera', 'Python / Jupyter'],
    docs: '/docs/tools/engineering-software-landscape',
    firstTask: '用公开发动机参数建立推力/比冲/质量流率估算，并接入火箭速度增量预算。',
    inputs: ['推进剂组合', '室压/喷管假设', '发动机数量', '工作时间'],
    outputs: ['比冲估计', '质量流率', '推力时间线', 'Δv 预算'],
    validation: ['与公开发动机参数量级对照', '检查质量闭合', '记录节流曲线假设'],
    pitfalls: ['只看真空推力不看海平面段', '不记录质量估计来源', '把 CEA 输出当完整发动机模型'],
    relatedVehicles: ['Falcon 9', '长征五号', 'Starship']
  },
  {
    id: 'aero-cfd', title: '气动 / CFD / 再入', type: '理论域', maturity: '工程进阶',
    summary: '气动数据库、外形建模、CFD、热流、激波、再入环境和不确定性。',
    dependsOn: ['流体力学', '数值方法', '热传递'],
    connectsTo: ['运载火箭', '再入飞行器', '高超声速飞行器'],
    tools: ['OpenVSP', 'SU2', 'OpenFOAM', 'ParaView'],
    docs: '/docs/tools/cfd-and-aero',
    firstTask: '用简化钝体或整流罩外形跑一个低阶气动/热流对照实验。',
    inputs: ['外形尺寸', '马赫数/高度', '网格', '边界条件'],
    outputs: ['气动力系数', '压力/热流云图', '收敛曲线', '适用范围'],
    validation: ['网格无关性检查', '与工程公式或论文曲线对照', '记录求解器和边界条件'],
    pitfalls: ['只有漂亮云图没有收敛', '几何简化不说明', '超出求解器适用范围'],
    relatedVehicles: ['Starship', 'Orion', 'Apollo 指令舱']
  },
  {
    id: 'structures', title: '结构 / FEM / 多体', type: '理论域', maturity: '工程基础',
    summary: '结构强度、热-结构耦合、模态、载荷路径、多体动力学和机构约束。',
    dependsOn: ['材料力学', '有限元', '多体动力学'],
    connectsTo: ['运载火箭', '空间站', '再入飞行器'],
    tools: ['Ansys Mechanical', 'ModelCenter', 'Python / Jupyter'],
    docs: '/docs/intro',
    firstTask: '建立简化梁/舱段结构模型，计算载荷路径、模态和约束反力。',
    inputs: ['几何简化', '材料参数', '边界条件', '载荷工况'],
    outputs: ['应力/位移', '模态频率', '载荷路径', '安全裕度'],
    validation: ['简化梁理论对照', '网格收敛', '边界条件复核'],
    pitfalls: ['边界条件乱设', '材料参数来源不清', '没有做单位和量级检查'],
    relatedVehicles: ['长征五号', '空间站', '再入舱']
  },
  {
    id: 'vv', title: '验证与确认', type: '方法域', maturity: '可信度核心',
    summary: '模型假设、误差来源、验证门限、对照工具、复现实验和证据链。',
    dependsOn: ['统计', '误差分析', '工程试验'],
    connectsTo: ['全部任务案例', '我的项目', '研究日志'],
    tools: ['Python / Jupyter', 'GMAT', 'Open MCT'],
    docs: '/reproduction-lab',
    firstTask: '给任意一个仿真实验补齐来源、输入、输出、误差、不可用边界和下一步。',
    inputs: ['公开来源', '模型假设', '输出曲线', '对照对象'],
    outputs: ['验证表', '误差说明', '证据链记录', '复现实验归档'],
    validation: ['可重复运行', '可追溯来源', '有对照指标', '有失败记录'],
    pitfalls: ['只展示结果不记录假设', '没有版本和数据时间戳', '把估计写成事实'],
    relatedVehicles: ['全部对象']
  }
];

export const knowledgeObjects = [
  { id: 'launch-vehicle', title: '运载火箭', modules: ['推进', '气动', '结构', 'GNC', '弹道', '级间分离'], relatedDomains: ['orbit', 'propulsion', 'aero-cfd', 'structures', 'vv'], firstExperiment: 'Falcon 9 / 长征五号简化入轨预算', output: 'Δv 预算 + 事件时间线 + 目标轨道对照' },
  { id: 'satellite', title: '卫星', modules: ['轨道', '姿态', '电源', '热控', '通信', '载荷'], relatedDomains: ['orbit', 'gnc', 'vv'], firstExperiment: 'TLE 传播与地面站过境', output: '访问窗口 + 姿态/GNC 后续入口' },
  { id: 'space-station', title: '空间站', modules: ['交会对接', '姿态保持', '热控', '电源', '载人支持'], relatedDomains: ['orbit', 'gnc', 'structures', 'vv'], firstExperiment: 'ISS / 天宫过境与任务回放', output: '轨道回放 + 对接事件时间线' },
  { id: 'probe-lander', title: '探测器 / 着陆器', modules: ['深空转移', '制动', '下降制导', '通信', '着陆约束'], relatedDomains: ['orbit', 'gnc', 'propulsion', 'vv'], firstExperiment: '天问一号地火转移与近火制动示意', output: '行星星历 + 任务事件链' },
  { id: 'reentry-vehicle', title: '再入飞行器', modules: ['再入轨迹', '气动热', '热防护', '过载', '落点散布'], relatedDomains: ['aero-cfd', 'gnc', 'structures', 'vv'], firstExperiment: 'Apollo / Orion 再入走廊复现', output: '热流/过载趋势 + 误差说明' }
];

export const knowledgeEdges = [
  { from: '运载火箭', to: '推进与动力系统', reason: '发动机性能、推力曲线和质量流率决定入轨能力。' },
  { from: '运载火箭', to: '气动 / CFD / 再入', reason: '上升段阻力、气动载荷和热环境影响轨迹与结构。' },
  { from: '卫星', to: 'GNC / ADCS', reason: '姿态控制、传感器和执行机构决定载荷指向与任务效能。' },
  { from: '低轨星座', to: '轨道与任务分析', reason: '轨道面、相位、覆盖和通信窗口依赖轨道传播。' },
  { from: '月球着陆器', to: '验证与确认', reason: '下降制导和终端约束必须通过对照、误差分析和复现实验验证。' },
  { from: '再入飞行器', to: '气动 / CFD / 再入', reason: '外形、速度高度走廊和热防护边界决定再入模型可信度。' },
  { from: '空间站', to: '轨道与任务分析', reason: '过境、可见性、轨道维持和交会对接都依赖轨道传播与事件建模。' }
];
