---
date: 2021-09-08 17:11:14
title: Sass 函数
tags:
  - myGit
  - learning-Notes
  - document
  - technology
  - 常用代码
---

## 多行文本超出打点

```scss
// 多行文本超出打点, 参数为行数
@mixin textOver($num) {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $num; //行数
  -webkit-box-orient: vertical;
}
```

## 绝对定位水平居中

```scss
// 绝对定位 水平居中 参数为高度
@mixin absHorizontalCenter($top) {
  position: absolute;
  top: $top;
  left: 50%;
  transform: translateX(-50%);
}
```

## 文本水平垂直居中

```scss
// 文本水平垂直居中 参数为高度
@mixin textCenter($height) {
  height: $height;
  line-height: $height;
  text-align: center;
}
```

## png 小图标赋色

```scss
// png小图标赋色 参数依次为:图标地址,颜色,宽度,高度
@mixin changePngColor($url, $color, $width, $height) {
  height: $height;
  width: $width;
  overflow: hidden;
  display: inline-block;
  &:before {
    content: "";
    background: url($url) no-repeat;
    display: block;
    background-size: $width $height;
    height: $height;
    width: $width;
    position: relative;
    left: -$width;
    border-right: $width solid transparent;
    filter: drop-shadow($color $width 0px);
  }
}
```

```scss
// 示例
.icon {
  @include changePngColor("./icon.png", red, 25px, 25px);
}
```
