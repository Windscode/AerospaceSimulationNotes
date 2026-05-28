export const toolCategories = [
  '全部', '轨道与任务分析', 'GNC / ADCS', 'CFD / 气动', '结构 / FEM', '热控', '推进', 'CAD / 几何', '可视化', '系统仿真', '数据处理', '工程管理'
];

export const tools = [
  {
    id: 'matlab', title: 'MATLAB', category: 'GNC / ADCS', licenseType: '商业', difficulty: '中', status: '行业标准',
    summary: '算法原型、数值计算、数据处理和控制律设计的基础工具。',
    typicalUse: '轨道计算、GNC 原型、参数估计、数据分析。',
    audience: '学生、算法工程师、仿真工程师。',
    starterTask: '用二体动力学传播一个 LEO 轨道并画出轨迹。',
    firstRun: '先写一个 two_body_orbit.m，输入 r0/v0/mu，输出位置速度曲线、轨道能量误差和角动量误差。',
    bestFor: ['算法推导转脚本', '控制律原型', '仿真结果分析'],
    notFor: ['大型三维场景', '多人协作版本化模型', '免费开源交付'],
    evidenceUse: '适合作为公式、算法和数据处理的第一层验证；正式结论要把脚本、输入参数和误差图一起归档。',
    inputs: ['状态量', '参数表', '时间序列'], outputs: ['曲线', '脚本', '分析报告'],
    relatedTools: ['Simulink', 'Aerospace Blockset', 'Python / Jupyter'], relatedCases: ['轨道传播', '姿态控制'], confidence: '高'
  },
  {
    id: 'simulink', title: 'Simulink', category: 'GNC / ADCS', licenseType: '商业', difficulty: '中高', status: '行业标准',
    summary: '基于模型的系统仿真与闭环控制设计工具。',
    typicalUse: '控制律验证、状态机、传感器/执行机构建模、系统级仿真。',
    audience: '控制工程师、系统仿真工程师。',
    starterTask: '搭建一个姿态控制闭环，加入陀螺噪声和执行机构限幅。',
    firstRun: '从单轴姿态角开始：目标角、PD 控制器、反作用轮力矩饱和、陀螺噪声、角度误差曲线。',
    bestFor: ['闭环控制', '状态机', '执行机构与传感器误差'],
    notFor: ['纯数据库整理', '高性能批量蒙特卡洛', '复杂外流场 CFD'],
    evidenceUse: '适合保留模型框图、参数表和仿真波形；需要注明采样时间、求解器和执行机构限制。',
    inputs: ['模型框图', '控制参数', '输入信号'], outputs: ['仿真波形', '模型文件', '代码生成结果'],
    relatedTools: ['MATLAB', 'Stateflow', 'Basilisk'], relatedCases: ['姿态控制', '任务阶段状态机'], confidence: '高'
  },
  {
    id: 'stk', title: 'Ansys STK', category: '轨道与任务分析', licenseType: '商业', difficulty: '中', status: '行业标准',
    summary: '任务分析、轨道、覆盖、通信、传感器和场景可视化平台。',
    typicalUse: '星座覆盖、通信窗口、传感器可见性、任务场景搭建。',
    audience: '任务分析、系统工程、仿真验证人员。',
    starterTask: '建立一个 LEO 卫星对地面站的通信窗口分析。',
    firstRun: '新建地球场景，添加 Satellite + Facility，导入 TLE 或设置 Kepler 轨道，生成 Access Report。',
    bestFor: ['任务级场景', '覆盖与可见性', '对外展示和工程沟通'],
    notFor: ['免费开源复现', '底层算法透明推导', '自定义大规模服务端集成'],
    evidenceUse: '适合作为任务级基准和可视化对照；关键结论最好再用 GMAT / Orekit 做独立复核。',
    inputs: ['轨道参数', '传感器参数', '地面站位置'], outputs: ['访问窗口', '覆盖率', '场景动画'],
    relatedTools: ['ODTK', 'GMAT', 'CesiumJS'], relatedCases: ['低轨星座覆盖', '月球任务剖面'], confidence: '高'
  },
  {
    id: 'gmat', title: 'GMAT', category: '轨道与任务分析', licenseType: '开源', difficulty: '中', status: '成熟',
    summary: 'NASA 开源任务分析与轨道设计工具。',
    typicalUse: '轨道传播、机动设计、深空任务、转移窗口。',
    audience: '航天动力学学习者、任务分析工程师。',
    starterTask: '复现一个 Hohmann 转移并输出机动量。',
    firstRun: '先用 GUI 建立两段圆轨道转移，再保存脚本，检查 impulsive burn 的 delta-v 和末端轨道半径。',
    bestFor: ['轨道机动', '深空任务草案', '开源可复查脚本'],
    notFor: ['姿态控制闭环', '三维网页展示', '复杂多体软件系统集成'],
    evidenceUse: '适合作为轨道设计脚本证据；保存 .script、输入轨道、力模型设置和输出报告。',
    inputs: ['初始轨道', '力模型', '机动设置'], outputs: ['状态历程', '机动量', '任务脚本'],
    relatedTools: ['STK', 'Orekit', 'Tudat'], relatedCases: ['深空转移', '月球转移'], confidence: '高'
  },
  {
    id: 'orekit', title: 'Orekit', category: '轨道与任务分析', licenseType: '开源', difficulty: '中高', status: '成熟',
    summary: 'Java 航天动力学库，适合工程集成和批量计算。',
    typicalUse: '轨道传播、事件探测、坐标转换、星历处理。',
    audience: '软件工程师、任务分析开发者。',
    starterTask: '读取 TLE，传播 24 小时并计算地面站过境。',
    firstRun: '从官方 TLE 示例开始：加载 orekit-data，设置 OneAxisEllipsoid 和 TopocentricFrame，输出升起/落下事件。',
    bestFor: ['可编程轨道服务', '事件探测', '批量任务计算'],
    notFor: ['零代码场景搭建', '气动/热结构计算', '漂亮演示界面'],
    evidenceUse: '适合把任务分析转成可重复脚本；必须归档 orekit-data 版本、时间系统和地球模型。',
    inputs: ['TLE', '地球模型', '时间系统'], outputs: ['轨道状态', '事件时间', '访问窗口'],
    relatedTools: ['GMAT', 'Tudat', 'Python / Jupyter'], relatedCases: ['低轨星座覆盖'], confidence: '高'
  },
  {
    id: 'tudat', title: 'Tudat', category: '轨道与任务分析', licenseType: '开源', difficulty: '高', status: '研究常用',
    summary: '面向航天动力学研究的 C++/Python 工具库。',
    typicalUse: '高精度轨道传播、参数估计、不确定性分析。',
    audience: '研究生、动力学研究者、工程算法开发者。',
    starterTask: '对比二体、J2 和大气阻力摄动下的轨道漂移。',
    firstRun: '先跑官方 propagation_setup 示例，再逐项打开 J2、阻力、第三体引力，比较半长轴和 RAAN 漂移。',
    bestFor: ['高精度力模型', '参数估计', '研究型对照实验'],
    notFor: ['快速入门展示', '非程序员使用', '简单网页可视化'],
    evidenceUse: '适合做论文级对照和不确定性分析；要记录力模型开关、初值来源和估计参数。',
    inputs: ['动力学模型', '估计参数', '观测数据'], outputs: ['传播结果', '估计结果', '误差分析'],
    relatedTools: ['Orekit', 'GMAT', 'Python / Jupyter'], relatedCases: ['轨道确定', '参数估计'], confidence: '中高'
  },
  {
    id: 'basilisk', title: 'Basilisk', category: 'GNC / ADCS', licenseType: '开源', difficulty: '高', status: '研究常用',
    summary: '面向航天器动力学、传感器、执行机构和 GNC 的仿真框架。',
    typicalUse: '姿态控制、轨道/姿态耦合、航天器任务仿真。',
    audience: 'GNC 学习者、研究人员、仿真开发者。',
    starterTask: '运行姿态稳定示例并替换控制器参数。',
    firstRun: '先运行 attitudeFeedback 示例，确认反作用轮状态、姿态误差和控制力矩日志能导出。',
    bestFor: ['ADCS 闭环', '航天器组件模型', 'GNC 算法验证'],
    notFor: ['任务宣传页面', '低门槛入门', '高保真 CFD 或结构计算'],
    evidenceUse: '适合记录 GNC 闭环证据；要保存配置、日志字段、控制律参数和误差收敛图。',
    inputs: ['动力学模型', '传感器模型', '控制算法'], outputs: ['遥测', '状态历程', '可视化数据'],
    relatedTools: ['NASA 42', 'Simulink', 'Python / Jupyter'], relatedCases: ['姿态控制', '月球着陆器'], confidence: '中高'
  },
  {
    id: 'openfoam', title: 'OpenFOAM', category: 'CFD / 气动', licenseType: '开源', difficulty: '高', status: '成熟',
    summary: '开源 CFD 工具箱，可用于外流场、热流和工程验证。',
    typicalUse: '外形气动、再入热环境初步分析、网格与求解器研究。',
    audience: 'CFD 学习者、气动仿真工程师。',
    starterTask: '对简化钝体外形做可压缩流场计算。',
    firstRun: '先复现 cavity 或 compressible 教程，确认网格、边界条件、残差和 ParaView 后处理流程。',
    bestFor: ['开源 CFD 流程', '网格与求解器学习', '再入流场初步研究'],
    notFor: ['快速得到可信工程结论', '没有网格经验的入门者', '真实飞行器全细节仿真'],
    evidenceUse: '适合做假设边界明确的气动/热环境实验；必须记录网格、边界条件、残差和验证对象。',
    inputs: ['几何', '网格', '边界条件'], outputs: ['流场结果', '气动力', '后处理文件'],
    relatedTools: ['OpenVSP', 'SU2', 'ParaView'], relatedCases: ['再入气动热环境'], confidence: '中高'
  },
  {
    id: 'su2', title: 'SU2', category: 'CFD / 气动', licenseType: '开源', difficulty: '中高', status: '成熟',
    summary: '面向气动设计、CFD 和优化的开源套件。',
    typicalUse: '气动计算、形状优化、低阶气动数据库构建。',
    audience: '气动设计、CFD 学习者。',
    starterTask: '对翼型或简化舱体计算不同攻角下的升阻力。',
    firstRun: '先跑 inviscid wedge 或 airfoil 教程，确认配置文件、残差收敛、CL/CD 输出和网格格式。',
    bestFor: ['气动数据库', '形状优化', '参数扫描'],
    notFor: ['复杂燃烧', '完整热防护设计', '任务级轨道分析'],
    evidenceUse: '适合把外形参数和气动系数联系起来；需要保存 cfg、网格、收敛历史和力系数表。',
    inputs: ['网格', '来流条件', '求解设置'], outputs: ['压力分布', '升阻力', '收敛历史'],
    relatedTools: ['OpenVSP', 'OpenFOAM', 'ParaView'], relatedCases: ['气动数据库'], confidence: '中高'
  },
  {
    id: 'cesiumjs', title: 'CesiumJS', category: '可视化', licenseType: '开源', difficulty: '中', status: '成熟',
    summary: '三维地球、轨迹、卫星和任务回放可视化框架。',
    typicalUse: '轨道轨迹展示、任务回放、星座场景、地理数据叠加。',
    audience: '前端开发者、仿真可视化工程师。',
    starterTask: '把一段卫星轨道 CSV 转成三维轨迹回放。',
    firstRun: '先用 CZML 画一条带时间戳的卫星轨迹，再加地面站、事件标记和相机跟随。',
    bestFor: ['网页三维回放', '轨迹展示', '公开演示'],
    notFor: ['动力学求解', '控制律设计', 'CFD 后处理替代'],
    evidenceUse: '适合展示结果，不适合作为结论来源；展示数据必须能追溯到脚本或仿真输出。',
    inputs: ['轨迹数据', '时间戳', '场景配置'], outputs: ['三维场景', '任务回放页面'],
    relatedTools: ['Open MCT', 'STK', 'Python / Jupyter'], relatedCases: ['任务回放', '星座可视化'], confidence: '高'
  },
  {
    id: 'rocketcea', title: 'RocketCEA', category: '推进', licenseType: '开源', difficulty: '中', status: '成熟',
    summary: 'NASA CEA 的 Python 包装工具，用于火箭发动机性能估算。',
    typicalUse: '比冲、燃烧室参数、喷管膨胀和推进剂组合估算。',
    audience: '推进学习者、火箭仿真开发者。',
    starterTask: '计算 LOX/RP-1 在不同混合比下的真空比冲。',
    firstRun: '用 LOX/RP-1、给定 Pc 和 MR 扫描 Isp，再把结果导出为发动机性能表。',
    bestFor: ['发动机性能初值', '推进剂组合比较', '推力曲线估计输入'],
    notFor: ['结构设计', '真实发动机反推', '燃烧不稳定高保真分析'],
    evidenceUse: '适合作为公开参数不足时的工程估算；必须注明室压、混合比、喷管膨胀比和假设。',
    inputs: ['推进剂', '室压', '混合比'], outputs: ['Isp', '温度', '特征速度'],
    relatedTools: ['Cantera', 'Python / Jupyter'], relatedCases: ['推力曲线估计'], confidence: '中高'
  },
  {
    id: 'python-jupyter', title: 'Python / Jupyter', category: '数据处理', licenseType: '开源', difficulty: '低中', status: '基础工具',
    summary: '航天仿真学习、数据处理、快速验证和报告整理的通用基础。',
    typicalUse: '轨道积分、参数估计、绘图、数据清洗、实验记录。',
    audience: '所有航天仿真学习者和开发者。',
    starterTask: '用 SciPy 积分二体轨道并输出能量误差。',
    firstRun: '建立 notebook：输入公开参数，执行积分/绘图，最后导出 CSV、图表和结论说明。',
    bestFor: ['快速验证', '数据清洗', '自动报告'],
    notFor: ['大型商业协同模型', '真实飞控软件', '高保真三维渲染'],
    evidenceUse: '适合作为本站所有实验的胶水层；每个 notebook 都应能从原始输入一键生成输出。',
    inputs: ['脚本', 'CSV', '公开参数'], outputs: ['Notebook', '图表', '数据文件'],
    relatedTools: ['NumPy', 'SciPy', 'Pandas'], relatedCases: ['参数估计', '复现实验'], confidence: '高'
  }
];

