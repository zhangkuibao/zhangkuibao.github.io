---
date: 2021-09-08 17:12:38
title: 常用 CSS 样式
tags:
  - myGit
  - learning-Notes
  - document
  - technology
  - 常用代码
---

## 文本两端对齐

```css
.demo {
  text-align: justify;
  text-align-last: justify;
  text-justify: distribute-all-lines;
}
```

## 多行文本超出打点

```css
.demo {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; //行数
  -webkit-box-orient: vertical;
}
```

## png 小图标赋色

```css
.demo {
  height: 30px;
  width: 20px;
  overflow: hidden;
  display: inline-block;
}

/* 20px 处为宽度，30px 处为高度，在 filter 中设置颜色 */
.demo:before {
  content: "";
  background: url("./image/top.png") no-repeat;
  display: block;
  background-size: 20px 30px;
  height: 30px;
  width: 20px;
  position: relative;
  left: -20px;
  border-right: 20px solid transparent;
  /* 在 filter 中设置颜色 */
  filter: drop-shadow(red, 20px 0px);
}
```
