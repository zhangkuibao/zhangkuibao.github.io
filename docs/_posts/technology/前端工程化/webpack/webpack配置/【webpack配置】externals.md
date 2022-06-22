---
title: 【webpack配置】externals
tags:
  - 前端工程化
  - webpack
  - webpack配置
date: '2022-03-08 22:50:04'
---

## 作用

防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。

例如，从 CDN 引入 jQuery，而不是把它打包：

**index.html**

```html
<script
  src="https://code.jquery.com/jquery-3.1.0.js"
  integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk="
  crossorigin="anonymous"
></script>
```

**webpack.config.js**

```js
module.exports = {
  //...
  externals: {
    jquery: "jQuery",
  },
};
```

剥离之后依然可以访问 jQuery

```js
import $ from "jquery";

$(".my-element").animate(/* ... */);
```

## externals

要混用各种类型需要将 externals 设置为数组。

### 字符串

属性名称是 jquery，表示应该排除 import $ from 'jquery' 中的 jquery 模块。

为了替换这个模块，jQuery 的值将被用来检索一个全局的 jQuery 变量。换句话说，当设置为一个字符串时，它将被视为全局的（定义在上面和下面）。

```js
module.exports = {
  externals: {
    jquery: "jQuery",
  },
};
```

如果你想将一个符合 CommonJS 模块化规则的类库外部化，你可以提供外联类库的类型以及类库的名称：

```js
module.exports = {
  externals: {
    "fs-extra": "commonjs2 fs-extra",
  },
};
```

如果你指定的 externals 未使用类型，则会使用默认类型。例如 externals: { react: 'react' } 会被替换成 externals: { react: 'commonjs-module react' }。

### 字符串数组

值设置为字符串数组时会转换为父子结构：

```js
module.exports = {
  externals: {
    subtract: ["./math", "subtract"],
  },
};
```

其中 ./math 是父模块，而 bundle 只引用 subtract 变量下的子集。该例子会编译成 require('./math').subtract。

### 对象

此语法用于描述外部 library 所有可用的访问方式。

一个形如 { root, amd, commonjs, ... } 的对象仅允许用于 libraryTarget: 'umd' 这样的配置。它不被允许用于其它的 library targets 配置值。

```js
module.exports = {
  //...
  externals: {
    react: "react",
  },

  // 或者

  externals: {
    lodash: {
      commonjs: "lodash",
      amd: "lodash",
      root: "_", // 指向全局变量
    },
  },

  // 或者

  externals: {
    subtract: {
      root: ["math", "subtract"],
    },
  },
};
```

这里 lodash 这个外部 library 可以在 AMD 和 CommonJS 模块系统中通过 lodash 访问，但在全局变量形式下可以用 \_ 访问。subtract 可以通过全局 math 对象下的属性 subtract 访问（例如 window['math']['subtract']）。

### RegExp
匹配给定正则表达式的每个依赖，都将从输出 bundle 中排除。
```js
module.exports = {
  externals: /^(jquery|\$)$/i,
};
```

### 函数

函数接收两个入参：

- ctx (object)：包含文件详情的对象。
  - ctx.context (string): 包含引用的文件目录。
  - ctc.request (string): 被请求引入的路径。
  - ctx.contextInfo (string): 包含 issuer 的信息（如，layer）
  - ctx.getResolve 5.15.0+: 获取当前解析器选项的解析函数。
- callback (function (err, result, type)): 用于指明模块如何被外部化的回调函数

回调函数接收三个入参：

- err (Error): 被用于表明在外部外引用的时候是否会产生错误。如果有错误，这将会是唯一被用到的参数。
- result (string [string] object): 描述外部化的模块。可以接受形如 ${type} ${path} 格式的字符串，或者其它标准化外部化模块格式，(string, [string]，或 object)。
- type (string): 可选的参数，用于指明模块的类型（如果它没在 result 参数中被指明）。

## externalsType

指定 externals 的默认类型。默认为 var。

支持的类型 https://webpack.docschina.org/configuration/externals/#externalstype

### script

设置为 script 时外部脚本可以从任何URL加载。在加载脚本之后，`<script>`标记将被删除

从 CDN 加载 lodash：
```js
module.exports = {
  externalsType: 'script',
  externals: {
    lodash: ['https://cdn.jsdelivr.net/npm/lodash@4.17.19/lodash.min.js', '_'],
  },
};
```

在代码中使用：

```js
import _ from 'lodash';
console.log(_.head([1, 2, 3]));
```
