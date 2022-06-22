---
date: '2021-09-08 18:08:13'
title: 【JSAPI】Iterator接口
tags:
  - JavaScript
  - JSAPI
---

遍历器是一种接口，为各种不同的数据结构提供统一的访问机制；任何数据结构只要部署 `Iterator` 接口，就可以用 `for...of` 进行遍历

## 原生具有 Iterator 接口的数据结构

- Array
- Map
- Set
- String
- TypedArray
- 函数的 arguments 对象
- NodeList 对象

## object 为什么没有 Iterator 接口

`object` 属性的遍历顺序是不确定的，需要开发者自己定义。本质上，遍历器是一种线性处理，对于任何非线性的数据结构，部署遍历器接口，就等于部署一种线性转换。

## 给其他数据结构添加 Iterator 接口

### 对象

#### 普通方法

```js
let obj = {
  a: 1,
  b: 2,
  [Symbol.iterator]() {
    let keys = Object.keys(this);
    let index = 0;
    return {
      next: function() {
        return index < keys.length
          ? {
              value: keys[index++],
              done: false,
            }
          : {
              value: undefined,
              done: true,
            };
      },
    };
  },
};
```

#### Generator 函数

```js
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);

  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

let jane = { first: "Jane", last: "Doe" };

for (let [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}
```

或者直接添加到对象的 `Symbol.iterator` 上

```js
function* objectEntries() {
  let propKeys = Object.keys(this);

  for (let propKey of propKeys) {
    yield [propKey, this[propKey]];
  }
}

let jane = { first: "Jane", last: "Doe" };

jane[Symbol.iterator] = objectEntries;

for (let [key, value] of jane) {
  console.log(`${key}: ${value}`);
}
```

也可以直接加在`Object.prototype`上

```js
Object.prototype[Symbol.iterator] = function* objectEntries() {
  let propKeys = Object.keys(this);

  for (let propKey of propKeys) {
    yield [propKey, this[propKey]];
  }
};
```

### 类数组

对于类似数组的对象（存在数值键名和 length 属性），`Symbol.iterator` 可以直接引用数组的 `Iterator` 接口

```js
let obj = {
  0: "a",
  1: "b",
  length: "2",
  [Symbol.iterator]: [][Symbol.iterator],
};
```

## 用 Generator 函数添加 Iterator 接口

```js
let myIterable = {
  [Symbol.iterator]: function*() {
    yield 1;
    yield 2;
    yield 3;
  },
};
[...myIterable]; // [1, 2, 3]

// 或者采用下面的简洁写法

let obj = {
  *[Symbol.iterator]() {
    yield "hello";
    yield "world";
  },
};

for (let x of obj) {
  console.log(x);
}
// "hello"
// "world"
```

## 调用 Iterator 接口的场合

- 数组和 Set 结构进行解构赋值时，会默认调用 Symbol.iterator 方法

- 扩展运算符（...）也会调用默认的 Iterator 接口。

- yield\*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。

```js
let generator = function*() {
  yield 1;
  yield* [2, 3, 4];
  yield 5;
};

var iterator = generator();

iterator.next(); // { value: 1, done: false }
iterator.next(); // { value: 2, done: false }
iterator.next(); // { value: 3, done: false }
iterator.next(); // { value: 4, done: false }
iterator.next(); // { value: 5, done: false }
iterator.next(); // { value: undefined, done: true }
```

- for...of
- Array.from()
- Map(), Set(), WeakMap(), WeakSet()（比如 new Map([['a',1],['b',2]])）
- Promise.all()
- Promise.race()

## return() 与 throw()

自己实现 `Iterator` 接口时，`next()` 是必须部署的，`return()` 和 `throw()` 是否部署是可选的

`return()`：如果 `for...of` 循环提前退出（出错或 break），就调用 `return()`

`throw()`：配合 `Generator` 函数使用

## 与 for...of 的关系

用 `for...of` 遍历数据时会自动去寻找该数据的 `Iterator` 接口，即该数据上的 `Symbol.iterator` 属性
