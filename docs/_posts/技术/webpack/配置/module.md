---
tags:
  - myGit
  - learning-Notes
  - document
  - 技术
  - webpack
  - 配置
---

## 作用

决定如何处理项目中不同类型的模块。

## 可配置属性

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

### rule

每个规则可以分为三部分 - 条件(condition)，结果(result)和嵌套规则(nested rule)。

会影响 loader 的属性：loader, options, use。

parser 属性会影响 parser 选项。

#### 条件的输入值

- resource：资源文件的绝对路径。它已经根据 resolve 规则解析。

- issuer: 请求者的文件绝对路径。是导入时的位置。

例如： 从 app.js 导入 './style.css'，resource 是 /path/to/style.css. issuer 是 /path/to/app.js。

在规则中，属性 test, include, exclude 和 resource 对 resource 匹配，属性 issuer 对 issuer 匹配。

#### 规则的输入值

- 应用的 loader：应用在 resource 上的 loader 数组。

- Parser 选项：用于为模块创建解析器的选项对象。

#### 嵌套 rule

可以使用属性 rules 和 oneOf 指定嵌套规则。

被解析的顺序基于以下规则：

1. 父规则
2. rules
3. oneOf
