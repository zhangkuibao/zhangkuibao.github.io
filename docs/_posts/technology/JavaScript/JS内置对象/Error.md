---
date: 2021-09-08 18:03:07
title: Error
tags:
  - myGit
  - learning-Notes
  - document
  - technology
  - JavaScript
  - JS内置对象
---

## Error 类型

### Error

通用的错误构造器

作为函数调用时的行为与 `new` 操作符一致

### RangeError

错误类型：数值变量超出有效范围

### ReferenceError

错误类型：无效引用

### SyntaxError

错误类型：`eval()` 在解析代码过程中发生语法错误

### TypeError

错误类型：变量或参数不属于有效类型

### URIError

错误类型：给 `encodeURI()`或 `decodeURl()`传递的参数无效

## 捕获特点类型的错误

```js
try {
  foo();
} catch (e) {
  if (e instanceof RangeError) {
    console.log(e.name + ": " + e.message);
  } else if (e instanceof ReferenceError) {
    console.log(e.name + ": " + e.message);
  }
}
```

## 自定义错误类型

```js
class MyError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.name = "MyError";
  }
}
```
