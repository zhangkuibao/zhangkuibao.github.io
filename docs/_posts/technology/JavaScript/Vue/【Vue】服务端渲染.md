---
date: '2021-09-09 10:05:44'
title: 【Vue】服务端渲染
tags:
  - JavaScript
  - Vue
---

## 背景

- `SPA` 应用的缺陷
  1. 首页加载时间长
  2. 不利于 `SEO`

## 原理

依赖于 `vue-server-renderer` 模块
在服务端生成完整页面直接传递给客户端

## 开发原则

### 与客户端 vue 的区别

#### 响应式数据

将数据进行响应式的过程在服务器上是多余的，禁用响应式数据，同时可避免将「数据」转换为「响应式对象」的性能开销

#### 生命周期钩子

只有 `beforeCreate` 和 `created` 会在服务器端渲染 (SSR) 过程中被调用，其他生命周期钩子函数中的代码（例如 beforeMount 或 mounted），只会在**客户端**执行，应避免在`beforeCreate` 和 `created`两个钩子中使用会产生全局副作用的代码

#### 自定义指令

大多数自定义指令直接操作 DOM，因此会在服务器端渲染 (SSR) 过程中导致错误。有两种方法可以解决这个问题：

1. 推荐使用组件作为抽象机制，并运行在「虚拟 DOM 层级(Virtual-DOM level)」（例如，使用渲染函数(render function)）。

2. 如果你有一个自定义指令，但是不是很容易替换为组件，则可以在创建服务器 renderer 时，使用 directives 选项所提供"服务器端版本(server-side version)"。

### 通用代码设计

#### 服务器数据响应

从客户端发起的每个请求都应该是全新且独立的应用程序实例，这样可以避免产生交叉请求造成的状态污染 (cross-request state pollution)

#### 平台特定 API

通用代码不可接受特定平台的 API，直接使用了像 window 或 document，这种仅浏览器可用的全局变量，则会在 Node.js 中执行时抛出错误

#### 避免单例状态

`Node.js` 服务器是一个长期运行的进程，当我们的代码进入该进程时，它将进行一次取值并留存在内存中。这意味着如果创建一个单例对象，它将在每个传入的请求之间共享。

#### webpack 配置

将配置分为三个文件：`base`, `client` 和 `server`。基本配置 (base config) 包含在两个环境共享的配置，例如，输出路径 (output path)，别名 (alias) 和 loader。服务器配置 (server config) 和客户端配置 (client config)，可以通过使用 `webpack-merge` 来简单地扩展基本配置。

### 注意事项

#### 模板匹配

使用「SSR + 客户端混合」时，需要了解的一件事是，浏览器可能会更改的一些特殊的 `HTML` 结构。例如，当你在 `Vue` 模板中写入：

```html
<table>
  <tr>
    <td>hi</td>
  </tr>
</table>
```

浏览器会在 `<table>` 内部自动注入 `<tbody>`，然而，由于 Vue 生成的虚拟 DOM (virtual DOM) 不包含 `<tbody>`，所以会导致无法匹配。为能够正确匹配，请确保在模板中写入有效的 HTML。
