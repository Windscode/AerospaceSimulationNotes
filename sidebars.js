const sidebars = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: '学习路线',
      items: [
        'learning-path/overview',
        'learning-path/orbital-mechanics',
        'learning-path/spacecraft-dynamics',
        'learning-path/gnc-adcs',
        'learning-path/propulsion',
        'learning-path/aerodynamics-cfd',
      ],
    },
    {
      type: 'category',
      label: '工具软件',
      items: [
        'tools/overview',
        'tools/orbit-mission-analysis',
        'tools/six-dof-flight-dynamics',
        'tools/propulsion-tools',
        'tools/cfd-aero-tools',
        'tools/visualization-and-engineering',
      ],
    },
    {
      type: 'category',
      label: '开源项目索引',
      items: [
        'projects/overview',
        'projects/project-template',
        'projects/orbit-simulation',
        'projects/rocket-six-dof',
        'projects/spacecraft-attitude-control',
        'projects/mission-control-visualization',
      ],
    },
    {
      type: 'category',
      label: '论文与资料笔记',
      items: [
        'papers/overview',
        'papers/paper-note-template',
      ],
    },
    {
      type: 'category',
      label: '工程实践',
      items: [
        'engineering/overview',
        'engineering/reproduction-log-template',
        'engineering/build-and-validation-template',
      ],
    },
    {
      type: 'category',
      label: '整理方法',
      items: [
        'methodology/content-rules',
        'methodology/project-grading',
      ],
    },
  ],
};

module.exports = sidebars;
