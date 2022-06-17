---
date: 2021-11-25 12:25:19
title: 【Node】CommonJS模块
tags:
  - Node
---

在 Node.js 模块系统中，每个文件都被视为独立的模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

## 摘要

当有循环 `require()` 调用（循环引用）时，模块在返回时可能尚未完成执行。

模块在**第一次加载后**被缓存，每次调用 require('foo') 都会返回完全相同的对象（如果解析为相同的文件）。

node 默认可以加载后缀为 `.js、.json、.node` 的文件

## 语法

### 导入

- 传入模块名,js 后缀可忽略,返回对应模块导出的内容

`require('./foo')`

- 可以加载 json 文件

`reqire('./data.json')`

- 当一个目录下的模块名为 `index` 时,可以用模块所在目录的路径代替模块文件路径

```js
// 下面两个导入等价
var cat = require("/home/user/lib/cat");
var cat = require("/home/user/lib/cat/index");
```

### 导出

- 导出单个属性

```js
// a.js 导出
exports.str = "hello";

// b.js 导入
require("./a"); // {str:'hello'}
```

- 用 `module.exports` 替换导出对象

```js
// a.js 导出
module.exports = "hello";

// b.js 导入
require("./a"); // 'hello'
```

## 概念

### 主模块

当文件直接从 Node.js 运行时，此文件被称为主模块。

通过测试 require.main === module 可以确定文件是否被直接运行。

通过查看 require.main.filename 可以得到当前应用的入口点。

### 缓存

模块在**第一次加载后**被缓存。 这意味着（类似其他缓存）每次调用 `require('foo')` 都会返回完全相同的对象（如果解析为相同的文件）。

如果 `require.cache` 没有被修改，则多次调用 `require('foo')` 不会导致模块代码被多次执行。

模块根据其解析的**文件名**进行缓存，而不管他们是不是同一个文件（在不区分大小写的文件系统或操作系统上要注意）。

#### require.cache

模块在需要时缓存在此对象中。 通过从此对象中删除键值，下一次 `require()` 将重新加载模块。 这不适用于原生插件，因为重新加载会导致错误。

核心模块貌似也无法缓存？

- index.js

```js
let cs = require("./index2");

console.log(2, require.cache);
```

在 `index.js` 中 `require("./index2")` 时的 `require.cache` 如下：

```js
[Object: null prototype] {
  'D:\\code\\miniPrograme\\hm-miniapp\\index.js': Module {
    id: '.',
    path: 'D:\\code\\miniPrograme\\hm-miniapp',
    exports: {},
    filename: 'D:\\code\\miniPrograme\\hm-miniapp\\index.js',
    loaded: false,
    children: [ [Module] ],
    paths: [
      'D:\\code\\miniPrograme\\hm-miniapp\\node_modules',
      'D:\\code\\miniPrograme\\node_modules',
      'D:\\code\\node_modules',
      'D:\\node_modules'
    ]
  },
  'D:\\code\\miniPrograme\\hm-miniapp\\index2.js': Module {
    id: 'D:\\code\\miniPrograme\\hm-miniapp\\index2.js',
    path: 'D:\\code\\miniPrograme\\hm-miniapp',
    exports: [Function (anonymous)],
    filename: 'D:\\code\\miniPrograme\\hm-miniapp\\index2.js',
    loaded: true,
    children: [],
    paths: [
      'D:\\code\\miniPrograme\\hm-miniapp\\node_modules',
      'D:\\code\\miniPrograme\\node_modules',
      'D:\\code\\node_modules',
      'D:\\node_modules'
    ]
  }
}
```

### 从 node_modules 目录加载

如果 `/home/ry/projects/foo.js` 处的文件调用 `require('bar.js')`，则 Node.js 将按以下顺序查找以下位置：

- /home/ry/projects/node_modules/bar.js

- /home/ry/node_modules/bar.js

- /home/node_modules/bar.js

- /node_modules/bar.js

### 模块封装器

`__filename`、`__dirname` 看起来像是全局变量其实并不是。

在执行模块代码之前，Node.js 将使用如下所示的函数封装器对其进行封装：

```js
(function (exports, require, module, __filename, __dirname) {
  // 模块代码实际存在于此处
});
```

### 模块导出原理

`exports` 是对 `module.exports` 的引用，但是直接给 `exports` 赋值并不会修改当前模块的导出对象：

```js
exports = function () {};
```

只有当 `module.exports` 属性被新对象完全替换时，才会覆盖当前的导出对象：

```js
module.exports = function () {};
```

`require()` 的实现大致如下：

```js
function require(/* ... */) {
  const module = { exports: {} };
  ((module, exports) => {
    // 模块代码在这里。 在本例中，定义一个函数。
    function someFunc() {}
    exports = someFunc;
    // 此时，exports 不再是 module.exports 的快捷方式，
    // 并且此模块仍然会导出空的默认对象。
    module.exports = someFunc;
    // 此时，该模块现在将导出 someFunc，
    // 而不是默认对象。
  })(module, module.exports);
  return module.exports;
}
```

## 参考

[modules](http://nodejs.cn/api/modules.html)
