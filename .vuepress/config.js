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
    '/en-US': {
      lang: 'en-US',
      title: 'WeDocs Documents plantform',
      description : 'docs',
    }
  },
  themeConfig : {
    repo: 'airdb/vuepress',
    docsDir: '.',
    locales: {
      '/': {
        nav: require('../nav/zh-CN.js'),
        selectText: '选择语言',
        search: true,
	searchMaxSuggestions: 10,
        lastUpdated: '上次更新',
        sidebar: {
            '/' : [
                "/zh-CN/bbhj/",
                "/zh-CN/open/",
            ]
        },
        sidebarDepth : 2
      }
    }
  }
}
