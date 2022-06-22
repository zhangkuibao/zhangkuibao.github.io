(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{835:function(t,a,s){"use strict";s.r(a);var n=s(12),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"为什么要检测设备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要检测设备"}},[t._v("#")]),t._v(" 为什么要检测设备")]),t._v(" "),s("p",[t._v("在浏览器的早期和随后的“浏览器战争”中，无数的浏览器供应商意味着开发人员需要了解哪个供应商开发的哪个客户端连接到他们的网站，然后他们开始根据检测到的浏览器定制和优化响应。从这个意义上说，这是技术上的需要。")]),t._v(" "),s("h2",{attrs:{id:"user-agent-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-agent-属性"}},[t._v("#")]),t._v(" User-Agent 属性")]),t._v(" "),s("p",[t._v("通常用 navigator.userAgent 来获取用户代理（浏览器）信息。")]),t._v(" "),s("p",[t._v("浏览器通常的格式为：")]),t._v(" "),s("p",[s("code",[t._v("User-Agent: Mozilla/<version> (<system-information>) <platform> (<platform-details>) <extensions>")])]),t._v(" "),s("p",[t._v("在 PC 端 chrome 浏览器中用 navigator.userAgent 获取到的信息：")]),t._v(" "),s("p",[s("code",[t._v("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36")])]),t._v(" "),s("h2",{attrs:{id:"user-agent-的局限性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-agent-的局限性"}},[t._v("#")]),t._v(" User-Agent 的局限性")]),t._v(" "),s("p",[t._v("userAgent 可以被修改，我们无法判断 userAgent 是否真实。")]),t._v(" "),s("p",[t._v("一些跨设备的产品对不同设备提供不同的功能，比如为笔记本电脑和桌面设备提供功能齐全的产品的公司，他们只向移动用户提供有限版本。一些移动端浏览器会给用户提供切换到“电脑版网页”的功能。")]),t._v(" "),s("p",[t._v("这种情况下用 userAgent 就获取到的用户代理信息可能就不准确了。")]),t._v(" "),s("h2",{attrs:{id:"如何获取准确的用户代理信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何获取准确的用户代理信息"}},[t._v("#")]),t._v(" 如何获取准确的用户代理信息")]),t._v(" "),s("p",[t._v("既然使用 userAgent 有被欺骗的可能，那就需要更完备的方法进行检测。")]),t._v(" "),s("p",[s("strong",[t._v("执行一些严重依赖于 userAgent 指定设备的功能来判断 userAgent 信息是否正确。")])]),t._v(" "),s("h3",{attrs:{id:"检测可否触屏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检测可否触屏"}},[t._v("#")]),t._v(" 检测可否触屏")]),t._v(" "),s("p",[t._v("你能想象一款不支持触控的智能手机吗？")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" touch_capable "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ontouchstart"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" window "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n  navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxTouchPoints "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n  navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msMaxTouchPoints "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("touch_capable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Supported"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Not Supported"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"检测屏幕尺寸"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检测屏幕尺寸"}},[t._v("#")]),t._v(" 检测屏幕尺寸")]),t._v(" "),s("p",[t._v("特定于设备的功能和信息是必不可少的。如果你声称你的设备是 Apple iPhone 6，那么你必须了解特定于设备的详细信息，至少是 iPhone 6 的屏幕尺寸。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("windth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"配合-navigator-platform-信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配合-navigator-platform-信息"}},[t._v("#")]),t._v(" 配合 navigator.platform 信息")]),t._v(" "),s("p",[t._v("你不能声称你同时使用 Max OS X 和 Windows！")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("platform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://multilogin.com/why-mimicking-a-device-is-almost-impossible/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Why mimicking a device is becoming almost impossible"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);