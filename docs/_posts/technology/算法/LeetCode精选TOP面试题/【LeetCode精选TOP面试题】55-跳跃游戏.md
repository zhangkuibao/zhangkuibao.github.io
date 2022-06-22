---
date: '2022-03-11 10:16:47'
title: 【LeetCode精选TOP面试题】55-跳跃游戏
tags:
  - 算法
  - LeetCode精选TOP面试题
---

给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标。

## 贪心解法

### 思路

维护最远可达的距离 furthest，furthest 一开始为 0，表示从下标 0 开始。

遍历 nums 中的每一位，下标为 i，从 i 处可达的最远距离为 `i + nums[i]`，则 `furthest = Math.max(furthest, i + nums[i])`。

遍历时需判断是否可到达 i，`furthest >= i` 时可达。

### 复杂度

- 时间复杂度：O(n)。
- 空间复杂度：O(1)。

### 代码

```js
var canJump = function (nums) {
  if (nums.length <= 1) {
    return true;
  }
  let furthest = 0; // 最远可达距离
  for (let i = 0; i < nums.length - 1; i++) {
    // 判断当前位是否可达
    if (furthest < i) {
      return false;
    }
    // 更新最远可达位置
    furthest = Math.max(furthest, i + nums[i]);
    // 可达最后位时退出
    if (furthest >= nums.length - 1) {
      return true;
    }
  }
  return false;
};
```
