<author-info date="1631169736213"></author-info>

# http 协议传参及后端参数解析方式

传参方式并不受请求类型的影响（post，get），get 请求也可以传递请求体参数（body），post 请求也可以传递查询参数（query）。

## 请求头参数（header）

将参数携带在 header 中 `[Accept-field]: [Accept-value]`

注意如果是跨域访问的话需要在服务端响应头设置“允许的 header 类型” `Access-Control-Allow-Headers`

### 传参

```js
$.ajax({
  headers: {
    abc: "ddd",
  },
});
```

### 后台解析

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let params = req.headers["abc"];
});
app.post("/", (req, res) => {
  let params = req.headers["abc"];
});
```

## 路径参数（params）

跟在路径后面，用 / 分隔

### 传参

```js
$.ajax({
  url: "http://localhost:3000/999",
});
```

### 后台解析

```js
const express = require("express");
const app = express();

app.post("/:num", (req, res) => {
  let params = req.params["num"];
});

app.post("/:num", (req, res) => {
  let params = req.params["num"];
});
```

## 查询参数（query）

在请求路径后加上 ? 并使用 & 分隔参数

### 传参

```js
$.ajax({
  url: "http://localhost:3000?name=zkb&age=17",
});
```

### 后台解析

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let params = req.query["name"];
  let params = req.query["age"];
});
app.post("/", (req, res) => {
  let params = req.query["name"];
  let params = req.query["age"];
});
```

## 请求体参数 （body）

服务器会先根据请求头中的 Content-Type 获取其格式，然后再根据其格式进行解析

### 传参

```js
$.ajax({
  url: "http://localhost:3000",
  data: {
    namg: "zkb",
  },
});
```

### 后台解析

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let params = req.body["name"];
  let params = req.body["age"];
});
app.post("/", (req, res) => {
  let params = req.body["name"];
  let params = req.body["age"];
});
```
