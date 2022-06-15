---
date: 2021-09-09 10:03:07
title: JSX 语法
tags:
  - myGit
  - learning-Notes
  - document
  - technology
  - React
---

`JSX` 是 `React` 中的语法糖,用于在 `js` 中使用 `html` 标记

`JSX`也是表达式, 在编译之后, `JSX`表达式会被转为普通 `JavaScript` 函数调用, 并且对其取值后得到 **`JavaScript` 对象**。

因为 `JSX` 语法上更接近 `JavaScript` 而不是 `HTML`, 所以 `React DOM` 使用 `camelCase`（小驼峰命名）来定义属性的名称

`React DOM` 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。

`Babel` 会把 `JSX` 转译成一个名为 `React.createElement()` 的函数调用。

## 在 JSX 中嵌入表达式

```js
const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>;

const getA = () => 100 + 99;
const element = <h1>Hello, {name + getA()}</h1>; // JSX语法中可以在大括号内放置任何有效的js表达式

ReactDOM.render(
  element, // 最终显示为 Hello, Josh Perez
  document.getElementById("root")
);
```

## js 表达式中编写 jsx

```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

## `JSX` 属性

注意 `JSX` 中的属性名使用小驼峰命名方式, `class` 为 `className`, `tabindex` 变为 `tabIndex`

```js
// 用引号将属性值指定为字符串字面量
const element = <div tabIndex="0"></div>;

// 用大括号在属性值中插入一个js表达式(大括号外无引号)
const user = "zkb";
const element = <img id={user}></img>;
```

## 子元素

```js
// 一个标签内没有内容(子元素)时， 可以用 `/>` 来闭合标签
const element = <img src={user.avatarUrl} />;

// 有多个子元素时用括号包裹
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

## `JSX` 表示对象(`React.createElement()`)

```js
// 以下示例代码完全等效：
// 1. JSX表达式
const element = <h1 className="greeting">Hello, world!</h1>;

// 2. React.createElement 函数
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);

// 方法2创建了一个类似这样的对象，注意：这是简化过的结构，这个对象呗成为React元素(相当于vue的虚拟节点)
const element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world!",
  },
};
```
