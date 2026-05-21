export const focusDomains = [
  {
    title: 'Orbital Mechanics',
    kicker: 'Orbit propagation / transfer / mission design',
    description: '轨道传播、摄动建模、轨道机动、交会与任务分析。',
    link: '/docs/learning-path/orbital-mechanics',
  },
  {
    title: 'Spacecraft Dynamics',
    kicker: 'Attitude / rigid body / environment',
    description: '姿态运动学、刚体动力学、四元数、环境力矩与航天器状态传播。',
    link: '/docs/learning-path/spacecraft-dynamics',
  },
  {
    title: 'GNC / ADCS',
    kicker: 'Guidance / navigation / control',
    description: '导航估计、制导律、姿态确定与控制、执行机构约束和闭环验证。',
    link: '/docs/learning-path/gnc-adcs',
  },
  {
    title: 'Propulsion',
    kicker: 'Thrust / mass flow / engine model',
    description: '发动机性能、推力曲线、质量变化、轨控推进与动力学耦合。',
    link: '/docs/learning-path/propulsion',
  },
  {
    title: 'Aerodynamics / CFD',
    kicker: 'Aero database / CFD / reentry',
    description: '气动数据库、CFD 离线计算、再入环境与模型校准。',
    link: '/docs/learning-path/aerodynamics-cfd',
  },
  {
    title: 'Simulation Architecture',
    kicker: 'Runtime / validation / digital thread',
    description: '仿真架构、数据接口、状态权威源、验证基准和工程集成路线。',
    link: '/docs/engineering/overview',
  },
];

export const featuredProjects = [
  {
    name: 'Orekit',
    type: 'Astrodynamics library',
    rating: 'A-watch',
    description: '适合作为工程级轨道动力学、坐标系、星历与事件计算参考。',
    tags: ['Orbit', 'Java', 'Mission'],
    link: '/docs/tools/orbit-mission-analysis',
  },
  {
    name: 'GMAT',
    type: 'Mission analysis tool',
    rating: 'A-benchmark',
    description: '适合做轨道转移、优化和任务分析的对照基准。',
    tags: ['Orbit', 'Validation', 'Transfer'],
    link: '/docs/tools/orbit-mission-analysis',
  },
  {
    name: 'Basilisk',
    type: 'Spacecraft simulation framework',
    rating: 'A-study',
    description: '适合研究航天器动力学、姿态控制与任务级闭环仿真。',
    tags: ['ADCS', 'Dynamics', 'GNC'],
    link: '/docs/tools/six-dof-flight-dynamics',
  },
  {
    name: 'JSBSim',
    type: 'Flight dynamics model',
    rating: 'A-integration',
    description: '适合飞行动力学、六自由度与飞行仿真工程集成研究。',
    tags: ['6DOF', 'Flight', 'C++'],
    link: '/docs/tools/six-dof-flight-dynamics',
  },
];

export const latestRadar = [
  {
    date: '2026-05-21',
    category: 'Site',
    title: 'Build the first version of the aerospace simulation knowledge base',
    description: '完成站点基础结构、知识库分类、项目评估模板和研究日志入口。',
    link: '/blog/start-aerospace-simulation-notes',
  },
  {
    date: 'Daily',
    category: 'Workflow',
    title: 'Track, evaluate, reproduce and archive',
    description: '每天新增资料时优先记录价值判断、复现状态和下一步动作。',
    link: '/docs/methodology/maintenance-workflow',
  },
  {
    date: 'Ongoing',
    category: 'Radar',
    title: 'Create a project radar instead of a link dump',
    description: '对开源项目按工程成熟度、可复现性和集成价值分级。',
    link: '/docs/radar/overview',
  },
];

export const workflowSteps = [
  { step: '01', title: 'Discover', description: '从论文、GitHub、技术报告、工具文档和行业动态中发现资料。' },
  { step: '02', title: 'Evaluate', description: '判断领域相关性、工程成熟度、授权风险和是否值得投入。' },
  { step: '03', title: 'Reproduce', description: '本地编译、运行示例、记录环境、命令、问题和修正。' },
  { step: '04', title: 'Validate', description: '用基准工具、论文结果或独立实现交叉验证关键结果。' },
  { step: '05', title: 'Archive', description: '把结论沉淀为长期可查的知识条目。' },
];
