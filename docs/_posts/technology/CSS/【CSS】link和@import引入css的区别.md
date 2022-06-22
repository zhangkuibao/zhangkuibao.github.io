---
date: '2021-09-09 14:50:00'
title: 【CSS】link和@import引入css的区别
tags:
  - CSS
---

- link 是 XHTML 标签，除了能够加载 CSS，还可以定义 RSS 等其他事务；而@import 属于 CSS 范畴，只可以加载 CSS。

- link 引用 CSS 时，在页面载入时同时加载；@import 需要页面完全载入以后再加载。

- link 是 XHTML 标签，无兼容问题；@import 则是在 CSS2.1 提出的，低版本的浏览器不支持。

- link 支持使用 Javascript 控制 DOM 改变样式；而@import 不支持
