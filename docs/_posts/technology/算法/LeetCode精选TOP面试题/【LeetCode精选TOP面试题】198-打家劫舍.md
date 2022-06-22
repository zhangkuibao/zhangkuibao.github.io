---
date: '2022-03-24 11:41:45'
title: 【LeetCode精选TOP面试题】198-打家劫舍
tags:
  - 算法
  - LeetCode精选TOP面试题
---

[LeetCode 原题链接](https://leetcode-cn.com/problems/house-robber/submissions/)

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

## 动态规划

### 思路

一次遍历中记录偷第 i 家时的最大利润和不偷第 i 家时的最大利润。

偷第 i 家的最大利润等于不偷上一家时的利润加上 nums[i]的值，`iTCountList[i] = iBTCountList[i - 1] + nums[i]`。

不偷第 i 家的最大利润等于偷上一家的利润与不偷上一家利润的最大值，`iBTCountList[i] = Math.max(iTCountList[i - 1], iBTCountList[i - 1])`。

```js
//      2 1 1 2
// t:   2 1 3 4
// bt:  0 2 2 3
```

### 复杂度

- 时间复杂度：`O(n)`。
- 空间复杂度：`O(n)`。

### 代码

```js
var rob = function (nums) {
  let iTCountList = [nums[0]]; // 偷第i位时的最大金额
  let iBTCountList = [0]; // 不偷第i位时的最大金额
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    iTCountList[i] = iBTCountList[i - 1] + num;
    iBTCountList[i] = Math.max(iTCountList[i - 1], iBTCountList[i - 1]);
  }
  return Math.max(iTCountList[nums.length - 1], iBTCountList[nums.length - 1]);
};
let result = rob([1, 2, 3, 1]);
console.log(result);
```
