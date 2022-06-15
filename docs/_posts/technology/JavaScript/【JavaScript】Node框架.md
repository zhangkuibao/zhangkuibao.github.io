---
date: 2021-09-07 15:28:00
title: 【JavaScript】Node框架
tags:
  - JavaScript
---

## Express

[官网地址](https://www.expressjs.com.cn/)

可以快速构建服务端 web 应用程序的底层框架，核心是编写路由处理请求以及利用中间件实现功能，有一些内置的中间件。

## Koa

[官网地址](https://koa.bootcss.com/)

Koa 是由 Express 原班人马打造的，使用方法和 API 与 Express 相似，它没有内置中间件，所以体积更小；在 Koa 中可以使用高级语法，也属于底层框架。

## Nest

[官网地址](https://docs.nestjs.cn/)

Nest 提供了一个开箱即用的应用程序架构，在底层的 HTTP Server 框架（Express、 Fastify）之上提供了一定程度的抽象，提供了不同类型服务（中间件、守卫、管道、拦截器）的依赖注入。

相对于 Express、Koa 这样的底层框架来说，用 Nest 作为架构会让项目代码更加清晰，在 Nest 中对路由的处理程序不再全部称为【中间件】，而是根据职能不同分为中间件、守卫、管道、拦截器，不同类型服务的注入方式也各不相同。

## Nuxt

[官网地址](https://www.nuxtjs.cn/)

Nuxt 是 vue 的通用框架，也就是 “框架的框架”，一般用它来实现 vue 项目的 SSR。性能不太好。

## Nest 和 Express、Koa 的区别

Express、Koa 都是底层框架，只是对 node 的 http 模块进行封装，提供了一些更方便的处理方式；Nest 则是提供了一套完整的解决方案，包含了认证、数据库、路由、http 状态码、安全、配置、请求等开箱即用的技术。

Express 和 Koa 没有规范，项目根据开发者喜好不同会有不同的目录结构、实现方式，不利于项目的维护（人员变动时新成员学习成本高）；Nest 有自己的规范，必须遵守规范才能使用它，这样项目之间结构差异不会太大，维护成本相对较低。

## 参考

[Nest.js、egg.js、midway，Express、Koa 的区别](https://blog.csdn.net/csdn_haow/article/details/101512411)
