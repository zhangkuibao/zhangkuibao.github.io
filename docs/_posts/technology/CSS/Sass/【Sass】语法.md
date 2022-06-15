---
date: 2021-09-09 09:32:10
title: 【Sass】语法
tags:
  - CSS
  - Sass
---

## 杂项

1. 属性嵌套, 如 `font-family`, `font-size`, `font-weight` 都以 `font` 作为属性的命名空间

   ```less
   .funky {
     font: {
       family: fantasy;
       size: 30em;
       weight: bold;
     }

     // 命名空间可以包含自己的属性值
     font: 20px/24px {
       family: fantasy;
       weight: bold;
     }
   }
   ```

2. 插值语句: `#{}`, 类似于 js 中的模板字符串, 可以在选择器活属性名中使用变量

## SassScript

### 变量

1. 定义: 用 `$` 定义变量, 支持块级作用域

2. 默认变量: 定义变量时如果在变量后添加 `!default` 代表当前定义的变量值是该变量的默认值, 如果该变量没有重新赋值则用默认值,否则用之后的值, 后赋的值会覆盖前面的

### 数据类型

1. 数字, `1, 2, 13, 10px`
2. 字符串, 有引号字符串与无引号字符串, `"foo", 'bar', baz`
3. 颜色, `blue, #04a3f9, rgba(255,0,0,0.5)`
4. 布尔型, `true, false`
5. 空值, `null`
6. 数组 (list), 用空格或逗号分隔的属性值, `1.5em 1em 0 2em, Helvetica, Arial, sans-serif`
7. maps, 相当于 JavaScript 的 object, `(key1: value1, key2: value2)`

### 导入

用 `@import` 进行导入

1. 同时导入多个文件时用逗号分隔, 如: `@import 'foo.scss', 'foo2.scss'`
2. 导入时使用变量只能作用域 `css` 的 `url()` 导入方式, 如: `@import url("http://fonts.googleapis.com/css?{$family}");`
3. 希望导入的 `sass`, `scss` 文件编译, 需要给被导入文件名前加下划线, 如: `_color.scss`, 导入时不需要加下划线 `@import 'color'`, 实际上导入的文件是 `_color.scss`, 同时存在带下划线和不带下划线的同名文件时, 会忽略带下划线的
4. `@import` 可以用在规则集里, 不一定非得写在全局
5. 不能在混入中使用

#### 仅作为普通 css 语句的情况

1. 文件拓展名是 `.css`
2. 文件名以 `http://` 开头
3. 文件名是 `url()`
4. `@import` 包含 `media queries`

### 扩展(@extend)

1. 把目标选择器下的规则继承到当前选择器上 `@extend .error`, `sass` 的搜索是模糊的, 类似于 `less` 的 `:extend(.error all)`, 效果等同于将当前选择器替换到对应位置
2. `sass` 允许延伸任何定义给**单个元素**的选择器
3. 同一个选择器的规则集可以扩展给多个选择器, 扩展多个时可用逗号分隔 `@extend .error, .attention`, 有相同属性时后者居上
4. 嵌套扩展

   ```less
   // sass语句
   .error {
     border: 1px #f00;
     background-color: #fdd;
   }

   .seriousError {
     @extend .error;
     border-width: 3px;
   }

   .criticalError {
     @extend .seriousError;
     position: fixed;
     top: 10%;
     bottom: 10%;
     left: 10%;
     right: 10%;
   }

   // 输出
   .error,
   .seriousError,
   .criticalError {
     border: 1px #f00;
     background-color: #fdd;
   }

   .seriousError,
   .criticalError {
     border-width: 3px;
   }

   .criticalError {
     position: fixed;
     top: 10%;
     bottom: 10%;
     left: 10%;
     right: 10%;
   }
   ```

5. 占位符选择器 `%`, 定义的规则集只用于扩展, 这样定义的规则集不会被编译到 `css` 文件中

   ```less
   // sass语句
   #context a %one {
     color: blue;
   }
   .notice {
     @extend %one;
   }

   // 编译后
   #context a .notice {
     color: blue;
   }
   ```

6. 可选指令 `!optional`

   ```less
   // sass语句
   a.important {
     color: red;
     @extend .notice; // 没有定义 .notice , 编译报错
     @extend .notice
         !optional; // 使用了指令后不会报错, 编译结果只包含可用的样式
   }
   ```

### 指令

1. `@at-root` 使规则集定义在全局而不是当前父级下

   ```less
   // sass 语句
   .parent {
     ... @at-root .child {
       ...;
     } // 包含单个选择器的用法

     @at-root {
       // 包含多个选择器的用法
       .child1 {
         ...;
       }
       .child2 {
         ...;
       }
     }
   }

   // 编译后
   .parent {
   }
   .child {
   }
   .child1 {
   }
   .child2 {
   }
   ```