export const toolLanes = [
  {
    title: '任务设计与轨道基准',
    desc: '先用成熟工具建立任务级基准，再用开源库复现关键计算。',
    problem: '我要知道目标轨道、通信窗口、覆盖范围、机动量和任务事件是否大体合理。',
    input: 'TLE / 星历 / 地面站 / 目标轨道 / 任务时间线',
    output: '访问窗口、轨道事件、速度增量、任务脚本和三维回放数据',
    tools: ['STK', 'GMAT', 'Orekit', 'Tudat']
  },
  {
    title: '动力学 / 控制闭环',
    desc: '把控制律、姿态动力学、执行机构和传感器误差放到闭环仿真里验证。',
    problem: '我要验证姿态能不能稳定、执行机构会不会饱和、传感器误差会不会拖垮控制律。',
    input: '惯量矩阵 / 传感器噪声 / 控制律参数 / 执行机构限制',
    output: '姿态误差、角速度、控制力矩、执行机构状态和遥测日志',
    tools: ['MATLAB', 'Simulink', 'Basilisk', 'NASA 42']
  },
  {
    title: '外形 / 气动 / 热环境',
    desc: '用低阶方法快速建库，再用 CFD 或试验数据校正关键区域。',
    problem: '我要从外形、攻角、速度和高度估计气动力、热流趋势和再入走廊。',
    input: '几何外形 / 网格 / 来流条件 / 攻角马赫数扫描',
    output: 'CL/CD、压力云图、热流趋势、收敛历史和气动数据库',
    tools: ['OpenVSP', 'SU2', 'OpenFOAM', 'Fluent']
  },
  {
    title: '遥测 / 可视化 / 数字孪生',
    desc: '把仿真结果做成任务控制视角，而不是只保留 CSV 和曲线。',
    problem: '我要让轨迹、姿态、事件、遥测和结论能被别人快速看懂并复查。',
    input: 'CSV / CZML / 遥测流 / 事件日志 / 场景配置',
    output: '任务回放、遥测面板、交互地图、事件时间轴和报告截图',
    tools: ['Open MCT', 'CesiumJS', 'Unreal Engine', 'ParaView']
  }
];

