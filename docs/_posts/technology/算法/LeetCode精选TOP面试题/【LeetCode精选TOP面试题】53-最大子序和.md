---
date: 2022-03-10 09:53:26
title: 【LeetCode精选TOP面试题】53-最大子序和
tags:
  - 算法
  - LeetCode精选TOP面试题
---

[LeetCode原题链接](https://leetcode-cn.com/problems/maximum-subarray/solution/)

给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组是数组中的一个连续部分。

## 动态规划解法

### 思路和算法

用 `f(i)` 表示位置 `i` 的最大子序和，则 `f(i)` 的值取决于 `f(i-1)` 与 `nums[i]` 两值之和是否大于 `nums[i]`，`f(i-1)`与当前位置值相加如果大于 `f(i-1)` 就把当前位置的值累加到已存的最大子序和中。

动态规划转移方程：`f(i)=max{f(i−1)+nums[i],nums[i]}`

### 复杂度

- 时间复杂度：O(n)，n 为 nums 的长度。
- 空间复杂度：O(1)，我们只需要常数空间存放若干变量。

### 代码

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let arr = [];
  nums.forEach((num, index) => {
    if (num + arr[index - 1] > num) {
      arr[index] = num + arr[index - 1];
    } else {
      arr[index] = num;
    }
  });
  return Math.max(...arr);
};
let result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(result);
```