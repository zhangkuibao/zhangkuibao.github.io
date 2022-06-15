---
date: 2021-11-29 16:13:39
title: task 任务
tags:
  - myGit
  - learning-Notes
  - document
  - technology
  - Gulp
---

每个 gulp 任务（task）都是一个异步的 JavaScript 函数。

此函数是一个可以接收 `callback` 作为参数的函数，或者是一个返回 `stream`、`promise`、`event emitter`、`child process` 或 `observable`类型值的函数。

**如果任务（task）不返回任何内容，则必须使用 callback 来指示任务已完成。**

## 任务类型

任务（tasks）可以是 public（公开） 或 private（私有） 类型的。

- 公开任务（Public tasks） 从 gulpfile 中被导出（export），可以通过 gulp 命令直接调用。

```js
// `build` 函数被导出（export）了，因此它是一个公开任务（public task），并且可以被 `gulp` 命令直接调用。
// 它也仍然可以被用在 `series()` 组合中。
function build(cb) {
  // body omitted
  cb();
}

exports.build = build;
```

- 私有任务（Private tasks） 被设计为在内部使用，通常作为 series() 或 parallel() 组合的组成部分。

```js
const { series } = require("gulp");

// `clean` 函数并未被导出（export），因此被认为是私有任务（private task）。
// 它仍然可以被用在 `series()` 组合中。
function clean(cb) {
  // body omitted
  cb();
}

exports.default = series(clean, build);
```

## 组合任务

Gulp 提供了两种组合任务的方法：`series()` 和 `parallel()`，这两个方法都可以接受任意数目的任务（task）函数或已经组合的操作。

如果需要让任务（task）**按顺序执行**，请使用 series() 方法。

```js
const { series } = require("gulp");

function transpile(cb) {
  // body omitted
  cb();
}

function bundle(cb) {
  // body omitted
  cb();
}

exports.build = series(transpile, bundle);
```

对于希望以**最大并发**来运行的任务（tasks），可以使用 parallel() 方法将它们组合起来。

```js
const { parallel } = require("gulp");

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

exports.build = parallel(javascript, css);
```

## 任务完成通知

当使用 `series()` 组合多个任务（task）时，任何一个任务（task）的错误将导致整个任务组合结束，并且不会进一步执行其他任务。

当使用 `parallel()` 组合多个任务（task）时，一个任务的错误将结束整个任务组合的结束，但是其他并行的任务（task）可能会执行完，也可能没有执行完。

在 `callback` 中把 task 中的错误告知 gulp：

```js
function callbackError(cb) {
  // `cb()` should be called by some async work
  cb(new Error("kaboom"));
}

exports.default = callbackError;
```

## Tips

### Did you forget to signal async completion?

gulp 不再支持同步任务（Synchronous tasks）。

需要在任务中使用 callback 或返回 stream、promise、event emitter、child process、observable 来解决此问题。

## 参考

[创建任务（task）](https://www.gulpjs.com.cn/docs/getting-started/creating-tasks/)

[异步执行](https://www.gulpjs.com.cn/docs/getting-started/async-completion/)
