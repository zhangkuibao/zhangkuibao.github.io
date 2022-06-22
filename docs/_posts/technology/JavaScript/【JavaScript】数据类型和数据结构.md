---
date: '2021-09-08 18:15:29'
title: 【JavaScript】数据类型和数据结构
tags:
  - JavaScript
---

## 数据类型

最新的 ECMAScript 标准定义了 8 种数据类型：包括七个基本类型和一个引用类型

**基本类型**（基本数值、基本数据类型）是一种既非[对象](https://developer.mozilla.org/zh-CN/docs/Glossary/Object)也无[方法](https://developer.mozilla.org/zh-CN/docs/Glossary/Method)的数据。在 [JavaScript](https://developer.mozilla.org/zh-CN/docs/Glossary/JavaScript) 中，共有7种基本类型：[string](https://developer.mozilla.org/zh-CN/docs/Glossary/String)，[number](https://developer.mozilla.org/zh-CN/docs/Glossary/Number)，[bigint](https://developer.mozilla.org/zh-CN/docs/Glossary/BigInt)，[boolean](https://developer.mozilla.org/zh-CN/docs/Glossary/Boolean)，[null](https://developer.mozilla.org/zh-CN/docs/Glossary/Null)，[undefined](https://developer.mozilla.org/zh-CN/docs/Glossary/undefined)，[symbol](https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol) ([ECMAScript](https://developer.mozilla.org/zh-CN/docs/Glossary/ECMAScript) 2016新增)。

- [undefined](https://developer.mozilla.org/zh-CN/docs/Glossary/undefined)：`typeof instance === "undefined"`
- [Boolean](https://developer.mozilla.org/zh-CN/docs/Glossary/Boolean)：`typeof instance === "boolean"`
- [Number](https://developer.mozilla.org/zh-CN/docs/Glossary/Number)：`typeof instance === "number"`
- [String](https://developer.mozilla.org/zh-CN/docs/Glossary/String)：`typeof instance === "string`
- [BigInt](https://developer.mozilla.org/zh-CN/docs/Glossary/BigInt)：`typeof instance === "bigint"`
- [Symbol](https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol) ：`typeof instance === "symbol"`
- [null](https://developer.mozilla.org/zh-CN/docs/Glossary/Null)：`typeof instance === "object"`。
- [Object](https://developer.mozilla.org/zh-CN/docs/Glossary/Object)：`typeof instance === "object"`

记住 `typeof` 操作符的唯一目的就是检查数据类型，如果我们希望检查任何从 Object 派生出来的结构类型，使用 `typeof` 是不起作用的，因为总是会得到 `"object"`。

