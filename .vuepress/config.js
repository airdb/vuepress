module.exports = {
  head: [
	['link', {rel: 'icon', href: `/favicon.ico`}]
  ],
  base : '/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'airdb 技术公益平台',
      description : '科技让公益更加美好。',
    },
    '/en-US/': {
      lang: 'en-US',
      title: 'airdb Tech Welfare',
      description : 'Best Tech for Best Life.',
    }
  },
  themeConfig : {
    repo: 'airdb/vuepress',
    docsDir: '.',
    locales: {
      '/': {
		label: '简体中文',
        selectText: '选择语言',
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: '上次更新',
        nav: require('../nav/zh-CN.js'),
        sidebar: {
            '/' : [
                "/zh-CN/bbhj/",
                "/zh-CN/open/",
            ]
        },
        sidebarDepth : 2
      },
      '/en-US/': {
		label: 'English',
        selectText: 'Languages',
        lastUpdated: 'LastUpdated',
        search: true,
        searchMaxSuggestions: 10,
        nav: require('../nav/en-US.js'),
        sidebar: {
            '/zh-CN' : [
                "/zh-CN/bbhj/",
                "/zh-CN/open/",
            ]
        },
        sidebarDepth : 2
      }
    }
  }
}
