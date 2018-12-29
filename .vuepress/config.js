module.exports = {
  base : '/v1/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Docs 文档平台',
      description : 'docs',
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
                "zh-CN/sys1/",
                "apiword",
                "api",
                "error"
            ]
        },
        sidebarDepth : 2
      }
    }
  }
}
