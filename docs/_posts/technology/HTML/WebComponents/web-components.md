---
date: 2021-09-08 17:53:51
title: web-components
tags:
  - HTML
  - WebComponents
---

## 介绍

Web Components 是 W3C 正在向 HTML 和 DOM 规范添加的一套标准，它允许在 Web 应用程序中创建可重用的组件。

实际上就是官方的组件规范。

## 实现 Web Components 的关键技术

Web Components 由三项主要技术组成：

- Custom elements（自定义元素）

它使开发者能够将 HTML 页面的功能封装为 custom elements（自定义标签）、即封装组件。

- Shadow DOM（影子 DOM）

通过 Shadow DOM 可以保持元素的功能私有，这样它们就可以被脚本化和样式化，而不用担心与文档的其他部分发生冲突。

- HTML templates（HTML 模板）

`<template>` 和 `<slot>` 元素使您可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。

template 标签中的内容不会被渲染，但可以通过 js 来访问操作，类似于以前使用 `<script type="text/html">` 当做模板一样。

slot 标签的支持度还很低。

## 参考

[Web Components——MDN](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)
