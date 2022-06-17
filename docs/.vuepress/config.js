module.exports = {
  title: "ZHANGKB",
  description: "张魁堡的个人网站",
  plugins: [require("./plugins/image-preview/index.js")],
  themeConfig: {
    nav: [
      {
        text: "HOME",
        link: "/",
      },
      {
        text: "标签",
        link: "/tag/",
      },
      {
        text: "博客",
        children: [
          {
            text: "技术",
            link: "/category/technology/",
          },
          {
            text: "阅读",
            link: "/category/read/",
          },
          {
            text: "常用代码",
            link: "/category/code/",
          },
          {
            text: "文章",
            link: "/category/article/",
          },
        ],
      },
      {
        text: "其他页面",
        children: [
          {
            text: "样式效果",
            link: "/css-exhibit",
          },
          {
            text: "收藏",
            link: "/collect",
          },
          {
            text: "工作日程",
            link: "/diary",
          },
        ],
      },
    ],
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/vuejs/vuepress",
        },
        {
          type: "twitter",
          link: "https://github.com/vuejs/vuepress",
        },
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US",
        },
        {
          text: "MIT Licensed | Copyright © 2018-present Vue.js",
        },
      ],
    },
    directories: [
      {
        id: "technology",
        dirname: "_posts/technology",
        path: "/category/technology/",
        itemPermalink: "/category/technology/:slug",
        title: "技术",
      },
      {
        id: "read",
        dirname: "_posts/read",
        path: "/category/read/",
        itemPermalink: "/category/read/:slug",
      },
      {
        id: "code",
        dirname: "_posts/code",
        path: "/category/code/",
        itemPermalink: "/category/code/:slug",
      },
      {
        id: "article",
        dirname: "_posts/article",
        path: "/category/article/",
        itemPermalink: "/category/article/:slug",
      },
    ],
  },
};
