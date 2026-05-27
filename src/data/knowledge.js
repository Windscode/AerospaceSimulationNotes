export const knowledgeDomains = [
  {
    id: 'orbit', title: '轨道与任务分析', type: '理论域', maturity: '基础核心',
    summary: '轨道传播、摄动、转移、星历、覆盖、通信窗口和任务规划。',
    dependsOn: ['数学基础', '坐标系', '时间系统'],
    connectsTo: ['低轨卫星', '低轨星座', '月球着陆器', '任务回放'],
    tools: ['GMAT', 'Orekit', 'Tudat', 'STK'],
    docs: '/docs/tools/orbit-and-mission-analysis'
  },
  {
    id: 'gnc', title: 'GNC / ADCS', type: '理论域', maturity: '核心进阶',
    summary: '制导、导航、控制、姿态动力学、传感器、执行机构和闭环验证。',
    dependsOn: ['动力学', '控制理论', '估计理论'],
    connectsTo: ['卫星', '月球着陆器', '再入飞行器'],
    tools: ['Simulink', 'Basilisk', 'NASA 42', 'Python / Jupyter'],
    docs: '/docs/intro'
  },
  {
    id: 'propulsion', title: '推进与动力系统', type: '理论域', maturity: '工程核心',
    summary: '发动机性能、比冲、推力曲线、质量流率、CEA、推进剂和系统级模型。',
    dependsOn: ['热力学', '流体力学', '燃烧'],
    connectsTo: ['运载火箭', '月球着陆器', '深空探测器'],
    tools: ['RocketCEA', 'Cantera', 'Python / Jupyter'],
    docs: '/docs/tools/engineering-software-landscape'
  },
  {
    id: 'aero-cfd', title: '气动 / CFD / 再入', type: '理论域', maturity: '工程进阶',
    summary: '气动数据库、外形建模、CFD、热流、激波、再入环境和不确定性。',
    dependsOn: ['流体力学', '数值方法', '热传递'],
    connectsTo: ['运载火箭', '再入飞行器', '高超声速飞行器'],
    tools: ['OpenVSP', 'SU2', 'OpenFOAM', 'ParaView'],
    docs: '/docs/tools/cfd-and-aero'
  },
  {
    id: 'structures', title: '结构 / FEM / 多体', type: '理论域', maturity: '工程基础',
    summary: '结构强度、热-结构耦合、模态、载荷路径、多体动力学和机构约束。',
    dependsOn: ['材料力学', '有限元', '多体动力学'],
    connectsTo: ['运载火箭', '空间站', '再入飞行器'],
    tools: ['Ansys Mechanical', 'ModelCenter', 'Python / Jupyter'],
    docs: '/docs/intro'
  },
  {
    id: 'vv', title: '验证与确认', type: '方法域', maturity: '可信度核心',
    summary: '模型假设、误差来源、验证门限、对照工具、复现实验和证据链。',
    dependsOn: ['统计', '误差分析', '工程试验'],
    connectsTo: ['全部任务案例', '我的项目', '研究日志'],
    tools: ['Python / Jupyter', 'GMAT', 'Open MCT'],
    docs: '/reproduction-lab'
  }
];

export const knowledgeObjects = [
  { id: 'launch-vehicle', title: '运载火箭', modules: ['推进', '气动', '结构', 'GNC', '弹道', '级间分离'], relatedDomains: ['orbit', 'propulsion', 'aero-cfd', 'structures', 'vv'] },
  { id: 'satellite', title: '卫星', modules: ['轨道', '姿态', '电源', '热控', '通信', '载荷'], relatedDomains: ['orbit', 'gnc', 'vv'] },
  { id: 'space-station', title: '空间站', modules: ['交会对接', '姿态保持', '热控', '电源', '载人支持'], relatedDomains: ['orbit', 'gnc', 'structures', 'vv'] },
  { id: 'probe-lander', title: '探测器 / 着陆器', modules: ['深空转移', '制动', '下降制导', '通信', '着陆约束'], relatedDomains: ['orbit', 'gnc', 'propulsion', 'vv'] },
  { id: 'reentry-vehicle', title: '再入飞行器', modules: ['再入轨迹', '气动热', '热防护', '过载', '落点散布'], relatedDomains: ['aero-cfd', 'gnc', 'structures', 'vv'] }
];

export const knowledgeEdges = [
  { from: '运载火箭', to: '推进与动力系统', reason: '发动机性能、推力曲线和质量流率决定入轨能力。' },
  { from: '运载火箭', to: '气动 / CFD / 再入', reason: '上升段阻力、气动载荷和热环境影响轨迹与结构。' },
  { from: '卫星', to: 'GNC / ADCS', reason: '姿态控制、传感器和执行机构决定载荷指向与任务效能。' },
  { from: '低轨星座', to: '轨道与任务分析', reason: '轨道面、相位、覆盖和通信窗口依赖轨道传播。' },
  { from: '月球着陆器', to: '验证与确认', reason: '下降制导和终端约束必须通过对照、误差分析和复现实验验证。' }
];
