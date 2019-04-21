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
            '/zh/bbhj/': getBbhjSidebar(),
            '/zh/open/ai/': getAlgorithmSidebar(),
            '/zh/english/': getEnglishSidebar()
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
        'monitor'
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
      title: 'Part 1: 基本信息',
      collapsable: true,
      children: [
        '',
        'intro',
        'team',
        'weekly-report/'
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
      title: 'Part 3: 日常维护',
      collapsable: true,
      children: [
        'changelog'
      ]
    },
    {
      title: 'Part 4: 孵化项目',
      collapsable: true,
      children: [
        'new-project'
      ]
    },
    {
      title: 'Part 5: 参考',
      collapsable: true,
      children: [
        'reference'
      ]
    }
  ]
}

function getAlgorithmSidebar() {
  return [
    {
      title: '算法',
      collapsable: true,
      children: [
        ''
      ]
    },
    {
      title: '基础算法',
      collapsable: true,
      children: [
        'sort'
      ]
    },
    {
      title: '机器学习相关',
      collapsable: true,
      children: [
        'thing'
      ]
    }
  ]
}

function getEnglishSidebar() {
  return [
    {
      title: 'Overview',
      collapsable: true,
      children: [
        ''
      ]
    },
    {
      title: 'Level 3',
      collapsable: true,
      children: [
        'level3/unit3/part1/life-and-conditions-2',
        'level3/unit3/part1/forms-of-life',
        'level3/unit3/part1/instruments',
        'level3/unit3/part1/dating-anniversary',
        'level3/unit3/part1/fine-dining',
        'level3/unit3/part2/QuickServe-1',
        'level3/unit3/part2/QuickServe-2',
        'level3/unit3/part2/Sciences',
        'level3/unit3/part2/Desk-Assembly',
        'level3/unit3/part2/Life-and-the-Universe',
        'level3/unit3/part3/Harry\'s-Business-Trip-1',
        'level3/unit3/part3/Harry\'s-Business-Trip-2'
      ]
    },
    {
      title: 'Daily Question',
      collapsable: true,
      children: [
        'daily-question/02/week07',
        'daily-question/02/week08',
        'daily-question/02/week09'
      ]
    }
  ]
}
