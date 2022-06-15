---
date: 2021-11-30 09:57:55
title: API
tags:
  - myGit
  - learning-Notes
  - document
  - 技术
  - Gulp
---

## Vinyl

`Vinyl` 对象是 `gulp` 中用来表示文件——包括路径、内容和其他元数据的虚拟文件格式。

`Vinyl` 对象可以由 `src()` 方法返回也可以自己创建。

`src()` 方法的返回值就是被读取文件的虚拟文件。

```js
const { src, dest } = require("gulp");

function copy() {
  return src("input/*.js").pipe(dest("output/"));
}

exports.copy = copy;
```

### vinyl 构造函数

自己创建 `Vinyl` 对象需要引入 `vinyl` 模块。

语法：`new Vinyl([options])`

- [options 对象](https://www.gulpjs.com.cn/docs/api/vinyl/#%E9%80%89%E9%A1%B9)

```js
const Vinyl = require("vinyl");

const file = new Vinyl({
  cwd: "/",
  base: "/test/",
  path: "/test/file.js",
  contents: new Buffer("var x = 123"),
});

file.relative === "file.js";

file.dirname === "/test";
file.dirname = "/specs";
file.path === "/specs/file.js";

file.basename === "file.js";
file.basename = "file.txt";
file.path === "/specs/file.txt";

file.stem === "file";
file.stem = "foo";
file.path === "/specs/foo.txt";
file.extname === ".txt";
file.extname = ".js";
file.path === "/specs/file.js";
```

### 静态方法

#### Vinyl.isVinyl()

检测一个对象（object）是否是一个 Vinyl 实例。

```js
const Vinyl = require("vinyl");

const file = new Vinyl();
const notAFile = {};

Vinyl.isVinyl(file) === true;
Vinyl.isVinyl(notAFile) === false;
```

#### Vinyl.isCustomProp()

确定一个属性是否由 Vinyl 在内部进行管理。

```js
const Vinyl = require("vinyl");

Vinyl.isCustomProp("sourceMap") === true;
Vinyl.isCustomProp("path") === false;
```

### Vinyl 实例属性

| 属性     | 类型                         | 描述                                                                                                                                                                                            | 抛出错误                                                         |
| -------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| contents | ReadableStream Buffer `null` | 获取和设置虚拟文件的内容。如果将其设置为 ReadableStream，它将被包装在一个 [可克隆可读的](https://github.com/mcollina/cloneable-readable) 流中。                                                 | 如果设置为 ReadableStream， Buffer，或者 `null` 之外的任何值     |
| stat     | object                       | 获取或设置 [`fs.Stats`](https://www.gulpjs.com.cn/docs/api/concepts#file-system-stats) 的实例。当确定 Vinyl 对象是否表示目录或符号链接时使用。                                                  |                                                                  |
| cwd      | string                       | 获取并设置当前工作目录。用于推导相对路径。                                                                                                                                                      | 如果设置为空字符串或任何非字符串值。                             |
| base     | string                       | 获取和设置基目录。用于计算 `relative` 实例属性。 在由 `src()` 生成的 Vinyl 对象上，将设置为 [glob base][global -base-concepts]。如果设置为 `null` 或 `undefined`，则会退到 `cwd` 实例属性的值。 | 如果设置为空字符串或任何非字符串值(`null` 或 `undefined` 除外)。 |
| path     | string                       | 获取和设置完整的绝对文件路径。设置为与当前 `path` 不同的值会将新路径附加到 `history` 实例属性中。                                                                                               | 如果设置为任何非字符串值。                                       |
| history  | array                        | 已分配的 Vinyl 对象的所有 `path` 值的数组。第一个元素是原始路径，最后一个元素是当前路径。此属性及其元素应被视为只读，仅通过设置 `path`实例属性间接更改。                                        |                                                                  |
| relative | string                       | 获取 `base` 和 `path` 实例属性之间的相对路径段。                                                                                                                                                | 如果设置为任何值。如果在 `path` 不可用时访问。                   |
| dirname  | string                       | 获取和设置 `path` 实例属性的目录。                                                                                                                                                              | 如果在 `path` 不可用时访问                                       |
| stem     | string                       | 获取并设置 `path` 实例属性的 stem（没有扩展的文件名）。                                                                                                                                         | 如果在 `path` 不可用时访问                                       |
| extname  | string                       | 获取并设置 `path` 实例属性的扩展名。                                                                                                                                                            | 如果在 `path` 不可用时访问                                       |
| basename | string                       | 获取和设置 `path` 实例属性的文件名(`stem + extname`)。                                                                                                                                          | 如果在 `path` 不可用时访问                                       |
| symlink  | string                       | 获取和设置符号链接的引用路径。                                                                                                                                                                  | 如果设置为任何非字符串值。                                       |

### 实例方法

|        方法        | 返回值类型 | 返回值                                                                                                                                                                                                                                                                              |
| :----------------: | :--------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    `isBuffer()`    |  boolean   | 如果 `contents` 实例属性是一个 Buffer，则返回 true。                                                                                                                                                                                                                                |
|    `isStream()`    |  boolean   | 如果 `contents` 实例属性是一个 Stream，则返回 true。                                                                                                                                                                                                                                |
|     `isNull()`     |  boolean   | 如果 `contents` 实例属性为 `null`，则返回 true。                                                                                                                                                                                                                                    |
|  `isDirectory()`   |  boolean   | 如果实例表示一个目录，则返回 true。当 `isNull()` 返回 true，`stat` 实例属性是一个对象，并且 `stat.isDirectory()` 返回 true 时，实例被认为是一个目录。这假设 Vinyl 对象是用一个有效的（或适当模拟的） `fs.Stats` 对象构造的。                                                        |
|   `isSymbolic()`   |  boolean   | 如果实例表示符号链接，则返回 true。 当 `isNull()` 返回 true，`stat` 实例属性是一个对象，并且 `stat.isSymbolicLink()` 返回 true 时， 实例被认为是 symbolic。 这假设 Vinyl 对象是用一个有效的（或适当模拟的） `fs.Stats` 对象构造的。                                                 |
| `clone([options])` |   object   | A new Vinyl object with all properties cloned. 一个使用所有属性克隆出的新的 Vinyl 对象。 默认情况下，自定义属性是深拷贝。如果 `deep` 选项为 false，自定义属性将被浅拷贝。如果 `contents` 选项设置为 fasle 并且 `contents` 属性是一个 Buffer，那么这个 Buffer 将被复用，而不是克隆。 |
|    `inspect()`     |   string   | 返回 Vinyl 对象的格式化说明。由 Node 的 console.log 自动调用。                                                                                                                                                                                                                      |

### 扩展 Vinyl

当在内部管理自定义属性时，必须扩展静态 `isCustomProp` 方法，并在查询其中一个自定义属性时返回 `false`。

```js
const Vinyl = require("vinyl");

const builtInProps = ["foo", "_foo"];

class SuperFile extends Vinyl {
  constructor(options) {
    super(options);
    this._foo = "example internal read-only value";
  }

  get foo() {
    return this._foo;
  }

  static isCustomProp(name) {
    return super.isCustomProp(name) && builtInProps.indexOf(name) === -1;
  }
}
```

## src(globs, [options])

创建一个流，用于从文件系统读取 `Vinyl 对象`。

- globs 用于匹配文件的字符串或字符串数组。

- [options 选项](https://www.gulpjs.com.cn/docs/api/src/#%E9%80%89%E9%A1%B9)。

`src()` 接受 `glob`组字符串或由多个 `glob` 字符串组成的数组作为参数。

`glob` 或 `glob` 数组必须至少匹配到一个匹配项，否则 `src()` 将报错： `File not found with singular glob`，可将 `allowEmpty` 选项设置为 `true` 避免此错误。

```js
const { src, dest } = require("gulp");

function copy() {
  return src("input/*.js").pipe(dest("output/"));
}

exports.copy = copy;
```

### 返回值

一个表示文件——包括路径、内容和其他元数据的 `Vinyl 对象`。

## dest(directory, [options])

创建一个用于将 Vinyl 对象写入到文件系统的流。

- directory 输出目录，作为函数时必须返回一个字符串目录路径。

- [options 选项](https://www.gulpjs.com.cn/docs/api/dest/#%E9%80%89%E9%A1%B9)。

```js
const { src, dest } = require("gulp");

function copy() {
  return src("input/*.js").pipe(dest("output/"));
}

exports.copy = copy;
```

## lastRun(task, [precision])

检索在当前运行进程中成功完成的最后一次任务的完成时间。

- task 已注册任务的任务函数或字符串别名。

- precision 时间戳精度，Node v0.10 版本中是 1000，在 Node v0.12+ 版本中是 0 。

当与 `src()` 组合时，通过跳过自上次成功完成任务以来没有更 改的文件，使增量构建能够加快执行时间。

```js
const { src, dest, lastRun, watch } = require("gulp");
const imagemin = require("gulp-imagemin");

function images() {
  return src("src/images/**/*.jpg", { since: lastRun(images) })
    .pipe(imagemin())
    .pipe(dest("build/img/"));
}

exports.default = function () {
  watch("src/images/**/*.jpg", images);
};
```

### 返回值

返回一个时间戳（以毫秒为单位），表示任务的最后完成时间。

如果任务尚未运行或已经失败，则返回 undefined。

### 时间戳精度

- lastRun(someTask) 返回 1426000001111
- lastRun(someTask, 100) 返回 1426000001100
- lastRun(someTask, 1000) 返回 1426000001000

## series(...tasks)

按顺序执行任务。

- ...tasks 任意数量的任务函数或已注册任务的字符串。

当执行组合操作时，所有任务将按顺序运行。如果一个任务中发生错误，则不会运行后续任务。

当运行组合操作时，每个任务将在每次提供时执行，应当避免重复任务。

```js
const { series } = require("gulp");

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

exports.build = series(javascript, css);
```

### 返回值

返回一个组合，可以被嵌套在其他 `series` 或 `parallel` 组合中。

## parallel(...tasks)

异步（同时）执行任务。

其他行为与 `series()` 一致。

## watch(globs, [options], [task])

监听文件变化。

- globs 用于匹配文件的字符串或字符串数组。
- [options 选项](https://www.gulpjs.com.cn/docs/api/watch/#%E9%80%89%E9%A1%B9)
- task 一个 任务函数或由 series() 和 parallel() 生成的组合任务

```js
const { watch } = require("gulp");

watch(["input/*.js", "!input/something.js"], function (cb) {
  // body omitted
  cb();
});
```

### 返回值

[chokidar](https://www.npmjs.com/package/chokidar) 的底层实例，用于对监听设置进行细粒度控制。

## task([taskName], taskFunction)

在任务系统中定义任务，此 API 已不被推荐，更推荐的做法是导出 task。

- taskName 任务名称，缺省时使用任务函数的 `taskFunction.name` 或 `taskFunction.displayName`（需手动定义） 属性。
- taskFunction 任务函数。

避免在任务名称中使用空格。

```js
const { task } = require("gulp");

function build(cb) {
  // body omitted
  cb();
}

// 注册命名函数
task(build);
// 注册匿名函数
task("build", function (cb) {
  // body omitted
  cb();
});
// 获取已注册任务的索引
const buildIdx = task("build");
```

### 返回值

注册任务时不返回任何内容。

检索任务时，返回已注册任务的包装函数。

## 参考

[vinyl](https://www.gulpjs.com.cn/docs/api/vinyl)
