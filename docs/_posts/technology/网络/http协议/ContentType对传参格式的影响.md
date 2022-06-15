---
date: 2021-09-09 14:41:14
title: ContentType 对传参格式的影响
tags:
  - myGit
  - learning-Notes
  - document
  - technology
  - 网络
  - http协议
---

## 传参格式

在 chrome 中观察参数格式会发现有三种情况：`Query String Parameters`、`Form Data`、`Request Payload`，主要是因为 `Content-Type` 与请求方式的不同导致的。

1. `Query String Parameters` 格式：`?key=value&key=value`。

即查询参数（query），参数直接拼接在 `url` 后面。

2. `Form Data` 格式：`{key: value, key: value}` 键值对形式。

请求体参数 （body），`Content-type` 为 `application/x-www-form-urlencoded;charset=utf-8`，参数会以 `Form Data` 的形式(数据为 String 键值对格式)传递给接口。

3. `Request Payload` 格式：`'{key: value, key: value}'`

请求体参数 （body），`Content-type` 为 `application/json;charset=utf-8`，参数需要转化为 `JSON` 格式。

### 上传文件

上传文件时 `Content-type` 为 `multipart/form-data; boundary=----WebKitFormBoundarys9jOoKcA1Kwn9sYS` ，用 `new FormData()` 处理参数。

```js
const formData = new FormData();
formData.append("label", "ID_photo-front");
formData.append("file", document.querySelector("input[type=file]").files[0]);

fetch("http://localhost:3000/upload", {
  method: "POST",
  body: formData,
  processData: false, // data 值是 formdata 对象，不需要对数据做处理
});
```

## Content-Type

`http` 请求头中的配置，告诉服务器参数的格式和编码方式：`Content-Type: [media-type];[charset];boundary`。

原生 `ajax` 请求默认 `Content-Type: text/plain;charset=UTF-8`。

## 参考

[HTTP 请求参数之三种格式](https://segmentfault.com/a/1190000020665242)
