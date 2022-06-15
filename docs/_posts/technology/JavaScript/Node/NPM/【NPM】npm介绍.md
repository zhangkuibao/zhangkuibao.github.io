---
title: 【NPM】npm介绍
tags:
  - JavaScript
  - Node
  - NPM
---

npm 是用 node 写的一个包管理工具（Node Package Manager）。

## npm 的思路

1. 买个服务器作为代码仓库（repository），在里面放所有需要被共享的代码
2. 发邮件通知 jQuery 、Bootstrap 、Underscore 的作者使用 npm publish 把代码提交到 repository 上，分别取名 jquery、bootstrap 和 underscore（注意大小写）。
3. 社区里的其他人如果想使用这些代码，就把 jquery、bootstrap 和 underscore 写到 package.json 里，然后运行 npm install ，npm 就会帮他们下载代码。
4. 下载完的代码出现在 node_modules 目录里，就可以随意使用了。

这些可以被使用的代码被叫做「包」（package），这就是 npm 名字的由来：Node Package(包) Manager(管理器)。

## 参考

[npm 和 npx 有什么区别？](https://www.zhihu.com/question/327989736/answer/787995048)
