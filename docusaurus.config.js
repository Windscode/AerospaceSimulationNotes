// @ts-check

const config = {
  title: 'Aerospace Simulation Notes',
  tagline: 'Aerospace simulation intelligence hub for tools, projects, papers and reproducible engineering notes.',
  favicon: 'img/brand/orbital-mark.svg',

  url: 'https://windscode.github.io',
  baseUrl: '/AerospaceSimulationNotes/',

  organizationName: 'Windscode',
  projectName: 'AerospaceSimulationNotes',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          editUrl: 'https://github.com/Windscode/AerospaceSimulationNotes/edit/main/',
        },
        blog: {
          routeBasePath: 'blog',
          blogTitle: 'Research Log',
          blogDescription: 'Daily research notes, project discoveries, software evaluations and reproducibility logs.',
          showReadingTime: true,
          postsPerPage: 8,
          onUntruncatedBlogPosts: 'ignore',
          editUrl: 'https://github.com/Windscode/AerospaceSimulationNotes/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/hero/mission-console.svg',
    metadata: [
      { name: 'keywords', content: 'aerospace simulation, MATLAB, Simulink, Ansys, STK, GMAT, Orekit, Tudat, Basilisk, CFD, propulsion, GNC, ADCS' },
      { name: 'theme-color', content: '#050816' },
    ],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
      disableSwitch: false,
    },
    navbar: {
      title: 'Aerospace Simulation Notes',
      logo: {
        alt: 'Aerospace Simulation Notes',
        src: 'img/brand/orbital-mark.svg',
      },
      hideOnScroll: true,
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/intelligence', label: 'Intelligence', position: 'left' },
        { to: '/tools', label: 'Tool Stack', position: 'left' },
        { to: '/radar', label: 'Project Radar', position: 'left' },
        { to: '/reproduction-lab', label: 'Reproduction Lab', position: 'left' },
        { type: 'docSidebar', sidebarId: 'knowledgeSidebar', label: 'Knowledge Base', position: 'left' },
        { to: '/blog', label: 'Research Log', position: 'left' },
        { href: 'https://github.com/Windscode/AerospaceSimulationNotes', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Operate',
          items: [
            { label: 'Daily Intelligence', to: '/intelligence' },
            { label: 'Maintenance Workflow', to: '/docs/operations/maintenance-workflow' },
            { label: 'Content Model', to: '/docs/architecture/content-model' },
          ],
        },
        {
          title: 'Engineering Landscape',
          items: [
            { label: 'Tool Stack', to: '/tools' },
            { label: 'MATLAB / Simulink', to: '/docs/tools/matlab-simulink' },
            { label: 'Ansys / STK', to: '/docs/tools/ansys-stk' },
            { label: 'CFD & Aero', to: '/docs/tools/cfd-aero-stack' },
          ],
        },
        {
          title: 'Research Assets',
          items: [
            { label: 'Project Radar', to: '/radar' },
            { label: 'Paper Template', to: '/docs/papers/paper-note-template' },
            { label: 'Reproduction Template', to: '/docs/lab/experiment-template' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Windscode. Aerospace Simulation Notes.`,
    },
    prism: {
      additionalLanguages: ['cpp', 'python', 'bash', 'json'],
    },
  },
};

module.exports = config;
