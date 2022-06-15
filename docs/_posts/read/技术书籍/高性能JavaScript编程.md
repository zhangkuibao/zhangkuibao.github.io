---
date: 2022-02-28 11:00:50
title: 高性能 JavaScript 编程
tags:
  - 技术书籍
---

作者：Nicholas C.Zakas

出版社：电子工业出版社

## 加载和运行

`js` 会阻塞浏览器执行其他任务，当 `js` 运行时浏览器不会处理其他事情。

当浏览器遇到一个 `<script>` 标签时，会停下来运行此 `js`，然后继续解析页面；如果 `js` 是用 `src` 引入的，浏览器必须先下载外部文件的代码，然后解析并运行此代码，这个过程中页面解析和用户交互是被完全阻塞的。

### 摘要

1. 减少请求 `JS` 文件数量，可通过联合加载的方式用一个 `HTTP` 请求多个 `JS` 文件。
2. 避免前置加载 `<script>` 标签，因为它会阻塞浏览器进程。

### `<script>` 标签的位置

浏览器遇到 `<body>` 标签之前不会渲染页面的任何部分，因此在 `head` 中引入 `<script>` 标签会导致可察觉的延迟。

### 联合加载 js

每个 `HTTP` 请求都会产生额外的性能负担，下载一个 `100KB` 的文件比下载四个 `25KB` 的文件要快。

可以把多个 `JS` 文件通过一个 `HTTP` 请求返回以减少 `HTTP` 请求次数。

### 非阻塞脚本

保持 `JS` 文件短小，并限制 `HTTP` 请求的数量，因为加载大文件虽然只发送一个 `HTTP` 请求但是在资源返回之前浏览器无法进行其他工作。

从技术角度讲，要在页面加载完之后再加载 `JS` 需要在 `window.onload` 事件触发后开始下载代码，有几种方法实现可以实现：

1. defer：`<script type="text/javascript" src="file1.js" defer></script>`。

一个带有 `defer` 属性的 `<script>` 标签在被解析时启动下载，但直到 `DOM` 加载完成后才执行。此时 `JS` 文件与其他资源一同下载。

2. 动态节点加载 `JS` 文件。

```js
let script = document.createElement("script");
script.src = "file.js";
document.body.appendChild(script);
```

上面的代码可以添加到页面任何地方而不用担心会阻塞页面。

当文件使用动态脚本节点下载时，返回的代码通常立即执行。

3. 脚本注入。

先请求 `JS` 文件，然后将得到的内容添加到一个新的 `<script>` 标签中，再把标签添加到页面，这样就能创建一个带有内联代码的 `<script>` 元素。

这种方法的好处是可以控制 `JS` 代码的执行时机。

## 数据访问

### 摘要

1. 在函数中尽量使用局部变量，因为在函数执行上下文中会沿着作用域链向外查找变量。
2. 对于在函数中多次访问的全局变量，可以在函数内部创建一个变量，将全局变量赋值给局部变量，之后的操作访问局部变量。

### 函数作用域

#### 作用域链

`[[Scope]]` 是一个不可主动访问的内部属性，它包含函数执行时的所有作用域集合，即 `作用域链`。

函数执行时访问的所有属性都会沿着作用域链查询，直到该属性被找到或没有更多对象可用于搜索，正是这种搜索过程影响了性能。

#### 执行上下文

函数运行时会创建执行上下文，它定义了一个函数运行时的环境。对函数的每次运行而言，每个执行上下文都是唯一的，所以多次调用同一个函数会导致多次创建执行上下文。

当函数执行完毕，执行上下文就会被销毁。

当运行期上下文被创建时，它的作用域链被初始化，连同运行函数的`[[Scope]]`属性中所包含的对象。

作用域链初始化完成后会在作用域最前端创建一个新对象：`激活对象` ，`激活对象` 是包含所有局部变量、命名参数、参数集合和 `this` 的可变对象。

当作用域链被销毁时，激活对象一同被销毁。

### 改变作用域

#### with 表达式

使用 `with` 表达式时会在当前作用域前端插入一个新的作用域，这意味着当前函数内所有的局部变量都被推入第二个作用域链对象中，所以访问代价更高了。

#### try-catch 表达式

当 `try` 块发生错误时，程序流程转入 `catch` 块，并将异常对象推入作用域链的顶端的一个可变对象中，当前函数内所有的局部变量都被推入第二个作用域链对象中。

`catch` 语句执行完毕后，作用域链恢复到原本的状态。

可以通过将错误对象传递给一个专用处理函数来减少 `catch` 子句对性能的影响。

### 原型链

访问对象成员时会沿着原型链查找，如果一个对象的某个属性被多次使用可以考虑将其赋值给局部变量。

```js
function hasEitherClass(element, className1, className2) {
  return element.className == className1 || element.className == className2;
}
```

修改为：

```js
function hasEitherClass(element, className1, className2) {
  let currentClassName = element.className;
  return currentClassName == className1 || currentClassName == className2;
}
```

## DOM 操作

### DOM 操作为什么对性能影响很大

