---
date: '2021-11-24 16:08:33'
title: 【Node内置模块】process进程
tags:
  - Node
  - Node内置模块
---

process 对象提供有关当前 Node.js 进程的信息并对其进行控制。

process 对象全局可用，可以不经声明使用。

process 对象是 EventEmitter 的实例。

## 摘要

exitCode 默认状态码为 0，按照惯例，除 0 之外的任何退出码都表示错误。

process.env 对象上保存着环境变量。

## 引用方式

```js
const process = require("process");
```

## 事件

### exit

监听进程退出事件，code 为退出时的状态码，默认为 0。

```js
process.on("exit", (code) => {
  console.log("code");
});
```

## 方法及属性

### process.argv

返回参数**数组**，第一个元素为 [process.execPath](#processexecpath)

第二个元素为正在执行的 JS 文件的路径。

后续元素为命令行参数，在命令行中用空格分隔参数。

- 命令行中执行

```shell
node index code=2 status=3
```

- index.js

```js
console.log(process.argv);
// [
//   'D:\\application\\develop\\node\\node.exe',
//   'D:\\code\\test\\test-node\\index',
//   'code=2',
//   'status=3'
// ]
```

### process.execPath

process.execPath 属性返回启动 Node.js 进程的可执行文件的绝对路径名。 符号链接（如果有）会被解析。

### process.env

process.env 属性返回包含用户环境变量的对象。

可以使用 `cross-env` 包为 node 程序跨平台添加环境变量。

`cross-env status=2 node index`

### process.pid

process.pid 属性返回进程的 PID。

### process.cwd()

返回当前 node 进程的工作目录。

### process.nextTick(callback, ...args?)

process.nextTick() 将 callback 添加到"下一个滴答队列"。

### queueMicrotask()

queueMicrotask() API 是 process.nextTick() 的替代方案。

queueMicrotask 被用于 then、catch 和 finally 函数的回调。

### process.exit(code?)

终止进程，code 会被传给 exit 事件。

## 参考

[process](http://nodejs.cn/api/process.html)
