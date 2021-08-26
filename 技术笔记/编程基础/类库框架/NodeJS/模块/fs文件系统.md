<author-info date="1629969441978"></author-info>

# fs 文件系统

## 引用方式

```js
const fs = require("fs");
```

## 介绍

fs 用于处理文件，可以读取、写入文件。

- 要判断文件是否存在可以用 [fs.access(path)](#fsaccesspath-mode-callback) 方法。
- 要读取文件内容可以用 [fs.readFile(path)](#fsreadfilepath-options-callback) 方法。

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
  console.log(err);
});
```