2. `@debug` 调试, `@warn` 警告, `@error` 报错

3. 流程控制 `@if`, `@else`, `@else if`

   ```less
   // sass 语句
   $type: monster;
   p {
     @if $type==ocean {
       color: blue;
     } @else if $type==matador {
       color: red;
     } @else if $type==monster {
       color: green;
     } @else {
       color: black;
     }
   }
   ```

4. 循环 `@for`
   `@for $var from <start> through <end>` 使用 `through` 会包含 `<end>` 的值
   `@for $var from <start> to <end>` 使用 `to` 不会包含 `<end>` 的值
   变量名不固定

   ```less
   // sass 语句
   @for $i from 1 through 3 { // 使用through时 , 调用三次 - 1,2,3
   .item-#{$i} { width: 2em * $i; }
   }

   @for $i from 1 to 3 { // 使用to时 , 调用两次 - 1,2
   .item-#{$i} { width: 2em * $i; }
   }

   ```

5. 循环 `@while`

   ```less
   $i: 6;
   @while $i > 0 {
       .item-#{$i} { width: 2em * $i; }
       $i: $i - 2;
   }
   ```

6. 遍历 `@each`

   `$var in <list>` list 是值列表(空格或逗号分隔)
   可以遍历嵌套列表
   可以遍历 `map` 值

   ```less
   // sass语句
   $list: puma, sea-slug, egret, salamander; // list是值列表(空格或逗号分隔)
   @each $animal in $list {
       .#{$animal}-icon {
           background-image: url('/images/#{$animal}.png');
       }
   }

   // 列表中包含列表的时候, 可以用多个变量接收对应的值
   $list2: (puma, black, default), (sea-slug, blue, pointer), (egret, white, move);
   @each $animal, $color, $cursor in $list2 {
       .#{$animal}-icon {
           background-image: url('/images/#{$animal}.png');
           border: 2px solid $color;
           cursor: $cursor;
       }
   }

   // 遍历 map
   @each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
       #{$header} {
           font-size: $size;
       }
   }
   ```

### 混入(@mixin)

1. 基本用法

   ```less
   // sass 语句
   // 用 @mixin 语句定义
   @mixin large-text {
     font: {
       family: Arial;
       size: 20px;
       weight: bold;
     }
     color: #ff0000;
   }

   // 用 @include 语句引入
   a {
     @include: large-text;
   }
   ```

2. 参数
   参数默认值
   不定数量的参数

   ```less
   // sass语句
   // 带参数的混入
   @mixin sexy-border($color) {
     border: {
       color: $color;
     }
   }

   // 带默认值的混入, 参数可以用关键词
   @mixin sexy-border2($color: green) {
     border: {
       color: $color;
     }
   }

   // 不定数量的参数, 定义时在参数后加...
   @mixin box-shadow($shadows...) {
     box-shadow: $shadows;
   }

   // 固定数量参数的混入可以在引用时添加...来方便引用
   @mixin padding-box($pad1, $pad2, $pad3) {
     padding: $pad1 $pad2 $pad3;
   }

   a {
     @include: sexy-border(red); // 没有默认值的混入必须传参, 否则报错
     @include: sexy-border2; // 有默认值的混入可以不传参
     @include box-shadow(
       0px 4px 5px #666,
       2px 6px 10px #999
     ); // 定义时参数后加了...就能接收不定量的参数

     $list: 0px 4px 5px;
     @include padding-box($list...); // 在引用时使用... 可以将参数分割传入
   }
   ```

3. 插槽 `@chontent`

> 传递给 mixin 的内容块是在定义块的范围内而不是 mixin 的范围内进行评估的。这意味着无法在传递的样式块内使用 mixin 局部变量，并且变量将解析为全局值：

    ```less
    // sass 语句
    $color: white;
    @mixin colors($color: blue) { // 定义名为 $color 的参数并设置默认值
        background-color: $color;
        @content; // @content 作为占位符, 会将引入时 {} 中的内容放到这里
        border-color: $color;
    }

    .colors {
        @include colors(red) { // 可以传入参数
            color: $color; // 这里用到的变量会沿着当前作用域向上找, 而不是混入中定义的变量
        }
    }

    // 编译后
    .colors { background-color: red; color: white; border-color: red; }
    ```

### 自定义函数(@function)

声明函数 `@function`, 函数名加前缀避免冲突, 方便辨别是内置函数还是自定义函数

返回值 `@return`

    ```less
    // sass 语句
    $grid-width: 40px;
    $gutter-width: 10px;

    @function z_grid-width($n) {
        @return $n * $grid-width + ($n - 1) * $gutter-width;
    }

    #sidebar { width: z_grid-width(5); }

    // 编译后
    #sidebar { width: 240px; }

    ```
