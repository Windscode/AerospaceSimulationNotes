export const visualAssets = {
  hero: '/img/visual/mission-control-atlas.svg',
  orbit: '/img/visual/orbit-weave-hero.svg',
  tools: '/img/visual/software-stack-console.svg',
  radar: '/img/visual/project-radar-array.svg',
  lab: '/img/visual/reproduction-lab-bay.svg',
  intelligence: '/img/visual/research-intelligence-wall.svg',
  knowledge: '/img/visual/knowledge-fabric-map.svg',
  lunarCase: '/img/visual/lunar-landing-case.svg',
  constellationCase: '/img/visual/constellation-analysis-case.svg',
  deepSpaceCase: '/img/visual/deep-space-transfer-case.svg',
};

export const dashboardStats = [
  { value: '42+', label: '工具 / 项目条目', detail: '商业软件、开源框架、验证工具和可视化链路' },
  { value: '7', label: '仿真研究域', detail: '轨道、GNC、推进、气动、结构、飞行软件、数字孪生' },
  { value: '6步', label: '证据生命周期', detail: '发现 → 评估 → 复现 → 验证 → 建模 → 归档' },
];

export const operatingModel = [
  { step: '01', title: 'Intake', desc: '把每天看到的论文、新闻、仓库、工具、公开数据先放入情报流，只记录来源、可信度、相关领域和下一步。' },
  { step: '02', title: 'Triage', desc: '判断它是不是值得进入稳定知识库：是否有工程价值、是否可复现、是否有权威出处、是否能支撑模型。' },
  { step: '03', title: 'Model', desc: '把资料翻译成仿真对象：状态量、方程、输入、输出、参数范围、误差来源和验证指标。' },
  { step: '04', title: 'Reproduce', desc: '建立可重新运行的环境和命令，用 GMAT / Orekit / Tudat / Basilisk / CFD 工具做对照验证。' },
  { step: '05', title: 'Archive', desc: '只把可解释、可复查、可继续扩展的结论沉淀到知识库，低价值条目标记废弃原因。' },
];

export const researchPillars = [
  {
    title: '研究情报雷达',
    label: 'INTELLIGENCE',
    desc: '每天搜集论文、行业动态、开源仓库、工具更新和公开数据，但先做可信度和工程价值筛选。',
    link: '/intelligence',
    image: visualAssets.intelligence,
  },
  {
    title: '工程软件星图',
    label: 'TOOLCHAIN',
    desc: '把 STK、GMAT、Orekit、Tudat、Basilisk、SU2、OpenFOAM、Open MCT 等放到任务链路里，而不是简单罗列。',
    link: '/tools',
    image: visualAssets.tools,
  },
  {
    title: '复现实验室',
    label: 'VALIDATION',
    desc: '每个高价值条目都留下环境、输入、命令、输出、误差、对照工具和结论，形成证据链。',
    link: '/reproduction-lab',
    image: visualAssets.lab,
  },
];

export const intelligenceItems = [
  { date: '每日', type: '论文 / 报告', title: '轨道、GNC、推进、气动、结构、飞控软件相关资料收集', status: '先进入 Intake，不直接写进稳定知识库。记录 DOI / 来源 / 是否有数据 / 是否能复现。', tags: ['Paper', 'Technical Report'] },
  { date: '每日', type: '开源项目', title: 'GitHub / NASA / ESA / 大学实验室项目跟踪', status: '按许可证、语言、活跃度、样例质量、文档质量和集成价值评级。', tags: ['Open Source', 'Project Radar'] },
  { date: '每周', type: '工具链', title: '工程软件与开源工具的工作流整理', status: '从“工具是什么”升级为“在哪个任务阶段使用、输入输出是什么、能和谁交叉验证”。', tags: ['STK', 'GMAT', 'Orekit'] },
  { date: '持续', type: '公开数据', title: '从公开新闻、论文、手册、任务页面中提取可用仿真参数', status: '区分真实公开数据、教材示例、工程假设、反推参数和不可用传闻。', tags: ['Open Data', 'Parameter Inference'] },
];

