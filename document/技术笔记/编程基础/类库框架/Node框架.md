<author-info date="1630899434153"></author-info>

# Node 框架

## express

[官网地址](https://www.expressjs.com.cn/)

可以快速构建服务端 web 应用程序的底层框架，核心是编写路由处理请求以及利用中间件实现功能，有一些内置的中间件。

## koa

[官网地址](https://koa.bootcss.com/)

koa 是由 Express 原班人马打造的，使用方法和 API 与 express 相似，它没有内置中间件，所以体积更小；在 koa 中可以使用高级语法，也属于底层框架。

## nuxt

[官网地址](https://www.nuxtjs.cn/)

nuxt 是 vue 的通用框架，也就是 “框架的框架”，一般用它来实现 vue 项目的 SSR。性能不太好。

## nest 和 express、koa 的区别

express、koa 都是底层框架，只是对 node 的 http 模块进行封装，提供了一些更方便的处理方式；nest 则是提供了一套完整的解决方案，包含了认证、数据库、路由、http 状态码、安全、配置、请求等开箱即用的技术。

express 和 koa 没有规范，项目根据开发者喜好不同会有不同的目录结构、实现方式，不利于项目的维护（人员变动时新成员学习成本高）；nest 有自己的规范，必须遵守规范才能使用它，这样项目之间结构差异不会太大，维护成本相对较低。

## 参考

[nest.js、egg.js、midway，express、koa 的区别](https://blog.csdn.net/csdn_haow/article/details/101512411)
