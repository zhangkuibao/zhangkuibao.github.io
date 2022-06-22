---
title: 【Git】git回退到上一版本并上传到远程仓库
tags:
  - Git
date: '2022-03-08 22:50:04'
---


`git reset --hard HEAD^`    回退到上一版

`git reset --hard <SHA>`    回退到指定commit

`git push -f`               强制上传，覆盖线上仓库（慎用）
