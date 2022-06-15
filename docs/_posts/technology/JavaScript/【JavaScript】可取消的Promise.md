---
title: 【JavaScript】可取消的Promise
tags:
  - JavaScript
---

```js
function observePromiseFactory(affairFunc) {
  let _reject;
  let observe = new Promise((resolve, reject) => {
    _reject = reject;
    if (typeof affairFunc === "function") {
      affairFunc(resolve, reject);
    } else {
      reject("无效事件");
    }
  });
  return {
    observe,
    abort(msg) {
      _reject(msg || "主动取消");
    },
  };
}
```

```js
let p = observePromiseFactory((resolve, reject) => {
  setTimeout(() => {
    resolve("Done");
  }, 3000);
});
setTimeout(() => {
  p.abort();
}, 1000);
p.observe
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });
```
