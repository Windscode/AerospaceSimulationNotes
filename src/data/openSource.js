export const openSourceProjects = [
  {
    id: 'orekit', title: 'Orekit', category: '轨道动力学库', language: 'Java', license: 'Apache-2.0', activity: '活跃', difficulty: '中高',
    summary: '成熟的航天动力学库，适合轨道传播、事件探测、坐标系统和工程集成。',
    canDo: ['TLE 传播', '地面站过境', '事件探测', '坐标转换'], runnableExample: true, personalLearning: true,
    workflowUse: ['轨道传播', '覆盖分析', '任务回放数据生成'], relatedTools: ['GMAT', 'Tudat', 'CesiumJS'], confidence: '高'
  },
  {
    id: 'tudat', title: 'Tudat', category: '轨道动力学库', language: 'C++ / Python', license: 'BSD', activity: '活跃', difficulty: '高',
    summary: '研究型航天动力学工具，适合高精度传播、参数估计和不确定性分析。',
    canDo: ['轨道传播', '参数估计', '摄动建模', '深空任务分析'], runnableExample: true, personalLearning: true,
    workflowUse: ['动力学对照', '参数估计', '论文复现'], relatedTools: ['Orekit', 'GMAT', 'Python / Jupyter'], confidence: '中高'
  },
  {
    id: 'basilisk', title: 'Basilisk', category: '姿态动力学 / GNC', language: 'C++ / Python', license: 'BSD', activity: '活跃', difficulty: '高',
    summary: '航天器动力学与 GNC 仿真框架，适合姿态控制、传感器、执行机构和任务仿真。',
    canDo: ['姿态控制', '传感器建模', '执行机构建模', '任务仿真'], runnableExample: true, personalLearning: true,
    workflowUse: ['GNC 验证', '姿态控制实验', '任务回放'], relatedTools: ['NASA 42', 'Simulink', 'Open MCT'], confidence: '中高'
  },
  {
    id: 'cfs', title: 'cFS', category: '飞行软件', language: 'C', license: 'NASA Open Source', activity: '活跃', difficulty: '高',
    summary: 'NASA core Flight System，适合作为飞行软件架构和仿真接口参考。',
    canDo: ['飞行软件架构', '消息总线', '应用框架', '任务软件参考'], runnableExample: true, personalLearning: false,
    workflowUse: ['飞行软件参考', '遥测接口', '任务软件架构'], relatedTools: ['F Prime', 'Open MCT', 'Docker'], confidence: '中高'
  },
  {
    id: 'openmct', title: 'Open MCT', category: '任务控制与遥测', language: 'JavaScript', license: 'Apache-2.0', activity: '活跃', difficulty: '中',
    summary: 'NASA 开源任务控制和遥测可视化框架，适合把仿真结果做成任务控制台。',
    canDo: ['遥测显示', '时间序列', '任务控制界面', '插件扩展'], runnableExample: true, personalLearning: true,
    workflowUse: ['遥测可视化', '任务回放', '仿真监控'], relatedTools: ['CesiumJS', 'cFS', 'Python / Jupyter'], confidence: '高'
  },
  {
    id: 'openvsp', title: 'OpenVSP', category: '几何 / 气动前处理', language: 'C++', license: 'NASA Open Source', activity: '活跃', difficulty: '中',
    summary: 'NASA 开源参数化几何工具，适合飞机/飞行器外形建模和气动分析入口。',
    canDo: ['外形建模', '几何参数化', '气动前处理', '导出网格'], runnableExample: true, personalLearning: true,
    workflowUse: ['外形建模', 'CFD 前处理', '气动数据库初值'], relatedTools: ['SU2', 'OpenFOAM', 'ParaView'], confidence: '高'
  },
  {
    id: 'su2', title: 'SU2', category: 'CFD / 气动', language: 'C++ / Python', license: 'LGPL', activity: '活跃', difficulty: '中高',
    summary: '开源 CFD 和优化工具，适合气动计算、低阶数据库和形状优化。',
    canDo: ['CFD', '气动优化', '收敛分析', '气动力计算'], runnableExample: true, personalLearning: true,
    workflowUse: ['气动分析', 'CFD 对照', '再入初步分析'], relatedTools: ['OpenVSP', 'OpenFOAM', 'ParaView'], confidence: '中高'
  },
  {
    id: 'rocketpy', title: 'RocketPy', category: '火箭飞行仿真', language: 'Python', license: 'MIT', activity: '活跃', difficulty: '中',
    summary: '面向火箭飞行仿真的 Python 项目，适合学习弹道、气动、风场和飞行剖面。',
    canDo: ['火箭弹道', '风场影响', '飞行剖面', '参数扫描'], runnableExample: true, personalLearning: true,
    workflowUse: ['入轨前段近似', '火箭飞行动力学学习', '快速实验'], relatedTools: ['Python / Jupyter', 'RocketCEA'], confidence: '中'
  }
];

export const datasets = [
  {
    id: 'celestrak', title: 'CelesTrak', organization: 'CelesTrak', type: 'TLE / 轨道数据', updateCycle: '持续更新', format: 'TLE / CSV / JSON',
    scenario: '卫星轨道传播、星座覆盖、历史任务复盘。', confidence: '高', limitation: 'TLE 精度有限，不适合高精度轨道确定。', exampleUse: '读取 Starlink TLE 并生成一日轨迹。'
  },
  {
    id: 'nasa-jpl-horizons', title: 'JPL Horizons', organization: 'NASA / JPL', type: '星历 / 天体状态', updateCycle: '持续维护', format: 'Text / API',
    scenario: '深空任务、行星/月球星历、任务窗口估算。', confidence: '高', limitation: '需要理解时间系统和坐标系。', exampleUse: '获取月球状态用于近月转移初始条件。'
  },
  {
    id: 'nasa-images-reports', title: 'NASA Mission Pages / Technical Reports', organization: 'NASA', type: '任务页面 / 报告 / 图像', updateCycle: '任务驱动', format: 'HTML / PDF / Image',
    scenario: '任务背景、飞行器参数、图像参考、公开报告证据。', confidence: '中高', limitation: '公开页面通常不提供完整工程参数。', exampleUse: '整理某探测器公开参数并标注可信度。'
  },
  {
    id: 'esa-science', title: 'ESA Science & Technology', organization: 'ESA', type: '任务资料 / 技术说明', updateCycle: '任务驱动', format: 'HTML / PDF',
    scenario: '欧空局任务、探测器、科学载荷和任务剖面研究。', confidence: '中高', limitation: '部分数据偏科普，需要交叉验证。', exampleUse: '对比任务页面与论文中的轨道参数。'
  }
];
