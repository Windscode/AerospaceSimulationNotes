const sidebars = {
  knowledgeSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Operations',
      collapsed: false,
      items: [
        'operations/overview',
        'operations/daily-intake-template',
        'operations/weekly-digest-template',
        'operations/content-pipeline',
      ],
    },
    {
      type: 'category',
      label: 'Project Radar',
      collapsed: false,
      items: [
        'radar/overview',
        'radar/project-radar-board',
        'radar/evaluation-checklist',
        'radar/source-tracking',
      ],
    },
    {
      type: 'category',
      label: 'Learning Path',
      items: [
        'learning-path/overview',
        'learning-path/orbital-mechanics',
        'learning-path/spacecraft-dynamics',
        'learning-path/gnc-adcs',
        'learning-path/propulsion',
        'learning-path/aerodynamics-cfd',
        'learning-path/simulation-architecture',
      ],
    },
    {
      type: 'category',
      label: 'Tool Stack',
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
      label: 'Projects',
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
      label: 'Papers',
      items: [
        'papers/overview',
        'papers/paper-note-template',
      ],
    },
    {
      type: 'category',
      label: 'Engineering Practice',
      items: [
        'engineering/overview',
        'engineering/reproduction-log-template',
        'engineering/build-and-validation-template',
      ],
    },
    {
      type: 'category',
      label: 'Methodology',
      items: [
        'methodology/maintenance-workflow',
        'methodology/content-rules',
        'methodology/project-grading',
        'methodology/design-system',
      ],
    },
  ],
};

module.exports = sidebars;
