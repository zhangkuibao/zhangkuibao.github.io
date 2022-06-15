---
title: devServer
tags:
  - myGit
  - learning-Notes
  - document
  - technology
  - webpack
  - 配置
---

## 作用

配置开发服务器

如果你碰到了问题，将路由导航至 /webpack-dev-server 将会为你展示服务文件的位置。例如： http://localhost:9000/webpack-dev-server。

## 可配置项

```js
type DevServer = {
  before: (app, server, compiler) => void; // 提供自定义中间件，当 devServer 服务器内部的 所有中间件执行完成之前执行
  after: (app, server, compiler) => void; // 提供自定义中间件，当 devServer 服务器内部的 所有中间件执行完成之后执行
  allowedHosts: string[]; // 可访问开发服务器的域名白名单
  compress: boolean; // 为每个静态文件开启gzip压缩
  publicPath: string; // 配置静态文件的路径
  contentBase: string; // 配置静态文件的路径，优先级低于publicPath，path.join(__dirname, 'public')
  headers: object; // 为所有请求添加请求头
  historyApiFallback: boolean | object; // 开启后当使用history API时所有404请求都会响应index.html的内容，传递对象可进行细粒度配置
  host: string; // 配置域名
  port: number; // 配置端口号
  hotOnly: boolean; // 开启模块热替换
  https: boolean | { key: file; cert: file; ca: file }; // 开启https，可传入自己的证书（对象）
  index: string; // 设置index文件的文件名
  lazy: boolean; // 开启懒加载，开启后开发服务器仅在收到请求时才进行编译，这意味着 webpack 将不会监视任何文件更改。
  open: boolean; // 服务启动后自动打开浏览器
  openPage: string; // 指定打开浏览器时的默认页面
  overlay: boolean; // 默认情况下编译出错时会在浏览器中全屏覆盖，设置为true则只在编译器显示
  proxy: { [proxyUrl: string]: stirng }; // 服务代理
  useLocalIp: boolean; // 开启后可用本地IP访问
  writeToDisk: boolean; // 将产生的文件写入硬盘，写入位置为output.path配置的目录
};
```

### proxy

https://webpack.docschina.org/configuration/dev-server/#devserverproxy

对 /api/users 的请求会将请求代理到 http://localhost:3000/api/users。

```js
module.exports = {
  devServer: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
};
```

如果不希望传递/api，则需要重写路径：

```js
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
```