export const missionDossiers = [
  { title: '小型运载火箭入轨仿真', type: 'Launch Vehicle', image: visualAssets.deepSpaceCase, desc: '从质量估计、发动机参数、飞行程序、气动阻力、重力转弯到入轨误差，形成一条可复现实验链。', metrics: ['6DOF / 3DOF', 'CEA / 推力曲线', '轨迹验证'] },
  { title: '月球软着陆任务剖面', type: 'Lunar Lander', image: visualAssets.lunarCase, desc: '近月制动、下降段制导、速度高度剖面、着陆点误差和推力余量，适合做 GNC 与任务分析交叉验证。', metrics: ['下降制导', '误差预算', '任务回放'] },
  { title: '低轨星座覆盖与通信窗口', type: 'Constellation', image: visualAssets.constellationCase, desc: '轨道面、相位、覆盖率、链路窗口、载荷视场和任务效能，适合 STK / Orekit / Cesium 多工具对照。', metrics: ['Coverage', 'Access', 'Visualization'] },
];

export const modelInferenceMethods = [
  { title: '从公开发射新闻反推任务轨道', desc: '用发射场、目标轨道高度、倾角、卫星批次、TLE 和新闻措辞估计任务约束，作为仿真初始条件。', output: '轨道高度 / 倾角 / RAAN 近似范围' },
  { title: '从发动机公开参数建立推进模型', desc: '用推力、比冲、推进剂类型、级间质量和燃烧时间估计质量流率与推力曲线，不把猜测伪装成真实数据。', output: '推力曲线 / 质量流率 / 不确定性' },
  { title: '从外形图和公开尺寸构建气动低阶模型', desc: '用 OpenVSP / DATCOM / CFD 建立初始气动数据库，并标记适用马赫数、攻角范围和验证缺口。', output: 'CL / CD / Cm 初始数据库' },
  { title: '从任务论文复现实验指标', desc: '把论文图表里的曲线、误差、终端约束转成可跑的验证指标，而不是只摘录文字。', output: '验证门限 / 误差曲线 / 复现实验记录' },
];

export const caseStudies = [
  { title: '月球着陆任务仿真', type: '月球任务', desc: '近月制动、下降段制导律、着陆点误差、软着陆剖面与可视化回放。', image: visualAssets.lunarCase, link: '/reproduction-lab' },
  { title: '星座部署与覆盖分析', type: '星座覆盖', desc: '轨道面、相位、覆盖率、通信窗口、传感器指向和任务效能评估。', image: visualAssets.constellationCase, link: '/radar' },
  { title: '深空转移任务设计', type: '深空任务', desc: '转移窗口、引力辅助、低推力轨迹、脉冲机动与多工具交叉验证。', image: visualAssets.deepSpaceCase, link: '/tools' },
];

export const domains = [
  { title: '轨道与任务分析', desc: '轨道传播、摄动、转移、星历、覆盖、通信窗口和任务规划。', link: '/docs/tools/orbit-and-mission-analysis', image: visualAssets.constellationCase, accent: 'Orbital Mechanics' },
  { title: 'GNC / ADCS', desc: '制导、导航、控制、姿态确定、执行机构、传感器模型和闭环验证。', link: '/docs/intro', image: visualAssets.hero, accent: 'Closed-loop Simulation' },
  { title: '推进与动力系统', desc: '发动机性能、质量流率、推力曲线、CEA、燃烧室和系统级模型。', link: '/docs/tools/engineering-software-landscape', image: visualAssets.deepSpaceCase, accent: 'Propulsion Model' },
  { title: '气动 / CFD / 再入', desc: '气动数据库、外形建模、OpenFOAM、SU2、Fluent、热流与再入环境。', link: '/docs/tools/cfd-and-aero', image: visualAssets.tools, accent: 'Aero Database' },
  { title: '结构 / FEM / 多体', desc: '结构强度、热-结构耦合、模态、有限元、多体动力学和载荷路径。', link: '/tools', image: visualAssets.lab, accent: 'Structural Loop' },
  { title: '飞行软件 / 数字孪生', desc: 'cFS、F Prime、Open MCT、Cesium、UE、遥测回放与仿真中台。', link: '/tools', image: visualAssets.intelligence, accent: 'Digital Thread' },
];

export const toolCategories = ['全部', '任务分析', '控制与建模', 'CFD/气动', '结构/FEM', '推进', '航天器/GNC', '可视化', '软件工程'];

export const toolLanes = [
  { title: '任务设计与轨道基准', desc: '先用成熟工具建立任务级基准，再用开源库复现关键计算。', tools: ['Ansys STK', 'GMAT', 'Orekit', 'Tudat'] },
  { title: '动力学 / 控制闭环', desc: '把控制律、姿态动力学、执行机构和传感器误差放到闭环仿真里验证。', tools: ['MATLAB', 'Simulink', 'Basilisk', 'NASA 42'] },
  { title: '外形 / 气动 / 热环境', desc: '用低阶方法快速建库，再用 CFD 或试验数据校正关键区域。', tools: ['OpenVSP', 'Digital DATCOM', 'SU2', 'OpenFOAM', 'Fluent'] },
  { title: '遥测 / 可视化 / 数字孪生', desc: '把仿真结果做成任务控制视角，而不是只保留 CSV 和曲线。', tools: ['Open MCT', 'CesiumJS', 'Unreal Engine', 'ParaView'] },
];

