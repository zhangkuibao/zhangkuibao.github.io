---
date: 2021-09-08 18:08:48
title: Set 和 Map 类型
tags:
  - myGit
  - learning-Notes
  - document
  - 技术
  - JavaScript
  - JS内置对象
---

## Set

### 特性

`Set` 数据结构类似于数组，但是其成员的值都是唯一的，没有重复的值，可用于去重字符串和数组

`Set` 构造函数可接收一个数组活具有 `iterable接口` 的其他数据结构作为参数进行初始化

向 `Set` 加入值的时候不会发生类型转换，所以 `5` 和 `'5'` 是两个不同的值，`Set` 内的相等判断类似 `===` ，区别在于 `Set` 认为 `NaN` 等于自身

### 实例方法

`Set.prototype.add(value)` 添加某个值，返回 Set 结构本身
`Set.prototype.delete(value)` 删除某个值，返回一个布尔值，表示删除是否成功
`Set.prototype.has(value)` 返回一个布尔值，表示该值是否为 Set 的成员
`Set.prototype.clear()` 清除所有成员，没有返回值
`Set.prototype.keys()` 返回键名的遍历器， set 结构没有键名，或者说是键名和键值是同一个值，所以 keys 和 values 方法的行为完全一致
`Set.prototype.values()` 返回键值的遍历器
`Set.prototype.entries()` 返回键值对的遍历器
`Set.prototype.forEach()` 使用回调函数遍历每个成员，与数组的 forEach 方法相同

### 实例属性

`Set.prototype.size` 返回 Set 实例的成员总数。

## WeakSet

`WeakSet` 与 `Set` 类似

### 与 Set 的区别

`WeakSet` 的成员只能是**对象**，不能是其他类型的值
`WeakSet` 中的对象都是弱引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存
ES6 规定 `WeakSet` 不可遍历

## Map

传统的对象只接收字符串作为键名，非字符串会被自动转换，`Map` 可以接收所有类型的值当做键

```js
const m = new Map([
  ["name", "zkb"],
  ["title", "gg"],
]); // 构造函数可接收一个数组作为参数，数组的成员是一个个表示键值对的数组
const m1 = new Map(new Set(["name", "zkb"], ["title", "gg"])); // 利用Set来生成新的Map，任何具有iterator接口且每个成员都是双元素的数组的数据结构都可作为Map构造函数的参数
```

### 特性

只有对同一个对象的引用 `Map` 才将其视为同一个键

`undefined` 和 `null` 是两个不同的键，虽然 `NaN` 不严格等于自身，但 `Map` 将其视为同一个键

### 实例方法

`Map.prototype.set(key,value)` 设置键名 key 对应的值 value，然后返回整个 Map 结构，如果 key 已经有值则覆盖，没有则新建
`Map.prototype.get(key)` 读取 key 对应的键值，找不到 key 则返回 undefined
`Map.prototype.has(key)` 返回一个布尔值，表示某个键是否在当前 Map 对象中
`Map.prototype.delete(key)` 删除某个键，成功返回 true，失败返回 false
`Map.prototype.clear()` 清除所有成员，没有返回值
`Map.prototype.keys()` 返回键名的遍历器。
`Map.prototype.values()` 返回键值的遍历器。
`Map.prototype.entries()` 返回所有成员的遍历器。
`Map.prototype.forEach()` 遍历 Map 的所有成员。

## WeakMap

`WeakMap` 与 `Map` 类似

### 与 Map 的区别

只接收对象作为键名（null 除外），不接受其他类型的值作为键名， WeakMap 的键名所指向的对象不计入垃圾回收机制
