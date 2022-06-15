---
title: 【Git】从其他分支复制指定commit到当前分支
tags:
  - Git
---

`git cherry-pick <commit SHA>`

## 注意
1. 用来合并两个不同仓库时，需要注意 `cherry-pick` 进来的 `commit` 是基于它的上一个提交的