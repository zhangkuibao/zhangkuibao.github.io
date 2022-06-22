(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{911:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"任务队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务队列"}},[t._v("#")]),t._v(" 任务队列")]),t._v(" "),a("p",[t._v("从"),a("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/webappapis.html#event-loop",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范"),a("OutboundLink")],1),t._v("中可知：")]),t._v(" "),a("p",[t._v("一个事件循环可以有多个任务队列，任务队列是一组任务（"),a("code",[t._v("A task queue is a set of tasks")]),t._v("）")]),t._v(" "),a("p",[t._v("每个宏任务之后，引擎会立即执行微任务队列中的所有任务，然后再执行其他的宏任务，或渲染，或进行其他任何操作。这样确保了微任务之间的应用程序环境基本相同（没有鼠标坐标更改，没有新的网络数据等）")]),t._v(" "),a("h2",{attrs:{id:"宏任务和微任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏任务和微任务"}},[t._v("#")]),t._v(" 宏任务和微任务")]),t._v(" "),a("p",[t._v("Js 有两种任务的执行模式：同步模式（Synchronous）和异步模式（Asynchronous）。")]),t._v(" "),a("p",[t._v("创建异步任务主要分为宏任务与微任务两种。")]),t._v(" "),a("p",[t._v("ES6 规范中，宏任务（Macrotask） 称为 Task， 微任务（Microtask） 称为 Jobs。宏任务是由宿主（浏览器、Node）发起的，而微任务由 JS 自身发起。")]),t._v(" "),a("h3",{attrs:{id:"宏任务与微任务的几种创建方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏任务与微任务的几种创建方式"}},[t._v("#")]),t._v(" 宏任务与微任务的几种创建方式")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("宏任务（Macrotask）")]),t._v(" "),a("th",[t._v("微任务（Microtask）")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("setTimeout")]),t._v(" "),a("td",[t._v("requestAnimationFrame（有争议）")])]),t._v(" "),a("tr",[a("td",[t._v("setInterval")]),t._v(" "),a("td",[t._v("MutationObserver（浏览器环境）")])]),t._v(" "),a("tr",[a("td",[t._v("MessageChannel")]),t._v(" "),a("td",[t._v("Promise.[ then/catch/finally ]")])]),t._v(" "),a("tr",[a("td",[t._v("I/O，事件队列")]),t._v(" "),a("td",[t._v("process.nextTick（Node 环境）")])]),t._v(" "),a("tr",[a("td",[t._v("setImmediate（Node 环境）")]),t._v(" "),a("td",[t._v("queueMicrotask")])]),t._v(" "),a("tr",[a("td",[t._v("script（整体代码块）")]),t._v(" "),a("td")])])]),t._v(" "),a("ul",[a("li",[t._v("关于 script 标签\n如果同时存在两个 script 代码块，会首先在执行第一个 script 代码块中的同步代码，如果这个过程中创建了微任务并进入了微任务队列，第一个 script 同步代码执行完之后，会首先去清空微任务队列，再去开启第二个 script 代码块的执行。")])]),t._v(" "),a("h3",{attrs:{id:"queuemicrotask-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queuemicrotask-函数"}},[t._v("#")]),t._v(" queueMicrotask 函数")]),t._v(" "),a("p",[t._v("queueMicrotask 函数接收一个函数作为参数，这个函数会被当作是微任务调用。")]),t._v(" "),a("h3",{attrs:{id:"微任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微任务"}},[t._v("#")]),t._v(" 微任务")]),t._v(" "),a("h2",{attrs:{id:"eventloop-事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventloop-事件循环"}},[t._v("#")]),t._v(" EventLoop（事件循环）")]),t._v(" "),a("p",[t._v("EventLoop 就是根据算法清空任务队列的过程")]),t._v(" "),a("h3",{attrs:{id:"eventloop-循环示意图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventloop-循环示意图"}},[t._v("#")]),t._v(" EventLoop 循环示意图")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/EventLoop%E5%BE%AA%E7%8E%AF%E7%A4%BA%E6%84%8F%E5%9B%BE.webp",alt:"EventLoop循环示意图"}})]),t._v(" "),a("h3",{attrs:{id:"事件循环步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环步骤"}},[t._v("#")]),t._v(" 事件循环步骤")]),t._v(" "),a("ol",[a("li",[t._v("从 宏任务 队列（例如 “script”）中出队（dequeue）并执行最早的宏任务。")]),t._v(" "),a("li",[t._v("执行所有 微任务：\n"),a("ul",[a("li",[t._v("当微任务队列非空时：\n"),a("ul",[a("li",[t._v("出队（dequeue）并执行最早的微任务。")])])])])]),t._v(" "),a("li",[t._v("执行渲染，如果有。")]),t._v(" "),a("li",[t._v("如果宏任务队列为空，则休眠直到出现宏任务。")]),t._v(" "),a("li",[t._v("转到步骤 1。")])]),t._v(" "),a("p",[t._v("因为首次执行宏队列中会有 script（整体代码块）任务，所以实际上就是 Js 解析完成后，在异步任务中，会先执行完所有的微任务，这里也是很多面试题喜欢考察的。需要注意的是，新创建的微任务会立即进入微任务队列排队执行，不需要等待下一次轮回。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("queueMicrotask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2 3 1")]),t._v("\n")])])]),a("p",[t._v("这个例子中 setTimeout 创建的是宏任务，queueMicrotask 和 Promise.resolve 创建的是微任务，宏任务在微任务之后执行，微任务执行顺序取决于谁先被推入微任务队列")])])}),[],!1,null,null,null);s.default=e.exports}}]);