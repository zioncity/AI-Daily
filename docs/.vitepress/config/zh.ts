import { DefaultTheme, defineConfig } from 'vitepress'

import { createSideBarZH } from "../utils/createSideBar";
import { link } from 'fs';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "高军 AI 日报",
  description: "《高军 AI 日报》：每天花 1 分钟时间，获取精选的前沿 AI 信息。内容涵盖但不限于前沿 AI 资讯、AI 工具、AI 绘画、开源项目和学习教程等。",
  lang: "zh-Hans", //语言

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    docFooter: {
      prev: '下一期',
      next: '上一期'
    },
    outlineTitle: "目录",
    lastUpdatedText: "最近更新时间",

    sidebar: createSideBarZH(),

    // nav: [
    //   {text: 'AI 日报', link: '/index'},
    //   {text: '关于我', link: 'https://gojun.me'},
    // ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/intent/follow?screen_name=GoJun315' },
      { icon: 'github', link: 'https://github.com/freelander' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>RSS</title><path d="M108.56,342.78a60.34,60.34,0,1,0,60.56,60.44A60.63,60.63,0,0,0,108.56,342.78Z"/><path d="M48,186.67v86.55c52,0,101.94,15.39,138.67,52.11s52,86.56,52,138.67h86.66C325.33,312.44,199.67,186.67,48,186.67Z"/><path d="M48,48v86.56c185.25,0,329.22,144.08,329.22,329.44H464C464,234.66,277.67,48,48,48Z"/></svg>',
        },
        link: "/feed.xml",
      },
    ],

    editLink: {
      pattern: "https://github.com/Freelander/AI-Daily/edit/master/docs/:path",
      text: "在GitHub上编辑此页",
    },
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "时间线",
    darkModeSwitchLabel: "深色模式",
  },
})

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  root: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}
