---
date: '2022-03-15 15:06:54'
title: 【LeetCode精选TOP面试题】62-不同路径
tags:
  - 算法
  - LeetCode精选TOP面试题
---

一个机器人位于一个 `m` x `n`  网格的左上角，m 为 y 轴长度，n 为 x 轴长度。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角。

问总共有多少条不同的路径？

## 回溯解法

### 思路

找出所有走法，到达终点记作一次有效路径。

只能向右或向下。

每一步的坐标记作 `[x,y]`，到达终点 `[n,m]` 的路径记作一次有效路径。

`x > n || y > m` 表示超出地图范围，是无效路径。

用 `fn(x,y)` 表示走到 `[x,y]`，下一步可走的位置为：`[x+1, y+1]`。

### 复杂度

- 空间复杂度：O(1)。

### 代码

```js
var uniquePaths = function (m, n) {
  let count = 0;

  function pos(x, y) {
    if (x === n && y === m) {
      count++;
      return;
    }
    if (x < n) {
      pos(x + 1, y);
    }

    if (y < m) {
      pos(x, y + 1);
    }
  }
  pos(1, 1);
  return count;
};
let result = uniquePaths(3, 2);
console.log(result);
```

## 动态规划解法

### 代码 1

用 `f(x, y)` 表示走到 `(x, y)` 的路径数。

要走到 `(x, y)` 必须走到 `(x - 1, y)` 或 `(x, y - 1)`。

动态规划方程：`f(x, y) = f(x - 1, y) + f(x, y - 1)`。

`1 * 1` 的空间只有一条路，即 `f(1, 1) = 1`。

```js
var uniquePaths = function (m, n) {
  if (m === 0 || n === 0) {
    return 0;
  }
  if (m === 1 && n === 1) {
    return 1;
  }
  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
};

let result = uniquePaths(3, 2);
console.log(result);
```

### 代码 2

#### 复杂度

- 时间复杂度：O(mn)
- 空间复杂度：O(mn)

```js
var uniquePaths = function (m, n) {
  let f = new Array(m).fill(new Array(n).fill(0));

  // 到达边界上的某点只有一条路径
  for (let i = 1; i < m; i++) {
    f[0][i] = 1;
  }

  for (let j = 1; j < n; j++) {
    f[j][0] = 1;
  }
  
  for (let mi = 1; mi < m; mi++) {
    for (let ni = 1; ni < n; ni++) {
      f[mi][ni] = f[mi - 1][ni] + f[mi][ni - 1];
    }
  }
  return f[m - 1][n - 1];
};
```
