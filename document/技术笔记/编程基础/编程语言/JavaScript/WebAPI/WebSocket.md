<author-info date="1636957533713"></author-info>

# Websocket

## 介绍

http 协议通信只能由客户端发起，这意味着服务器无法主动推送消息给客户端，以往对于这种需求是通过客户端轮询请求来解决的。

轮询请求就像是大水漫灌，会造成资源浪费，服务器数据未更新之前所有的请求都是无效请求。

在这种情况下，websocket 应运而生，它最大的特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。

## 特点

1. 建立在 TCP 协议之上，服务器端的实现比较容易。

2. 与 HTTP 协议有着良好的兼容性。默认端口也是 80 和 443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。

3. 数据格式比较轻量，性能开销小，通信高效。

4. 可以发送文本，也可以发送二进制数据。

5. 没有同源限制，客户端可以与任意服务器通信。

6. 协议标识符是 ws（如果加密，则为 wss），服务器网址就是 URL。

![https&wss](/src/https&wss.jpg)

## 应用

### client 客户端

- WebsocketBaseService.js

封装 websocket

```js
let socket = null;
let maxReconnectionTime = 10;
let reconnectionTime = 0;
let reconnectionTimmer = null;
let messageListener = () => {};

export function initWebsocket(options) {
  if (!options.url) {
    console.log("ws地址有误");
    return;
  }

  function reconnection() {
    if (reconnectionTime < maxReconnectionTime) {
      reconnectionTimmer = setTimeout(() => {
        reconnectionTime++;
        createWebsocket();
      }, 3000);
    }
  }
  function createWebsocket() {
    socket = new WebSocket(options.url);
    if (typeof options.messageHandler === "function") {
      messageListener = options.messageHandler;
    }
    // Connection opened
    socket.addEventListener("open", function () {
      console.log("websocket连接成功", options.url);
      clearTimeout(reconnectionTimmer);
      reconnectionTime = 0;
    });

    socket.addEventListener("message", function (event) {
      messageListener(JSON.parse(event.data));
    });

    socket.addEventListener("error", function (event) {
      // console.log("Message from server ", event.data);
      console.log("error", event);
    });

    socket.addEventListener("close", function (event) {
      console.log("close", event);
      reconnection();
    });
  }

  createWebsocket();
}

export function sendData(data) {
  socket.send(data);
}
```

- index.js

在需要的地方应用，传入 `url` 和 `messageHandler`

```js
import { initWebsocket } from "./WebsocketBaseService";

initWebsocket({
  url: "ws://localhost:3001",
  messageHandler(event) {
    // todo...
  },
});
```

### server 服务端

在 node 中使用 `nodejs-websocket` 搭建 websocket 服务

安装 `nodejs-websocket`，文档地址：`https://www.npmjs.com/package/nodejs-websocket`

```
npm i nodejs-websocket
```

- WebsocketService.js

封装 websocket 服务

```js
let ws = require("nodejs-websocket");
let port = 3000;
let server;
let websocketUrl = "ws://localhost:";
let serverConnection = false;

exports.initWebsocket = function () {
  return new Promise((resolve) => {
    function websocketConnection() {
      websocketUrl += port;
      serverConnection = true;
      resolve(websocketUrl);
    }

    function reconstruction() {
      port++;
      createServer();
    }

    function createServer() {
      server = ws
        .createServer(function (conn) {
          console.log("New connection", server.connections.length);
          conn.on("text", function (str) {
            console.log("Received " + str);
            conn.sendText(str.toUpperCase() + "!!!");
          });
          conn.on("close", function (code, reason) {
            console.log("Connection closed");
          });

          conn.on("error", function (code, reason) {
            console.log("Connection error");
          });
        })
        .listen(port, "", websocketConnection);

      server.on("error", reconstruction);
    }
    createServer();
  });
};

function broadcast(server, msg) {
  // 给所有客户端发送消息
  server.connections.forEach(function (conn) {
    conn.sendText(msg);
  });
}

exports.sendData = function (data) {
  broadcast(server, JSON.stringify(data));
};
```

- index.js

启动 ws 服务

```js
let { initWebsocket } = require("../service/WebsocketService");
initWebsocket().then((wsUrl) => {
  console.log(`ws running at: ${wsUrl}`);
});
```

## 参考

[WebSocket 教程](https://www.ruanyifeng.com/blog/2017/05/websocket.html)
