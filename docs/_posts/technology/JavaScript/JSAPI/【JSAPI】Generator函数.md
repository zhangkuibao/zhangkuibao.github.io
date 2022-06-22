---
date: '2021-09-08 18:06:16'
title: 【JSAPI】Generator函数
tags:
  - JavaScript
  - JSAPI
---

## Generator 函数的特性

`Generator` 函数的返回值为一个 `Iterator` 对象，需要手动调用 `next` 方法让函数执行

`Generator` 的 `yield` 表达式等于为 `js` 提供了手动的惰性求值功能

`Generator` 函数是分段执行的，`yield` 表示暂停，`next` 表示恢复执行

调用 `Generator` 函数，返回一个遍历器对象

`Generator` 函数从暂停状态到恢复运行，它的**上下文状态（context）是不变的**。通过 `next` 方法的参数，就有办法在 `Generator` 函数开始运行之后，继续向函数体内部注入值

`Generator` 是实现状态机的最佳结构。

```js
function* dataConsumer() {
  console.log("Started");
  console.log(`1. ${yield 111}`);
  console.log(`2. ${yield 222}`);
  return 333;
}

let g = dataConsumer();

g.next(1); // 参数无效，打印Started，返回值为{value: 111, done: false}
g.next(2); // 参数传递给上一个yield表达式，打印1.2，返回值为{value: 222, done: false}
g.next(3); // 参数传递给上一个yield表达式，打印1.3，返回值为{value: 333, done: false}
```

第一次执行 `next` 返回对象的 `value` 为第一个 `yield` 右侧的表达式运行结果，这时的参数是无效的

第二次执行 `next` 返回对象到 `value` 为第二个 `yield` 右侧的表达式运行结果，这时 `next` 的参数会作为第一个 `yield` 表达式的返回值

第三次执行 `next` ，此时已经没有 `yield` 关键字了，返回对象的 `value` 为 `"result"`，这时 `next` 的参数会作为第二个 `yield` 表达式的返回值

此后执行 `next` 的返回值皆与第三次相同

### yield 表达式

- 右侧表达式
  右侧表达式的值会作为每次调用 next 方法后返回对象的 value 值
- 返回值
  yield 表达式的返回值为**下一次**调用 next 方法时的参数

### next 方法

- 参数
  `next` 的参数会被当做**上一个** `yield` 表达式的返回值，所以在第一次使用 `next` 方法时，传递参数是无效的，从语义上讲，第一个 next 方法用来启动遍历器对象，所以不用带有参数

### return 表达式

运行到最后一个 `yield` 之后再调用 `next` 方法，返回对象的 `value` 就是 `return` 的值，同时返回对象的 `done` 变为 `true`

### yield\* 表达式

用于在一个 `Generator` 函数里面执行另一个 `Generator` 函数

从语法角度看，如果 `yield` 表达式后面跟的是一个遍历器对象，需要在 `yield` 表达式后面加上星号，表明它返回的是一个遍历器对象

```js
function* g1() {
  yield "g1_1";
  yield "g1_2";
  yield "g1_3";
}

function* g2() {
  yield "g2_1";
  yield* g1();
  yield "g2_2";
}

let a = g2();
a.next(); // g2_1
a.next(); // g1_1
a.next(); // g1_2
a.next(); // g1_3
a.next(); // g2_2

[...g2()]; // ["g2_1", "g1_1", "g1_2", "g1_3", "g2_2"]
```

## Generator 函数与 for...of 循环

`for...of` 循环可以自动遍历 `Generator` 函数运行时生成的 `Iterator` 对象，且此时不再需要调用 `next` 方法

`for...of` 循环时直接遍历 `yield` 返回的值，一旦 `next` 方法返回对象的 `done` 为 `false` 就立即停止且不包含该返回对象，所以 `return` 的值不会被遍历出来

```js
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5
```
