## 介绍

Shadow DOM 可以将一个隐藏的、独立的 DOM 附加到一个元素上。

以 shadow root 节点为起始根节点，在这个根节点的下方，可以是任意元素，和普通的 DOM 元素一样。

Shadow DOM 内部的元素始终不会影响到它外部的元素（除了 :focus-within）。

浏览器内置组件的 mode 为 user-agent。

### Shadow DOM 相关术语

- Shadow host：一个常规 DOM 节点，Shadow DOM 会被附加到这个节点上。
- Shadow tree：Shadow DOM 内部的 DOM 树。
- Shadow boundary：Shadow DOM 结束的地方，也是常规 DOM 开始的地方。
- Shadow root：Shadow tree 的根节点。

## API

- Element.attachShadow(option)

将一个 shadow root 附加到一个元素上。

接收一个对象作为参数，该对象有个 mode 属性，值可以是 open 或者 closed。open 表示可以通过 JavaScript 方法来获取 Shadow DOM。设置为 closed 则表示不可访问。

如果你想将一个 Shadow DOM 附加到 custom element 上，可以在 custom element 的构造函数中添加如下实现（目前，这是 shadow DOM 最实用的用法）：

```js
let shadow = this.attachShadow({mode: 'open'});
let div = document.createElement('div');
shadow.appendChild(div);
```

可挂载 shadow dom 的元素：article、aside、blockquote、body、div、p、section、span、footer、h、header、main、nav。

## 参考

[使用 shadow DOM——MDN](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM)
