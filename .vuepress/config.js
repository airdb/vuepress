module.exports = {
  title: 'WeDocs 文档平台',
  description : 'docs',
  base : '/v1/',
  themeConfig : {
    nav : [
        { text: 'SYS1', link: '/sys1/' },
        { text: 'SYS2', link: '/sys2' },
        { text: 'SYS3', link: '/sys3' },
        { text: '附录：错误码', link: '/error' },
        { text: 'Languages',
          items: [
            { text: 'Chinese', link: '/language/chinese' },
            { text: 'Japanese', link: '/language/japanese' }
          ]
        },
        {
          text: '系统',
          items: [
	    { text: 'sys1',
              items: [
                { text: '文档', link: '/language/chinese' },
                { text: '接口', link: '/language/japanese' }
              ]
            }
          ]
        }
      ],
    sidebar: {
        '/' : [
            "apiword",
            "api",
            "error"
        ]
    },
    sidebarDepth : 2
  }
}
