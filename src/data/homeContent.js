export const focusDomains = [
  {
    title: 'Orbital Mechanics',
    kicker: 'Orbit propagation / transfer / mission design',
    description: '轨道传播、摄动建模、机动设计、交会与任务分析。',
    link: '/docs/learning-path/orbital-mechanics',
  },
  {
    title: 'Spacecraft Dynamics',
    kicker: 'Attitude / rigid body / environment',
    description: '姿态运动学、刚体动力学、四元数、环境力矩与状态传播。',
    link: '/docs/learning-path/spacecraft-dynamics',
  },
  {
    title: 'GNC / ADCS',
    kicker: 'Guidance / navigation / control',
    description: '导航估计、制导律、姿态确定与控制、执行机构约束。',
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
    description: '气动数据库、离线 CFD、再入环境、高速气动和模型校准。',
    link: '/docs/learning-path/aerodynamics-cfd',
  },
  {
    title: 'Simulation Architecture',
    kicker: 'Runtime / validation / digital thread',
    description: '仿真架构、数据接口、状态权威源、验证基准和工程集成路线。',
    link: '/docs/learning-path/simulation-architecture',
  },
];

export const featuredProjects = [
  {
    name: 'Orekit',
    type: 'Astrodynamics library',
    rating: 'A-watch',
    description: '工程级轨道动力学、坐标系、星历与事件计算参考。',
    tags: ['Orbit', 'Java', 'Mission'],
    link: '/docs/tools/orbit-mission-analysis',
  },
  {
    name: 'GMAT',
    type: 'Mission analysis tool',
    rating: 'A-benchmark',
    description: '轨道转移、优化和任务分析的独立对照基准。',
    tags: ['Orbit', 'Validation', 'Transfer'],
    link: '/docs/tools/orbit-mission-analysis',
  },
  {
    name: 'Basilisk',
    type: 'Spacecraft simulation framework',
    rating: 'A-study',
    description: '航天器动力学、姿态控制与任务级闭环仿真研究框架。',
    tags: ['ADCS', 'Dynamics', 'GNC'],
    link: '/docs/tools/six-dof-flight-dynamics',
  },
  {
    name: 'JSBSim',
    type: 'Flight dynamics model',
    rating: 'A-integration',
    description: '飞行动力学、六自由度和飞行仿真集成的重要参考。',
    tags: ['6DOF', 'Flight', 'C++'],
    link: '/docs/tools/six-dof-flight-dynamics',
  },
];

export const latestRadar = [
  {
    date: '2026-05-21',
    category: 'Site',
    title: 'Professional portal redesign',
    description: 'The website is rebuilt as a research portal, project radar and maintainable knowledge base.',
    link: '/docs/methodology/design-system',
  },
  {
    date: 'Daily',
    category: 'Workflow',
    title: 'Daily intake loop',
    description: 'New findings enter daily intake first, then move into stable dossiers after evaluation.',
    link: '/docs/operations/daily-intake-template',
  },
  {
    date: 'Ongoing',
    category: 'Radar',
    title: 'Project evaluation board',
    description: 'Open-source projects are graded by maturity, reproducibility and engineering relevance.',
    link: '/docs/radar/project-radar-board',
  },
];

export const workflowSteps = [
  { step: '01', title: 'Discover', description: 'Find papers, tools, repositories, datasets and technical reports.' },
  { step: '02', title: 'Triage', description: 'Decide whether the item is worth reading, testing or archiving.' },
  { step: '03', title: 'Reproduce', description: 'Build locally, run examples and record the exact environment.' },
  { step: '04', title: 'Validate', description: 'Compare results with trusted tools, papers or independent implementations.' },
  { step: '05', title: 'Archive', description: 'Convert the finding into a stable dossier, template or engineering note.' },
];
