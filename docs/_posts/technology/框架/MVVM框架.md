---
date: 2021-09-06 10:56:06
title: 前端 MVVM 框架
tags:
  - 框架
---

## MVVM 架构

M(model)V(view)VM(viewModel)，MVVM 架构是 MVC 架构的改良版本。

MVC 架构下视图与逻辑分离但是数据与视图的映射逻辑需要自己处理，比如用 js + html 写一个列表，需要拿到列表数据，用列表数据生成 dom，然后将 dom 放到页面中。

MVVM 架构中将根据数据生成 dom 的操作交给框架去处理，前端只需要拿到列表数据，然后将列表数据按照框架的规则与 dom 关联即可。

## Angular 与 Vue 对比

1. 体积和性能

相较于 vue，angular 显得比较臃肿，比如一个包含了 Vuex + Vue Router 的 Vue 项目 (gzip 之后 30kB) ，而 angular-cli 生成的默认项目尺寸 (~65KB) 还是要小得多。

在渲染性能上，这两个框架都很快，性能上几乎没有差别。

2. 开发效率

都提供了各自的脚手架工具，帮助提高从开发到构建打包的整套过程，另外均可以基于组件化开发，编写可复用的组件，大大较少重复性的工作。

Angular 是用 Typescript 写的， 更具有工程化的优势，但是 Vue 也可以通过引入 TS 及 vuex-ts-decorators 插件（非官方插件，学习成本）来抹平这一差距。

3. 灵活性

Vue 相比于 Angular 更加灵活，可以按照不同的需要去组织项目的应用代码。比如，甚至可以直接像引用 jquery 那样在 HTML 中引用 vue，然后仅仅当成一个前端的模板引擎来用。

4. 可维护性

相对而言 Vue 对 TS 的支持度较低，工程化方面不如 Angular。

Angular 的模块系统可以方便的对组件进行组装和解耦。因此 Angular 更适合大型项目的开发。

6. 学习曲线

Angular 难度较大，Vue 相对简单。

## 参考

[angular 和 vue 对比](https://blog.csdn.net/kwame211/article/details/107284086)
