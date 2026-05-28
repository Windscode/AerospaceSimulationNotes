export const openSourceProjects = [
  {
    id: 'orekit', title: 'Orekit', category: '轨道动力学库', language: 'Java', license: 'Apache-2.0', activity: '活跃', difficulty: '中高',
    summary: '成熟的航天动力学库，适合轨道传播、事件探测、坐标系统、时间系统和工程集成。它不是演示软件，而是能进入后端服务和批量计算的核心库。',
    canDo: ['TLE/SGP4 传播', '地面站过境', '事件探测', '坐标/时间转换', '摄动轨道传播'], runnableExample: true, personalLearning: true,
    workflowUse: ['ISS/天宫过境计算', '低轨星座覆盖', '任务回放数据生成'], relatedTools: ['GMAT', 'Tudat', 'CesiumJS'], confidence: '高',
    startPlan: '先用官方示例读取 TLE，计算指定地面站 24 小时过境；再把结果导出给 Cesium。',
    watchRisk: 'Java 工程结构和时间系统门槛较高，初学者容易把 UTC、TT、TAI 和坐标系混用。'
  },
  {
    id: 'tudat', title: 'Tudat', category: '轨道动力学库', language: 'C++ / Python', license: 'BSD', activity: '活跃', difficulty: '高',
    summary: '研究型航天动力学工具，适合高精度传播、参数估计、多体引力和不确定性分析。更适合研究验证，不适合当第一个入门工具。',
    canDo: ['高精度传播', '参数估计', '摄动建模', '深空任务分析', '蒙特卡洛'], runnableExample: true, personalLearning: true,
    workflowUse: ['动力学对照', '参数估计', '论文复现'], relatedTools: ['Orekit', 'GMAT', 'Python / Jupyter'], confidence: '中高',
    startPlan: '从二体/J2/大气阻力对比开始，输出轨道差异曲线，作为后续高精度传播基准。',
    watchRisk: '模型选项多，容易一上来做得太复杂；必须先固定验证对象和误差指标。'
  },
  {
    id: 'gmat', title: 'GMAT', category: '任务分析工具', language: 'C++ / Script', license: 'NASA Open Source', activity: '成熟维护', difficulty: '中',
    summary: 'NASA 开源任务分析工具，适合轨道设计、机动规划、深空任务和脚本化验证，是 STK 之外最值得先学的任务级工具之一。',
    canDo: ['轨道传播', 'Hohmann 转移', '深空任务', '机动优化', '任务脚本'], runnableExample: true, personalLearning: true,
    workflowUse: ['火箭入轨目标校核', '地月/地火转移', '任务窗口估算'], relatedTools: ['STK', 'Orekit', 'Tudat'], confidence: '高',
    startPlan: '复现一个 Hohmann 转移，再把状态量导出给 Python 绘图。',
    watchRisk: 'GUI 好上手，但工程化批处理和版本管理要尽早用脚本组织。'
  },
  {
    id: 'basilisk', title: 'Basilisk', category: '姿态动力学 / GNC', language: 'C++ / Python', license: 'BSD', activity: '活跃', difficulty: '高',
    summary: '航天器动力学与 GNC 仿真框架，适合姿态控制、传感器、执行机构、任务仿真和模块化软件架构学习。',
    canDo: ['姿态控制', '传感器建模', '执行机构建模', '轨道/姿态耦合', '任务仿真'], runnableExample: true, personalLearning: true,
    workflowUse: ['GNC 验证', '姿态控制实验', '月球着陆器控制链'], relatedTools: ['NASA 42', 'Simulink', 'Open MCT'], confidence: '中高',
    startPlan: '先跑姿态稳定示例，只改惯量、轮控参数和初始姿态，不要一开始接复杂任务。',
    watchRisk: '依赖和编译环境会劝退；需要保留可复现环境记录。'
  },
  {
    id: 'nasa-42', title: 'NASA 42', category: '姿态动力学 / GNC', language: 'C', license: 'NASA Open Source', activity: '成熟', difficulty: '高',
    summary: 'NASA 开源的多航天器姿态与轨道仿真工具，适合学习航天器姿态动力学、环境力矩、传感器和执行机构建模。',
    canDo: ['多航天器仿真', '姿态动力学', '环境力矩', '传感器/执行机构', '轨道姿态耦合'], runnableExample: true, personalLearning: true,
    workflowUse: ['姿态动力学基准', 'GNC 概念验证', 'Basilisk 对照'], relatedTools: ['Basilisk', 'Simulink', 'Python / Jupyter'], confidence: '中高',
    startPlan: '先修改一个现成 spacecraft 配置，观察姿态、角速度和控制量输出。',
    watchRisk: '配置文件体系需要时间理解，适合做对照基准，不适合一上来改成产品界面。'
  },
  {
    id: 'cfs', title: 'cFS', category: '飞行软件', language: 'C', license: 'NASA Open Source', activity: '活跃', difficulty: '高',
    summary: 'NASA core Flight System，适合作为飞行软件架构、消息总线、应用框架和仿真接口参考。',
    canDo: ['飞行软件架构', '消息总线', '应用框架', '任务软件参考'], runnableExample: true, personalLearning: false,
    workflowUse: ['飞行软件参考', '遥测接口', '任务软件架构'], relatedTools: ['F Prime', 'Open MCT', 'Docker'], confidence: '中高',
    startPlan: '先理解 cFE、software bus、应用插件和示例任务，不急着移植完整系统。',
    watchRisk: '这是飞行软件架构参考，不是普通仿真库；学习成本高。'
  },
  {
    id: 'f-prime', title: 'F Prime', category: '飞行软件', language: 'C++ / Python', license: 'Apache-2.0', activity: '活跃', difficulty: '中高',
    summary: 'JPL 开源的飞行软件与嵌入式系统框架，适合研究组件化、命令/遥测、地面工具和小型航天器软件工程。',
    canDo: ['组件化飞行软件', '命令/遥测', '单元测试', '地面工具', '小卫星软件架构'], runnableExample: true, personalLearning: true,
    workflowUse: ['任务软件原型', '遥测接口设计', '项目工程化'], relatedTools: ['cFS', 'Open MCT', 'Docker'], confidence: '中高',
    startPlan: '先跑 Hello World 和基础部署示例，再抽象一个“仿真遥测组件”。',
    watchRisk: '不要把它当网页框架；它解决的是任务软件工程结构问题。'
  },
  {
    id: 'openmct', title: 'Open MCT', category: '任务控制与遥测', language: 'JavaScript', license: 'Apache-2.0', activity: '活跃', difficulty: '中',
    summary: 'NASA 开源任务控制和遥测可视化框架，适合把仿真结果做成任务控制台，而不是只留 CSV 与折线图。',
    canDo: ['遥测显示', '时间序列', '任务控制界面', '插件扩展'], runnableExample: true, personalLearning: true,
    workflowUse: ['遥测可视化', '任务回放', '仿真监控'], relatedTools: ['CesiumJS', 'cFS', 'Python / Jupyter'], confidence: '高',
    startPlan: '先把一组轨道传播 CSV 转成时间序列遥测，再加事件标记。',
    watchRisk: '数据模型和插件体系要提前设计，否则会变成漂亮但不可维护的页面。'
  },
  {
    id: 'celestia', title: 'Celestia', category: '三维空间可视化', language: 'C++ / Lua', license: 'GPL', activity: '成熟', difficulty: '中',
    summary: '实时三维空间可视化软件，适合航天科普、轨道展示、场景演示和对象库学习，不适合替代高精度任务分析。',
    canDo: ['三维空间展示', '轨道可视化', '天体/航天器场景', 'Lua 脚本'], runnableExample: true, personalLearning: true,
    workflowUse: ['任务演示', '对象可视化', '网站素材参考'], relatedTools: ['CesiumJS', 'STK', 'OpenSpace'], confidence: '中',
    startPlan: '用一个公开轨道对象做三维展示，记录它与 Cesium/任务分析工具的边界。',
    watchRisk: '视觉演示价值高，但工程计算和验证能力有限。'
  },
  {
    id: 'openvsp', title: 'OpenVSP', category: '几何 / 气动前处理', language: 'C++', license: 'NASA Open Source', activity: '活跃', difficulty: '中',
    summary: 'NASA 开源参数化几何工具，适合飞机/飞行器外形建模、快速几何迭代和气动分析入口。',
    canDo: ['外形建模', '几何参数化', '气动前处理', '导出网格'], runnableExample: true, personalLearning: true,
    workflowUse: ['外形建模', 'CFD 前处理', '气动数据库初值'], relatedTools: ['SU2', 'OpenFOAM', 'ParaView'], confidence: '高',
    startPlan: '先建立一个简化再入舱或火箭整流罩外形，导出给 CFD 或可视化工具。',
    watchRisk: '几何简化必须记录，否则后续 CFD 结果没有解释力。'
  },
  {
    id: 'su2', title: 'SU2', category: 'CFD / 气动', language: 'C++ / Python', license: 'LGPL', activity: '活跃', difficulty: '中高',
    summary: '开源 CFD 和优化工具，适合气动计算、低阶数据库、参数扫描和形状优化。',
    canDo: ['CFD', '气动优化', '收敛分析', '气动力计算'], runnableExample: true, personalLearning: true,
    workflowUse: ['气动分析', 'CFD 对照', '再入初步分析'], relatedTools: ['OpenVSP', 'OpenFOAM', 'ParaView'], confidence: '中高',
    startPlan: '先跑官方算例，再替换为简化舱体或翼型，记录网格、边界条件和收敛曲线。',
    watchRisk: 'CFD 很容易做出“漂亮错图”，必须保留网格和边界条件。'
  },
  {
    id: 'openfoam', title: 'OpenFOAM', category: 'CFD / 气动', language: 'C++', license: 'GPL', activity: '活跃', difficulty: '高',
    summary: '开源 CFD 工具箱，适合流动、热环境、求解器研究和工程验证，学习成本高但可扩展性强。',
    canDo: ['可压缩流', '边界层', '热流估算', '网格与求解器', '后处理'], runnableExample: true, personalLearning: true,
    workflowUse: ['再入热环境', '气动对照', '流场可视化'], relatedTools: ['SU2', 'OpenVSP', 'ParaView'], confidence: '中高',
    startPlan: '先做标准可压缩外流算例，再尝试简化钝体。',
    watchRisk: '求解器选择和网格质量决定结果可信度，不能只看云图。'
  },
  {
    id: 'rocketpy', title: 'RocketPy', category: '火箭飞行仿真', language: 'Python', license: 'MIT', activity: '活跃', difficulty: '中',
    summary: '面向火箭飞行仿真的 Python 项目，适合学习弹道、气动、风场、飞行剖面和参数扫描。',
    canDo: ['火箭弹道', '风场影响', '飞行剖面', '参数扫描'], runnableExample: true, personalLearning: true,
    workflowUse: ['入轨前段近似', '火箭飞行动力学学习', '快速实验'], relatedTools: ['Python / Jupyter', 'RocketCEA'], confidence: '中',
    startPlan: '先跑 sounding rocket 示例，再改质量、阻力和风场，观察落点散布。',
    watchRisk: '更偏探空/模型火箭飞行仿真，不等于大型入轨火箭全流程。'
  }
];