export const toolSelectionRecipes = [
  {
    title: 'LEO 过境与任务回放',
    scenario: '给定 ISS / 天宫 / Starlink 的 TLE，判断未来 24 小时对某地面站是否可见。',
    primaryTools: ['Orekit', 'Python / Jupyter', 'CesiumJS'],
    steps: ['读取 TLE 与地面站坐标', '传播轨道并检测升落事件', '导出访问窗口 CSV', '用 CesiumJS 回放轨迹'],
    output: '过境窗口表、三维轨迹、事件标记和误差说明',
    trap: '不要只截图三维轨迹；必须保留 TLE、时间系统和事件检测条件。'
  },
  {
    title: '火箭入轨能力粗评',
    scenario: '根据公开推力、比冲、级质量和目标轨道，做 Falcon 9 / 长征五号级别的简化入轨估算。',
    primaryTools: ['RocketCEA', 'GMAT', 'Python / Jupyter'],
    steps: ['整理公开参数', '估算推进性能与质量比', '构造简化飞行事件', '与公开入轨结果或 TLE 对照'],
    output: '速度增量预算、质量假设表、入轨事件线和验证边界',
    trap: '公开参数不足时不能写成真实性能，只能写成带假设的工程估算。'
  },
  {
    title: '再入飞行器气动热初筛',
    scenario: '对 Starship、Orion 或钝体返回舱建立低阶外形和再入气动热趋势判断。',
    primaryTools: ['OpenVSP', 'SU2', 'OpenFOAM', 'ParaView'],
    steps: ['建立简化外形', '划定 Mach / 攻角 / 高度范围', '跑低阶 CFD 或参数扫描', '输出力热趋势与不可信区域'],
    output: '气动系数表、流场图、收敛记录和假设边界',
    trap: '不要把漂亮云图当结论；必须写清网格、边界条件和验证参考。'
  }
];
