## 作用

可以通过配置 output 选项，指示 webpack 如何去输出、以及在哪里输出你的「bundle、asset 和其他你所打包或使用 webpack 载入的任何内容」。

即使可以存在多个 entry 起点，但只能指定一个 output 配置。

## 可配置属性

```ts
type OutputObject = {
    filename: string | (pathData:any) => string     // 决定了每个输出 bundle 的名称。这些 bundle 将写入到 output.path 选项指定的目录下。可以使用 'js/[name]/bundle.js' 这样的文件夹结构
    chunkFilename: string | (pathData:any) => string          // 决定非初始（non-initial）chunk 文件的名称。默认使用 [id].js
    assetModuleFilename: string | (pathData:any) => string      // 决定 module 文件的名称，默认 [hash][ext][query]
    path: string                // output 目录对应的绝对路径。require('path').resolve(__dirname, 'dist/assets')
    publicPath: string | (x) => string          // 加载外部资源的路径
    scriptType: 'module' | 'text/javascript' | false      // 设置 <script> 标签的 type  值
    compareBeforeEmit: boolean              // 当要输出的文件已存在并且内容没有变更时，webpack 不会输出该文件。

    library: string | string[] | LibraryObject     // 将 entry 设定的入口输出为一个库（class）。
    libraryTarget: string
    auxiliaryComment: string       // 在 output.library 和 output.libraryTarget 一起使用时，此选项允许用户向导出容器(export wrapper)中插入注释。
    charset: string                // 为 <script> 标签添加 charset="utf-8" 标识
    chunkLoadTimeout: number       // chunk 请求到期之前的毫秒数，默认为 120000
    chunkLoading: 'jsonp' | 'import-scripts' | 'require' | 'async-node' | string        // 加载 chunk 的方法，（默认值有 'jsonp' (web)，'importScripts' (WebWorker)，'require' (sync node.js)，'async-node' (async node.js)，还有其他值可由插件添加)。
    chunkLoadingGlobal: string      // webpack 用于加载 chunk 的全局变量。
    chunkFormat: 'array-push' | 'commonjs' | string     // chunk 的格式，（默认包含 'array-push' (web/WebWorker)，'commonjs' (node.js)，还有其他情况可由插件添加）。
    crossOriginLoading: 'anonymous' | 'use-credentials'    // 启用 cross-origin 属性 加载 chunk。仅在 target 设置为 'web' 时生效，通过使用 JSONP 来添加脚本标签，实现按需加载模块。'anonymous' - 不带凭据(credential) 启用跨域加载；'use-credentials' - 携带凭据(credential) 启用跨域加载
    globalObject: 'self' | 'window' | 'this' | string        // 当输出为 library 时，尤其是当 libraryTarget 为 'umd'时，此选项将决定使用哪个全局对象来挂载 library。默认为 self
    uniqueName: string          // 在全局环境下为防止多个 webpack 运行时 冲突所使用的唯一名称。默认使用 output.library 名称或者上下文中的 package.json 的 包名称(package name)， 如果两者都不存在，值为 ''。
    hashDigest: string          // 在生成 hash 时使用的编码方式。对文件名使用 'base64'，可能会出现问题，因为 base64 字母表中具有 / 这个字符(character)。
    hashDigestLength: string    // hash 长度
    hashFunction: string | function     // 散列算法。支持 Node.JS crypto.createHash 的所有功能。
    pathinfo: boolean | 'verbose'           // 在 bundle 中引入「所包含模块信息」的相关注释。development 模式时默认为true，production 模式默认为 false，为 'verbose' 时，会显示更多信息
    sourceMapFilename: string       // 默认值 [file].map[query]，仅在 devtool 设置为 'source-map' 时有效
    strictModuleErrorHandling: boolean      // 加载模块时错误的处理方式 https://webpack.docschina.org/configuration/output/#outputstrictmoduleerrorhandling
    clean: boolean | { dry?: boolean, keep?: RegExp | string | ((filename: string) => boolean) }          // 生成文件前先清空输出目录 https://webpack.docschina.org/configuration/output/#outputclean

    // 现在或未来将被弃用的功能
    libraryExport           // 使用 output.library.export
    libraryTarget           // 使用 output.library.type
    strictModuleExceptionHandling   // 使用 output.strictModuleErrorHandling
}
```

### publicPath

设置加载外部资源的路径。

该选项的值是 runtime(运行时) 或 loader(载入时) 所创建的每个 URL 的前缀。因此，在多数情况下，此选项的值都会以 / 结束。

如果在编译时，不知道最终输出文件的 publicPath 是什么地址，则可以将其留空，并且在运行时通过入口起点文件中的 `__webpack_public_path__` 动态设置。

### path

设置 output 目录对应的**绝对路径**

```js
const path = require("path");

module.exports = {
  //...
  output: {
    path: path.resolve(__dirname, "dist/assets"),
  },
};
```

### filename

对于单个入口起点，filename 会是一个静态名称。多入口起点时 filename 需要用占位符来保证名称的唯一性

```js
module.exports = {
  entry: {
    app: "./src/app.js",
    search: "./src/search.js",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },
};

// 写入到硬盘：./dist/app.js, ./dist/search.js
```

可以使用像 `'js/[name]/bundle.js'` 这样的文件夹结构。

```js
module.exports = {
  //...
  output: {
    filename: (pathData) => {
      return pathData.chunk.name === "main" ? "[name].js" : "[name]/[name].js";
    },
  },
};
```

可用的模板字符串：

- 可在编译层面进行替换的内容

| 模板       | 描述                       |
| ---------- | -------------------------- |
| [fullhash] | compilation 完整的 hash 值 |
| [hash]     | 同上，但已弃用             |

