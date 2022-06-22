---
date: '2021-09-09 10:02:33'
title: 【React】组件
tags:
  - JavaScript
  - React
---

## 定义

### 函数组件

1. 接受一个 `props` 对象并返回一个 `React` 元素

```js
// 定义函数组件
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 调用
// React元素为用户自定义组件时,会将jsx接受的属性及子组件转换为单个对象传递给组件, 这个对象被称为 props
const element = <Welcome name="sara" />; // 注意闭合标签

ReactDOM.render(element, document.getElementById("root"));
```

2. `class` 定义

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
