module.exports = {
  title: '计算机网络',
  description: 'Learn computer network from 0',

  themeConfig: {
    nav: [
      { text: '指南', link: '/', activeMatch: '^/$|^/guide/' },

      {
        text: 'Repo',
        link: 'https://github.com/yayxs/computer-network-learn',
      },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar(),
    },
  },
}

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [{ text: '前言', link: '/' }],
    },
    {
      text: 'Advanced',
      children: [
        { text: '抓包工具', link: '/guide/tool' },
        { text: 'HTTP的发展历史', link: '/guide/http-his' },
        { text: 'TCP/IP协议族的分层管理', link: '/guide/stratification' },
        { text: 'URI vs URL vs URN', link: '/guide/url-uri-urn' },
        { text: 'HTTP请求报文构成', link: '/guide/request-message' },
        {
          text: 'TCP 为什么握手是 3 次、挥手是 4 次',
          link: '/guide/tcp-shake-hands',
        },
        {
          text: '什么是TCP协议',
          link: '/guide/tcp',
        },
        { text: '状态码响应码', link: '/guide/code' },
        { text: '请求方法', link: '/guide/method' },
      ],
    },
  ]
}
