## 概念

所谓"异步"，简单说就是一个任务不是连续完成的，可以理解成该任务被人为分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段。

## 方法

### 回调函数

```js
$.get("/api/getInfo", {}, (result) => {});
```

容易出现的问题是多层嵌套的回调地狱

```js
$.get("/api/getInfo", {}, (result) => {
  $.get("/api/getUserRole", {}, (roleResult) => {
    $.get("/api/getUserMenu", {}, (menuResult) => {});
  });
});
```

### 事件监听

如 `Vue` 中的 `$on` 和 `$emit`

### 发布/订阅

如 `RxJS` 的 `Observable` 和 `subscribe`

### Promise

`Promise` 不是新的语法功能，而是一种新的写法，允许将回调函数的嵌套改为链式调用

`Promise` 的最大问题是代码冗余，原来的任务被 `Promise` 包装了一下，不管什么操作，一眼看去都是一堆 `then` ，原来的语义变得很不清楚

```js
$.get("/api/getInfo", {})
  .then(() => {
    return $.get("/api/getUserRole", {});
  })
  .then(() => {
    return $.get("/api/getUserMenu", {});
  });
```

### Generator

使用 `Generator` 的一个好处是异步操作看起来写法和同步函数一样

用 `yield` 暂停函数，在异步操作完成后继续执行（`next`）

`Generator` 异步编程的关键在于：在一个异步操作完成之后如何执行下一步

`Generator` 可以作为异步操作的容器。它的自动执行需要一种机制，当异步操作有了结果，能够自动交回执行权，两种方法可以做到这一点：

- `Promise` 对象。将异步操作包装成 `Promise` 对象，用 `then` 方法交回执行权

```js
function asyncFn1() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000, "fn1");
  });
}

function asyncFn2(args) {
  // 该函数的执行依赖于asyncFn1函数的返回值
  return new Promise((resolve) => {
    setTimeout(resolve, 1000, "fn2" + "-" + args);
  });
}

function* gen() {
  let a = yield asyncFn1();
  let b = yield asyncFn2(a);
  console.log(a, b);
}

function run(gen) {
  //  generator自动执行函数
  let g = gen();
  function next(value) {
    let result = g.next(value);
    if (result.done) return;
    result.value.then((res) => {
      next(res);
    });
  }
  next();
}

// console.log(111, run(gen))
```

- 回调函数。将异步操作包装成 Thunk 函数，在回调函数里面交回执行权

```js
function asyncFn1() {
  return (callback) => {
    setTimeout(callback, 1000, "fn1");
  };
}

function asyncFn2(args) {
  return (callback) => {
    setTimeout(callback, 1000, "fn2" + "-" + args);
  };
}

function* gen() {
  let a = yield asyncFn1();
  let b = yield asyncFn2(a);
}

function run(gen) {
  //  generator自动执行函数
  let g = gen();
  function next(value) {
    let result = g.next(value);
    if (result.done) return;
    result.value(next);
  }
  next();
}

run(gen);
```

### async

`async` 是 `Generator` 函数的语法糖

#### async 对 Generagor 的改进

- 内置执行器
  `Generator` 函数的自动执行需要依靠执行器（上面 `Generagor` 章节中的 `run` 函数）

- 更好的语义
  `async` 表示函数里有异步操作，`await` 表示紧跟在后面的表达式需要等待结果

- 普适性
  跟在 `await` 后的可以是任何值（会自动转成立即 `resolved` 的 `Promise` 对象）

- 返回值为 Promise

#### 原理

```js
async function fn(args) {}

// 等同于

function fn(args) {
  return spawn(function* () {
    // spawn 就是 Generator 的自动执行器
    // ...
  });
}
```

`spawn` 函数的实现

```js
function spawn(genF) {
  return new Promise(function (resolve, reject) {
    const gen = genF();
    function step(nextF) {
      let next;
      try {
        next = nextF();
      } catch (e) {
        return reject(e);
      }
      if (next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.value).then(
        function (v) {
          step(function () {
            return gen.next(v);
          });
        },
        function (e) {
          step(function () {
            return gen.throw(e);
          });
        }
      );
    }
    step(function () {
      return gen.next(undefined);
    });
  });
}
```
