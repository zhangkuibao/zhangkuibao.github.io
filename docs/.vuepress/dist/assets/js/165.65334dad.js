(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{819:function(t,a,s){"use strict";s.r(a);var e=s(12),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("SPA")]),t._v(" 应用的缺陷\n"),s("ol",[s("li",[t._v("首页加载时间长")]),t._v(" "),s("li",[t._v("不利于 "),s("code",[t._v("SEO")])])])])]),t._v(" "),s("h2",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),s("p",[t._v("依赖于 "),s("code",[t._v("vue-server-renderer")]),t._v(" 模块\n在服务端生成完整页面直接传递给客户端")]),t._v(" "),s("h2",{attrs:{id:"开发原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发原则"}},[t._v("#")]),t._v(" 开发原则")]),t._v(" "),s("h3",{attrs:{id:"与客户端-vue-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与客户端-vue-的区别"}},[t._v("#")]),t._v(" 与客户端 vue 的区别")]),t._v(" "),s("h4",{attrs:{id:"响应式数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式数据"}},[t._v("#")]),t._v(" 响应式数据")]),t._v(" "),s("p",[t._v("将数据进行响应式的过程在服务器上是多余的，禁用响应式数据，同时可避免将「数据」转换为「响应式对象」的性能开销")]),t._v(" "),s("h4",{attrs:{id:"生命周期钩子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期钩子"}},[t._v("#")]),t._v(" 生命周期钩子")]),t._v(" "),s("p",[t._v("只有 "),s("code",[t._v("beforeCreate")]),t._v(" 和 "),s("code",[t._v("created")]),t._v(" 会在服务器端渲染 (SSR) 过程中被调用，其他生命周期钩子函数中的代码（例如 beforeMount 或 mounted），只会在"),s("strong",[t._v("客户端")]),t._v("执行，应避免在"),s("code",[t._v("beforeCreate")]),t._v(" 和 "),s("code",[t._v("created")]),t._v("两个钩子中使用会产生全局副作用的代码")]),t._v(" "),s("h4",{attrs:{id:"自定义指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义指令"}},[t._v("#")]),t._v(" 自定义指令")]),t._v(" "),s("p",[t._v("大多数自定义指令直接操作 DOM，因此会在服务器端渲染 (SSR) 过程中导致错误。有两种方法可以解决这个问题：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("推荐使用组件作为抽象机制，并运行在「虚拟 DOM 层级(Virtual-DOM level)」（例如，使用渲染函数(render function)）。")])]),t._v(" "),s("li",[s("p",[t._v('如果你有一个自定义指令，但是不是很容易替换为组件，则可以在创建服务器 renderer 时，使用 directives 选项所提供"服务器端版本(server-side version)"。')])])]),t._v(" "),s("h3",{attrs:{id:"通用代码设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通用代码设计"}},[t._v("#")]),t._v(" 通用代码设计")]),t._v(" "),s("h4",{attrs:{id:"服务器数据响应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器数据响应"}},[t._v("#")]),t._v(" 服务器数据响应")]),t._v(" "),s("p",[t._v("从客户端发起的每个请求都应该是全新且独立的应用程序实例，这样可以避免产生交叉请求造成的状态污染 (cross-request state pollution)")]),t._v(" "),s("h4",{attrs:{id:"平台特定-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平台特定-api"}},[t._v("#")]),t._v(" 平台特定 API")]),t._v(" "),s("p",[t._v("通用代码不可接受特定平台的 API，直接使用了像 window 或 document，这种仅浏览器可用的全局变量，则会在 Node.js 中执行时抛出错误")]),t._v(" "),s("h4",{attrs:{id:"避免单例状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免单例状态"}},[t._v("#")]),t._v(" 避免单例状态")]),t._v(" "),s("p",[s("code",[t._v("Node.js")]),t._v(" 服务器是一个长期运行的进程，当我们的代码进入该进程时，它将进行一次取值并留存在内存中。这意味着如果创建一个单例对象，它将在每个传入的请求之间共享。")]),t._v(" "),s("h4",{attrs:{id:"webpack-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-配置"}},[t._v("#")]),t._v(" webpack 配置")]),t._v(" "),s("p",[t._v("将配置分为三个文件："),s("code",[t._v("base")]),t._v(", "),s("code",[t._v("client")]),t._v(" 和 "),s("code",[t._v("server")]),t._v("。基本配置 (base config) 包含在两个环境共享的配置，例如，输出路径 (output path)，别名 (alias) 和 loader。服务器配置 (server config) 和客户端配置 (client config)，可以通过使用 "),s("code",[t._v("webpack-merge")]),t._v(" 来简单地扩展基本配置。")]),t._v(" "),s("h3",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),s("h4",{attrs:{id:"模板匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板匹配"}},[t._v("#")]),t._v(" 模板匹配")]),t._v(" "),s("p",[t._v("使用「SSR + 客户端混合」时，需要了解的一件事是，浏览器可能会更改的一些特殊的 "),s("code",[t._v("HTML")]),t._v(" 结构。例如，当你在 "),s("code",[t._v("Vue")]),t._v(" 模板中写入：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hi"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("浏览器会在 "),s("code",[t._v("<table>")]),t._v(" 内部自动注入 "),s("code",[t._v("<tbody>")]),t._v("，然而，由于 Vue 生成的虚拟 DOM (virtual DOM) 不包含 "),s("code",[t._v("<tbody>")]),t._v("，所以会导致无法匹配。为能够正确匹配，请确保在模板中写入有效的 HTML。")])])}),[],!1,null,null,null);a.default=r.exports}}]);