- 可在 chunk 层面进行替换的内容

| 模板          | 描述                                                                                  |
| ------------- | ------------------------------------------------------------------------------------- |
| [id]          | 此 chunk 的 ID                                                                        |
| [name]        | 如果设置，则为此 chunk 的名称，否则使用 chunk 的 ID                                   |
| [chunkhash]   | 此 chunk 的 hash 值，包含该 chunk 的所有元素                                          |
| [contenthash] | 此 chunk 的 hash 值，只包括该内容类型的元素（受 `optimization.realContentHash` 影响） |

- 可在模块层面替换的内容

| 模板          | 描述               |
| ------------- | ------------------ |
| [id]          | 模块的 ID          |
| [moduleid]    | 同上，但已弃用     |
| [hash]        | 模块的 Hash 值     |
| [modulehash]  | 同上，但已弃用     |
| [contenthash] | 模块内容的 Hash 值 |

- 可在文件层面替换的内容

| 模板       | 描述                                    |
| :--------- | :-------------------------------------- |
| [file]     | filename 和路径，不含 query 或 fragment |
| [query]    | 带前缀 `?` 的 query                     |
| [fragment] | 带前缀 `#` 的 fragment                  |
| [base]     | 只有 filename（包含扩展名），不含 path  |
| [filebase] | 同上，但已弃用                          |
| [path]     | 只有 path，不含 filename                |
| [name]     | 只有 filename，不含扩展名或 path        |
| [ext]      | 带前缀 `.` 的扩展名                     |

- 可在 URL 层面替换的内容

| 模块  | 描述 |
| :---- | :--- |
| [url] | URL  |

`[file]` 等价于 `[path][base]`。`[base]` 等价于 `[name][ext]`。完整的路径为 `[path][name][ext][query][fragment]` 或 `[path][base][query][fragment]` 或 `[file][query][fragment]`。

`[hash]`，`[contenthash]` 或者 `[chunkhash]` 的长度可以使用 `[hash:16]`（默认为 20）来指定。或者，通过指定 output.hashDigestLength 在全局配置长度。

当你要在实际文件名中使用占位符时，需要对占位符转义。例如，输出一个文件 `[name].js`， 你必须通过在括号之间添加反斜杠来转义 `[name]` 占位符。 因此，`[\name\] `生成 `[name]` 而不是 `name`。

filename 选项设置为函数时，该函数接收一个对象，对象属性如下：

```ts
type PathData = {
  hash: string;
  hashWithLength: (number) => string;
  chunk: Chunk | ChunkPathData;
  module: Module | ModulePathData;
  contentHashType: string;
  contentHash: string;
  contentHashWithLength: (number) => string;
  filename: string;
  url: string;
  runtime: string | SortableSet<string>;
  chunkGraph: ChunkGraph;
};
type ChunkPathData = {
  id: string | number;
  name: string;
  hash: string;
  hashWithLength: (number) => string;
  contentHash: Record<string, string>;
  contentHashWithLength: Record<string, (number) => string>;
};
type ModulePathData = {
  id: string | number;
  hash: string;
  hashWithLength: (number) => string;
};
```

### library

将 entry 设定的入口输出为一个库（class）。

```js
module.exports = {
  // …
  entry: "./src/index.js",
  output: {
    library: "MyLibrary",
  },
};
```

如果 ./src/index.js 文件内容如下：

```js
export const name = "isIndex";
export function getName() {
  return name;
}
```

在引入 ./src/index.js 打包生成的文件后可用如下方式访问：

```js
MyLibrary.name; // isIndex;
MyLibrary.getName(); // isIndex;
```

**entry 设定为多入口时的输出规则**

- 将 entry 设置为一个 array，那么只有数组中的最后一个会被暴露。

  ```js
  module.exports = {
    // …
    entry: ["./src/a.js", "./src/b.js"], // 只有在 b.js 中导出的内容才会被暴露
    output: {
      library: "MyLibrary",
    },
  };
  ```

- 将 entry 设置为一个 object，所有入口都可以通过 library 的 array 语法暴露

  ```js
  module.exports = {
    // …
    entry: {
      a: "./src/a.js",
      b: "./src/b.js",
    },
    output: {
      filename: "[name].js",
      library: ["MyLibrary", "[name]"], // name is a placeholder here
    },
  };
  ```

  假设 a.js 与 b.js 导出名为 hello 的函数，用下面的方法去访问它：

  ```js
  MyLibrary.a.hello("webpack");
  MyLibrary.b.hello("webpack");
  ```

- 要为每个入口点配置 library 需要在 entry.library 中配置

  ```js
  module.exports = {
    entry: {
      main: {
        import: "./src/index.js",
        library: {
          // `output.library` 下的所有配置项可以在这里使用
          name: "MyLibrary",
          type: "umd",
          umdNamedDefine: true,
        },
      },
      another: {
        import: "./src/another.js",
        library: {
          name: "AnotherLibrary",
          type: "commonjs2",
        },
      },
    },
  };
  ```

**将功能打包到不同平台并指定不同名称**

```js
module.exports = {
  output: {
    library: {
      name: {
        root: "MyLibrary",
        amd: "my-library",
        commonjs: "my-common-library",
      },
      type: "umd",
    },
  },
};
```

**指定哪个导出被暴露为库**
library 打包时会将整个命名空间作为导出对象打包成库，可通过给 output.library.export 传递数组规定只暴露某一个导出。

```js
module.exports = {
  output: {
    library: {
      name: "MyLibrary",
      type: "var",
      export: ["default", "subModule"],
    },
  },
};
```

库代码如下：

```js
var MyLibrary = _entry_return_.default.subModule;
```
