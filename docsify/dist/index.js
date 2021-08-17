(()=>{var e={449:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var n=t(711),a=t.n(n)()((function(e){return e[1]}));a.push([e.id,".breadcrumb {\r\n  /* position: fixed;\r\n    top: 0;\r\n    left: 300px; */\r\n  position: absolute;\r\n  left: 20px;\r\n  cursor: context-menu;\r\n  display: flex;\r\n  align-items: center;\r\n  max-width: 50%;\r\n  white-space: nowrap;\r\n  overflow: auto;\r\n}\r\n\r\n.breadcrumb .breadcrumb-interval {\r\n  margin: 0 10px;\r\n}\r\n\r\n/* 原始导航栏调整开始 */\r\n.app-nav {\r\n  position: fixed;\r\n  margin: 0;\r\n  height: 60px;\r\n  background: #fff;\r\n  width: calc(100% - 300px);\r\n  /* border-bottom: 1px solid; */\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  padding: 0;\r\n  box-shadow: 0 2px 8px #f0f1f2;\r\n}\r\n\r\n.app-nav > ul {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-nav.no-badge {\r\n  margin: 0;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  /* 改变原来按钮热区大小 */\r\n  /* .sidebar-toggle {\r\n      padding: 0 0 10px 10px;\r\n    } */\r\n  /* my pin */\r\n  .app-nav {\r\n    width: 100%;\r\n    height: 40px;\r\n  }\r\n\r\n  .breadcrumb {\r\n    max-width: 150px;\r\n  }\r\n\r\n  .sidebar-pin {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* 原始导航栏调整结束 */\r\n",""]);const i=a},873:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var n=t(711),a=t.n(n)()((function(e){return e[1]}));a.push([e.id,"/* 滚动条样式 */\r\n\r\n::-webkit-scrollbar {\r\n    width: 8px;\r\n    height: 0px;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background: #eee;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  ::-webkit-scrollbar-thumb {\r\n    background: rgb(219, 219, 219);\r\n    border-radius: 8px;\r\n  }\r\n\r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: rgb(219, 219, 219);\r\n  }\r\n",""]);const i=a},667:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var n=t(711),a=t.n(n)()((function(e){return e[1]}));a.push([e.id,'.sidebar ul li > a,\r\n.sidebar ul li > p {\r\n  transition: color 0.3s;\r\n}\r\n\r\n.sidebar ul .active > a {\r\n  background-color: rgba(66, 185, 131, 0.1);\r\n}\r\n\r\na {\r\n  text-decoration: none !important;\r\n}\r\n\r\n.sidebar li.active > a,\r\n.sidebar li.active > p {\r\n  position: relative;\r\n}\r\n\r\n.sidebar li.active > a,\r\n.sidebar li.active > p {\r\n  position: relative;\r\n}\r\n\r\n.sidebar ul {\r\n  margin: 0;\r\n}\r\n\r\n.sidebar-nav ul {\r\n  overflow: hidden;\r\n  transition: 0.3s;\r\n  height: auto;\r\n}\r\n\r\n.sidebar-nav ul.collapse-hide {\r\n  height: 0 !important;\r\n}\r\n\r\n.sidebar-nav .hasChild {\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n\r\n.sidebar-nav .hasChild::before {\r\n  content: "";\r\n  display: block;\r\n  position: absolute;\r\n  right: 1em;\r\n  top: 50%;\r\n  transform: rotateZ(45deg);\r\n  width: 7px;\r\n  height: 2px;\r\n  background: #000;\r\n  transition: 0.3s;\r\n}\r\n\r\n.sidebar-nav .hasChild::after {\r\n  content: "";\r\n  display: block;\r\n  position: absolute;\r\n  right: calc(1em + 4.5px);\r\n  top: 50%;\r\n  transform: rotateZ(-45deg);\r\n  width: 7px;\r\n  height: 2px;\r\n  background: #000;\r\n  transition: 0.3s;\r\n}\r\n.sidebar-nav .hasChild:hover::before,\r\n.sidebar-nav .hasChild:hover::after {\r\n  background: var(--theme-color, #42b983);\r\n}\r\n\r\n.sidebar ul li > a:hover,\r\n.sidebar ul li > p:hover {\r\n  color: rgba(66, 185, 131, 1);\r\n}\r\n.sidebar-nav .hasChild.collapse-menu-hide::before {\r\n  transform: rotateZ(-45deg);\r\n}\r\n\r\n.sidebar-nav .hasChild.collapse-menu-hide::after {\r\n  transform: rotateZ(45deg);\r\n}\r\n\r\n.sidebar-nav .level-1 > p,\r\n.sidebar-nav .level-1 > a {\r\n  padding-left: 10px;\r\n}\r\n\r\n.sidebar-nav .level-2 > p,\r\n.sidebar-nav .level-2 > a {\r\n  padding-left: 20px;\r\n}\r\n\r\n.sidebar-nav .level-3 > p,\r\n.sidebar-nav .level-3 > a {\r\n  padding-left: 30px;\r\n}\r\n\r\n.sidebar-nav .level-4 > p,\r\n.sidebar-nav .level-4 > a {\r\n  padding-left: 40px;\r\n}\r\n\r\n.sidebar-nav .level-5 > p,\r\n.sidebar-nav .level-5 > a {\r\n  padding-left: 50px;\r\n}\r\n\r\n.sidebar ul p.active > a {\r\n  border-right: 2px solid;\r\n  color: var(--theme-color, #42b983);\r\n  font-weight: 600;\r\n}\r\n\r\n.sidebar-title {\r\n  text-align: center;\r\n  color: #a1a5a9;\r\n  font-weight: 700;\r\n  cursor: context-menu;\r\n  user-select: none;\r\n}\r\n',""]);const i=a},657:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var n=t(711),a=t.n(n),i=t(449),s=t(873),o=t(667),d=a()((function(e){return e[1]}));d.i(i.Z),d.i(s.Z),d.i(o.Z),d.push([e.id,"\n",""]);const l=d},276:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var n=t(711),a=t.n(n)()((function(e){return e[1]}));a.push([e.id,"\n.wrapper[data-v-f4fc527e] {\r\n    color: #567;\n}\r\n",""]);const i=a},711:e=>{"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t=e(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(e,t,n){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var o=0;o<e.length;o++){var d=[].concat(e[o]);n&&a[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),r.push(d))}},r}},246:(e,r,t)=>{var n=t(657);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,t(943).Z)("6c57f0e4",n,!1,{})},4:(e,r,t)=>{var n=t(276);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,t(943).Z)("868af05e",n,!1,{})},943:(e,r,t)=>{"use strict";function n(e,r){for(var t=[],n={},a=0;a<r.length;a++){var i=r[a],s=i[0],o={id:e+":"+a,css:i[1],media:i[2],sourceMap:i[3]};n[s]?n[s].parts.push(o):t.push(n[s]={id:s,parts:[o]})}return t}t.d(r,{Z:()=>b});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=a&&(document.head||document.getElementsByTagName("head")[0]),o=null,d=0,l=!1,c=function(){},u=null,p="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function b(e,r,t,a){l=t,u=a||{};var s=n(e,r);return f(s),function(r){for(var t=[],a=0;a<s.length;a++){var o=s[a];(d=i[o.id]).refs--,t.push(d)}for(r?f(s=n(e,r)):s=[],a=0;a<t.length;a++){var d;if(0===(d=t[a]).refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete i[d.id]}}}}function f(e){for(var r=0;r<e.length;r++){var t=e[r],n=i[t.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](t.parts[a]);for(;a<t.parts.length;a++)n.parts.push(h(t.parts[a]));n.parts.length>t.parts.length&&(n.parts.length=t.parts.length)}else{var s=[];for(a=0;a<t.parts.length;a++)s.push(h(t.parts[a]));i[t.id]={id:t.id,refs:1,parts:s}}}}function v(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function h(e){var r,t,n=document.querySelector("style["+p+'~="'+e.id+'"]');if(n){if(l)return c;n.parentNode.removeChild(n)}if(m){var a=d++;n=o||(o=v()),r=y.bind(null,n,a,!1),t=y.bind(null,n,a,!0)}else n=v(),r=C.bind(null,n),t=function(){n.parentNode.removeChild(n)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else t()}}var g,x=(g=[],function(e,r){return g[e]=r,g.filter(Boolean).join("\n")});function y(e,r,t,n){var a=t?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(r,a);else{var i=document.createTextNode(a),s=e.childNodes;s[r]&&e.removeChild(s[r]),s.length?e.insertBefore(i,s[r]):e.appendChild(i)}}function C(e,r){var t=r.css,n=r.media,a=r.sourceMap;if(n&&e.setAttribute("media",n),u.ssrId&&e.setAttribute(p,r.id),a&&(t+="\n/*# sourceURL="+a.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var i=r[n]={id:n,exports:{}};return e[n](i,i.exports,t),i.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";t(246);class e{titleArr=[];static transferTitleNumber(e,r){return 1===e.length?["","一","二","三","四","五","六","七","八","九","十"][e[0]]+"、"+r:e+" "+r}static synthesisNumber(r,t){t=Number(t),e.titleArr[t]=e.titleArr[t]?e.titleArr[t]+1:1,e.titleArr=e.titleArr.slice(0,t+1);let n=e.titleArr.filter((e=>e)).join(".");return e.transferTitleNumber(n,r)}static handleTitle(r){if(!r.children)return;let t=r.firstElementChild?.firstElementChild;if(t&&"参考"!==t.innerText){let n=r.tagName[1];t.innerText=e.synthesisNumber(t.innerText,n)}}static createTitleNumber(r){Array.from(r.children).forEach((r=>{2==r.tagName.length&&"H1"!==r.tagName&&"H"===r.tagName[0]&&e.handleTitle(r)}))}static install(r,t){r.afterEach((function(r,t){let n=document.createElement("div");n.innerHTML=r,e.titleArr=[],e.createTitleNumber(n),t(n.innerHTML)}))}}class r{static sideWrapperDom;static lastRootBreadcrumbText;static install(e,t){e.doneEach((function(){let e=document.getElementsByClassName("sidebar-nav")[0].querySelector("ul").cloneNode(!0);r.initRootDom(e),r.removeEvent(),r.bindEvent(),r.bindCollapseClass(e),r.replaceSidebar()}))}static initRootDom(e){let t=r.getRootBreadcrumbText();t!==r.lastRootBreadcrumbText&&(r.sideWrapperDom=e),r.lastRootBreadcrumbText=t}static getRootBreadcrumbText(){return document.getElementsByClassName("sidebar-nav")[0].querySelector("#root-breadcrumb")?.innerHTML}static setLiLevel(e,r){e.classList.add("level-"+r)}static bindCollapseClass(e,t=1){e.children&&Array.from(e.children).forEach((e=>{let n=e.querySelector("ul");r.isPAroundA(e)&&r.deletePAround(e),r.setLiLevel(e,t),n&&(e.firstElementChild.classList.add("hasChild"),r.bindCollapseClass(n,t+1))}))}static deletePAround(e){let r=e.firstElementChild,t=r.firstElementChild;r.classList.contains("active")&&e.classList.add("active"),e.innerHTML=t.outerHTML}static isPAroundA(e){let r=e.firstElementChild;return"P"===r.tagName&&"A"===r?.firstElementChild?.tagName}static removeEvent(){r.sideWrapperDom.removeEventListener("transitionend",r.transitionendEvent),r.sideWrapperDom.removeEventListener("click",r.ulClickEvent)}static bindEvent(){r.sideWrapperDom.addEventListener("transitionend",r.transitionendEvent),r.sideWrapperDom.addEventListener("click",r.ulClickEvent)}static findLI(e){if("UL"===e.tagName)return null;for(;"LI"!==e.tagName;){if(e.classList.contains("sidebar-nav")||"P"===e.tagName)return void(e=null);e=e.parentNode}return e}static replaceSidebar(){document.getElementsByClassName("sidebar-nav")[0].querySelector("ul").replaceWith(r.sideWrapperDom)}static transitionendEvent(e){e.target.style.height=""}static bindDomOffsetHeight(e){e.offsetHeight&&e.setAttribute("data-height",e.offsetHeight)}static getDomOffsetHeight(e){return e.getAttribute("data-height")}static changeActiveClass(e){let r=document.getElementsByClassName("active");Array.from(r).forEach((e=>{e.classList.remove("active")})),e.classList.add("active")}static changeUlHeight(e){e.style.height=r.getDomOffsetHeight(e)+"px"}static changeTagExtendStatus(e,t){("A"!==e.tagName||e.parentNode.classList.contains("active"))&&(r.changeUlHeight(t),t.classList.contains("collapse-hide")?setTimeout((()=>{t.classList.remove("collapse-hide"),e.classList.remove("collapse-menu-hide")})):setTimeout((()=>{t.classList.add("collapse-hide"),e.classList.add("collapse-menu-hide")})))}static ulClickEvent(e){let t=e.target.nextElementSibling,n=r.findLI(e.target);"UL"===t?.tagName&&(r.bindDomOffsetHeight(t),r.changeTagExtendStatus(e.target,t)),n&&r.changeActiveClass(n)}}class n{static install(e,r){e.doneEach((function(){let e=document.getElementsByClassName("sidebar-nav")[0].querySelector("ul").querySelector(".active");n.initRoot(),n.ergodicLI(e),n.addRootDir(),n.generateBreadcrumb(),setTimeout(n.appendBreadcrumbRoot2Body)}))}static breadcrumbList=[];static breadcrumbRoot=null;static intervalText="/";static initRoot(){n.breadcrumbList=[],n.breadcrumbRoot=document.createElement("div"),n.breadcrumbRoot.classList.add("breadcrumb")}static addRootDir(){let e=n.getRootBreadcrumbText();e&&n.breadcrumbList.length&&n.breadcrumbList.unshift(e)}static getRootBreadcrumbText(){return document.getElementsByClassName("sidebar-nav")[0].querySelector("#root-breadcrumb")?.innerHTML}static ergodicLI(e){if(e)for(;!e.classList.contains("sidebar-nav");){if("LI"===e.tagName){let r=e.firstElementChild.innerText;n.breadcrumbList.unshift(r)}e=e.parentNode}}static createSubTitle(e){let r=document.createElement("span");return r.classList.add("breadcrumb-title"),r.innerText=e,r}static generateBreadcrumb(){n.breadcrumbList.forEach(((e,r)=>{let t=n.createSubTitle(e);n.insertSubDom2Root(t),n.breadcrumbList[r+1]&&n.insertBeforeInterval()}))}static insertSubDom2Root(e){n.breadcrumbRoot.appendChild(e)}static insertBeforeInterval(){let e=document.createElement("span");e.innerText=n.intervalText,e.classList.add("breadcrumb-interval"),n.insertSubDom2Root(e)}static appendBreadcrumbRoot2Body(){let e=document.querySelector(".app-nav");e.insertBefore(n.breadcrumbRoot,e.firstElementChild)}}var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"wrapper"},[e._e(),e._v(" "),t("p",[e._v("最后更新日期："+e._s(e.date))])])};a._withStripped=!0;t(4);var i=function(e,r,t,n,a,i,s,o){var d,l="function"==typeof e?e.options:e;if(r&&(l.render=r,l.staticRenderFns=[],l._compiled=!0),l._scopeId="data-v-f4fc527e",d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(e,r){return d.call(r),c(e,r)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,d):[d]}return{exports:e,options:l}}({name:"author-info",props:["date"],data:()=>({author:"张魁堡"})},a);i.options.__file="docsify/src/components/auth-info.vue";const s=i.exports,o="张魁堡的笔记";let d=window.$docsify?window.$docsify:{name:o,loadSidebar:!0,loadNavbar:"docsify/assets/_navbar.md",alias:{".*/_navbar.md":"docsify/assets/_navbar.md","/_sidebar.md":"技术笔记/编程基础/_sidebar.md",[encodeURI("/技术笔记/编程基础/.*/_sidebar.md")]:"技术笔记/编程基础/_sidebar.md",[encodeURI("/技术笔记/底层知识/.*/_sidebar.md")]:"技术笔记/底层知识/_sidebar.md",[encodeURI("/技术笔记/解决方案/.*/_sidebar.md")]:"技术笔记/解决方案/_sidebar.md",[encodeURI("/技术笔记/开发工具/.*/_sidebar.md")]:"技术笔记/开发工具/_sidebar.md",[encodeURI("/技术笔记/代码库/.*/_sidebar.md")]:"技术笔记/代码库/_sidebar.md",[encodeURI("/阅读笔记/电子栏目/.*/_sidebar.md")]:"阅读笔记/电子栏目/_sidebar.md",[encodeURI("/阅读笔记/读书/.*/_sidebar.md")]:"阅读笔记/读书/_sidebar.md",[encodeURI("/阅读笔记/好句/.*/_sidebar.md")]:"阅读笔记/好句/_sidebar.md",[encodeURI("/阅读笔记/知识/.*/_sidebar.md")]:"阅读笔记/知识/_sidebar.md"},auto2top:!0,formatUpdated:"{YYYY}-{MM}-{DD} {HH}:{mm}",notFoundPage:"docsify/assets/_404.md",topMargin:70,search:{placeholder:"搜索",noData:"找不到结果"},copyCode:{buttonText:"复制",errorText:"复制失败",successText:"复制成功"},customPageTitle:{prefix:o,seprator:"|"},toc:{tocMaxLevel:6,target:"H2, H3, H4, h5, h6"},progress:{position:"top",color:"var(--theme-color,#42b983)",height:"3px"}};function l(e){d.plugins?d.plugins.push(e.install):d.plugins=[e.install]}window.$docsify=d,l(e),l(r),l(n),function(e){let r={[e.name]:e};d.vueComponents?Object.assign(d.vueComponents,r):d.vueComponents=r}(s),void 0!==navigator.serviceWorker&&navigator.serviceWorker.register("docsify/assets/sw.js")})()})();