---
date: '2021-09-09 14:54:16'
title: 【JavaScript】跨域解决方案
tags:
  - JavaScript
---

## 关于跨域

跨域问题只会出现在浏览器环境中，因为浏览器用同源策略来保证客户端的安全。

**单纯靠前端是无法实现跨域的**

跨域问题的关键在于，在哪些域能跨域访问你服务器这件事上，只有服务器端才是权威的。所以任何跨域的解决方案，都必须要向服务器拿授权列表。

### 技术跨域

1. 服务器由自己控制：CORS
2. 服务器不由自己控制：代理服务

### 浏览器跨域

解决不了问题就解决提出问题的人。。。

1. 关闭浏览器的安全检测，chrome：-disable-web-security
2. 浏览器插件

## 跨域方法

### jsonp

前后端约定统一的回调函数名称，前端在页面中定义该函数，函数的参数就是接口返回数据，后端则需要在接收该请求后将数据传递给该函数，并将整个函数返回

#### 原理

1. `<script>` 标签的 `src` 属性不受同源策略限制，可以访问不同域的资源，把这个标签插入页面后，标签内的 `js` 代码会被执行
2. 在需要跨域请求的页面定义好回调函数，参数作为接口返回值去进行处理
3. 前端动态创建 `<script>` 标签请求接口

#### 缺陷

只能发送 get 请求

### CORS

服务端允许跨域

#### nginx

```conf
location / {
     if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Credentials' true;
        #
        # Custom headers and headers various browsers *should* be OK with but aren't
        #
        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
        #
        # Tell client that this pre-flight info is valid for 20 days
        #
        add_header 'Access-Control-Max-Age' 1728000;
        add_header 'Content-Type' 'text/plain; charset=utf-8';
        add_header 'Content-Length' 0;
        return 204;
     }
     if ($request_method = 'POST') {
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
        add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
     }
     if ($request_method = 'GET') {
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
        add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
     }
}
```

#### ExpressJS

```js
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function(req, res, next) {
  // Handle the get for this route
});

app.post("/", function(req, res, next) {
  // Handle the post for this route
});
```

### 服务器代理

通过服务端代理到相同的域名下

## 跨域下载资源

浏览器中经常有下载资源（图片、文件）的需求，对于同源的资源很好解决，但是如果资源在其他服务器、域名下，就会有跨域问题，导致资源无法下载。

- 后端下载资源

可以在后台将需要下载的资源请求回来（后台请求没有跨域问题），处理后返回前端实现跨域资源下载。
