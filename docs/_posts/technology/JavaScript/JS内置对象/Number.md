---
date: 2021-09-08 18:03:33
title: Number
tags:
  - myGit
  - learning-Notes
  - document
  - technology
  - JavaScript
  - JS内置对象
---

js 能够准确表示的整数范围为 `(-2^53, 2^53)` ，ECMAScript standard, chapter*[6.1.6 The Number Type](https://www.ecma-international.org/ecma-262/#sec-ecmascript-language-types-number-type)*

## 静态方法

1. `Number.isInteger` 判断值是否为整数，注意 [`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN) 和正负 [`Infinity`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity) 不是整数。

```js
Number.isInteger =
  Number.isInteger ||
  function(value) {
    return (
      typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) === value
    );
  };
```

## 原型方法

1. `toFixed(digits)`，参数为小数点后数字的个数，多则四舍五入，少则后面补 0，返回值为 `String` 类型

## 用 Number()转换其他数据类型

1. `Number(new Date())` 等同于 `new Date().getTime()`
