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
    inputs: ['状态量', '参数表', '时间序列'], outputs: ['曲线', '脚本', '分析报告'],
    relatedTools: ['Simulink', 'Aerospace Blockset', 'Python / Jupyter'], relatedCases: ['轨道传播', '姿态控制'], confidence: '高'
  },
  {
    id: 'simulink', title: 'Simulink', category: 'GNC / ADCS', licenseType: '商业', difficulty: '中高', status: '行业标准',
    summary: '基于模型的系统仿真与闭环控制设计工具。',
    typicalUse: '控制律验证、状态机、传感器/执行机构建模、系统级仿真。',
    audience: '控制工程师、系统仿真工程师。',
    starterTask: '搭建一个姿态控制闭环，加入陀螺噪声和执行机构限幅。',
    inputs: ['模型框图', '控制参数', '输入信号'], outputs: ['仿真波形', '模型文件', '代码生成结果'],
    relatedTools: ['MATLAB', 'Stateflow', 'Basilisk'], relatedCases: ['姿态控制', '任务阶段状态机'], confidence: '高'
  },
  {
    id: 'stk', title: 'Ansys STK', category: '轨道与任务分析', licenseType: '商业', difficulty: '中', status: '行业标准',
    summary: '任务分析、轨道、覆盖、通信、传感器和场景可视化平台。',
    typicalUse: '星座覆盖、通信窗口、传感器可见性、任务场景搭建。',
    audience: '任务分析、系统工程、仿真验证人员。',
    starterTask: '建立一个 LEO 卫星对地面站的通信窗口分析。',
    inputs: ['轨道参数', '传感器参数', '地面站位置'], outputs: ['访问窗口', '覆盖率', '场景动画'],
    relatedTools: ['ODTK', 'GMAT', 'CesiumJS'], relatedCases: ['低轨星座覆盖', '月球任务剖面'], confidence: '高'
  },
  {
    id: 'gmat', title: 'GMAT', category: '轨道与任务分析', licenseType: '开源', difficulty: '中', status: '成熟',
    summary: 'NASA 开源任务分析与轨道设计工具。',
    typicalUse: '轨道传播、机动设计、深空任务、转移窗口。',
    audience: '航天动力学学习者、任务分析工程师。',
    starterTask: '复现一个 Hohmann 转移并输出机动量。',
    inputs: ['初始轨道', '力模型', '机动设置'], outputs: ['状态历程', '机动量', '任务脚本'],
    relatedTools: ['STK', 'Orekit', 'Tudat'], relatedCases: ['深空转移', '月球转移'], confidence: '高'
  },
  {
    id: 'orekit', title: 'Orekit', category: '轨道与任务分析', licenseType: '开源', difficulty: '中高', status: '成熟',
    summary: 'Java 航天动力学库，适合工程集成和批量计算。',
    typicalUse: '轨道传播、事件探测、坐标转换、星历处理。',
    audience: '软件工程师、任务分析开发者。',
    starterTask: '读取 TLE，传播 24 小时并计算地面站过境。',
    inputs: ['TLE', '地球模型', '时间系统'], outputs: ['轨道状态', '事件时间', '访问窗口'],
    relatedTools: ['GMAT', 'Tudat', 'Python / Jupyter'], relatedCases: ['低轨星座覆盖'], confidence: '高'
  },
  {
    id: 'tudat', title: 'Tudat', category: '轨道与任务分析', licenseType: '开源', difficulty: '高', status: '研究常用',
    summary: '面向航天动力学研究的 C++/Python 工具库。',
    typicalUse: '高精度轨道传播、参数估计、不确定性分析。',
    audience: '研究生、动力学研究者、工程算法开发者。',
    starterTask: '对比二体、J2 和大气阻力摄动下的轨道漂移。',
    inputs: ['动力学模型', '估计参数', '观测数据'], outputs: ['传播结果', '估计结果', '误差分析'],
    relatedTools: ['Orekit', 'GMAT', 'Python / Jupyter'], relatedCases: ['轨道确定', '参数估计'], confidence: '中高'
  },
  {
    id: 'basilisk', title: 'Basilisk', category: 'GNC / ADCS', licenseType: '开源', difficulty: '高', status: '研究常用',
    summary: '面向航天器动力学、传感器、执行机构和 GNC 的仿真框架。',
    typicalUse: '姿态控制、轨道/姿态耦合、航天器任务仿真。',
    audience: 'GNC 学习者、研究人员、仿真开发者。',
    starterTask: '运行姿态稳定示例并替换控制器参数。',
    inputs: ['动力学模型', '传感器模型', '控制算法'], outputs: ['遥测', '状态历程', '可视化数据'],
    relatedTools: ['NASA 42', 'Simulink', 'Python / Jupyter'], relatedCases: ['姿态控制', '月球着陆器'], confidence: '中高'
  },
  {
    id: 'openfoam', title: 'OpenFOAM', category: 'CFD / 气动', licenseType: '开源', difficulty: '高', status: '成熟',
    summary: '开源 CFD 工具箱，可用于外流场、热流和工程验证。',
    typicalUse: '外形气动、再入热环境初步分析、网格与求解器研究。',
    audience: 'CFD 学习者、气动仿真工程师。',
    starterTask: '对简化钝体外形做可压缩流场计算。',
    inputs: ['几何', '网格', '边界条件'], outputs: ['流场结果', '气动力', '后处理文件'],
    relatedTools: ['OpenVSP', 'SU2', 'ParaView'], relatedCases: ['再入气动热环境'], confidence: '中高'
  },
  {
    id: 'su2', title: 'SU2', category: 'CFD / 气动', licenseType: '开源', difficulty: '中高', status: '成熟',
    summary: '面向气动设计、CFD 和优化的开源套件。',
    typicalUse: '气动计算、形状优化、低阶气动数据库构建。',
    audience: '气动设计、CFD 学习者。',
    starterTask: '对翼型或简化舱体计算不同攻角下的升阻力。',
    inputs: ['网格', '来流条件', '求解设置'], outputs: ['压力分布', '升阻力', '收敛历史'],
    relatedTools: ['OpenVSP', 'OpenFOAM', 'ParaView'], relatedCases: ['气动数据库'], confidence: '中高'
  },
  {
    id: 'cesiumjs', title: 'CesiumJS', category: '可视化', licenseType: '开源', difficulty: '中', status: '成熟',
    summary: '三维地球、轨迹、卫星和任务回放可视化框架。',
    typicalUse: '轨道轨迹展示、任务回放、星座场景、地理数据叠加。',
    audience: '前端开发者、仿真可视化工程师。',
    starterTask: '把一段卫星轨道 CSV 转成三维轨迹回放。',
    inputs: ['轨迹数据', '时间戳', '场景配置'], outputs: ['三维场景', '任务回放页面'],
    relatedTools: ['Open MCT', 'STK', 'Python / Jupyter'], relatedCases: ['任务回放', '星座可视化'], confidence: '高'
  },
  {
    id: 'rocketcea', title: 'RocketCEA', category: '推进', licenseType: '开源', difficulty: '中', status: '成熟',
    summary: 'NASA CEA 的 Python 包装工具，用于火箭发动机性能估算。',
    typicalUse: '比冲、燃烧室参数、喷管膨胀和推进剂组合估算。',
    audience: '推进学习者、火箭仿真开发者。',
    starterTask: '计算 LOX/RP-1 在不同混合比下的真空比冲。',
    inputs: ['推进剂', '室压', '混合比'], outputs: ['Isp', '温度', '特征速度'],
    relatedTools: ['Cantera', 'Python / Jupyter'], relatedCases: ['推力曲线估计'], confidence: '中高'
  },
  {
    id: 'python-jupyter', title: 'Python / Jupyter', category: '数据处理', licenseType: '开源', difficulty: '低中', status: '基础工具',
    summary: '航天仿真学习、数据处理、快速验证和报告整理的通用基础。',
    typicalUse: '轨道积分、参数估计、绘图、数据清洗、实验记录。',
    audience: '所有航天仿真学习者和开发者。',
    starterTask: '用 SciPy 积分二体轨道并输出能量误差。',
    inputs: ['脚本', 'CSV', '公开参数'], outputs: ['Notebook', '图表', '数据文件'],
    relatedTools: ['NumPy', 'SciPy', 'Pandas'], relatedCases: ['参数估计', '复现实验'], confidence: '高'
  }
];

export const toolLanes = [
  { title: '任务设计与轨道基准', desc: '先用成熟工具建立任务级基准，再用开源库复现关键计算。', tools: ['STK', 'GMAT', 'Orekit', 'Tudat'] },
  { title: '动力学 / 控制闭环', desc: '把控制律、姿态动力学、执行机构和传感器误差放到闭环仿真里验证。', tools: ['MATLAB', 'Simulink', 'Basilisk', 'NASA 42'] },
  { title: '外形 / 气动 / 热环境', desc: '用低阶方法快速建库，再用 CFD 或试验数据校正关键区域。', tools: ['OpenVSP', 'SU2', 'OpenFOAM', 'Fluent'] },
  { title: '遥测 / 可视化 / 数字孪生', desc: '把仿真结果做成任务控制视角，而不是只保留 CSV 和曲线。', tools: ['Open MCT', 'CesiumJS', 'Unreal Engine', 'ParaView'] }
];
