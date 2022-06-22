---
date: '2021-09-09 10:19:09'
title: 【Vue】Vue-Loader
tags:
  - JavaScript
  - Vue
---

[vue loader 官方文档]: https://vue-loader.vuejs.org/zh/

## 处理资源路径

- 如果路径是绝对路径 (例如 `/images/foo.png`)，会原样保留。
- 如果路径以 `.` 开头，将会被看作相对的模块依赖，并按照你的本地文件系统上的目录结构进行解析。
- 如果路径以 `~` 开头，其后的部分将会被看作模块依赖。这意味着你可以用该特性来引用一个 Node 依赖中的资源：

```html
<img src="~some-npm-package/foo.png" />
```

- 如果喜欢把 `.vue` 文件分隔到多个文件中，你可以通过 `src` 属性导入外部文件：

```vue
<template src="./template.html"></template>
<style src="./style.css"></style>
<script src="./script.js"></script>
```

- 如果路径以 `@` 开头，也会被看作模块依赖。如果你的 `webpack` 配置中给 `@` 配置了 `alias`，这就很有用了。所有 `vue-cli` 创建的项目都默认配置了将 `@` 指向 `/src`。

## Scoped CSS

当 `<style>` 标签有 `scoped` 属性时，它的 `CSS` 只作用于当前组件中的元素。这类似于 `Shadow DOM` 中的样式封装。

### 混用

可以在一个组件中同时使用有 `scoped` 和非 `scoped` 样式：

```html
<style>
  /* 全局样式 */
</style>

<style scoped>
  /* 本地样式 */
</style>
```

### 子元素的根元素

使用 `scoped` 后，父组件的样式将不会渗透到子组件中。不过**一个子组件的根节点会同时受其父组件的 `scoped CSS` 和子组件的 `scoped CSS` 的影响**。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。

### 深度作用选择器

如果你希望 `scoped` 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 `>>>` 操作符：

```html
<style scoped>
  .a >>> .b {
    /* ... */
  }
</style>
```

有些像 `Sass` 之类的预处理器无法正确解析 `>>>`。这种情况下你可以使用 `/deep/` 或 `::v-dee`p 操作符取而代之——两者都是 `>>>` 的别名，同样可以正常工作。

### v-html 生成的内容

通过 `v-html` 创建的 `DOM` 内容不受 `scoped` 样式影响，但是你仍然可以通过深度作用选择器来为他们设置样式。

## 函数式组件

要声明一个应该编译为函数式组件的模板，请将 functional 特性添加到模板块中。这样做以后就可以省略 `<script>` 块中的 `functional` 选项。

模板中的表达式会在函数式渲染上下文中求值。这意味着在模板中，`prop` 需要以 `props.xxx` 的形式访问：

```vue
<template functional>
  <div>{{ props.foo }}</div>
</template>
```

你可以在 `parent` 上访问 `Vue.prototype` 全局定义的属性：

```vue
<template functional>
  <div>{{ parent.$someProperty }}</div>
</template>
```
