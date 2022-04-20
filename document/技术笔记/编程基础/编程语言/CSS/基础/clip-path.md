<author-info date="1650462834271"></author-info>

# clip-path

## 简介

> `clip-path` 属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。

`clip-path` 支持三种类型的裁剪：`clip-source`、`geometry-box`、`basic-shape`。

这里只演示 `basic-shape` 的裁剪。

## basic-shape

基于基础图形的裁剪。

### 矩形裁剪 inset

语法：`inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )`。

- `length-percentage` 各方向裁剪的长度（px）/程度（%），属性设置类似于 `margin`。

  - `clip-path:inset(10px)`，上下左右均沿边界向内裁剪 `10px`。
  - `clip-path:inset(10px 20%)`，上下裁剪 `10px`， 左右裁剪 `20%`。
  - `clip-path:inset(10px 20% 30px)`，上裁剪 `10px`， 左右裁剪 `20%`，下裁剪 `30px`。
  - `clip-path:inset(10px 20% 30px 40%)`，上裁剪 `10px`， 左裁剪 `20%`，下裁剪 `30px`，右裁剪 `40%`。

- `round <'border-radius'>` 是一个可选项，用于设置裁剪图形的圆角，与 `border-radius` 的区别在于：`border-radius` 设置的是基础图形的圆角，`round <'border-radius'>` 设置的是裁剪后图形的圆角。

  - `clip-path:inset(10px 20% round 10px)`，给裁剪后的图形设置 `10px` 的圆角。

#### inset 演示

<page-example-css-clip-path-inset></page-example-css-clip-path-inset>

### 圆形裁剪 circle

语法：`circle( [ <shape-radius> ]? [ at <position> ]? )`

- `shape-radius` 裁剪的长度（px）/程度（%）。

  - `clip-path:circle(10px)`，以图形中心点作为圆心裁剪出半径为 `10px` 的圆。

- `position` 圆心位置。
  - `clip-path:circle(60px at 10% 20%)`，以图形`(10%, 20%)`作为圆心，裁剪出半径为 `10px` 的圆。

#### circle 演示

<page-example-css-clip-path-circle></page-example-css-clip-path-circle>

### 椭圆形裁剪 ellipse

语法：`ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )`

- `shape-radius` 裁剪的长度（px）/程度（%），可设两个值，分别表示 `x轴` 裁剪长度和 `y轴` 裁剪长度。
  - `clip-path:ellipse(20px 50px at 10% 20%)`，以图形 `(10%, 20%)` 作为圆心，裁剪出 `x轴` 半径为 `20px`，`y轴` 半径为 `50px` 的椭圆。
- `position` 圆心位置，同 `circle`。

#### ellipse 演示

<page-example-css-clip-path-ellipse></page-example-css-clip-path-ellipse>

### 几何裁剪 polygon

语法：`polygon([ <vertexX vertexY> ])`

- `<vertexX vertexY>`，`polygon` 属性通过设置多个顶点来裁剪图形，`<vertexX vertexY>` 表示顶点的位置，顶点数量最少三个。
  - `clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%)`，从顶点 `<50%, 0%>` 到顶点 `<100% 50%>` 再到顶点 `<50%, 100%>` 最后到顶点 `<0%, 50%>`，裁剪出一个菱形。

#### polygon 演示

<page-example-css-clip-path-polygon></page-example-css-clip-path-polygon>

## 参考

[clip-path - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)
