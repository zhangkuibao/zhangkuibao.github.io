## 作用

webpack 会从定义的入口进入，将该入口依赖的文件打包到一起，定义为单入口时（`string | [string]`）会把所有入口文件及依赖打包到一个文件内；定义为多入口时（`{ [entryChunkName: string]: string | object }`）会输出多个文件。

经由入口打包成的是一个个 chunk 组。如果传入一个字符串或字符串数组，chunk 会被命名为 main。如果传入一个对象，则每个属性的键(key)会是 chunk 的名称，该属性的值描述了 chunk 的入口点。

## 用法

类型：`entry: string | [string] | { [entryChunkName: string]: string | object } | {}`。

传入类型为 `string | [string]` 时表示单个入口。

传入类型为 `{ [entryChunkName: string]: string | object }` 时表示多个入口。

当和 output.library 选项结合：如果传入的是一个数组，只有数组的最后一个条目会被导出。

```js
module.exports = {
  entry: {
    app: "./src/app.js",
    adminApp: "./src/adminApp.js",
  },
};
```

### 传入一个函数

如果传入一个函数，那么它将会在每次 make 事件（ webpack 启动和每当监听文件变化时触发）中被调用。

```js
module.exports = {
  //...
  entry: () => "./demo",
};
```

或

```js
module.exports = {
  //...
  entry: () => new Promise((resolve) => resolve(["./demo", "./demo2"])),
};
```

### 多入口对象可配置属性

```ts
const path = require('path');

type WebpackConfig = {
    entry: string | string[] | EntryObject         // 入口
}

type EntryObject = {
    [chunkName: string]: string | string[] | EntrySubObject
}

type EntrySubObject = {
    dependOn: string | string[]    // 当前入口所依赖的模块。它们必须在该入口被加载前被加载。使用 dependOn 选项你可以与另一个入口 chunk 共享模块
    filename: string               // 指定要输出的文件名称。
    import: string | string[]      // 启动时需加载的模块。
    library: object                // 指定 library 选项，为当前 entry 构建一个 library。
    runtime: string                // 运行时 chunk 的名字。如果设置了，就会创建一个以这个名字命名的运行时 chunk，否则将使用现有的入口作为运行时。
    publicPath: string             // 当该入口的输出文件在浏览器中被引用时，为它们指定一个公共 URL 地址。请查看 output.publicPath。
    layer: string
    chunkLoading: string
}

let config:WebpackConfig = {};
module.exports = config;
```

#### dependOn

默认情况下，每个入口 chunk 会保存它用到的所有模块(modules)。使用 dependOn 选项你可以与另一个入口 chunk 共享模块，也就是将抽离公共模块编译成单独的 chunk

```js
module.exports = {
  //...
  entry: {
    moment: { import: "moment-mini" },
    reactvendors: { import: ["react", "react-dom"] },
    testapp: {
      import: "./wwwroot/component/TestApp.tsx",
      dependOn: ["reactvendors", "moment"],
    },
  },
};
```

## 设置多个入口的意义

在多页面应用程序中，server 会拉取一个新的 HTML 文档给你的客户端。页面重新加载此新文档，并且资源被重新下载。

这时可以使用 optimization.splitChunks 为页面间共享的代码创建 bundle。多页应用能够复用多个入口起点之间的大量重复代码/模块，从而实现性能优化。
