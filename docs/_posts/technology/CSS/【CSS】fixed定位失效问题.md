---
date: 2021-11-09 09:32:19
title: 【CSS】fixed定位失效问题
tags:
  - CSS
---

## 问题场景

之前写一个通用弹出层组件，使用 transform 做弹出效果，在弹出层中有一个二级弹出层，这个二级弹出层使用的是 fixed 定位，期望效果是相对于页面定位，但是最终的效果是二级弹出层是相对于通用弹出层组件定位的。

## 导致问题的原因

MDN 中 position: fixed 的定义如下：

> 元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。fixed 属性会创建新的层叠上下文。<font color="red">当元素祖先的 transform, perspective 或 filter 属性非 none 时，容器由视口改为该祖先。</font>

由定义可知问题出现的原因是 fixed 定位元素（二级弹出层）的祖先中有 transform 不为 none 的元素（通用弹出层组件）。

调整弹出层组件后问题解决。

## 演示

<page-example-fixed-invalid></page-example-fixed-invalid>

# 参考

[position：fixed 固定定位失效问题（不是以可视窗口定位）](https://blog.csdn.net/weixin_40594645/article/details/117172746)

[position - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)
