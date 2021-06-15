## 作用
webpack 会从定义的入口进入，将该入口依赖的文件打包到一起，定义为单入口时（`string | [string]`）会把所有入口文件及依赖打包到一个文件内；定义为多入口时（`{ [entryChunkName: string]: string | object }`）会输出多个文件。


### 用法

类型：`entry: string | [string] | { [entryChunkName: string]: string | object } | {}`

传入类型为 `string | [string]` 时表示单个入口

传入类型为 `{ [entryChunkName: string]: string | object }` 时表示多个入口

```js
module.exports = {
  entry: {
    app: "./src/app.js",
    adminApp: "./src/adminApp.js",
  },
};
```

### 多入口对象可配置

```js
module.exports = {
  entry: {
    a2: 'dependingfile.js',
    b2: {
        dependOn: '',   // 当前入口所依赖的入口。它们必须在该入口被加载前被加载。
        filename: '',   // 指定要输出的文件名称。
        import: '',     // 启动时需加载的模块。
        library: '',    // 指定 library 选项，为当前 entry 构建一个 library。
        runtime: '',    // 运行时 chunk 的名字。如果设置了，就会创建一个以这个名字命名的运行时 chunk，否则将使用现有的入口作为运行时。
        publicPath: '', // 当该入口的输出文件在浏览器中被引用时，为它们指定一个公共 URL 地址。请查看 output.publicPath。
    },
  },
};
```

### 设置多个入口的意义

在多页面应用程序中，server 会拉取一个新的 HTML 文档给你的客户端。页面重新加载此新文档，并且资源被重新下载。

这时可以使用 optimization.splitChunks 为页面间共享的代码创建 bundle。多页应用能够复用多个入口起点之间的大量重复代码/模块，从而实现性能优化。