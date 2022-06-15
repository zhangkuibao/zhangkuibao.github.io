---
date: 2021-11-25 14:23:53
title: ECMAScript 模块
tags:
  - Node
  - 模块
---

## 语法

### 导出

```js
export const CONSTANT = 42;

export let variable = 42;
// 对外暴露的变量为只读
// 无法从外部修改

export function fun() {
  console.log("fun");
}

export class C extends Super {
  method() {
    console.log("method");
  }
}

let a, b, other;
export { a, b, other as c };

export default 1 + 2 + 3 + more();
```

### 导入

```js
import { CONSTANT, variable } from "./module.js";
// 导入由其他模块导出的“绑定”
// 这些绑定是动态的. 这里并非获取到了值的副本
// 而是当将要访问“variable”时
// 再从导入的模块中获取当前值

import * as module from "./module.js";
module.fun();
// 导入包含所有导出内容的“命名空间对象”

import theDefaultValue from "./module.js";
// 导入 `default` 导出的快捷方式
```

## 参考

[ECMAScript 模块](https://webpack.docschina.org/guides/ecma-script-modules/)
