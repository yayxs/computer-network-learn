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
      text: 'Contents',
      children: [{ text: 'Repo Introduction', link: '/' }],
    },
  ]
}
