module.exports = {
  title: "ZHANGKB",
  description: "张魁堡的个人网站",
  themeConfig: {
    nav: [
      {
        text: "技术",
        link: "/category/technology/",
      },
      {
        text: "阅读",
        link: "/category/read/",
      },
      {
        text: "标签",
        link: "/tag/",
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
    ],
  },
};
