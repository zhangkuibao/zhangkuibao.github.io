---
title: 【webpack】模块
tags:
  - 前端工程化
  - webpack
date: '2022-03-08 22:50:04'
---

## 概念

在模块化编程中，开发者将程序分解为功能离散的 chunk，并称之为 模块。

一个模块可以作为另一个模块的依赖模块，然后被后者引用。

### 语法支持度

#### webpack 本身支持的模块语法

- ECMAScript 模块
- CommonJS 模块
- AMD 模块
- Assets
- WebAssembly 模块

#### 通过 loader 可支持其他类型

- CoffeeScript
- TypeScript
- ESNext (Babel)
- Sass
- Less
- Stylus
- Elm

## 模块解析

模块解析就是生成依赖图的过程。

### webpack 可以解析三种文件路径

可以通过配置别名的方式来替换初始模块路径

- 绝对路径
  ```js
  import "/home/me/file";
  import "C:\\Users\\me\\file";
  ```
- 相对路径
  ```js
  import "../src/file1";
  import "./file2";
  ```
- 模块路径
  ```js
  import "module";
  import "module/lib/file";
  ```

### 解析过程

- 如果 package 中包含 package.json 文件，那么在 resolve.exportsFields 配置选项中指定的字段会被依次查找，package.json 中的第一个字段会根据 package 导出指南确定 package 中可用的 export。

一旦根据上述规则解析路径后，resolver（webpack 的解析模块） 将会检查路径是指向文件还是文件夹。如果路径指向文件：

- 如果文件具有扩展名，则直接将文件打包。
- 否则，将使用 resolve.extensions 选项作为文件扩展名来解析，此选项会告诉解析器在解析中能够接受那些扩展名（例如 .js，.jsx）。

如果路径指向一个文件夹，则进行如下步骤寻找具有正确扩展名的文件：

- 如果文件夹中包含 package.json 文件，则会根据 resolve.mainFields 配置中的字段顺序查找，并根据 package.json 中的符合配置要求的第一个字段来确定文件路径。
- 如果不存在 package.json 文件或 resolve.mainFields 没有返回有效路径，则会根据 resolve.mainFiles 配置选项中指定的文件名顺序查找，看是否能在 import/require - 的目录下匹配到一个存在的文件名。
- 然后使用 resolve.extensions 选项，以类似的方式解析文件扩展名。
