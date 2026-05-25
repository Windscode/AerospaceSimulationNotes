// @ts-check
const config = {
  title: '航天仿真研究库',
  tagline: '航天仿真工程软件、开源项目、论文资料与复现实验的长期知识门户',
  favicon: 'img/brand/orbital-mark.svg',
  url: 'https://windscode.github.io',
  baseUrl: '/AerospaceSimulationNotes/',
  organizationName: 'Windscode',
  projectName: 'AerospaceSimulationNotes',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'zh-CN', locales: ['zh-CN'] },
  presets: [[ 'classic', { docs: { sidebarPath: require.resolve('./sidebars.js'), routeBasePath: 'docs', editUrl: 'https://github.com/Windscode/AerospaceSimulationNotes/edit/main/' }, blog: { showReadingTime: true, routeBasePath: 'blog', blogTitle: '研究日志', blogDescription: '每日研究动态、论文笔记、项目评估和复现实验记录', postsPerPage: 9, editUrl: 'https://github.com/Windscode/AerospaceSimulationNotes/edit/main/', onUntruncatedBlogPosts: 'ignore' }, theme: { customCss: require.resolve('./src/css/custom.css') } }]],
  themeConfig: {
    image: 'img/visual/mission-control-atlas.svg',
    metadata: [{ name: 'keywords', content: '航天仿真, MATLAB, Simulink, Ansys STK, GMAT, Orekit, Tudat, Basilisk, CFD, GNC, 轨道力学, 复现实验, 开源航天项目, 航天知识库' }, { name: 'theme-color', content: '#050916' }],
    colorMode: { defaultMode: 'dark', disableSwitch: false, respectPrefersColorScheme: false },
    navbar: { title: '航天仿真研究库', logo: { alt: '航天仿真研究库', src: 'img/brand/orbital-mark.svg' }, hideOnScroll: true, items: [ { to: '/', label: '首页', position: 'left' }, { to: '/intelligence', label: '研究情报', position: 'left' }, { to: '/tools', label: '工程软件栈', position: 'left' }, { to: '/radar', label: '项目雷达', position: 'left' }, { to: '/reproduction-lab', label: '复现实验室', position: 'left' }, { type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: '知识库' }, { to: '/blog', label: '研究日志', position: 'left' }, { href: 'https://github.com/Windscode/AerospaceSimulationNotes', label: 'GitHub', position: 'right' } ] },
    footer: { style: 'dark', links: [ { title: '核心入口', items: [ { label: '研究情报', to: '/intelligence' }, { label: '工程软件栈', to: '/tools' }, { label: '项目雷达', to: '/radar' }, { label: '复现实验室', to: '/reproduction-lab' } ]}, { title: '知识库', items: [ { label: '网站定位', to: '/docs/intro' }, { label: '设计系统', to: '/docs/architecture/design-system' }, { label: '内容模型', to: '/docs/architecture/content-model' }, { label: '维护流程', to: '/docs/operations/maintenance-workflow' } ]}, { title: '模板', items: [ { label: '工具条目模板', to: '/docs/templates/tool-entry-template' }, { label: '项目评估模板', to: '/docs/templates/project-evaluation-template' }, { label: '论文笔记模板', to: '/docs/templates/paper-note-template' }, { label: '复现实验模板', to: '/docs/templates/reproduction-log-template' } ]} ], copyright: `Copyright © ${new Date().getFullYear()} Windscode. 航天仿真研究库。` },
    prism: { additionalLanguages: ['cpp','python','matlab','bash','json'] },
  },
};
module.exports = config;
