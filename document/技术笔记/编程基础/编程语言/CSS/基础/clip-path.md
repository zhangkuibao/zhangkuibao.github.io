<author-info date="1650428388165"></author-info>

# clip-path

## 简介

> `clip-path` 属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。

`clip-path` 支持三种类型的裁剪：`clip-source`、`geometry-box`、`basic-shape`。

这里只演示 `basic-shape` 的裁剪。

## basic-shape

基于基础图形的裁剪。

### 矩形裁剪 inset

语法：`inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )`。

- `length-percentage` 指各方向裁剪的长度（px）/程度（%），属性设置类似于 `margin`。

  - `clip-path:inset(10px)`，上下左右均沿边界向内裁剪 `10px`。
  - `clip-path:inset(10px 20%)`，上下裁剪 `10px`， 左右裁剪 `20%`。
  - `clip-path:inset(10px 20% 30px)`，上裁剪 `10px`， 左右裁剪 `20%`，下裁剪 `30px`。
  - `clip-path:inset(10px 20% 30px 40%)`，上裁剪 `10px`， 左裁剪 `20%`，下裁剪 `30px`，右裁剪 `40%`。

- `round <'border-radius'>` 是一个可选项，用于设置裁剪图形的圆角，与 `border-radius` 的区别在于：`border-radius` 设置的是基础图形的圆角，`round <'border-radius'>` 设置的是裁剪后图形的圆角。

  - `clip-path:inset(10px 20% round 10px)`，给裁剪后的图形设置 `10px` 的圆角。

#### inset 演示

<page-example-css-clip-path-inset />

## 参考

[clip-path - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)
