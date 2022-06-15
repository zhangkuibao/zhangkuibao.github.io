---
date: 2022-03-09 14:42:17
title: 【LeetCode精选TOP面试题】118-杨辉三角
tags:
  - 算法
  - LeetCode精选TOP面试题
---

以二维数组形式生成 n 阶杨辉三角。

## 动态规划解法

### 思路

设 `f(y, x)` 为第 y 行第 x 个位置的数字，

f(0, 0) = 1

f(1, 0) = 1 f(1, 1) = 1

f(2, 0) = 1 f(2, 1) = 2 f(2, 2) = 1

f(3, 0) = 1 f(3, 1) = 3 f(3, 2) = 3 f(3, 3) = 1

f(4, 0) = 1 f(4, 1) = 4 f(4, 2) = 6 f(4, 3) = 4 f(4, 4) = 1

可以看出 `f(y,x)` 的值等于 `f(y-1,x)` + `f(y-1, x-1)`

动态规划转移方程：`f(y, x) = (f(y-1, x) || 0) + (f(y-1, x-1) || 0)`

### 代码

```js
function getPositionNum(y, x) {
  if (x === 0 || x === y - 1) {
    return 1;
  }

  if (y <= -1 || x <= -1) {
    return 0;
  }

  return getPositionNum(y - 1, x) + getPositionNum(y - 1, x - 1);
}

var generate = function (n) {
  let result = [];
  for (let j = 1; j <= n; j++) {
    let rs = [];
    for (let i = 0; i < j; i++) {
      rs.push(getPositionNum(j, i));
    }
    result.push(rs);
  }

  return result;
};
let result = generate(5);
console.log(result);
```

## 数学解法

### 代码

思路和动态规划相同：`f(y, x) = (f(y-1, x) || 0) + (f(y-1, x-1) || 0)`

```js
var generate = function (n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    // 第几层
    let floor = [];
    result.push(floor);
    for (let j = 0; j < i; j++) {
      // 第几位
      let index = i - 1;
      if (index === 0 || index === 1) {
        result[index].push(1);
      } else {
        result[index].push(
          (result[index - 1][j] || 0) + (result[index - 1][j - 1] || 0)
        );
      }
    }
  }
  return result;
};
```