export const tools = [
  { name: 'MATLAB', vendor: 'MathWorks', category: '控制与建模', type: '商业', maturity: '行业标准', priority: 'A', role: '算法原型、数值分析、控制律设计、数据处理。', domains: ['GNC','轨道','数据分析'], url: 'https://www.mathworks.com/products/matlab.html' },
  { name: 'Simulink', vendor: 'MathWorks', category: '控制与建模', type: '商业', maturity: '行业标准', priority: 'A', role: '基于模型的系统仿真、控制系统建模、闭环验证。', domains: ['MBD','控制','系统仿真'], url: 'https://www.mathworks.com/products/simulink.html' },
  { name: 'Aerospace Blockset', vendor: 'MathWorks', category: '控制与建模', type: '商业', maturity: '行业标准', priority: 'A', role: '飞行器/航天器坐标系、大气、飞行动力学与航天相关模块。', domains: ['航天','飞行力学'], url: 'https://www.mathworks.com/products/aerospace-blockset.html' },
  { name: 'Stateflow', vendor: 'MathWorks', category: '控制与建模', type: '商业', maturity: '工程常用', priority: 'A', role: '任务阶段、状态机、故障处理和控制逻辑建模。', domains: ['状态机','控制逻辑'], url: 'https://www.mathworks.com/products/stateflow.html' },
  { name: 'Ansys STK', vendor: 'Ansys', category: '任务分析', type: '商业', maturity: '行业标准', priority: 'A', role: '轨道任务分析、覆盖、通信、传感器、场景构建和可视化。', domains: ['轨道','任务分析'], url: 'https://www.ansys.com/products/missions/ansys-stk' },
  { name: 'Ansys ODTK', vendor: 'Ansys', category: '任务分析', type: '商业', maturity: '专业工具', priority: 'A', role: '轨道确定、测量处理和高精度状态估计。', domains: ['轨道确定','估计'], url: 'https://www.ansys.com/products/missions/ansys-odtk' },
  { name: 'Ansys ModelCenter', vendor: 'Ansys', category: '软件工程', type: '商业', maturity: '专业工具', priority: 'B', role: '多工具流程集成、设计空间探索、模型自动化。', domains: ['MBSE','自动化'], url: 'https://www.ansys.com/products/connect/ansys-modelcenter' },
  { name: 'Ansys Fluent', vendor: 'Ansys', category: 'CFD/气动', type: '商业', maturity: '行业标准', priority: 'A', role: 'CFD 求解、气动数据生成、热流与复杂流动分析。', domains: ['CFD','气动'], url: 'https://www.ansys.com/products/fluids/ansys-fluent' },
  { name: 'Ansys Mechanical', vendor: 'Ansys', category: '结构/FEM', type: '商业', maturity: '行业标准', priority: 'A', role: '结构强度、热-结构耦合、有限元分析。', domains: ['结构','FEM'], url: 'https://www.ansys.com/products/structures/ansys-mechanical' },
  { name: 'GMAT', vendor: 'NASA', category: '任务分析', type: '开源', maturity: '验证基准', priority: 'A', role: '轨道转移、任务分析、优化和对照验证。', domains: ['轨道','任务设计'], url: 'https://gmat.gsfc.nasa.gov/' },
  { name: 'Orekit', vendor: 'CS Group / Community', category: '任务分析', type: '开源', maturity: '工程参考', priority: 'A', role: 'Java 航天动力学库，适合服务端和工程系统集成。', domains: ['轨道','星历'], url: 'https://www.orekit.org/' },
  { name: 'Tudat', vendor: 'TU Delft / Community', category: '任务分析', type: '开源', maturity: '研究参考', priority: 'A', role: '高保真航天动力学、轨道传播、参数估计与任务研究。', domains: ['轨道','研究'], url: 'https://tudat-space.readthedocs.io/' },
  { name: 'Basilisk', vendor: 'CU Boulder / AVS Lab', category: '航天器/GNC', type: '开源', maturity: '研究框架', priority: 'A', role: '航天器动力学、姿态控制、任务级闭环仿真。', domains: ['ADCS','GNC'], url: 'https://hanspeterschaub.info/basilisk/' },
  { name: 'NASA 42', vendor: 'NASA', category: '航天器/GNC', type: '开源', maturity: '研究工具', priority: 'A', role: '航天器姿态、轨道、多体与环境仿真。', domains: ['ADCS','姿态'], url: 'https://sourceforge.net/projects/fortytwospacecraftsimulation/' },
  { name: 'SU2', vendor: 'SU2 Foundation', category: 'CFD/气动', type: '开源', maturity: '工程参考', priority: 'A', role: 'CFD、气动优化和外形分析。', domains: ['CFD','优化'], url: 'https://su2code.github.io/' },
  { name: 'OpenFOAM', vendor: 'OpenFOAM Foundation', category: 'CFD/气动', type: '开源', maturity: '工程参考', priority: 'A', role: '通用 CFD 求解器，适合离线气动与热环境研究。', domains: ['CFD','流体'], url: 'https://openfoam.org/' },
  { name: 'OpenVSP', vendor: 'NASA', category: 'CFD/气动', type: '开源', maturity: '工程参考', priority: 'A', role: '飞行器外形建模、几何生成和初步气动分析。', domains: ['外形','气动'], url: 'https://openvsp.org/' },
  { name: 'Digital DATCOM', vendor: 'USAF / Public tools', category: 'CFD/气动', type: '公开工具', maturity: '经验方法', priority: 'B', role: '经验气动估算和低阶气动数据库参考。', domains: ['气动','经验模型'], url: 'https://www.pdas.com/datcom.html' },
  { name: 'RocketCEA', vendor: 'Community', category: '推进', type: '开源', maturity: '工程参考', priority: 'A', role: 'NASA CEA 的 Python 接口，用于发动机性能估算。', domains: ['推进','CEA'], url: 'https://rocketcea.readthedocs.io/' },
  { name: 'RocketPy', vendor: 'Community', category: '推进', type: '开源', maturity: '研究参考', priority: 'B', role: '火箭飞行性能、气象、飞行剖面与任务分析。', domains: ['火箭','飞行'], url: 'https://docs.rocketpy.org/' },
  { name: 'cFS', vendor: 'NASA', category: '软件工程', type: '开源', maturity: '飞控参考', priority: 'A', role: '航天飞行软件架构参考。', domains: ['飞控软件','架构'], url: 'https://github.com/nasa/cFS' },
  { name: 'F Prime', vendor: 'NASA JPL', category: '软件工程', type: '开源', maturity: '飞控参考', priority: 'A', role: '小型航天器和机器人飞行软件框架。', domains: ['飞控软件','架构'], url: 'https://fprime.jpl.nasa.gov/' },
  { name: 'Open MCT', vendor: 'NASA', category: '可视化', type: '开源', maturity: '工程参考', priority: 'A', role: '任务控制、遥测显示和地面站界面。', domains: ['遥测','任务控制'], url: 'https://github.com/nasa/openmct' },
  { name: 'CesiumJS', vendor: 'Cesium', category: '可视化', type: '开源/商业', maturity: '工程参考', priority: 'A', role: '三维地球、轨道可视化和任务态势。', domains: ['可视化','地理空间'], url: 'https://cesium.com/platform/cesiumjs/' },
  { name: 'Unreal Engine', vendor: 'Epic Games', category: '可视化', type: '商业/免费许可', maturity: '工程常用', priority: 'A', role: '高质量三维场景、数字孪生、飞行/航天可视化。', domains: ['可视化','数字孪生'], url: 'https://www.unrealengine.com/' },
  { name: 'ParaView', vendor: 'Kitware', category: '可视化', type: '开源', maturity: '工程参考', priority: 'B', role: 'CFD、有限元和科学计算结果后处理。', domains: ['后处理','科学可视化'], url: 'https://www.paraview.org/' },
  { name: 'Python / Jupyter', vendor: 'Community', category: '软件工程', type: '开源', maturity: '工程常用', priority: 'A', role: '数据处理、自动化分析、可视化、验证脚本。', domains: ['自动化','数据'], url: 'https://jupyter.org/' },
  { name: 'Docker / GitHub Actions', vendor: 'Community / GitHub', category: '软件工程', type: '开源/平台', maturity: '工程常用', priority: 'A', role: '复现环境、自动构建、验证流水线和部署。', domains: ['CI/CD','复现'], url: 'https://docs.github.com/actions' },
];

