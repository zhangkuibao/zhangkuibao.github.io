---
date: 2021-12-07 15:25:54
title: fs 文件系统
tags:
  - myGit
  - learning-Notes
  - document
  - technology
  - Node
---

## 引用方式

```js
const fs = require("fs");
```

## 介绍

fs 用于处理文件和目录，可以完成读、写、修改和删除操作。

- **判断路径是否存在**用 [fs.access()](#fsaccesspath-mode-callback) 方法。
- **读取文件**内容用 [fs.readFile()](#fsreadfilepath-options-callback) 方法。
- **写入文件**内容用 [fs.writeFile()](#fswritefilefile-data-options-callback) 方法，文件不存在时自动创建。
- **创建目录**用[fs.mkdir()](#fsmkdirpath-options-callback) 方法。
- **读取目录内容**用[fs.readdir()](#fsreaddirpath-options-callback) 方法。
- **修改文件名或目录名**用[fs.rename()](#fsrenameoldpath-newpath-callback) 方法。
- **删除文件或目录**用[fs.rm()](#fsrmpath-options-callback)和[fs.rmdir()](#fsrmdirpath-options-callback) 方法。
- **判断路径是文件还是目录**可以用[fs.stat()](#fsstatpath-options-callback) 方法获取到路径的信息，然后用[stats.isDirectory()](#statsisdirectory) 和 [stats.isFile()](#statsisfile) 方法判断。
- 文件的**大小、修改时间、创建时间**可以在[fs.stat()](#fsstatpath-options-callback) 方法返回的文件信息中找到。

## 方法及属性

### fs.access(path, [, mode], callback)

只判断文件是否存在而不做其他操作时可以用这个方法。

没有错误信息就代表文件存在。

```js
fs.access("./package.json", (err) => {
  console.log(`package.json ${err ? "does not exist" : "exists"}`);
});
```

### fs.readFile(path[, options], callback)

异步读取文件，中间参数为字符串时代表编码方式。

```js
fs.readFile("./package.json", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### fs.writeFile(file, data[, options], callback)

写入文件，如果指定文件不存在会自动创建。

编码方式默认为 utf8。

```js
fs.writeFile("./test.text", "123456", (err) => {
  if (err) throw err;
});
```

### fs.mkdir(path[, options], callback)

异步创建目录，没有报错即为成功。

```js
fs.mkdir("./test", (err) => {
  if (err) throw err;
});
```

### fs.readdir(path[, options], callback)

读取目录的内容。

返回目录下的所有路径，包括文件和子目录，返回值为字符串数组。

```js
fs.readdir("./test", (err, data) => {
  if (err) throw err;
});

// [
//   '1 copy 2.js',
//   '1 copy 3.js',
//   '1 copy 4.js',
//   '1 copy.js',
//   '1.js',
//   't2'
// ]
```

### fs.rename(oldPath, newPath, callback)

修改路径名（文件或目录），未报错即为成功。

```js
fs.rename("./test.text", "t2.text", (err, data) => {
  if (err) throw err;
});
```

### fs.rm(path[, options], callback)

删除目录和文件。windows 系统 v14.16 版本下测试不可删除目录。

```js
fs.rm("./test/1.js", (err, data) => {
  if (err) throw err;
});
```

### fs.rmdir(path[, options], callback)

删除目录。

```js
fs.rmdir("./test/t2", (err, data) => {
  if (err) throw err;
});
```

### fs.stat(path[, options], callback)

获取路径对应的 Stats 信息。

```js
fs.stat("./test/t2", (err, stats) => {
  if (err) throw err;
  console.log(stats);
});
```

### fs.Stats 类

此类包含文件或目录的信息。

#### stats.isDirectory()

判断此对象是否为目录。

```js
fs.stat("./test/t2", (err, stats) => {
  if (err) throw err;
  let isDir = stats.isDirectory();
  console.log(isDir);
});
```

#### stats.isFile()

判断此对象是否为文件。

```js
fs.stat("./test/t2", (err, stats) => {
  if (err) throw err;
  let isDir = stats.isFile();
  console.log(isDir);
});
```

#### stats.size

文件的大小（以字节为单位），是目录时返回 0。

#### stats.mtimeMs

最后一次修改此文件的时间戳。

#### stats.birthtimeMs

创建文件时的时间戳。

## 参考

[fs 文件系统](http://nodejs.cn/api/fs.html)
