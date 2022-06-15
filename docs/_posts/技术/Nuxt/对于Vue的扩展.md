---
date: 2021-09-09 10:01:41
title: 对于 Vue 的扩展
tags:
  - myGit
  - learning-Notes
  - document
  - 技术
  - Nuxt
---

## Nuxt.js 为页面提供的特殊配置项：

### asyncData

数量的风景

1. 在**页面组件** 每次加载前被调用
2. 在该函数中无法通过 `this` 获取组件实例
3. 返回一个 `Promise`，在 `Promise` 解析后才会渲染组件
4. `asyncData` 返回的数据会融合组件 `data` 方法返回的数据一并返回给当前组件
5. 返回值可以是这些类型：`Promise`, `对象`, `二参的回调函数`

#### 参数

1. 一参是当前页面的上下文对象，[见官方文档](https://www.nuxtjs.cn/api/context)
2. 二参是回调函数，如下

```js
ƒ (err, data) {
    if (err) {
        context.error(err);
    }

    data = data || {};
    resolve(data);
}
```

### fetch

与 asyncData 方法类似，用于在渲染页面之前获取数据填充应用的状态树（store）。不同的是 fetch 方法不会设置组件的数据。详情请参考 关于 fetch 方法的文档。

### head

配置当前页面的 Meta 标签, 详情参考 页面头部配置 API。

### layout

指定当前页面使用的布局（layouts 根目录下的布局文件）。详情请参考 关于 布局 的文档。

### loading

如果设置为 false，则阻止页面自动调用 this.$nuxt.$loading.finish()和 this.$nuxt.$loading.start(),您可以手动控制它,请看例子,仅适用于在 nuxt.config.js 中设置 loading 的情况下。请参考 API 配置 loading 文档。

### transition

指定页面切换的过渡动效, 详情请参考 页面过渡动效。

### scrollToTop

布尔值，默认: false。 用于判定渲染页面前是否需要将当前页面滚动至顶部。这个配置用于 嵌套路由的应用场景。

### validate

校验方法用于校验 动态路由的参数。

### middleware

指定页面的中间件，中间件会在页面渲染之前被调用， 请参考 路由中间件。
关于页面配置项的详细信息，请参考 页面 API。

### watchQuery

监听参数变化

如果定义的字符串发生变化，将调用所有组件方法(asyncData, fetch, validate, layout, ...)。

类型：`<String>[]`
