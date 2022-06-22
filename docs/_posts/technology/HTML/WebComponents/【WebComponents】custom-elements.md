---
date: '2021-09-08 17:53:03'
title: 【WebComponents】custom-elements
tags:
  - HTML
  - WebComponents
---

## 介绍

custom elements 自定义元素，即自定义标签，可以将一个组件封装到一个标签中，使用自定义的标签名使用。

custom elements 元素的行为（属性、事件）与其他 dom 元素一致。

custom elements 的功能主要封装在 CustomElementRegistry 接口上，可以用 window.customElements 属性获取它的实例。

## custom elements 种类

custom elements 有两类：

- Autonomous custom elements

独立的元素，它不继承其他内建的 HTML 元素。你可以直接把它们写成 HTML 标签的形式，来在页面上使用。例如 `<popup-info>`，或者是 document.createElement("popup-info") 这样。

Autonomous custom elements 总是继承自 HTMLElement。

- Customized built-in elements

继承自基本的 HTML 元素。在创建时，你必须指定所需扩展的元素，使用时需要先写出基本的元素标签，并通过 is 属性指定 custom element 的名称。例如`<p is="word-count">`, 或者 document.createElement("p", { is: "word-count" })。

## API

对于 custom elements 的操作都封装在 CustomElementRegistry 接口的实例 window.customElements 上，可以直接用 customElements 访问。

### customElements.define(tagName, class, options?)

用来注册一个 custom element，该方法接受以下参数：

1. 表示所创建的元素名称的符合 DOMString 标准的字符串。注意，custom element 的名称不能是单个单词，且其中必须要有短横线。
2. 用于定义元素行为的类。
3. 可选参数，一个包含 extends 属性的配置对象，是可选参数。它指定了所创建的元素继承自哪个内置元素，可以继承任何内置元素。

注册组件

```js
class PopUpInfo extends HTMLElement {
  constructor() {
    super();
    var shadow = this.attachShadow({ mode: "open" });
    var info = document.createElement("span");
    var text = this.getAttribute("text");
    info.textContent = text;
    shadow.appendChild(info);
  }
}
customElements.define("popup-info", PopUpInfo);
```

使用组件

```js
<popup-info text="is popup-info component">
```

### customElements.get(tagName)

返回指定自定义元素的构造函数，如果未定义自定义元素，则返回 undefined。

参数为自定义元素的标签名

## 生命周期

在 custom element 的构造类（MDN 文档中表述为构造函数，这是有误的）中，可以指定多个不同的回调函数，它们将会在元素的不同生命时期被调用：

- connectedCallback

当 custom element 插入文档时 DOM 时，被调用。

- disconnectedCallback

当 custom element 从文档 DOM 中删除时，被调用。

- adoptedCallback

当 custom element 被移动到新的文档时，被调用。

- attributeChangedCallback

当 custom element 增加、删除、修改自身属性时，被调用。

需要使用 observedAttributes 方法注册被监听属性。

```js
class PopUpInfo extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["data-name"];
  }

  connectedCallback() {
    console.log("插入文档时触发");
  }
  disconnectedCallback() {
    console.log("从文档中删除时触发");
  }
  adoptedCallback() {
    console.log("被移动到新文档时触发");
  }
  attributeChangedCallback(propName, oldVal, newVal) {
    console.log("observedAttributes 中注册的属性被修改时触发");
  }
}
customElements.define("popup-info", PopUpInfo);
```

## CSS 伪类

与自定义元素相关的伪类：

- :defined

匹配任何已定义的元素，包括**内置元素**和使用 CustomElementRegistry.define() 定义的自定义元素。

- :host

选择 shadow DOM 的 shadow host ，内容是它内部使用的 CSS（ containing the CSS it is used inside ）。

- :host()

选择 shadow DOM 的 shadow host ，内容是它内部使用的 CSS （这样您可以从 shadow DOM 内部选择自定义元素）— 但只匹配给定方法的选择器的 shadow host 元素。

- :host-context()

选择 shadow DOM 的 shadow host ，内容是它内部使用的 CSS （这样您可以从 shadow DOM 内部选择自定义元素）— 但只匹配给定方法的选择器匹配元素的子 shadow host 元素。

## 参考

[使用 custom elements——MDN](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_custom_elements)
