# CSS手册
> 1. 记录 `css` 中常用但是不好记的属性
> 2. 记录 `css` 零散知识及使用技巧

## CSS属性
### `transition` 过渡属性
只有具有**中间值**的属性才具备过渡效果

#### 语法
`transition: property duration timing-function delay;`

#### 实例
`transition: all 1s linear 0s;`

#### 定义
`transition` 是复合属性，用于设置四个过渡属性
- `transition-property` 设置过渡效果的 **CSS属性** 的名称
- `transition-duration` 完成过渡效果需要的时间
- `transition-timing-function` 过渡效果的速度曲线
- `transition-delay` 过渡效果多久后执行

#### 事件
##### `transitionend` 过渡完成后执行
1. 浏览器兼容性
- `safari3.1-6`、`ISO3.2-6.1`、`android2.1-4.3`需要使用`webkitTransitionEnd`事件

- 若 `transition` 效果发生在**伪元素**上，`IE浏览器` 将不会触发 `transitionEnd` 事件

2. 事件对象的私有属性
- `propertyName`：触发过渡效果的CSS属性名
- `elapsedTime`：效果实际持续事件
-  `pseudoElement`：如果 `transition` 效果发生在伪元素，会返回该伪元素的名称，以“::”开头。如果不发生在伪元素上，则返回一个空字符串''

#### 浏览器支持
`Safari` 需加 `-webkit-` 前缀

`IE 9` 及之前版本不支持

### 渐变色

#### `linear-gradient`线性渐变
默认方向为从上到下，需要设定至少两个颜色节点，可以设置一个起点和方向或角度

##### 语法
`background:linear-gradient(angle, color1 soft-line1, color2 soft-line2, ...);`
1. `angle` 为渐变方向/角度，见下面**方向设定**
2. `color` 为渐变颜色，支持16进制颜色、关键字、`rgb()`、`rgba()`、`transparent`

##### 方向设定
1. 方向值：（`to bottom`、`to top`、`to right`、`to left`、`to bottom right`，等）
2. 角度值：角度是指水平线和渐变线之间的角度，逆时针方向计算。`0deg` 等同于 `to top`

##### 颜色设定
颜色支持透明度，`background-image: linear-gradient(rgba(255,0,0,0), rgba(255,0,0,1));`

## 小知识
### transition和animation区别
1. `transition` 需要触发事件才能执行， `animation` 需要设置关键帧才能执行；
2. `transition` 只能指定起始和结束的状态，`animation` 可设置多个关键帧
3. `transition` 只能执行一次，`animation` 可用 `iteration-count` 设置执行次数

### 外边距（margin）
1. (`margin-bottom`,`right`) 与 (`margin-left`,`top`) 为负时行为不一致，左上是移动本元素，右下是拉动其他元素

## 技巧
### 画一条0.5像素的线
思路: 设置容器上边框宽度为1px，再缩放0.5倍
```css
div {
	border-top: 1px solid black;
	transform: scaleY(0.5);
}
```

# 知识点
1. (margin-bottom,right) 与 (margin-left,top) 为负时行为不一致，左上是移动本元素，右下是拉动其他元素

## 一、transition和animation区别
1. transition需要触发事件才能执行， animation需要设置关键帧才能执行；
2. transition只能指定起始和结束的状态，animation可设置多个关键帧
3. transition只能执行一次，animation可用 iteration-count 设置执行次数

# 属性
1. shape-outside;  Shapes布局可以实现不规则的文字环绕效果，需要和浮动配合使用,可以定义文本环绕的几何形状
2. 绝对定位和固定定位时，同时设置 left 和 right 等同于隐式地设置宽度

# 骚操作
## 一、画一条0.5像素的线
思路: 设置容器上边框宽度为1px，再缩放0.5倍
```css
div {
	border-top: 1px solid black;
	transform: scaleY(0.5);
}
```