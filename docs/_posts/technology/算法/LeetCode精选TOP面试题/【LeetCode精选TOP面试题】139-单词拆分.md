---
date: '2022-03-23 17:59:10'
title: 【LeetCode精选TOP面试题】139-单词拆分
tags:
  - 算法
  - LeetCode精选TOP面试题
---

[LeetCode 原题链接](https://leetcode-cn.com/problems/word-break/)

给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。

注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

## 动态规划解法

### 思路

dp[i] 表示从 0 到 i 组成的字符串是否可由字典串组成

要知道 s 是否合法需要知道它是否可由字典中的字符串组成

要知道 s 是否由字典串组成需要遍历它的所有组合情况，判断每一个子串是否可由字典串组成

```js
for (let i = 1; i <= s.length; i++) {
  for (let j = 0; j < i; j++) {
    // ...
  }
}
```

s.slice(0, i); i 表示从 0 到 n 进行遍历

s.slice(j, i); j 表示从 0 到 i 进行遍历

如果子串的左右部分都可由字典串组成则说明当前串可由字典串组成，dp[i] = dp[j] && wordDict.includes(s.slice(j, i))

### 复杂度

- 时间复杂度：`O(n^2)`。
- 空间复杂度：`O(n)`。

### 代码

```js
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};
let s = "leetcode",
  wordDict = ["leet", "code"];
let result = wordBreak(s, wordDict);
console.log(result);
```
