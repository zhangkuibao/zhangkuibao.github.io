---
date: 2021-09-09 10:14:17
title: 【Vue】查看vue.config.js生成的webpack配置
tags:
  - JavaScript
  - Vue
---

当你想知道自己的 vue-config.js 里的配置到底对不对的时候，你可以在命令行里执行 vue inspect > output.js,它会将你最终生成的 config 展现在 output.js 之中，不过它默认显示的是开发环境的配置。

如果你想查看其它环境的配置可以通过 vue inspect --mode production > output.js。在写构建配置的时候这个功能很有帮助，同时也能帮助你了解 vue-cli 在构建时到底帮你做了些什么。
