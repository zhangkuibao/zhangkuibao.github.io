---
date: 2021-09-09 14:38:33
title: 【PWA】manifest
tags:
  - 浏览器
  - PWA
---

## 介绍

这个 manifest 并不是 ApplicationCache 中的那个 manifest，而是在 link 标签中引入的、告知如何安装 web 应用的 json 文件

```html
<head>
  <title>Minimal PWA</title>
  <meta name="viewport" content="width=device-width, user-scalable=no" />
  <link rel="manifest" href="manifest.webmanifest" />
  <link rel="stylesheet" type="text/css" href="main.css" />
  <link rel="icon" href="/e.png" type="image/png" />
</head>
```

manifest.webmanifest

```json
{
  "name": "Minimal PWA", // 必填 显示的插件名称
  "short_name": "PWA Demo", // 可选  在APP launcher和新的tab页显示，如果没有设置，则使用name
  "description": "The app that helps you understand PWA", //用于描述应用
  "display": "standalone", // 定义开发人员对Web应用程序的首选显示模式。standalone模式会有单独的
  "start_url": "/", // 应用启动时的url
  "theme_color": "#313131", // 桌面图标的背景色
  "background_color": "#313131", // 为web应用程序预定义的背景颜色。在启动web应用程序和加载应用程序的内容之间创建了一个平滑的过渡。
  "icons": [
    // 桌面图标，是一个数组
    {
      "src": "icon/lowres.webp",
      "sizes": "48x48", // 以空格分隔的图片尺寸
      "type": "image/webp" // 帮助userAgent快速排除不支持的类型
    },
    {
      "src": "icon/lowres",
      "sizes": "48x48"
    },
    {
      "src": "icon/hd_hi.ico",
      "sizes": "72x72 96x96 128x128 256x256"
    },
    {
      "src": "icon/hd_hi.svg",
      "sizes": "72x72"
    }
  ]
}
```
