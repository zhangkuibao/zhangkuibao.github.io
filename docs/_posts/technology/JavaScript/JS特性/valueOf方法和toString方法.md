---
date: 2021-09-08 18:13:42
title: valueOf 方法和 toString 方法
tags:
  - JavaScript
  - JS特性
---

`Object.prototype.valueOf()` 和 `Object.prototype.toString()` 两个方法存在于 Object.prototype 上，几乎所有的对象都会继承这两个方法。

## valueOf()

将对象转换为原始值

每个**内置的核心对象**都会覆盖此方法以返回适当的值。如果对象没有原始值，则`valueOf`将返回对象本身。

| **对象** | **返回值**                                               |
| :------- | :------------------------------------------------------- |
| Array    | 返回数组对象本身。                                       |
| Boolean  | 布尔值。                                                 |
| Date     | 存储的时间是从 1970 年 1 月 1 日午夜开始计的毫秒数 UTC。 |
| Function | 函数本身。                                               |
| Number   | 数字值。                                                 |
| Object   | 对象本身。这是默认情况。                                 |
| String   | 字符串值。                                               |
|          | Math 和 Error 对象没有 valueOf 方法。                    |

## toString()

当该对象被表示为一个**文本值**时，或者一个对象以预期的**字符串方式引用**时自动调用。

默认返回 `[object type]` ，`type` 是对象的类型
