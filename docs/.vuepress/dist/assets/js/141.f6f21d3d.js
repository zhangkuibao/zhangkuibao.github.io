(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{795:function(t,n,e){"use strict";e.r(n);var v=e(12),_=Object(v.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"创建-nuxt-项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建-nuxt-项目"}},[t._v("#")]),t._v(" 创建 Nuxt 项目")]),t._v(" "),e("ul",[e("li",[t._v("使用 "),e("code",[t._v("Nuxt.js")]),t._v(" 提供的脚手架工具 "),e("code",[t._v("create-nuxt-app")]),t._v(" 来快速创建，优点是内部集成了各种工具、框架，不需要再单独安装配置\n"),e("code",[t._v("npx create-nuxt-app <项目名>")])]),t._v(" "),e("li",[e("code",[t._v("Nuxt")]),t._v("官方文档： "),e("a",{attrs:{href:"https://www.runoob.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("从头开始新建项目"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"打包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[t._v("#")]),t._v(" 打包")]),t._v(" "),e("ol",[e("li",[t._v("在"),e("code",[t._v("package.json")]),t._v(" 的 "),e("code",[t._v("scripts")]),t._v(" 中添加 "),e("code",[t._v('"build": "nuxt build"')]),t._v("，执行 "),e("code",[t._v("npm run build")])]),t._v(" "),e("li",[t._v("把项目目录中的"),e("code",[t._v(".nuxt,static,package.json,nuxt.config.js")]),t._v(" 及其他配置文件如 "),e("code",[t._v("tsconfig.json")]),t._v(" 都放到服务器同一目录下，需要安装依赖")]),t._v(" "),e("li",[t._v("在服务器项目目录中安装依赖 "),e("code",[t._v("npm install -production")])]),t._v(" "),e("li",[e("code",[t._v("npm start")]),t._v(" 启动项目")])]),t._v(" "),e("h2",{attrs:{id:"pm2-进程管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pm2-进程管理"}},[t._v("#")]),t._v(" pm2 进程管理")]),t._v(" "),e("ol",[e("li",[t._v("全局安装 "),e("code",[t._v("pm2")]),t._v("， "),e("code",[t._v("npm i -g pm2")]),t._v(";")]),t._v(" "),e("li",[t._v("启动，"),e("code",[t._v("pm2 start /node_modules/nuxt/bin/nuxt.js --name <项目名称>")]),t._v("，可使用 "),e("code",[t._v("pm2 start <项目名称>")]),t._v("，"),e("code",[t._v("pm2 stop <项目名称>")]),t._v("，"),e("code",[t._v("pm2 reload <项目名称>")]),t._v(" 来启动、停止、重载项目")])]),t._v(" "),e("h2",{attrs:{id:"nginx-代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-代理"}},[t._v("#")]),t._v(" nginx 代理")]),t._v(" "),e("blockquote",[e("p",[t._v("部署到这一步项目在服务器的本地已经可以访问了，但在外部网络是无法进行访问的，这时需要用 "),e("code",[t._v("nginx")]),t._v(" 进行代理")])]),t._v(" "),e("ol",[e("li",[t._v("修改 "),e("code",[t._v("/conf/nginx.conf")]),t._v(" 配置")])]),t._v(" "),e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("http {\n\n    #gzip  on;\n\n    upstream nodenuxt {\n        server 127.0.0.1:3000; # nuxt 项目监听PC端端口\n        keepalive 64;\n    }\n\n    server {\n        server_name  www.wfaceboss.top; # 目标域名\n\n        location / {\n            proxy_pass http://nodenuxt;\n        }\n    }\n}\n\n")])])])])}),[],!1,null,null,null);n.default=_.exports}}]);