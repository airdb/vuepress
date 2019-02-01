module.exports = {
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
            '/zh/linux/': getLinuxSidebar('Part 1', 'Part 2')
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


function getLinuxSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
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
      title: groupB,
      collapsable: false,
      children: [
        'nginx',
        'dhcp',
      ]
    }
  ]
}
