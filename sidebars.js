const sidebars = {
  knowledgeSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Site Architecture',
      collapsed: false,
      items: [
        'architecture/information-architecture',
        'architecture/design-system',
        'architecture/content-model',
      ],
    },
    {
      type: 'category',
      label: 'Knowledge Domains',
      collapsed: false,
      items: [
        'knowledge/orbital-mechanics',
        'knowledge/spacecraft-dynamics',
        'knowledge/gnc-adcs',
        'knowledge/propulsion',
        'knowledge/aerodynamics-cfd',
        'knowledge/structures-fem',
        'knowledge/visualization-digital-twin',
      ],
    },
    {
      type: 'category',
      label: 'Engineering Software',
      collapsed: false,
      items: [
        'tools/engineering-software-landscape',
        'tools/matlab-simulink',
        'tools/ansys-stk',
        'tools/cfd-aero-stack',
        'tools/mbse-systems',
      ],
    },
    {
      type: 'category',
      label: 'Project Radar',
      items: [
        'radar/overview',
        'radar/evaluation-rubric',
      ],
    },
    {
      type: 'category',
      label: 'Reproduction Lab',
      items: [
        'lab/reproduction-lab',
        'lab/experiment-template',
      ],
    },
    {
      type: 'category',
      label: 'Papers & Reports',
      items: [
        'papers/paper-note-template',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        'operations/maintenance-workflow',
        'operations/daily-intake-template',
        'operations/weekly-digest-template',
      ],
    },
    {
      type: 'category',
      label: 'Templates',
      items: [
        'templates/tool-entry-template',
        'templates/project-entry-template',
        'templates/paper-note-template',
      ],
    },
  ],
};

module.exports = sidebars;
