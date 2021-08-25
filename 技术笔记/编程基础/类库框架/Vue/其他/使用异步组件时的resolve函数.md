
# 加载异步组件时的resolve函数

> 见识到了一些没见过的写法, 网上找不到满意的答案, 只好自己找咯, 学习ing++++

## 原代码

```js
const router = new VueRouter({
    routes: [{
        path: '/foo', 
        component: resolve => require(['/foo'], resolve)
    }]
})
```

## 问题

1. `resolve => require(['/foo'], resolve)` 中的 `resolve` 是什么?
2. `require` 的二参是什么?

## 答案
1. `resolve` 函数
```js
var resolve = function (resolvedDef) {
    if (isESModule(resolvedDef)) {
        resolvedDef = resolvedDef.default;
    }
    def.resolved = typeof resolvedDef === 'function' ?
        resolvedDef :
        _Vue.extend(resolvedDef);
    match.components[key] = resolvedDef;
    pending--;
    if (pending <= 0) {
        next();
    }
};
```
2. 模块引入后的回调函数回调函数, 接收一参引入的模块作为参数, 引入多个模块时以多参而非数组形式传递

## 探寻步骤
1. 在 `component` 中打印 `resolve`, 发现其值是 `node_modules\_vue-router@3.3.4@vue-router\dist\vue-router.esm.js` 文件中 `once` 函数返回的匿名函数

```js
// 确保函数只执行一次
function once(fn) {
  var called = false;
  return function () {
    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];

    if (called) {
      return
    }
    called = true;
    return fn.apply(this, args)
  }
}
```

2. 在 `vue-router.esm.js` 文件中找到 `once` 函数及调用 `once` 的 `resolveAsyncComponents` 函数

`resolveAsyncComponents` 函数代码片段
```js
var resolve = once(function (resolvedDef) {
    if (isESModule(resolvedDef)) {
        resolvedDef = resolvedDef.default;
    }
    def.resolved = typeof resolvedDef === 'function' ?
        resolvedDef :
        _Vue.extend(resolvedDef);
    match.components[key] = resolvedDef;
    pending--;
    if (pending <= 0) {
        next();
    }
});

var reject = once(function (reason) {
    var msg = "Failed to resolve async component " + key + ": " + reason;
    process.env.NODE_ENV !== 'production' && warn(false, msg);
    if (!error) {
        error = isError(reason) ?
            reason :
            new Error(msg);
        next(error);
    }
});
```

3. 可以看出最开始问题中的 `resolve` 函数就是上述代码中 `once` 函数中的匿名函数, 即: 
```js
var resolve = function (resolvedDef) {
    if (isESModule(resolvedDef)) {
        resolvedDef = resolvedDef.default;
    }
    def.resolved = typeof resolvedDef === 'function' ?
        resolvedDef :
        _Vue.extend(resolvedDef);
    match.components[key] = resolvedDef;
    pending--;
    if (pending <= 0) {
        next();
    }
};

var reject = function (reason) {
    var msg = "Failed to resolve async component " + key + ": " + reason;
    process.env.NODE_ENV !== 'production' && warn(false, msg);
    if (!error) {
        error = isError(reason) ?
            reason :
            new Error(msg);
        next(error);
    }
};
```

## 结论

1. 最开始问题里的 `resolve` (注意 `resolve` 只是形参) 是 `vue-router` 返回的方法, 只执行一次, 用于(挂载组件?), 接收 `require` 引入的模块为参数

2. `require` 的一参为要引入的模块, 为多个时用数组形式传入, 二参为引入完成后的回调函数, 该回调函数的参数为一参引入的模块, 多个模块时为多个参数而不是数组

- 改写为以下形式也可执行
```js
const router = new VueRouter({
    routes: [{
        path: '/foo', 
        component: mount => require(['/foo'], (mod) => {
            mount(mod);
        })
    }]
})
```