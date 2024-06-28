export function createSideBarZH() {
  return [
    {
      text: '2024年',
      collapsed: true,
      items: [
        { text: '6 月 28 日', link: '/posts/2024/6-28' },
        { text: '6 月 27 日', link: '/posts/2024/6-27' },
        { text: '6 月 26 日', link: '/posts/2024/6-26' },
        { text: '6 月 25 日', link: '/posts/2024/6-25' },
      ]
    }
  ]
}

// 英文侧边栏更换格式，否则太占位了
export function createSideBarEN() {
  return [
    {
      text: 'The Year 2024',
      collapsed: true,
      items: [
        { text: '002: The Motivation for indie Development', link: '/en/posts/2024/002' },
        { text: '001: AI Content Pollution in Search', link: '/en/posts/2024/001' },
        { text: '000: A New Beginning', link: '/en/posts/2024/000' },
      ]
    }
  ]
}
