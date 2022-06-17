---
title: 【webpack配置】配置文件
tags:
  - 前端工程化
  - webpack
  - webpack配置
---

## 默认路径

webpack 可以不需要任何配置文件，此时 webpack 会假定项目的入口起点为 src/index.js，然后会在 dist/main.js 输出结果，并且在生产环境开启压缩和优化。

在项目根目录中创建一个 webpack.config.js，启动 webpack 时会自动使用它。

## 使用不同的配置文件

**package.json**
```js
"scripts": {
  "build": "webpack --config prod.config.js"
}
```

## 可配置项

**webpack.config.js**
```js
const path = require('path');

type WebpackConfig = {
    mode: "production" | "development" | "none"    // 运行模式
    entry: string | string[] | EntryObject         // 入口
    output: OutputObject                           // 输出
    module: ModuleObject                           // 决定模块的处理方式
    resolve: ResolveObject                         // 设置模块如何被解析
    performance: PerformanceObject                 // 性能，只能控制何时显示提示？
    externals: {                                   // 从输出的 bundle 中排除依赖，防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。              
        [moduleName: string]: string | object | function | RegExp
    }         
    externalsType: string                          // 设置 externals 的默认类型，默认 var
    devServer: DevServerObject                     // 开发服务器配置
    optimization: OptimizationObject               // 优化
    watch: boolean                                 // 监听文件变化
    watchOption: WatchOptionObject                 // watch配置
    devtool                                        // 控制是否生成，以及如何生成 source map。
    target                                         // 编译构建的目标环境
    stats                                          // 控制bundle信息该怎么展示
    experiments                                    // 实验特性
    plugins                                        // 插件，以各种方式自定义 webpack 构建过程
}

let config:WebpackConfig = {};
module.exports = config;
```

### entry

```js
type EntryObject = {
    [chunkName: string]: string | string[] | EntrySubObject
}

type EntrySubObject = {
    dependOn: string | string[]    // 当前入口所依赖的模块。它们必须在该入口被加载前被加载。使用 dependOn 选项你可以与另一个入口 chunk 共享模块
    filename: string               // 指定要输出的文件名称。
    import: string | string[]      // 启动时需加载的模块。
    library: LibraryObject         // 同 output.library，在这里可以在设置多入口时为每个入口配置 library
    runtime: string                // 运行时 chunk 的名字。如果设置了，就会创建一个以这个名字命名的运行时 chunk，否则将使用现有的入口作为运行时。
    publicPath: string             // 当该入口的输出文件在浏览器中被引用时，为它们指定一个公共 URL 地址。请查看 output.publicPath。
    layer: string
    chunkLoading: string
}
```

### output

```js
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

### output.library/entry.library
省略 library.name 将导致入口起点返回的所有属性直接赋值给根对象

[不同type打包的差异](https://webpack.docschina.org/configuration/output/#exposeavariable)

可以通过 type 将功能打包成适配其他模块系统的模块。
```js
type LibraryObject = {
    name: string | string[] | {amd?: string, commonjs?: string, root?: string | string[]}        // 库的名称，定义为对象时可配置打包为不同类型时的名称
    type: 'var' | 'module' | 'assign' | 'assign-properties' | 'this' | 'window' | 'self' | 'global' | 'commonjs' | 'commonjs2' | 'commonjs-module' | 'amd' | 'amd-require' | 'umd' | 'umd2' | 'jsonp' | 'system' | string        // 库的暴露方式，除内置可选项之外也可以通过插件添加。
    export: string | string[]       // 指定哪一个导出应该被暴露为一个库。默认为 undefined，将会导出整个（命名空间）对象。可通过传递数组指定某个具体的导出
}
```

### module

```js
type ModuleObject = {
    generator: object               // 在一个地方配置所有生成器的选项。
    parser: ParserObject            // 在一个地方配置所有解析器的选项。
    rules: RuleObject[]             // 对匹配的文件应用 loader 或 parser
}

