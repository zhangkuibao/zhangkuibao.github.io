---
date: '2021-11-25 17:19:30'
title: 【Node内置模块】child_process子进程
tags:
  - Node
  - Node内置模块
---

child_process 提供了衍生子进程的能力。

## 摘要

exec() 可直接运行完整命令 `exec('npm run build:mp-alipay')`。

spawn() 方法需要将命令拆分执行 `spawn("npm", ["run", "build:mp-alipay"])`。

execFile() 方法与 spawn 类似 `execFile("npm", ["run", "build:mp-alipay"])`。

fork() 方法可以用来执行其他 node 程序 `fork('./index')`。

监听子进程的错误输出 `subprocess.stderr.on('data')`。

监听子进程的标准输出 `subprocess.stdout.on('data')`。

注意 npm 命令需要判断平台：

```js
let npmcmd = process.platform === "win32" ? "npm.cmd" : "npm";
```

## 方法

### exec(command, options?, callback?)

- command 要执行的命令。

- options 配置。

- callback 回调，回调中接收 error、stdout、stderr。

child_process.exec() 不替换现有进程，而是使用 shell 来执行命令。

```js
let { exec } = require("child_process");

let child = exec(
  "npm run build:mp-alipay",
  {
    cwd: __dirname, // 子进程的工作目录，默认为当前目录
    env: {}, // 环境变量键值对，undefined会被忽略
    encoding: "utf-8", // 指定用于解码 stdout 和 stderr 的字符编码
    signal, // 允许使用中止信号中止子进程
    timeout: 10000, // 允许子进程运行的最长时间，默认 undefined
  },
  (error, stdout, stderr) => {
    console.log(error); // 错误对象，正常退出时 error 为 null，error.code为进程的退出码
    console.log(stdout); // 子进程的所有标准输出
    console.log(stderr); // 子进程的所有标准错误输出
  }
);
```

#### 使用 signal 关闭中止子进程进程

在 express 启的服务中开启子进程打包用此方法并不能关闭子进程，暂无解决方案（2021.11.24）。

```js
const controller = new AbortController();
const { signal } = controller;
let { exec } = require("child_process");
let child = exec("npm run build:mp-alipay", { signal });
setTimeout(() => {
  controller.abort();
}, 1000);
```

### spawn(command, args?, options?)

- command 要执行的命令。

- args 命令行参数。

- options 配置。

```js
let { spawn } = require("child_process");
spawn("npm", ["run", `build:mp-alipay`]);
```

### execFile(file, args?, options?, callback?)

- file 要运行的**可执行文件**的**名称**或**路径**，比如 node。

- args 命令行参数。

- options 配置。

- callback 回调，回调中接收 error、stdout、stderr。

调用方式与 exec 有所不同。

```js
let { execFile } = require("child_process");
let child = execFile("node", ["-v"]);
```

### fork(modulePath, args?, options?)

- modulePath 要执行的模块（js 文件）。

- args 命令行参数。

- options 配置。

child_process.fork() 方法是 child_process.spawn() 的特例，专门用于衍生新的 Node.js 进程。

衍生的 Node.js 子进程独立于父进程，除了两者之间建立的 IPC 通信通道。

每个进程都有自己的内存，具有自己的 V8 实例。 由于需要额外的资源分配，不建议衍生大量子 Node.js 进程。

```js
let { fork } = require("child_process");
fork("./index2.js");
```

## ChildProcess 类

exec 等方法都会返回一个 ChildProcess 类，表示衍生的子进程。

### subprocess.stderr

代表子进程的 stderr 的 Readable Stream。

`subprocess.stderr.on('data')` 可监听子进程的错误输出。

```js
subprocess.stderr.on("data", (data) => {
  console.log(`Received error chunk ${data}`);
});
```

### subprocess.stdout

代表子进程的 stdout 的 Readable Stream。

`subprocess.stdout.on('data')` 可监听子进程的标准输出。

```js
subprocess.stdout.on("data", (data) => {
  console.log(`Received chunk ${data}`);
});
```

## 示例

### 运行 ls -lh /usr、捕获 stdout、stderr 和退出码

```js
const { spawn } = require("child_process");
const ls = spawn("ls", ["-lh", "/usr"]);

ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

ls.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
```

## 参考

[child_process](http://nodejs.cn/api/child_process.html)
