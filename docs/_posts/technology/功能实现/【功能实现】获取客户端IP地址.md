---
date: 2022-02-23 14:29:53
title: 【功能实现】获取客户端IP地址
tags:
  - 功能实现
---

## 前端获取

前端无法获取用户 IP，但是能通过后端接口实现，这里借助搜狐的 api 获取 ip 信息。

```js
async function getIp() {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = "http://pv.sohu.com/cityjson?ie=utf-8";
    script.onload = function () {
      resolve(returnCitySN);
      document.body.removeChild(script);
    };
    script.onerror = function (err) {
      reject(err);
    };
    document.body.appendChild(script);
  });
}

getIp().then((res) => {
  console.log(res);
});
```

## NodeJS 获取

```js
const os = require("os");
function getIPAdress() {
  var interfaces = os.networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      ) {
        return alias.address;
      }
    }
  }
}
```
