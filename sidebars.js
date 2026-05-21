const sidebars = {
  mainSidebar: [
    'intro',
    { type: 'category', label: '架构与方法', items: ['architecture/design-system','architecture/content-model','architecture/information-architecture'] },
    { type: 'category', label: '工程软件栈', items: ['tools/engineering-software-landscape','tools/matlab-simulink','tools/ansys-stk-odtk','tools/cfd-and-aero','tools/orbit-and-mission-analysis'] },
    { type: 'category', label: '项目雷达', items: ['radar/evaluation-rubric','radar/open-source-radar-method'] },
    { type: 'category', label: '复现实验室', items: ['lab/reproduction-method','lab/experiment-template'] },
    { type: 'category', label: '运行维护', items: ['operations/maintenance-workflow','operations/daily-intake-template','operations/weekly-digest-template'] },
    { type: 'category', label: '内容模板', items: ['templates/tool-entry-template','templates/project-evaluation-template','templates/paper-note-template','templates/reproduction-log-template'] },
  ],
};
module.exports = sidebars;
