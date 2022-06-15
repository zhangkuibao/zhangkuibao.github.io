---
title: resolve
tags:
  - myGit
  - learning-Notes
  - document
  - technology
  - webpack
  - 配置
---

## 作用

设置模块如何被解析。

## 可配置项

```js
type ResolveObject = {
  alias:
    | {
        // 定义别名
        [aliasName: string]: string; // key 为别名，value 为模块的绝对路径
      }
    | false; // alias 设置为 false 时 webpack 会忽略该模块。

  extensions: string[]; // 如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。默认['.js', '.json', '.wasm']，自定义时可以用 ... 访问默认拓展名，如： ['.ts', '...']。
  mainFiles: string[]; // 解析目录时使用的文件名，默认 ['index']。
  enforceExtension: boolean; // 设置为 true 时引入文件必须带后缀名，默认为 false
  modules: string[]; // 告诉 webpack 解析模块时应该搜索的目录。默认 node_modules，使用绝对路径，将只在给定目录中搜索。
  plugins: PluginObject[]; // 要使用的额外解析插件列表。
  preferAbsolute: boolean; // 规定解析时首选的绝对路径为 resolve.roots。
  roots: string[]; // 服务器相对url请求(以'/'开头)被解析的目录列表，默认为 context 配置选项。在非windows系统上，这些请求首先被解析为绝对路径。
  fallback: {
    [moduleName: string]: string; // 正常解析失败时，重定向模块请求
  };
};
```

### alias

创建 import 或 require 的别名，来确保模块引入变得更简单。

给 alias 对象的 key 后面加上 $ 表示精准匹配。

将 alias 设置为 false 时 webpack 会忽略该模块。

```js
const path = require("path");

module.exports = {
  resolve: {
    alias: {
      Utilities: path.resolve(__dirname, "src/utilities/"),
      xyz$: path.resolve(__dirname, "path/to/file.js"),
    },
  },
};
```

可以使用别名引入 Utilities 模块：

```js
import Utility from "../../utilities/utility";
// 使用别名
import Utility from "Utilities/utility";
```

精准解析：

```js
import Test1 from "xyz"; // 精确匹配，所以 path/to/file.js 被解析和导入
import Test2 from "xyz/file.js"; // 非精确匹配，触发普通解析
```

设置别名的一些情况：
| `alias:` | `import 'xyz'` | `import 'xyz/file.js'` |
| :--------------------------------- | :------------------------------------ | :----------------------------------- |
| `{}` | `/abc/node_modules/xyz/index.js` | `/abc/node_modules/xyz/file.js` |
| `{ xyz: '/abc/path/to/file.js' }` | `/abc/path/to/file.js` | error |
| `{ xyz$: '/abc/path/to/file.js' }` | `/abc/path/to/file.js` | `/abc/node_modules/xyz/file.js` |
| `{ xyz: './dir/file.js' }` | `/abc/dir/file.js` | error |
| `{ xyz$: './dir/file.js' }` | `/abc/dir/file.js` | `/abc/node_modules/xyz/file.js` |
| `{ xyz: '/some/dir' }` | `/some/dir/index.js` | `/some/dir/file.js` |
| `{ xyz$: '/some/dir' }` | `/some/dir/index.js` | `/abc/node_modules/xyz/file.js` |
| `{ xyz: './dir' }` | `/abc/dir/index.js` | `/abc/dir/file.js` |
| `{ xyz: 'modu' }` | `/abc/node_modules/modu/index.js` | `/abc/node_modules/modu/file.js` |
| `{ xyz$: 'modu' }` | `/abc/node_modules/modu/index.js` | `/abc/node_modules/xyz/file.js` |
| `{ xyz: 'modu/some/file.js' }` | `/abc/node_modules/modu/some/file.js` | error |
| `{ xyz: 'modu/dir' }` | `/abc/node_modules/modu/dir/index.js` | `/abc/node_modules/modu/dir/file.js` |
| `{ xyz$: 'modu/dir' }` | `/abc/node_modules/modu/dir/index.js` | `/abc/node_modules/xyz/file.js` |
