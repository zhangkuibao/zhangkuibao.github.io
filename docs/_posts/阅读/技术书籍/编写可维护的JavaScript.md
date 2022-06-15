---
date: 2021-12-29 11:06:33
title: 编写可维护的 JavaScript
tags:
  - myGit
  - learning-Notes
  - document
  - 阅读
  - 技术书籍
---

## 编程风格

### 命名

#### 变量

变量名应当总是遵守驼峰大小写命名法，并且命名前缀应当是名词。

```js
var count = 10;
var myName = "Nicholas";
```

#### 函数

函数名前缀应当是动词，以此与变量进行区分。

```js
function getName() {
  return myName;
}
```

一些常用的动词：

| 动词 |    含义    |
| :--: | :--------: |
| can  | 返回布尔值 |
| has  | 返回布尔值 |
|  is  | 返回布尔值 |
| get  |   获取值   |
| set  |   保存值   |

#### 常量

常量应使用大写字母和下划线来命名，用下划线分割单词。

```js
const MAX_COUNT = 10;
```

#### 构造函数

构造函数命名遵照大驼峰命名法。

```js
class Person() {
  // ...
}
```

### 注释

注释之前应当加一行空格以提高可读性。

#### 单行注释

单行注释不应当以连续多行的形式出现，这时应使用多行注释。

```js
// 好的写法
if (condition) {
  // 注释之前加一行空格提高可读性
  allowed();
}
```

#### 多行注释

```js
/*
 * 第一行空出来，从第二行开始写文本
 * 星号与文本之间空一格
 * 注意缩进
 */
```

#### 文档注释

给方法添加 `JavaDoc` 风格的文档注释，可以让协同开发者更方便的了解方法的功能。

```js
/**
 * 根据姓名获取年龄
 * @param {string} name
 * @return {number} age
 */
function getAgeByName(name) {
  return userMap[name].age;
}
```

应当给一下内容添加注释：

- 所有的方法，对方法期望的参数和可能的返回值添加注释描述。
- 所有的构造函数，对自定义类型和期望的参数添加注释描述。

## 编程实践

### 变量初始化

#### null

理解 `null` 的最好方式是将它当做**对象的占位符**。

在下列场景中应当使用 `null`：

- 用来初始化一个变量，这个变量可能赋值为一个对象。
- 当函数的返回值期望是对象时，缺省值应为 `null`。
- 当函数的参数期望是对象时，缺省值应为 `null`。

#### undefined

避免在代码中使用 `undefined`，因为这个值没有明确的语义：

- 所有没有初始化的变量都以 `undefined` 作为初始值。
- 对定义但未赋值的变量使用 `typeof` 操作符会返回 `"undefined"`。
- 对未定义的变量使用 `typeof` 操作符会返回 `"undefined"`。

```js
var person;
console.log(typeof person); // "undefined"
console.log(typeof foo); // "undefined"
```

### UI 层的松耦合

如果一个组件的逻辑被修改，另一个组件的逻辑也需要修改，这两个组件就形成了紧耦合。

紧耦合会带来维护困难的问题，你绝对希望开发人员在修改某部分代码时不会破坏其他人的代码。

- `JavaScript` 与 `CSS` 解耦

`js` 不应当直接操作样式，而是通过添加删除元素的 `className` 来控制元素的样式。

- `JavaScript` 与 `HTML` 解耦

直接在 `HTML` 中绑定事件是一种紧耦合的做法，不推荐。

```html
<!-- 不好的写法 -->
<button onclick="doSomething()"></button>
```

在 `js` 文件中绑定事件的好处是事件处理程序、事件绑定都是在一个文件中完成的，方便维护。

### 事件处理

处理事件时应当分为事件处理程序和应用逻辑程序，处理程序处理交互、提取信息，应用逻辑处理行为。

处理事件时，最好让事件处理程序成为唯一接触 `event` 对象的函数。

- 不好的实例代码：

```js
function handleClick(event) {
  var popup = document.getElementById("popup");
  popup.style.left = event.clientX + "px";
  popup.style.top = event.clientY + "px";
}
addListener(element, "click", handleClick);
```

- 好的实例代码：

```js
var MyApplication = {
  handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.showPopup(event.clientX, event.clientY);
  },
  showPopup(x, y) {
    var popup = document.getElementById("popup");
    popup.style.left = x + "px";
    popup.style.top = y + "px";
  },
};
addListener(element, "click", function (event) {
  MyApplication.handleClick(event);
});
```

这样的事件处理函数可以执行但不是最佳方法。

#### 隔离应用逻辑

应用逻辑是和应用相关的功能性代码，不应该和用户行为相关，将应用逻辑从事件处理程序中抽离是更好的做法。

抽离应用逻辑的优点：

- 应用逻辑可被复用，如：点击事件和键盘事件触发同样的应用逻辑。

- 方便测试，测试时需要直接触发功能代码，而不必通过与元素交互来触发。

#### 不要分发事件对象

应用逻辑不应当依赖于 `event` 对象：

- 应用逻辑应该只接收自己需要的参数，通常它只用到了 `event` 上的一部分数据。
- 如果应用逻辑接收整个 `event` 对象作为参数在测试时必须创建一个 `event` 对象传给它，而且并不清楚 `event` 上哪些东西是有用的。

### 抽离配置数据

配置数据就是应用中写死的（`hardcoded`），且将来有可能被修改的数据：
- URL。
- 展现给用户的字符串。
- 重复出现的值。
- 任何可能发生变更的值。

配置数据最好放在单独的文件中，以便清晰地分隔数据和应用逻辑。

### 主动抛出错误

在合适的地方抛出错误能大大降低调试成本。

主动抛出错误时要解释清楚到底哪里出错了。