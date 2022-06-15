---
date: 2022-03-10 09:53:02
title: 【LeetCode精选TOP面试题】22-括号生成
tags:
  - 算法
  - LeetCode精选TOP面试题
---

数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

## 回溯解法

### 思路

列出所有的排列组合然后剔除不符合要求的。

### 代码

```js
// 找出使用n组括号时的所有排列组合，共有2^2n种组合方式

var generateParenthesis = function (n) {
  if (n <= 0) {
    return [];
  }
  let res = [];
  function def(paths) {
    if (paths.length == n * 2) {
      // n组括号的合法字符串数量为 n * 2
      res.push(paths);
      return;
    }
    def(paths + "(");
    def(paths + ")");
  }
  def("");
  return res;
};

// 控制只生成合法的括号
var generateParenthesis2 = function (n) {
  let res = [];

  function def(paths, left, right) {
    if (left > n || right > left) return; // 控制只生成合法的括号
    if (paths.length == n * 2) {
      res.push(paths);
      return;
    }
    def(paths + "(", left + 1, right);
    def(paths + ")", left, right + 1);
  }

  if (n <= 0) {
    return null;
  }
  def("", 0, 0);
  return res;
};

let result = generateParenthesis(3);
let result1 = generateParenthesis2(3);
console.log(result, result1);
```
