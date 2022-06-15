---
date: 2022-02-25 09:18:09
title: 【JS特性】函数尾调用
tags:
  - JavaScript
  - JS特性
---

## 概念

函数调用时生成调用记录，保存调用位置和内部变量等信息（调用帧），尾调用是指函数的最后一步操作

尾调用优化就是在进行尾调用时不保存外部的调用信息，节省内存

## 尾递归

**大部分浏览器仍不支持尾调用。**

在递归中使用尾调用可以大幅减少内存消耗，称为尾递归

用递归实现阶乘，复杂度为 `O(n)`

```js
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1); // 返回了一个函数调用与变量的表达式
}
```

用尾递归方式实现阶乘，复杂度为 `O(1)`

```js
function factorial(n, total) {
  if (n === 1) return total; // total为计算值也是最后的返回值
  return factorial(n - 1, n * total); // 返回了一个函数调用
}
```
