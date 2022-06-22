---
title: 【React】元素渲染
tags:
  - JavaScript
  - React
date: '2022-03-08 22:50:04'
---

1. `React` 元素是不可变对象，一旦创建就无法修改子元素或属性，它代表了某个特定时刻的UI，`React DOM` 负责更新 `DOM` 与 `React` 元素保持一致
2. 想要将一个 `React` 元素渲染到根 `DOM` 节点中，只需把它们一起传入 `ReactDOM.render()`
3. `React` 只更新需要更新的部分

```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```