type ParserObject = {
    javascript: {
        noParse: RegExp | RegExp[] | (resource: string) => string | string[]    // 匹配的文件不会被解析。忽略的文件中 不应该含有 import, require, define 或任何其他导入机制。忽略大型的 library 可以提高构建性能。
        unsafeCache: boolean        // 缓存模块请求的解析，cache（webpack） 未启用时为 false，cache启用时如果此模块来自 node_modules 则为 true，否则为false

        commonjsMagicComments: boolean  // 为 CommonJS 启用 魔法注释。目前只支持 webpackIgnore 注释（5.17.0+）
        url: boolean | 'relative'    // 启用 new URL() 语法解析。设置为 relative（5.23+）时结果 URL 中不包含根 URL。适用于 SSR（服务端渲染）和 SSG（静态网站生成器）
    }
}

type RuleObject = {
    test: RegExp | RegExp[]         // 引入匹配的模块，如果你提供了一个 Rule.test 选项，就不能再提供 Rule.resource。
    use: string[] | UseObject[] | (info: {          // 引入 loader，存在多个 loader 时从右到左被应用。
        compiler            //  当前 webpack 的编译器（可以是 undefined 值）
        issuer              //  模块的路径，该元素正在导入一个被加载的模块(resource)
        realResource        //  总会是被加载模块的路径
        resource            //  被加载的模块路径，它常常与 realResource 相等，只有当资源名称被 request 字符串中的 !=! 覆盖时才不相等
    }) => (string[] | UseObject[])    

    resolve                 // 这些选项能设置模块如何被解析。所有被应用的 resolve 选项被更高层级的resolve配置合并。同 module.resolve

    parser: {           // 解析选项对象，所有应用的解析选项都将合并。https://webpack.docschina.org/configuration/module/#ruleparser
        dataUrlCondition: { maxSize: number } | (source, {filename, module}) => boolean     // 如果一个模块源码大小小于 maxSize，那么模块会被作为一个 Base64 编码的字符串注入到包中， 否则模块文件会被生成到输出的目标目录中。
    }
    generator: {
        dataUrl: {
            encoding: string | false,       // 模块源码编码方式，设置为 false 时会禁用编码。
            mimetype: string,               // 设置文件类型，默认根据模块资源后缀设置。
        } | ((content, { filename, module })=> string)
    }
    loader                   
           // Rule.loader 是 Rule.use: [ { loader } ] 的简写。类似的还有 Rule.options / Rule.query，均已废弃。
    loaders                         // Rule.use 的别名，已废弃。
    oneOf: RegExp | RegExp[]        // 规则数组，当规则匹配时，只使用第一个匹配规则。
    enforce: 'pre' | 'post'         // 指定 loader 类型，没有表示是普通 loader。
    exclude: RegExp | RegExp[]      // 排除符合条件的模块，如果你提供了 Rule.exclude 选项，就不能再提供 Rule.resource。
    include: RegExp | RegExp[]      // 引入符合条件的模块。如果你提供了 Rule.include 选项，就不能再提供 Rule.resource
    issuer: string                  // 这个选项可以用来将 loader 应用到一个特定模块或一组模块的依赖中。
    layer: string                   // 指定模块应放置在哪个 layer。
    mimetype: 'application/json' | 'text/javascript' | 'application/javascript' | 'application/node' | 'application/wasm' | string      // 使 rules 配置与 data 的 uri 进行匹配
    resource                        // 条件会匹配 resource。
}

