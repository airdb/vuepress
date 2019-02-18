const path = require('path')

module.exports = {
  clientRootMixin: path.resolve(__dirname, 'mixin.js'),
  head: [
	['link', {rel: 'icon', href: `/favicon.ico`}]
  ],
  ga: 'UA-133539351-1',
  base : '/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Airdb',
      description : '科技让公益更加美好。',
    },
    '/en-US/': {
      lang: 'en-US',
      title: 'Airdb Technical Welfare',
      description : 'Best Tech for Best Life.',
    }
  },
  themeConfig : {
    repo: 'airdb/vuepress',
    editLinks: true,
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
            '/zh/linux/': getLinuxSidebar(),
            '/zh/bbhj/': getBbhjSidebar()
        }
      },
      '/en-US/': {
	    label: 'English',
        selectText: 'Languages',
        lastUpdated: 'LastUpdated',
        search: true,
        searchMaxSuggestions: 10,
        nav: require('../nav/en-US.js'),
        sidebar: {
            '/zh/' : [
                "/zh/bbhj/",
                "/zh/open/",
            ]
        },
        sidebarDepth : 2
      }
    }
  }
}


function getLinuxSidebar() {
  return [
    {
      title: 'Part 1: Base Skills',
      collapsable: true,
      children: [
        '',
        'bash',
        'bash-prog',
        'vim',
        'ssh',
        'tools',
      ]
    },
    {
      title: 'Part 2: Base Service',
      collapsable: true,
      children: [
        'nginx',
        'dhcp',
      ]
    },
    {
      title: 'Part 3: Linux Performance',
      collapsable: true,
      children: [
      ]
    },
    {
      title: 'Part 4: Linux Monitor',
      collapsable: true,
      children: [
      ]
    }
  ]
}

function getBbhjSidebar() {
  return [
    {
      title: 'Part 1: 项目介绍',
      collapsable: true,
      children: [
        ''
      ]
    },
    {
      title: 'Part 2: 服务部署',
      collapsable: true,
      children: [
        'bbs-deploy'
      ]
    },
    {
      title: 'Part 3: 更新日志',
      collapsable: true,
      children: [
        'changelog'
      ]
    }
  ]
}
