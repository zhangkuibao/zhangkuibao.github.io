---
date: 2021-11-30 10:00:27
title: 【Gulp】glob
tags:
  - 前端工程化
  - Gulp
---

glob 是由普通字符或通配符组成的字符串，用于匹配文件路径。

可以利用一个或多个 glob 在文件系统中定位文件。

当使用 glob 数组时，将按照每个 glob 在数组中的位置依次执行匹配。

## 分隔符

glob 中用 `/` 表示分隔符。用 `\\` 表示转义符。

避免使用 Node 的 path 类方法来创建 glob，例如 path.join。

如下， `*` 被转义了，因此，`*` 将被作为一个普通字符使用，而不再是通配符了。

```js
"glob_with_uncommon_\\*_character.js";
```

## 特殊字符：`*`（一个星号）

在一个字符串片段中匹配任意数量的字符，包括零个匹配。

对于匹配单级目录下的文件很有用。

下面这个 glob 能够匹配类似 index.js 的文件，但是不能匹配类似 scripts/index.js 或 scripts/nested/index.js 的文件。

```js
"*.js";
```

## 特殊字符： `**` (两个星号)

在多个字符串片段中匹配任意数量的字符，包括零个匹配。

对于匹配嵌套目录下的文件很有用。

下面这个 glob 可以匹配 `scripts/` 目录下的所有 `.js` 后缀文件。它将匹配类似 `scripts/index.js`、`scripts/nested/index.js` 和 `scripts/nested/twice/index.js` 的文件。

```js
"scripts/**/*.js";
```

## 特殊字符： ! (取反)

由于 glob 匹配时是按照每个 glob 在数组中的位置依次进行匹配操作的，所以 glob 数组中的取反（negative）glob 之前必须有一个非取反（non-negative）的 glob。

第一个 glob 匹配到一组匹配项，然后后面的取反 glob 删除这些匹配项中的一部分。

如果取反 glob 只是由普通字符组成的字符串，则执行效率是最高的。

下面的 glob 组合将匹配当前目录下所有的 `json` 文件和文件名不为 `gulpfile` 的所有 `js` 文件。

```js
["./*.json", "./*.js", "!gulpfile*"];
```

取反（negative） glob 可以作为对带有两个星号的 glob 的限制手段。

```js
["**/*.js", "!node_modules/"];
```

## 匹配重叠

一个文件被多个 glob 匹配时改文件就被认为是匹配重叠了。

如果在同一个 `src()` 中使用了会产生匹配重叠的 glob，gulp 将尽力去除重叠部分，但是在多个 `src()` 调用时产生的匹配重叠是不会被去重的。