type UseObject = {
    loader: string          // 要使用的 loader
    options: object         // 传递给 loader 的数据，可以理解为 loader 的选项。
}
```

### resolve

```js
type ResolveObject = {
    alias: {                            // 定义别名
        [aliasName: string]: string     // key 为别名，value 为模块的绝对路径
    } | false                           // alias 设置为 false 时 webpack 会忽略该模块。

    extensions: string[]                // 如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。默认['.js', '.json', '.wasm']，自定义时可以用 ... 访问默认拓展名，如： ['.ts', '...']。
    mainFiles: string[]                 // 解析目录时使用的文件名，默认 ['index']。
    enforceExtension: boolean           // 设置为 true 时引入文件必须带后缀名，默认为 false
    modules: string[]                   // 告诉 webpack 解析模块时应该搜索的目录。默认 node_modules，使用绝对路径，将只在给定目录中搜索。
    plugins: PluginObject[]             // 要使用的额外解析插件列表。
    preferAbsolute: boolean             // 规定解析时首选的绝对路径为 resolve.roots。
    roots: string[]                     // 服务器相对url请求(以'/'开头)被解析的目录列表，默认为 context 配置选项。在非windows系统上，这些请求首先被解析为绝对路径。
    fallback: {
        [moduleName: string]: string    // 正常解析失败时，重定向模块请求
    }
}
```

### Performance

```js
type PerformanceObject = {
    hints: 'error' | 'warning' | false      // 打开/关闭提示，找到提示时以错误或警告形式进行提示，默认为 warning
    maxEntrypointSize: number               // 入口起点体积大于这个值时生成性能提示，默认 250000
    maxAssetSize: number                    // 资源文件体积大于这个值时提示，默认 250000
    assetFilter: function                   // 用函数控制何时显示提示
}
```

### devServer

```js
type DevServer = {
    before: (app, server, compiler) => void         // 提供自定义中间件，当 devServer 服务器内部的 所有中间件执行完成之前执行
    after: (app, server, compiler) => void          // 提供自定义中间件，当 devServer 服务器内部的 所有中间件执行完成之后执行
    allowedHosts: string[]                          // 可访问开发服务器的域名白名单
    compress: boolean                               // 为每个静态文件开启gzip压缩
    publicPath: string                              // 配置静态文件的路径
    contentBase: string                             // 配置静态文件的路径，优先级低于publicPath，path.join(__dirname, 'public')
    headers: object                                 // 为所有请求添加请求头
    historyApiFallback: boolean | object            // 开启后当使用history API时所有404请求都会响应index.html的内容，传递对象可进行细粒度配置
    host: string                                    // 配置域名
    port: number                                    // 配置端口号
    hotOnly: boolean                                // 开启模块热替换
    https: boolean | {key: file, cert: file, ca: file}     // 开启https，可传入自己的证书（对象）
    index: string                                   // 设置index文件的文件名
    lazy: boolean                                   // 开启懒加载，开启后开发服务器仅在收到请求时才进行编译，这意味着 webpack 将不会监视任何文件更改。
    open: boolean                                   // 服务启动后自动打开浏览器 
    openPage: string                                // 指定打开浏览器时的默认页面
    overlay: boolean                                // 默认情况下编译出错时会在浏览器中全屏覆盖，设置为true则只在编译器显示
    proxy: {[proxyUrl: string]: stirng}             // 服务代理
    useLocalIp: boolean                             // 开启后可用本地IP访问
    writeToDisk: boolean                            // 将产生的文件写入硬盘，写入位置为output.path配置的目录
}
```

### optimization

```js
type OptimizationObject = {
    minimize: boolean                               // 开启bundle压缩
    minimizer: plugin                               // 提供一个或多个定制过的 TerserPlugin 实例， 覆盖默认压缩工具(minimizer)。可用...访问默认值
    splitChunks: object                             // 用SplitChunksPlugin插件拆分chunk，配置值为插件的配置
    nodeEnv: string                                 // 将 process.env.NODE_ENV 设置为一个给定字符串
    removeEmptyChunks: boolean                      // 删除空chunk，默认为true
    mergeDuplicateChunks: boolean                   // 合并含有相同模块的chunk，默认为true
}
```

### watchOption

如果你使用 require.context，webpack 会监听你的整个目录。你应该忽略一些文件和/或(and/or)目录，以便那些不需要监听的文件修改后不会触发重新构建。

故障排查 https://webpack.docschina.org/configuration/watch/#troubleshooting
```js
type WatchOptionObject = {
    aggregateTimeout: number                        // 重新构建的延时，单位ms，默认200
    ignored: RegExp | string | string[]             // 过滤匹配的文件、文件夹
    poll: number | boolean                          // 开启轮询，设置为true默认1000ms，可自设时间
}
```