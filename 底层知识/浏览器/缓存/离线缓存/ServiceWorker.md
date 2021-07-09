## 作用

Service Worker 可以使你的应用先访问本地缓存资源，所以在离线状态时，在没有通过网络接收到更多的数据前，仍可以提供基本的功能。

如果网站中注册了 Service Worker 那么它可以拦截当前网站的请求，进行判断（需要编写相应的判断程序），如果需要向服务器发起请求的就转给服务器，如果可以直接使用缓存的就直接返回缓存不再转给服务器。

本质上充当 Web 应用程序（服务器）与浏览器之间的代理服务器（可以拦截全站的请求，并作出相应的动作->由开发者指定的动作），相当于一个 middleware 。

是一个特殊的 worker，所以 worker 的特性对 Service Worker 也适用。

目前只能在 HTTPS 环境下才能使用 Service Worker，因为 SW 的权利比较大，能够直接截取和返回用户的请求，所以要考虑一下安全性问题。

## 特点

- 在页面中注册并安装成功后，运行于浏览器后台，不受页面刷新的影响，可以监听和截拦作用域范围内所有页面的 HTTP 请求。
- 单独的作用域范围，单独的运行环境和执行线程
- 事件驱动型服务线程
- 作用域限制

Service Worker 的注册路径决定了其 scope 默认作用页面的范围。

如果 service-worker.js 是在 /sw/ 页面路径下，这使得该 Service Worker 默认只会收到 页面/sw/ 路径下的 fetch 事件。

如果希望改变它的作用域，可在第二个参数设置 scope 范围。

## 使用限制

- 浏览器限制

在已经支持 serivce workers 的浏览器的版本中，很多特性没有默认开启，需要手动在浏览器中开启对应设置。

- 域名限制

Service Workers 要求必须在 HTTPS 下才能运行。localhost 也被认为是安全源。

- 不能访问 DOM

service worker 在 ServiceWorkerGlobalScope 环境中运行； 这是一个特殊类型的 worker 上下文运行环境，与主运行线程（执行脚本）相独立，同时也没有访问 DOM 的能力。

- 兼容性

cache 兼容性很差，可以使用 polyfill，在使用 Service Worker 前要检查浏览器是否支持。

- 同步限制

同步 API（localStorage）不能在 service worker 中使用

## Service Worker 工作流程

1. 在页面中用 navigator.serviceWorker.register(serviceUrl) 方法注册 Service Worker。
2. 注册成功后 Service Worker 开始在一个特殊的 worker 上下文环境 ServiceWorkerGlobalScope 中运行，同时触发 Service Worker 的 install 事件，可以在这个事件中指定要缓存的资源。
3. 当 oninstall 事件执行完毕后触发自身的 onactivate 事件清除之前的缓存。
4. 这一步后 Service Worker 可以控制当前页面了，下次页面加载时 Service Wroker 会获得完整的控制。

- Service Worker 文件要做的工作

1. 指定要缓存的资源。
2. 指定如何响应资源请求（利用缓存）。

## 生命周期

当用户首次导航至 URL 时，服务器会返回响应的网页。

- 第 1 步：当你调用 register() 函数时， Service Worker 开始下载。
- 第 2 步：在注册过程中，浏览器会下载、解析并执行 Service Worker ()。如果在此步骤中出现任何错误，register() 返回的 promise 都会执行 reject 操作，并且 Service Worker 会被废弃。
- 第 3 步：一旦 Service Worker 成功执行了，install 事件就会激活
- 第 4 步：安装完成，Service Worker 便会激活，并控制在其范围内的一切。如果生命周期中的所有事件都成功了，Service Worker 便已准备就绪，随时可以使用了！

## API

- navigator.serviceWorker.register(url)

注册 Service Worker，url 为 worker 文件路径。

- caches.open(string)

注册一个缓存，参数为名称

- ExtendableEvent.waitUntil(promise)

告诉事件处理程序该事件仍在进行。等参数中的 promise 执行完毕再结束。

## 使用方法

- 注册 Service Worker

用 navigator.serviceWorker.register 注册 worker，一参为 worker 文件路径，二参为对象，可设置 scope 指定想让 Service Worker 控制的子目录。

注意注册的代码需要在页面中加载才会生效，service.js 是 Service Worker 文件。

**index.js**

```js
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/service.js").then(
      (registration) => {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration
        );
      },
      (err) => {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}
```

- 指定要缓存的资源

填充缓存需要用到 cache，cache 是一个 service worker 上的全局对象，它使我们可以存储网络响应发来的资源，并且根据它们的请求来生成 key。

```js
self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open("v1").then(function (cache) {
      return cache.addAll([
        "/index.html",
        "index.js",
        "/assets/assets1.js",
        "/assets/assets2.js",
        "/assets/demo.png",
      ]);
    })
  );
});
```

用 waitUntil 方法确保事件在缓存注册完毕后完成。

caches.open('v1') 用来注册一个叫 v1 的缓存。

cache.addAll([]) 用来注册要缓存的资源列表，参数是一组相对于 origin 的 url 组成的数组。

- 使用缓存资源响应请求

每次任何被 service worker 控制的资源被**请求到**时，都会触发 fetch 事件，这些资源包括了指定的 scope 内的文档，和这些文档内引用的其他任何资源（比如 index.html 发起了一个跨域的请求来嵌入一个图片，这个也会通过 service worker 。）

caches.match(event.request) 允许我们对网络请求的资源和 cache 里可获取的资源进行匹配，查看是否缓存中有相应的资源。这个匹配通过 url 和 vary header 进行，就像正常的 http 请求一样。

在 event 中可以获取到请求的详细信息，event.request.url、event.request.method 等。

```js
this.addEventListener("fetch", function (event) {
  event.respondWith(caches.match(event.request));
});
```

一个更有容错性的响应规则：

Service Worker 接收到请求时先检查缓存，如果缓存中没有则请求服务器资源，如果从服务器拿到资源就返回并把资源存入缓存，如果服务器也没有获取到就可以在 catch 中设置一个默认的文件。

```js
this.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function (cacheRes) {
        return (
          cacheRes ||
          fetch(event.request).then(function (response) {
            return caches.open("v1").then(function (cache) {
              cache.put(event.request, response.clone());
              return response;
            });
          })
        );
      })
      .catch(function () {
        return caches.match("/assets/gallery/myLittleVader.jpg");
      })
  );
});
```

- 更新缓存

当不再有任何已加载页面在使用旧版的 service worker 的时候，新版缓存才会激活。

修改版本号（缓存名称）来实现更新缓存。

```js
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("v2").then(function (cache) {
      return cache.addAll([]);
    })
  );
});
```

- 删除旧缓存

```js
self.addEventListener("activate", function (event) {
  var cacheWhitelist = ["v2"]; // 缓存白名单

  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (cacheWhitelist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});
```

## 参考

[讲讲 PWA](https://segmentfault.com/a/1190000012353473)