浏览器的 `DOM` 的实现和 `JavaScript` 实现相互独立，两者之间通过接口链接。

由于这种独立的架构模式，每次 `JS` 访问 `DOM` 时都会产生性能损耗，操作次数越多，对性能影响就越大。

### 如何减少 DOM 操作对性能的影响

1. 减少 `DOM` 操作次数，对于修改操作先处理完毕模板最终将模板填充到 `DOM` 中。

2. 使用克隆节点，操作完毕后替换原本节点。

## 算法和流程控制

### 摘要

1. `for-in` 循环每次迭代操作都要搜索实例或原型的属性，会付出更多的性能开销，比其他循环类型更慢。
2. 限制循环体内操作的耗时，可以减少循环的整体执行时间。
3. 对于顺序无关的数组操作，可以用倒序循环的方式遍历。

### 优化循环

#### 减少单次迭代的时间

如果循环的一次迭代需要较长的时间来执行，那么整个循环需要付出的时间就更多。

具体措施：

1. 使用局部变量代替全局变量、对象属性。
2. 对于顺序无关的数组操作，可以用倒序循环的方式遍历。

```js
let len = list.length;
while (len--) {
  let item = list[len];
  // 操作...
}
```

#### 减少迭代次数

`Duff's Device`：一种限制循环迭代次数的模式。

通过在一次循环中执行多次操作，达到减少循环次数的目的。

`Duff's Device` 背后的基本理念是：每次循环中最多可 `8` 次调用 `process()` 函数。循环迭代次数为元素总数除以 `8`。

在 `chrome[版本 98.0.4758.102（正式版本） （64 位）]` 中测试，循环次数超过 `2000000` 时该模式才有明显优势，没什么应用场景。

ps：书中的例子无法正常执行。

```js
var iterations = Math.floor(items.length / 8);
var startAt = items.length % 8;
var i = 0;
while (startAt--) {
  process(i++);
}
while (iterations--) {
  process(i++);
  process(i++);
  process(i++);
  process(i++);
  process(i++);
  process(i++);
  process(i++);
  process(i++);
}
```

### 优化递归

递归可能会导致浏览器报 `栈溢出` 错误，可以使用 `尾递归` 和 `缓存` 的方式优化递归函数。

[栈溢出与递归优化](/document/技术笔记/解决方案/栈溢出与递归优化)

## 响应

### 摘要

1. 将单一 `JavaScript` 操作执行时间控制在 `50ms` 以内。

### 优化长 JS 任务

浏览器的 `UI线程` 与 `JS线程` 是互斥的，当 `JS` 脚本执行时 `UI线程` 将被挂起，具体表现就是浏览器不会响应用户的操作，也不会更新页面展现。

[处理长任务](/document/%E6%8A%80%E6%9C%AF%E7%AC%94%E8%AE%B0/%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/%E7%BD%91%E7%AB%99%E4%BC%98%E5%8C%96/%E8%AE%A9%E9%A1%B5%E9%9D%A2%E6%98%BE%E7%A4%BA%E6%9B%B4%E6%B5%81%E7%95%85?id=%e5%a4%84%e7%90%86%e9%95%bf%e4%bb%bb%e5%8a%a1)

## 优化与服务器的通信时间

### Beacons

如果你只关心将数据发送到服务器端，比如发送用户当前访问页面，可以通过 `Image` 对象来实现。

```js
var url = "/status_tracker.php";
var params = ["step=2", "time=1248027314"];
new Image().src = url + "?" + params.join("&");
```

这种方式并不需要在页面中插入 `img` 元素就会发送请求，由于没有元素接收返回信息，浏览器不会下载任何内容。

### 减少传输数据

一个标准的 `JSON` 格式用户表结构如下：

```js
[ 
 {"id":1, "username":"alice", "realname": "Alice Smith", "email":"alice@alicesmith.com"}, 
 {"id":2, "username":"bob", "realname": "Bob Jones", "email":"bob@bobjones.com"}, 
 {"id":3, "username":"carol", "realname": "Carol Williams","email":"carol@carolwilliams.com"}, 
 {"id":4, "username":"dave", "realname": "Dave Johnson", "email":"dave@davejohnson.com"} 
]
```

可以将其精简为：

```js
[
 [ 1, "alice", "Alice Smith", "alice@alicesmith.com" ], 
 [ 2, "bob", "Bob Jones", "bob@bobjones.com" ], 
 [ 3, "carol", "Carol Williams", "carol@carolwilliams.com" ], 
 [ 4, "dave", "Dave Johnson", "dave@davejohnson.com" ] 
]
```

配合一个解析函数：

```js
function parseJSON(responseText) {
  var users = [];
  var usersArray = "(" + responseText + ")";
  for (var i = 0, len = usersArray.length; i < len; i++) {
    users[i] = {
      id: usersArray[i][0],
      username: usersArray[i][1],
      realname: usersArray[i][2],
      email: usersArray[i][3],
    };
  }
  return users;
}
```

本质上讲，这种方式是用一个更复杂的解析函数换取了较小的文件尺寸和更快的响应时间。