export const projects = [
  { name: 'Orekit', domain: '轨道与任务分析', language: 'Java', license: 'Apache-2.0', rating: 'A', maturity: '工程参考', reproduction: '待复现', value: '适合做轨道传播、事件探测和星历处理基准。', url: 'https://www.orekit.org/' },
  { name: 'Tudat', domain: '轨道与任务分析', language: 'C++/Python', license: 'BSD', rating: 'A', maturity: '研究框架', reproduction: '待复现', value: '适合高保真航天动力学、参数估计和任务研究。', url: 'https://tudat-space.readthedocs.io/' },
  { name: 'Basilisk', domain: '航天器/GNC', language: 'C++/Python', license: 'BSD', rating: 'A', maturity: '研究框架', reproduction: '待复现', value: '适合 ADCS、航天器动力学和闭环任务仿真。', url: 'https://hanspeterschaub.info/basilisk/' },
  { name: 'NASA 42', domain: '航天器/GNC', language: 'C', license: 'NASA Open Source', rating: 'A', maturity: '研究工具', reproduction: '待复现', value: '适合姿态动力学、环境模型和多体系统学习。', url: 'https://sourceforge.net/projects/fortytwospacecraftsimulation/' },
  { name: 'GMAT', domain: '轨道与任务分析', language: 'C++', license: 'Apache-like', rating: 'A', maturity: '验证基准', reproduction: '计划复现', value: '适合作为轨道任务设计和转移优化的结果对照。', url: 'https://gmat.gsfc.nasa.gov/' },
  { name: 'OpenVSP', domain: '气动/外形', language: 'C++', license: 'NASA Open Source', rating: 'A', maturity: '工程参考', reproduction: '待复现', value: '适合外形建模、几何生成与初步气动分析。', url: 'https://openvsp.org/' },
  { name: 'SU2', domain: 'CFD/气动', language: 'C++/Python', license: 'LGPL', rating: 'A', maturity: '工程参考', reproduction: '待复现', value: '适合 CFD、伴随优化和气动数据生成。', url: 'https://su2code.github.io/' },
  { name: 'Open MCT', domain: '任务控制/遥测', language: 'JavaScript', license: 'Apache-2.0', rating: 'A', maturity: '工程参考', reproduction: '待评估', value: '适合任务控制、遥测 UI 和可视化信息架构参考。', url: 'https://github.com/nasa/openmct' },
  { name: 'cFS', domain: '飞行软件', language: 'C', license: 'NASA Open Source', rating: 'A', maturity: '飞控参考', reproduction: '待评估', value: '适合作为航天飞行软件架构和组件化设计参考。', url: 'https://github.com/nasa/cFS' },
  { name: 'F Prime', domain: '飞行软件', language: 'C++/Python', license: 'Apache-2.0', rating: 'A', maturity: '飞控参考', reproduction: '待评估', value: '适合小型航天器软件框架、组件和遥测链路研究。', url: 'https://fprime.jpl.nasa.gov/' },
];

