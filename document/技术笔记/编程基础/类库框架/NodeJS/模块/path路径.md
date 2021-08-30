<author-info date="1629974062037"></author-info>

# path 路径

## 引用方式

```js
const path = require("path");
```

## 介绍

path 用于处理路径，可以从文件路径中获取文件名、后缀名等信息。

- 获取**文件名**（含后缀）用 [path.basename()](#pathbasenamepath-ext) 方法，在二参加入文件后缀可只返回文件名，如 `path.basename(filePath, '.js')`。

- 获取**目录名**用 [path.dirname()](#pathdirnamepath) 方法。

- 获取**后缀名**（含 `.`）用 [path.extname()](#pathextnamepath) 方法。

- 可用 [path.join()](#pathjoinpaths) 方法**合并路径**，避免平台差异导致路径问题。

- 判断 path **是否为绝对路径**用 `path.isAbsolute()` 方法。

- [path.format()](http://nodejs.cn/api/path.html#path_path_format_pathobject) 和 [path.parse()](http://nodejs.cn/api/path.html#path_path_parse_path) 可以将路径与[路径对象](#路径对象)互相转换。

- [path.relative()](http://nodejs.cn/api/path.html#path_path_relative_from_to) 和 [path.resolve()](http://nodejs.cn/api/path.html#path_path_resolve_paths)可以实现相对路径/绝对路径之间的转换。

## 方法及属性

### path.basename(path, ext?)

获取 path 中的最后一部分，二参中的扩展名会被忽略。

```js
path.basename("/foo/bar/baz/asdf/quux.html");
// 返回: 'quux.html'

path.basename("/foo/bar/baz/asdf/quux.html", ".html");
// 返回: 'quux'

let filePath = "/foo/bar/baz/asdf/quux.html";
path.basename(filePath, path.extname(filePath));
// 返回: 'quux'
```

### path.dirname(path)

获取 path 的目录名，尾随的目录分隔符被忽略。

```js
path.dirname("/foo/bar/baz/asdf/quux");
// 返回: '/foo/bar/baz/asdf'
```

### path.extname(path)

方法返回 path 的扩展名，即 path 的最后一部分中从最后一次出现的 `.`（句点）字符（包含）到字符串的结尾。

如果 path 的最后一部分中没有 `.`，或者除了 path 的基本名称的第一个字符之外没有 `.` 个字符，则返回空字符串。

```js
path.extname("index.html");
// 返回: '.html'
```

### path.join(...paths)

用特定于平台的分隔符将路径连接起来。

```js
path.join("/name", "/age", "index.js");
// windows下返回：'\name\age\index.js'
```

### path.sep

返回特定于平台的路径片段分隔符。

### 路径对象

一个路径对象包含的属性如下：

```ts
type pathObjectType = {
  dir: string;
  root: string;
  base: string;
  name: string;
  ext: string;
};
```

各属性对应值如下：

    ┌─────────────────────┬────────────┐
    │          dir        │    base    │
    ├──────┬              ├──────┬─────┤
    │ root │              │ name │ ext │
    "  /    home/user/dir / file  .txt "
    └──────┴──────────────┴──────┴─────┘

## 注意

各平台路径分隔符会有差异，要连接路径尽量用 `path.join()` 方法。

## 参考

[path 路径](http://nodejs.cn/api/path.html)