export const datasets = [
  {
    id: 'celestrak', title: 'CelesTrak', organization: 'CelesTrak', type: 'TLE / 轨道数据', updateCycle: '持续更新', format: 'TLE / CSV / JSON',
    scenario: '卫星轨道传播、星座覆盖、ISS/天宫过境、历史任务复盘。', confidence: '高', limitation: 'TLE 精度有限，不适合高精度轨道确定。', exampleUse: '读取 Starlink 或 ISS TLE 并生成一日轨迹。'
  },
  {
    id: 'jpl-horizons', title: 'JPL Horizons', organization: 'NASA / JPL', type: '星历 / 天体状态', updateCycle: '持续维护', format: 'Text / API',
    scenario: '深空任务、地月/地火转移、行星/月球星历和任务窗口估算。', confidence: '高', limitation: '需要理解时间系统、参考系和历元。', exampleUse: '获取地球、月球和火星状态用于转移轨道初始条件。'
  },
  {
    id: 'nasa-spice', title: 'NAIF SPICE Kernels', organization: 'NASA / NAIF', type: 'SPICE 内核 / 几何状态', updateCycle: '任务维护', format: 'SPK / CK / FK / PCK',
    scenario: '深空任务几何、探测器姿态、天体参考系、精确任务回放。', confidence: '高', limitation: '学习门槛高，必须理解 kernel 类型与参考系。', exampleUse: '用 SPICE 重建某深空任务的相对几何。'
  },
  {
    id: 'nasa-ntrs', title: 'NASA Technical Reports Server', organization: 'NASA', type: '技术报告 / 历史论文', updateCycle: '持续归档', format: 'PDF / Metadata',
    scenario: 'Apollo 再入、气动热、结构、GNC、任务分析等历史报告检索。', confidence: '中高', limitation: '报告时代和单位体系不同，需二次整理。', exampleUse: '找到 Apollo 指令舱热流或过载曲线用于复现。'
  },
  {
    id: 'esa-science', title: 'ESA Science & Technology', organization: 'ESA', type: '任务资料 / 技术说明', updateCycle: '任务驱动', format: 'HTML / PDF',
    scenario: '欧空局任务、探测器、科学载荷和任务剖面研究。', confidence: '中高', limitation: '部分页面偏科普，需要论文或数据交叉验证。', exampleUse: '对比任务页面与论文中的轨道参数。'
  },
  {
    id: 'space-track', title: 'Space-Track / TLE Sources', organization: 'USSPACECOM / 社区镜像', type: '空间目标轨道数据', updateCycle: '持续更新', format: 'TLE / API',
    scenario: '卫星编目、在轨目标跟踪、星座数据管线。', confidence: '中高', limitation: '访问、许可和数据再分发规则需要确认。', exampleUse: '构建低轨星座每日更新任务。'
  },
  {
    id: 'mission-pages', title: 'Mission Pages / Press Kits', organization: 'NASA / ESA / SpaceX / CNSA 等', type: '任务页面 / 新闻稿 / Press Kit', updateCycle: '任务驱动', format: 'HTML / PDF / Image',
    scenario: '任务背景、飞行器参数、飞行事件、公开图片和时间线证据。', confidence: '中', limitation: '公开页面通常不提供完整工程参数。', exampleUse: '把发射新闻中的目标轨道、载荷和时间线转入任务档案。'
  }
];
