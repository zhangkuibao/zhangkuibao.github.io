---
date: 2021-09-09 14:42:47
title: post 和 get 的区别
tags:
  - 网络
  - http协议
---

## post 和 get 的实质

HTTP 是基于 TCP/IP 的关于数据如何在万维网中如何通信的协议。所以 GET 和 POST 的底层也是 TCP/IP，也就是说，GET/POST 都是 TCP 链接。GET 和 POST 能做的事情是一样一样的。你要给 GET 加上 request request body，给 POST 带上 url 参数，技术上是完全行的通的。

## post 和 get 的区别

### 作为浏览器路径 url

浏览器地址栏中输入 url，其请求类型都是 get，因此一些浏览器特性只能适应于 get 请求，如：

1. 保存为书签
2. url 的参数会完整的保存在历史记录中
3. 前进、后退时 get 默认读取缓存，而 post 会重新请求

### 缓存

GET 会被缓存，而 post 不会，除非手动设置

当浏览器发送一个 get 请求，会返回数据并把数据缓存下来，这次的响应状态码是 200，再次请求时，浏览器会直接从缓存中取出数据而不会真正的发送请求到服务器，此时的响应状态码是 304。

可以在 get 请求后面加上服务端不会处理的参数如时间戳来保证每个请求的独立性从而正确获取数据。

### 传参方式

参数有两种传递方式：querystring 即直接拼接在 url 后面，request body 将请求数据放在请求体中。

querystring 只支持 urlencode 编码，request body 支持多种编码

可以在 get 方法中使用 request body 方式传参也可以给 post 方法通过 querystring 方式传参，具体处理方式得看服务端是如何实现的

在 post 方式中添加 querystring 一定是可以接收的到，但是在 get 方式中加 request body 参数就不一定能成功接收到了。

### 参数长度

querystring 有 长度限制。http 协议对于 url 的长度没有限制，对 url 的长度限制来自浏览器及服务器（防止过长 url 造成的服务器资源损耗）

放在 request body 中的请求参数没有长度限制。

### 安全性

http 请求都是明文传输，所以两种传参方式其实都不安全，区别在于 post 请求参数不会在 url 上被劫持
