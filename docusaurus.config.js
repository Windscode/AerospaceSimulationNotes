// @ts-check

const config = {
  title: 'Aerospace Simulation Notes',
  tagline: 'A curated intelligence hub for aerospace simulation, tools, papers and engineering practice.',
  favicon: 'img/brand/orbital-mark.svg',

  url: 'https://windscode.github.io',
  baseUrl: '/AerospaceSimulationNotes/',

  organizationName: 'Windscode',
  projectName: 'AerospaceSimulationNotes',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          showReadingTime: true,
          routeBasePath: 'blog',
          blogTitle: 'Research Log',
          blogDescription: 'Daily research notes, project discoveries, reproduction logs and aerospace simulation observations.',
          postsPerPage: 8,
          editUrl: 'https://github.com/Windscode/AerospaceSimulationNotes/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    metadata: [
      { name: 'keywords', content: 'aerospace simulation, orbital mechanics, GNC, ADCS, propulsion, CFD, JSBSim, GMAT, Orekit, Tudat, Basilisk' },
      { name: 'theme-color', content: '#050816' },
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
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
        { type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Knowledge Base' },
        { to: '/docs/radar/overview', label: 'Project Radar', position: 'left' },
        { to: '/docs/tools/overview', label: 'Tool Stack', position: 'left' },
        { to: '/blog', label: 'Research Log', position: 'left' },
        { href: 'https://github.com/Windscode/AerospaceSimulationNotes', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore',
          items: [
            { label: 'Knowledge Base', to: '/docs/intro' },
            { label: 'Project Radar', to: '/docs/radar/overview' },
            { label: 'Research Log', to: '/blog' },
          ],
        },
        {
          title: 'Core Domains',
          items: [
            { label: 'Orbital Mechanics', to: '/docs/learning-path/orbital-mechanics' },
            { label: 'GNC / ADCS', to: '/docs/learning-path/gnc-adcs' },
            { label: 'Propulsion', to: '/docs/learning-path/propulsion' },
            { label: 'CFD / Aerodynamics', to: '/docs/learning-path/aerodynamics-cfd' },
          ],
        },
        {
          title: 'Operate',
          items: [
            { label: 'Maintenance Workflow', to: '/docs/methodology/maintenance-workflow' },
            { label: 'Project Template', to: '/docs/projects/project-template' },
            { label: 'Paper Note Template', to: '/docs/papers/paper-note-template' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Windscode. Built as an aerospace simulation intelligence hub.`,
    },
    prism: {
      additionalLanguages: ['cpp', 'python', 'matlab', 'bash', 'json'],
    },
  },
};

module.exports = config;