export const validationGates = [
  { title: '环境可重建', desc: '操作系统、编译器、Python / Java / C++ 版本、依赖、数据下载来源必须可复查。' },
  { title: '命令可复制', desc: '所有构建、运行、后处理命令写清楚，不只截图结果。' },
  { title: '输入可追溯', desc: '初始条件、参数来源、公开数据、假设值和手工估计值必须分开标注。' },
  { title: '输出可比较', desc: '结果要能和论文曲线、STK/GMAT/Orekit 等工具或独立脚本做对照。' },
  { title: '误差可解释', desc: '说明误差来自模型简化、数值积分、坐标系、单位、初始条件还是数据质量。' },
  { title: '结论可归档', desc: '只有能说明价值、适用范围和局限的实验，才进入稳定知识库。' },
];

export const lifecycle = [
  { step: '01', name: '发现', desc: '从论文、官网、GitHub、技术报告、新闻和公开课程中收集候选条目。' },
  { step: '02', name: '评估', desc: '判断领域相关性、工程成熟度、授权风险、学习优先级和复现成本。' },
  { step: '03', name: '建模', desc: '抽取状态量、输入输出、参数来源、假设边界和误差来源。' },
  { step: '04', name: '复现', desc: '建立环境、运行示例、记录命令、依赖、问题、输入和输出。' },
  { step: '05', name: '验证', desc: '与权威工具、论文结果、公开数据或独立实现做交叉对比。' },
  { step: '06', name: '归档', desc: '沉淀为工具条目、项目评估、论文笔记、案例页面或实验日志。' },
];
