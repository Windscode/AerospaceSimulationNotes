export const visualAssets = {
  hero: '/img/visual/hero-simulation-center.jpg',
  tools: '/img/visual/tool-stack-landscape.jpg',
  radar: '/img/visual/project-radar.jpg',
  lab: '/img/visual/reproduction-lab.jpg',
  intelligence: '/img/visual/intelligence-feed.jpg',
  knowledge: '/img/visual/knowledge-map.jpg',
};

export const intelligenceItems = [
  { date: '每日', type: '收集', title: '新增论文、工具、项目和行业动态', status: '待评估', tags: ['Daily Intake', '情报'] },
  { date: '每周', type: '整理', title: '把高价值条目沉淀到知识库和工具矩阵', status: '归档中', tags: ['Weekly Digest', '知识库'] },
  { date: '持续', type: '复现', title: '对 A 级项目和论文建立可复现实验记录', status: '进行中', tags: ['Reproduction', 'Validation'] },
];

export const domains = [
  { title: '轨道与任务分析', desc: '轨道传播、摄动、转移、星历、覆盖和任务规划。', link: '/docs/tools/orbit-and-mission-analysis', image: '/img/visual/knowledge-map.jpg' },
  { title: 'GNC / ADCS', desc: '制导、导航、控制、姿态确定、执行机构和闭环验证。', link: '/docs/intro', image: '/img/visual/hero-simulation-center.jpg' },
  { title: '推进与动力系统', desc: '发动机性能、质量流率、推力曲线、CEA 与系统级模型。', link: '/docs/tools/engineering-software-landscape', image: '/img/visual/tool-stack-landscape.jpg' },
  { title: '气动 / CFD / 再入', desc: '气动数据库、OpenFOAM、SU2、Ansys Fluent、OpenVSP 和热环境。', link: '/docs/tools/cfd-and-aero', image: '/img/visual/tool-stack-landscape.jpg' },
  { title: '结构 / FEM / 多体', desc: 'Ansys Mechanical、Nastran、Abaqus、Simcenter、Adams 等工程分析。', link: '/tools', image: '/img/visual/reproduction-lab.jpg' },
  { title: '数字孪生与可视化', desc: 'Cesium、Unreal Engine、Open MCT、ParaView 和任务回放。', link: '/tools', image: '/img/visual/intelligence-feed.jpg' },
];

export const toolCategories = ['全部', '任务分析', '控制与建模', 'CFD/气动', '结构/FEM', '推进', '航天器/GNC', '可视化', '软件工程'];

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
  { name: 'Orekit', domain: '轨道与任务分析', language: 'Java', license: 'Apache-2.0', rating: 'A', maturity: '工程参考', reproduction: '待复现', value: '适合做轨道传播和事件计算基准。', url: 'https://www.orekit.org/' },
  { name: 'Tudat', domain: '轨道与任务分析', language: 'C++/Python', license: 'BSD', rating: 'A', maturity: '研究框架', reproduction: '待复现', value: '适合高保真航天动力学研究。', url: 'https://tudat-space.readthedocs.io/' },
  { name: 'Basilisk', domain: '航天器/GNC', language: 'C++/Python', license: 'BSD', rating: 'A', maturity: '研究框架', reproduction: '待复现', value: '适合 ADCS 和闭环任务仿真。', url: 'https://hanspeterschaub.info/basilisk/' },
  { name: 'NASA 42', domain: '航天器/GNC', language: 'C', license: 'NASA Open Source', rating: 'A', maturity: '研究工具', reproduction: '待复现', value: '适合姿态动力学和环境模型学习。', url: 'https://sourceforge.net/projects/fortytwospacecraftsimulation/' },
  { name: 'GMAT', domain: '轨道与任务分析', language: 'C++', license: 'Apache-like', rating: 'A', maturity: '验证基准', reproduction: '计划复现', value: '适合作为轨道任务设计的结果对照。', url: 'https://gmat.gsfc.nasa.gov/' },
  { name: 'OpenVSP', domain: '气动/外形', language: 'C++', license: 'NASA Open Source', rating: 'A', maturity: '工程参考', reproduction: '待复现', value: '适合外形建模与气动前处理。', url: 'https://openvsp.org/' },
  { name: 'SU2', domain: 'CFD/气动', language: 'C++/Python', license: 'LGPL', rating: 'A', maturity: '工程参考', reproduction: '待复现', value: '适合 CFD 和气动优化研究。', url: 'https://su2code.github.io/' },
  { name: 'Open MCT', domain: '任务控制/遥测', language: 'JavaScript', license: 'Apache-2.0', rating: 'A', maturity: '工程参考', reproduction: '待评估', value: '适合任务控制和遥测 UI 参考。', url: 'https://github.com/nasa/openmct' },
  { name: 'cFS', domain: '飞行软件', language: 'C', license: 'NASA Open Source', rating: 'A', maturity: '飞控参考', reproduction: '待评估', value: '适合作为航天飞行软件架构参考。', url: 'https://github.com/nasa/cFS' },
  { name: 'F Prime', domain: '飞行软件', language: 'C++/Python', license: 'Apache-2.0', rating: 'A', maturity: '飞控参考', reproduction: '待评估', value: '适合小型航天器软件框架研究。', url: 'https://fprime.jpl.nasa.gov/' },
];

export const lifecycle = [
  { step: '01', name: '发现', desc: '从论文、官网、GitHub、技术报告和新闻中收集候选条目。' },
  { step: '02', name: '评估', desc: '判断领域相关性、工程成熟度、授权风险和学习优先级。' },
  { step: '03', name: '复现', desc: '建立环境、运行示例、记录命令、问题和结果。' },
  { step: '04', name: '验证', desc: '与权威工具、论文结果或独立实现做交叉对比。' },
  { step: '05', name: '归档', desc: '把结论沉淀为工具条目、项目评估、论文笔记或实验日志。' },
  { step: '06', name: '废弃', desc: '对过时、不可复现或价值不足的资料标记原因，避免误用。' },
];
