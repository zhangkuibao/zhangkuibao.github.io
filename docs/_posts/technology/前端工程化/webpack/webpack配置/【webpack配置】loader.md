---
title: 【webpack配置】loader
tags:
  - 前端工程化
  - webpack
  - webpack配置
date: '2022-03-08 22:50:04'
---

## 作用

webpack 默认只能识别 javascript 和 json 文件，loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效模块。

loader 用于对模块的源代码（文件内容本身）进行转换。

## 官方loader
https://webpack.docschina.org/loaders/


## 用法

### 在配置文件中配置

module.rules 允许你在 webpack 配置中指定多个 loader。

给一个规则定义多个 loader 时从右到左执行，下例匹配 `/\.css$/` 规则的文件从 sass-loader 开始执行，然后继续执行 css-loader，最后以 style-loader 为结束。

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
};
```

### 内联方式

下面例子中禁用了 `css-loader` 和 `./styles.css`

```js
import Styles from "style-loader!css-loader?modules!./styles.css";
```

所有普通 loader 可以通过在请求中加上 ! 前缀来忽略（覆盖）。

所有普通和前置 loader 可以通过在请求中加上 -! 前缀来忽略（覆盖）。

所有普通，后置和前置 loader 可以通过在请求中加上 !! 前缀来忽略（覆盖）。


选项可以传递查询参数，例如 ?key=value&foo=bar，或者一个 JSON 对象，例如 ?{"key":"value","foo":"bar"}。

## 解析过程

所有一个接一个地进入的 loader，都有两个阶段：

1. Pitching 阶段: loader 上的 pitch 方法，按照 后置(post)、行内(inline)、普通(normal)、前置(pre) 的顺序调用。更多详细信息，请查看 Pitching Loader。
2. Normal 阶段: loader 上的 常规方法，按照 前置(pre)、普通(normal)、行内(inline)、后置(post) 的顺序调用。模块源码的转换， 发生在这个阶段。

