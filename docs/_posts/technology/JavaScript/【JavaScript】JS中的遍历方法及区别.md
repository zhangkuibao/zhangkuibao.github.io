---
date: '2021-09-08 18:17:33'
title: 【JavaScript】JS中的遍历方法及区别
tags:
  - JavaScript
---

## 遍历方法

### for 循环

```js
for (var index = 0; index < myArray.length; index++) {
  console.log(myArray[index]);
}
```

### Array 的 forEach 等方法

无法中途跳出循环

```js
[1, 2, 3].forEach((value, index) => {});
```

### for...in

- 可以中途退出
  for...in 循环有几个缺点：
- 数组的键名是数字，但是 for...in 循环是**以字符串作为键名**“0”、“1”、“2”等等。
- for...in 循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
- 某些情况下，for...in 循环会以任意顺序遍历键名。

```js
for (var index in myArray) {
  console.log(myArray[index]);
}
```

### for...of

- 遍历的对象为键对应的值
- 可以中途退出

## 区别

### for...of 和 for...in 区别

for..in 迭代的是对象的**键**的列表，而 for..of 则迭代对象的**键对应的值**。

for...of 只能遍历实现了 `Iterator` 接口的数据结构，object 上默认没有实现这个接口，所以无法用 for...of 遍历。

```js
let list = [4, 5, 6];

for (let i in list) {
  console.log(i); // "0", "1", "2",
}

for (let i of list) {
  console.log(i); // "4", "5", "6"
}
```
