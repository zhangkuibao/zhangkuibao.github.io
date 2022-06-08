<author-info date="1631092611621"></author-info>

# Flex布局

>  Flex布局是轴线布局，可以指定项目相对于轴线的位置，可以看做是**一维布局**
>
>  Flex盒子有两条轴线，主轴（main axis）和交叉轴（cross axis）， 默认主轴方向为水平向右，交叉轴为与主轴垂直向下

## 将元素设置为 `flex容器`

> 一个 `flex容器` 会生成一个新的 `flex formatting context` ，与 `BFC` 有相似的特性，
>
> [详情]: https://www.w3.org/TR/css-flexbox-1/#flex-containers	"详情"

1. `display: flex;` 设置容器为块级flex容器
2. `display: inline-flex; ` 设置容器为行级flex容器

## 设置在容器(`flex-container`)上的属性

| 属性            | 描述                                                   |
| --------------- | ------------------------------------------------------ |
| flex-direction  | 设置主轴方向（交叉轴与主轴垂直）                       |
| flex-wrap       | 设置内部项目换行方式                                   |
| flex-flow       | 上面两个属性的 **复合** 写法                           |
| justify-content | 设置项目在主轴上的对齐方式                             |
| align-items     | 设置项目在交叉轴上的对齐方式                           |
| align-content   | 设置多轴线（存在多行）时各**主轴**在交叉轴上的对齐方式 |

### flex-direction：设置主轴方向

   > row（默认）：水平，起点在左端
   >
   > row-reverse：水平，起点在右端
   >
   > column：垂直，起点在上沿
   >
   > column-reverse：垂直，起点在下沿

### flex-wrap：设置项目换行方式

   > nowrap（默认）：不换行，`single-line`，所有元素在同一行
   >
   > wrap：换行，第一行在上方，`multi-line`，元素超出容器时多行排列，每行至少有一个元素
   >
   > wrap-reverse：换行，第一行在下方

### justify-content：设置项目在主轴上的对齐方式

   > flex-start（默认）：以主轴起点为起点 **紧密** 排列
   >
   > flex-end：以主轴终点为起点 **紧密** 排列
   >
   > center：居中 **紧密** 排列
   >
   > space-between：两端对齐， **紧贴** 容器边缘，项目间间隔相等
   >
   > space-around：每个项目两侧的间隔相等（项目间的间隔比项目与边框的间隔大一倍）

### align-items：设置项目在交叉轴上的对齐方式

   > stretch（默认）：伸展，与flex-start类似，沿交叉轴起点排列
   >
   > flex-start：以交叉轴起点为起点
   >
   > flex-end：以交叉轴终点为起点
   >
   > center：居中
   >
   > baseline：以文字基线对齐

### align-content：设置多轴线（存在多行）时各主轴在交叉轴上的对齐方式

   > stretch（默认）：轴线占满整个交叉轴
   >
   > flex-start：沿交叉轴起点对齐
   >
   > flex-end：沿交叉轴终点对齐
   >
   > center：居中
   >
   > space-between：沿交叉轴两端对齐（**紧贴**），轴线间的间隔相等
   >
   > space-around：轴线间间隔相等（轴线间的间隔比轴线与边框的间隔大一倍）

## 设置在项目(`flex-item`)上的属性

| 属性        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| order       | 设置项目的排列顺序                                           |
| align-self  | 设置项目单独的交叉轴对齐方式，可覆盖align-items              |
| flex-grow   | 设置项目分配剩余空间的比例                                   |
| flex-shrink | 设置项目在空间不足时的缩小比例                               |
| flex-basis  | 设置项目占据主轴空间的大小，**值会覆盖width**，主轴的剩余空间根据该属性计算 |
| flex        | 上三个属性的 **复合** 写法，也可以有设置为关键字，详情见下   |

### order：设置项目的排列顺序

   > 默认值为0，数值越小排列越靠前，可为负值

### align-self：设置单个项目的交叉轴对齐方式

   > auto（默认）：继承父元素的align-items属性，如果没有父元素则等同于stretch
   >
   > 其他取值与align-items属性值相同

### flex-grow：设置项目分配剩余空间的比例

   > 默认值为0，即如果存在剩余空间也不放大
   >
   > 数值越大占据的空间越大

### flex-shrink：设置项目在空间不足时的缩小比例

   > 默认值为1，即如果空间不足所有项目都会缩小
   >
   > 如果一个项目的属性值为0，则空间不足时该项目不缩小
   >
   > 负值无效

### flex-basis：定义在分配多余空间之前， 项目占据的主轴空间

   > 默认值为auto，即项目本来的大小，属性值和width类似
   >
   > 该属性值会覆盖width的值
   
### flex：复合属性，可设置关键字

   > flex: initial（默认）：0 1 auto;  不会分配剩余空间
   >
   > flex: auto：1 1 auto;  分配剩余空间
   >
   > flex: none：0 0 auto;  不收缩
   >
   > flex: 3;  正数， 完全自适应，同时将 flex-basis 设置为0，相当于 3 0 0;（flex-grow为设置的数字）

