---
date: 2021-09-09 09:32:22
title: 【Sass】Sass与Less的异同
tags:
  - CSS
  - Sass
---

## 不同处

1. 定义变量: less 用 `@` , Sass 用 `$`
2. 导入文件: less 一次只能导入一个文件, sass 可以同时导入多个
3. 扩展:
   `less` 用 `:extend()`, `sass` 用 `@extend`, `sass` 默认全部替换, 等同于`less` 的 `:extend(.err all)`
   `sass`不可以扩展复杂选择器如 `div a`, `less` 可以

   ```less
   // less, sass 同一段样式
   .error {
     border: 1px #f00;
     background-color: #fdd;
   }
   .error.intrusion {
     background-image: url("/image/hacked.png");
   }
   .seriousError {
     &:extend(.error); // less, 没有用all指令, 进行严格匹配, 完全相等才会扩展
     @extend .error; // sass, 替换所有匹配的地方, 类似less 的all
     border-width: 3px;
   }

   // less 编译后
   .error,
   .seriousError {
     border: 1px #f00;
     background-color: #fdd;
   }
   .error.intrusion {
     background-image: url("/image/hacked.png");
   }
   .seriousError {
     border-width: 3px;
   }

   // sass 编译后
   .error,
   .seriousError {
     border: 1px #f00;
     background-color: #fdd;
   }
   .error.intrusion,
   .intrusion.seriousError {
     background-image: url("/image/hacked.png");
   }
   .seriousError {
     border-width: 3px;
   }
   ```

### 父级选择器 `&`

`Sass`: `&` 必须作为选择器的第一个字符

    ```css
    div {
        one&two {} // less 可以在 & 前直接加字符, Sass不能这样用

        one &two {} // 这样都是可以的
        one & two {} // 这样都是可以的
    }

    // 输出
    onedivtwo {
        color: red;
    }
    ```

## 相同处

1. 父级选择器 `&`
2. 嵌套规则, 允许将一套 `CSS` 样式嵌套进另一套样式中，内层的样式将它外层(所有而非最近)的选择器作为父选择器
3. 导入都用 `@import`, 都可在嵌套中使用导入语句
