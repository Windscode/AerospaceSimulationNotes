const config = {
  title: '航天仿真研究库',
  tagline: 'AeroSim Research Lab',
  favicon: 'img/brand/orbital-mark.svg',
  url: 'https://windscode.github.io',
  baseUrl: '/AerospaceSimulationNotes/',
  organizationName: 'Windscode',
  projectName: 'AerospaceSimulationNotes',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'zh-CN', locales: ['zh-CN'] },
  presets: [[ 'classic', {
    docs: { sidebarPath: require.resolve('./sidebars.js'), routeBasePath: 'docs' },
    blog: { showReadingTime: true, routeBasePath: 'blog-archive', blogTitle: '研究日志原始归档', postsPerPage: 9, onUntruncatedBlogPosts: 'ignore' },
    theme: { customCss: [
      require.resolve('./src/css/custom.css'),
      require.resolve('./src/css/visual-fixes.css'),
      require.resolve('./src/css/aerolab-theme.css'),
      require.resolve('./src/css/aerolab-sections.css'),
      require.resolve('./src/css/aerolab-polish.css'),
      require.resolve('./src/css/aerolab-cn.css'),
      require.resolve('./src/css/aerolab-audit-fixes.css')
    ] }
  }]],
  themeConfig: {
    image: 'img/visual/mission-control-atlas.svg',
    metadata: [{ name: 'theme-color', content: '#050916' }],
    colorMode: { defaultMode: 'dark', disableSwitch: false, respectPrefersColorScheme: false },
    navbar: { title: '航天仿真研究库', logo: { alt: '航天仿真研究库', src: 'img/brand/orbital-mark.svg' }, hideOnScroll: true, items: [
      { to: '/', label: '首页', position: 'left' },
      { to: '/intelligence', label: '研究情报', position: 'left' },
      { to: '/knowledge', label: '知识库', position: 'left' },
      { to: '/missions', label: '任务案例', position: 'left' },
      { to: '/tools', label: '工程软件', position: 'left' },
      { to: '/radar', label: '项目雷达', position: 'left' },
      { to: '/data', label: '数据方法', position: 'left' },
      { to: '/log', label: '研究日志', position: 'right' }
    ] },
    footer: { style: 'dark', copyright: `Copyright © ${new Date().getFullYear()} Windscode. AeroSim Research Lab.` },
    prism: { additionalLanguages: ['cpp','python','matlab','bash','json'] },
  },
};
module.exports = config;