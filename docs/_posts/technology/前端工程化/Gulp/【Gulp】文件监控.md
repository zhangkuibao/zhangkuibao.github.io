---
date: 2021-11-30 09:32:13
title: 【Gulp】文件监控
tags:
  - 前端工程化
  - Gulp
---

gulp api 中的 watch() 方法利用文件系统的监控程序对匹配的文件进行监控，如果匹配文件被修改就执行相关联的任务。

如果被执行的任务（task）没有触发异步完成信号（使用 `callback` 告知任务结束或返回 `promise`、`stream`...），它将永远不会再次运行。

**与文件监控程序关联的任务（task）不能是同步任务（synchronous taks）。**

```js
const { watch, series } = require("gulp");

function clean(cb) {
  // body omitted
  cb();
}

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

// 可以只关联一个任务
watch("src/*.css", css);
// 或者关联一个任务组合
watch("src/*.js", series(clean, javascript));
```

## 可监控的事件

默认情况下，只要创建、更改或删除文件，文件监控程序就会执行关联的任务（task）。

如果你需要使用不同的事件，你可以在调用 watch() 方法时通过 events 参数进行指定。

可用的事件有 `add、addDir、change、unlink、unlinkDir、ready、error`。此外，还有一个 `all` 事件，它表示除 `ready` 和 `error` 之外的所有事件。

```js
const { watch } = require("gulp");

// 所有事件都将被监控
watch("src/*.js", { events: "all" }, function (cb) {
  // body omitted
  cb();
});
```

## 启动时立即执行

调用 `watch()` 之后，关联的任务（task）是不会被立即执行的，而是要等到第一次文件修之后才执行。

想要在调用 `watch()` 之后立即执行，需将 `ignoreInitial` 参数设置为 `false`。

```js
const { watch } = require("gulp");

// 关联的任务（task）将在启动时执行
watch("src/*.js", { ignoreInitial: false }, function (cb) {
  // body omitted
  cb();
});
```

## 队列

`watch()` 方法使用队列保证当前执行的任务（task）不会再次并发执行。

当文件监控程序关联的任务（task）正在运行时又有文件被修改了，那么所关联任务的这次新的执行将被放到执行队列中等待，直到上一次关联任务执行完之后才能运行。

每一次文件修改只产生一次关联任务的执行并放入队列中。

如需禁止队列，将 `queue` 参数设置为 `false`。

```js
const { watch } = require("gulp");

// 每次文件修改之后关联任务都将执行（有可能并发执行）
watch("src/*.js", { queue: false }, function (cb) {
  // body omitted
  cb();
});
```

## 延迟

文件更改之后，默认 `200ms` 之后，文件监控程序所关联的任务（task）才会被执行。

使用 `delay` 参数设置延迟时间。

```js
const { watch } = require("gulp");

// 文件第一次修改之后要等待 500 毫秒才执行关联的任务
watch("src/*.js", { delay: 500 }, function (cb) {
  // body omitted
  cb();
});
```
