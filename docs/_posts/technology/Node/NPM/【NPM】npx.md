---
title: 【NPM】npx
tags:
  - Node
  - NPM
---

npm 从 5.2 版开始，增加了 npx 命令。npx 是一个工具，一个 npm 包执行器，旨在提高从 npm 注册表使用软件包时的体验。

## 调用项目安装的模块

在 npx 之前，如果在项目中安装了一个模块，一般只能在项目脚本和 package.json 的 script 字段里面使用。

```
$ npm install -D mocha
```

如果想在命令行使用 mocha 必须项下面这样。

```
# 项目的根目录下执行
$ node-modules/.bin/mocha --version
```

npx 就是想解决这个问题，让项目内部安装的模块用起来更方便，只要像下面这样调用就行了。

```
$ npx mocha --version
```

npx 的原理很简单，就是运行的时候，会到 node_modules/.bin 路径和环境变量$PATH 里面，检查命令是否存在。

由于 npx 会检查环境变量$PATH，所以系统命令也可以调用。

```
# 等同于 ls
$ npx ls
```

注意，Bash 内置的命令不在$PATH 里面，所以不能用。比如，cd 是 Bash 命令，因此就不能用 npx cd。

## 避免全局安装模块

临时安装可执行依赖包，不用全局安装，不用担心长期的污染。

下面代码运行时，npx 将 create-react-app 下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载 create-react-app。

```
$ npx create-react-app my-react-app
```

只要 npx 后面的模块无法在本地发现，就会下载同名模块。

### 自动安装

npx 可以执行依赖包中的命令，安装完成自动运行。

```
$ npx @vue/cli -V

# 等价于

$ npm install @vue/cli -g
$ vue -V
```

### --no-install 参数和--ignore-existing 参数

如果想让 npx 强制使用本地模块，不下载远程模块，可以使用--no-install 参数。如果本地不存在该模块，就会报错。

```
$ npx --no-install http-server
```

如果忽略本地的同名模块，强制安装使用远程模块，可以使用--ignore-existing 参数。

```
$ npx --ignore-existing create-react-app my-react-app
```

## 指定 node 版本

利用 npx 可以下载模块这个特点，可以指定某个版本的 Node 运行脚本。它的窍门就是使用 npm 的 node 模块。

这个特性解决了不同项目使用不同 node 版本的命令的问题。

```
$ npx node@0.12.8 -v
```

## 执行 GitHub 源码

npx 还可以执行 GitHub 上面的模块源码。

```
# 执行 Gist 代码
$ npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32

# 执行仓库代码
$ npx github:piuccio/cowsay hello
```

注意，远程代码必须是一个模块，即必须包含 package.json 和入口脚本。

## 参考

[npx 使用教程——阮一峰](https://www.ruanyifeng.com/blog/2019/02/npx.html)

[npm 和 npx 有什么区别？](https://www.zhihu.com/question/327989736/answer/787995048)
