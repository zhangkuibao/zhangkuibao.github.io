(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{876:function(t,a,s){"use strict";s.r(a);var e=s(12),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"性能优化思维导图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能优化思维导图"}},[t._v("#")]),t._v(" 性能优化思维导图")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.png",alt:"性能优化"}})]),t._v(" "),s("h2",{attrs:{id:"渐进式渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渐进式渲染"}},[t._v("#")]),t._v(" 渐进式渲染")]),t._v(" "),s("p",[t._v("为了提高网页性能和用户体验，确定首先内容展示的优先级")]),t._v(" "),s("p",[t._v("实现方式：")]),t._v(" "),s("ol",[s("li",[t._v("图片懒加载")]),t._v(" "),s("li",[t._v("调整 html 结构确定内容的展示顺序")]),t._v(" "),s("li",[t._v("异步加载 HTML 片段")])]),t._v(" "),s("h2",{attrs:{id:"域名发散-域名收敛"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名发散-域名收敛"}},[t._v("#")]),t._v(" 域名发散/域名收敛")]),t._v(" "),s("ol",[s("li",[t._v("域名发散： 以前的服务器负载能力有限，网站服务多是静态资源，为了减轻服务器压力，将一个服务注册多个域名，放在不同的服务器上，已减少服务器崩溃的现象")]),t._v(" "),s("li",[t._v("域名收敛： 现在的服务多是手机应用，这时的 DNS 解析服务会耗费大量网络资源，域名收敛就是将资源尽量放在同一个域名下，以减少 DNS 解析的开销")])]),t._v(" "),s("h2",{attrs:{id:"cookie-优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-优化"}},[t._v("#")]),t._v(" cookie 优化")]),t._v(" "),s("p",[t._v("对应域名下的 cookie 会随着 http 请求被发送到服务端，过多的 cookie 会增加请求报文的大小，降低响应速度")]),t._v(" "),s("ol",[s("li",[t._v("去除、减少（存储到 storage 中），合并（减少键值对）")]),t._v(" "),s("li",[t._v("设置合适的过期时间，在 cookie 还未被清理且没有过期，则会在访问对应域名时发送给服务器")]),t._v(" "),s("li",[t._v("cookie 隔离： 通过使用不同的 domain 减少 cookie 的使用，很多情况下在访问静态资源时 cookie 是完全没有必要的，可以将静态资源放在其他的域名下，因为 cookie 有域的限制，不能跨域请求，这样请求静态资源时就不会将多余的 cookie 携带到 http 请求中")])]),t._v(" "),s("h2",{attrs:{id:"图片懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片懒加载"}},[t._v("#")]),t._v(" 图片懒加载")]),t._v(" "),s("p",[t._v("只加载视野范围内的图片（scroll）\n用一个 image 标签链接到目标图片，将资源请求下来，需要用到的时候加入到页面中")]),t._v(" "),s("h2",{attrs:{id:"使用内联资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用内联资源"}},[t._v("#")]),t._v(" 使用内联资源")]),t._v(" "),s("p",[t._v("通过 url 直接引入文件地址时会发送 http 请求来请求资源, 对于较小的图片可以将其编码为 base64 直接引用, 这样就能减少 http 请求次数")]),t._v(" "),s("h2",{attrs:{id:"用-dns-prefetch-预处理-dns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用-dns-prefetch-预处理-dns"}},[t._v("#")]),t._v(" 用 dns-prefetch 预处理 DNS")]),t._v(" "),s("p",[t._v("强制执行特定主机，可以在 head 使用 dns-prefetch，能够让浏览器在解析 html 的时候去并行获取 dns 信息，这样就能减少后续同域名下的资源的 DNS Lookup 时间（因为已经提前获取到了）")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//luotuxiu.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);