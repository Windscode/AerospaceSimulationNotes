// @ts-check

const config = {
  title: 'Aerospace Simulation Notes',
  tagline: '航天仿真资料、工具链、开源项目与工程实践笔记',
  favicon: 'img/favicon.ico',

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
        },
        blog: {
          showReadingTime: true,
          routeBasePath: 'blog',
          blogTitle: '研究日志',
          blogDescription: '航天仿真学习、工程验证和资料整理日志',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Aerospace Simulation Notes',
      items: [
        { type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: '资料库' },
        { to: '/blog', label: '研究日志', position: 'left' },
        { href: 'https://github.com/Windscode/AerospaceSimulationNotes', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '资料库',
          items: [
            { label: '学习路线', to: '/docs/learning-path/overview' },
            { label: '工具软件', to: '/docs/tools/overview' },
            { label: '开源项目索引', to: '/docs/projects/overview' },
          ],
        },
        {
          title: '原则',
          items: [
            { label: '整理规范', to: '/docs/methodology/content-rules' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Windscode. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['cpp', 'python', 'matlab'],
    },
  },
};

module.exports = config;
