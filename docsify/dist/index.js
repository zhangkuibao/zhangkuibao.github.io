(()=>{"use strict";var e={449:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(711),a=t.n(n)()((function(e){return e[1]}));a.push([e.id,".breadcrumb {\r\n  /* position: fixed;\r\n    top: 0;\r\n    left: 300px; */\r\n  position: absolute;\r\n  left: 20px;\r\n  cursor: context-menu;\r\n  display: flex;\r\n  align-items: center;\r\n  max-width: 50%;\r\n  white-space: nowrap;\r\n  overflow: auto;\r\n}\r\n\r\n.breadcrumb .breadcrumb-interval {\r\n  margin: 0 10px;\r\n}\r\n\r\n/* 原始导航栏调整开始 */\r\n.app-nav {\r\n  position: fixed;\r\n  margin: 0;\r\n  height: 60px;\r\n  background: #fff;\r\n  width: calc(100% - 300px);\r\n  /* border-bottom: 1px solid; */\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  padding: 0;\r\n  box-shadow: 0 2px 8px #f0f1f2;\r\n}\r\n\r\n.app-nav > ul {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-nav.no-badge {\r\n  margin: 0;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  /* 改变原来按钮热区大小 */\r\n  /* .sidebar-toggle {\r\n      padding: 0 0 10px 10px;\r\n    } */\r\n  /* my pin */\r\n  .app-nav {\r\n    width: 100%;\r\n    height: 40px;\r\n  }\r\n\r\n  .breadcrumb {\r\n    max-width: 150px;\r\n  }\r\n\r\n  .sidebar-pin {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* 原始导航栏调整结束 */\r\n",""]);const i=a},873:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(711),a=t.n(n)()((function(e){return e[1]}));a.push([e.id,"/* 滚动条样式 */\r\n\r\n::-webkit-scrollbar {\r\n    width: 8px;\r\n    height: 0px;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background: #eee;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  ::-webkit-scrollbar-thumb {\r\n    background: rgb(219, 219, 219);\r\n    border-radius: 8px;\r\n  }\r\n\r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: rgb(219, 219, 219);\r\n  }\r\n",""]);const i=a},667:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(711),a=t.n(n)()((function(e){return e[1]}));a.push([e.id,'.sidebar ul li > a,\r\n.sidebar ul li > p {\r\n  transition: color 0.3s;\r\n}\r\n\r\n.sidebar ul .active > a {\r\n  background-color: rgba(66, 185, 131, 0.1);\r\n}\r\n\r\na {\r\n  text-decoration: none !important;\r\n}\r\n\r\n.sidebar li.active > a,\r\n.sidebar li.active > p {\r\n  position: relative;\r\n}\r\n\r\n.sidebar li.active > a,\r\n.sidebar li.active > p {\r\n  position: relative;\r\n}\r\n\r\n.sidebar ul {\r\n  margin: 0;\r\n}\r\n\r\n.sidebar-nav ul {\r\n  overflow: hidden;\r\n  transition: 0.3s;\r\n  height: auto;\r\n}\r\n\r\n.sidebar-nav ul.collapse-hide {\r\n  height: 0 !important;\r\n}\r\n\r\n.sidebar-nav .hasChild {\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n\r\n.sidebar-nav .hasChild::before {\r\n  content: "";\r\n  display: block;\r\n  position: absolute;\r\n  right: 1em;\r\n  top: 50%;\r\n  transform: rotateZ(45deg);\r\n  width: 7px;\r\n  height: 2px;\r\n  background: #000;\r\n  transition: 0.3s;\r\n}\r\n\r\n.sidebar-nav .hasChild::after {\r\n  content: "";\r\n  display: block;\r\n  position: absolute;\r\n  right: calc(1em + 4.5px);\r\n  top: 50%;\r\n  transform: rotateZ(-45deg);\r\n  width: 7px;\r\n  height: 2px;\r\n  background: #000;\r\n  transition: 0.3s;\r\n}\r\n.sidebar-nav .hasChild:hover::before,\r\n.sidebar-nav .hasChild:hover::after {\r\n  background: var(--theme-color, #42b983);\r\n}\r\n\r\n.sidebar ul li > a:hover,\r\n.sidebar ul li > p:hover {\r\n  color: rgba(66, 185, 131, 1);\r\n}\r\n.sidebar-nav .hasChild.collapse-menu-hide::before {\r\n  transform: rotateZ(-45deg);\r\n}\r\n\r\n.sidebar-nav .hasChild.collapse-menu-hide::after {\r\n  transform: rotateZ(45deg);\r\n}\r\n\r\n.sidebar-nav .level-1 > p,\r\n.sidebar-nav .level-1 > a {\r\n  padding-left: 10px;\r\n}\r\n\r\n.sidebar-nav .level-2 > p,\r\n.sidebar-nav .level-2 > a {\r\n  padding-left: 20px;\r\n}\r\n\r\n.sidebar-nav .level-3 > p,\r\n.sidebar-nav .level-3 > a {\r\n  padding-left: 30px;\r\n}\r\n\r\n.sidebar-nav .level-4 > p,\r\n.sidebar-nav .level-4 > a {\r\n  padding-left: 40px;\r\n}\r\n\r\n.sidebar-nav .level-5 > p,\r\n.sidebar-nav .level-5 > a {\r\n  padding-left: 50px;\r\n}\r\n\r\n.sidebar ul p.active > a {\r\n  border-right: 2px solid;\r\n  color: var(--theme-color, #42b983);\r\n  font-weight: 600;\r\n}\r\n\r\n.sidebar-title {\r\n  text-align: center;\r\n  color: #a1a5a9;\r\n  font-weight: 700;\r\n  cursor: context-menu;\r\n  user-select: none;\r\n}\r\n',""]);const i=a},657:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(711),a=t.n(n),i=t(449),s=t(873),o=t(667),d=a()((function(e){return e[1]}));d.i(i.Z),d.i(s.Z),d.i(o.Z),d.push([e.id,"\n",""]);const l=d},711:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t=e(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(e,t,n){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var o=0;o<e.length;o++){var d=[].concat(e[o]);n&&a[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),r.push(d))}},r}},929:e=>{var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var i={},s=[],o=0;o<e.length;o++){var d=e[o],l=n.base?d[0]+n.base:d[0],c=i[l]||0,u="".concat(l," ").concat(c);i[l]=c+1;var m=t(u),b={css:d[1],media:d[2],sourceMap:d[3]};-1!==m?(r[m].references++,r[m].updater(b)):r.push({identifier:u,updater:a(b,n),references:1}),s.push(u)}return s}function a(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t.update(e=r)}else t.remove()}}e.exports=function(e,a){var i=n(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var o=t(i[s]);r[o].references--}for(var d=n(e,a),l=0;l<i.length;l++){var c=t(i[l]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}i=d}}},156:e=>{var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},738:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r),r}},195:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},753:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n=t.css,a=t.media,i=t.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(n,e)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},666:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var i=r[n]={id:n,exports:{}};return e[n](i,i.exports,t),i.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e=t(929),r=t.n(e),n=t(753),a=t.n(n),i=t(156),s=t.n(i),o=t(195),d=t.n(o),l=t(738),c=t.n(l),u=t(666),m=t.n(u),b=t(657),p={};p.styleTagTransform=m(),p.setAttributes=d(),p.insert=s().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=c(),r()(b.Z,p),b.Z&&b.Z.locals&&b.Z.locals;class v{titleArr=[];static transferTitleNumber(e,r){return 1===e.length?["","一","二","三","四","五","六","七","八","九","十"][e[0]]+"、"+r:e+" "+r}static synthesisNumber(e,r){r=Number(r),v.titleArr[r]=v.titleArr[r]?v.titleArr[r]+1:1,v.titleArr=v.titleArr.slice(0,r+1);let t=v.titleArr.filter((e=>e)).join(".");return v.transferTitleNumber(t,e)}static handleTitle(e){if(!e.children)return;let r=e.firstElementChild?.firstElementChild;if(r&&"参考"!==r.innerText){let t=e.tagName[1];r.innerText=v.synthesisNumber(r.innerText,t)}}static createTitleNumber(e){Array.from(e.children).forEach((e=>{2==e.tagName.length&&"H1"!==e.tagName&&"H"===e.tagName[0]&&v.handleTitle(e)}))}static install(e,r){e.afterEach((function(e,r){let t=document.createElement("div");t.innerHTML=e,v.titleArr=[],v.createTitleNumber(t),r(t.innerHTML)}))}}class h{static sideWrapperDom;static lastRootBreadcrumbText;static install(e,r){e.doneEach((function(){let e=document.getElementsByClassName("sidebar-nav")[0].querySelector("ul").cloneNode(!0);h.initRootDom(e),h.removeEvent(),h.bindEvent(),h.bindCollapseClass(e),h.replaceSidebar()}))}static initRootDom(e){let r=h.getRootBreadcrumbText();r!==h.lastRootBreadcrumbText&&(h.sideWrapperDom=e),h.lastRootBreadcrumbText=r}static getRootBreadcrumbText(){return document.getElementsByClassName("sidebar-nav")[0].querySelector("#root-breadcrumb")?.innerHTML}static setLiLevel(e,r){e.classList.add("level-"+r)}static bindCollapseClass(e,r=1){e.children&&Array.from(e.children).forEach((e=>{let t=e.querySelector("ul");h.isPAroundA(e)&&h.deletePAround(e),h.setLiLevel(e,r),t&&(e.firstElementChild.classList.add("hasChild"),h.bindCollapseClass(t,r+1))}))}static deletePAround(e){let r=e.firstElementChild,t=r.firstElementChild;r.classList.contains("active")&&e.classList.add("active"),e.innerHTML=t.outerHTML}static isPAroundA(e){let r=e.firstElementChild;return"P"===r.tagName&&"A"===r?.firstElementChild?.tagName}static removeEvent(){h.sideWrapperDom.removeEventListener("transitionend",h.transitionendEvent),h.sideWrapperDom.removeEventListener("click",h.ulClickEvent)}static bindEvent(){h.sideWrapperDom.addEventListener("transitionend",h.transitionendEvent),h.sideWrapperDom.addEventListener("click",h.ulClickEvent)}static findLI(e){if("UL"===e.tagName)return null;for(;"LI"!==e.tagName;){if(e.classList.contains("sidebar-nav")||"P"===e.tagName)return void(e=null);e=e.parentNode}return e}static replaceSidebar(){document.getElementsByClassName("sidebar-nav")[0].querySelector("ul").replaceWith(h.sideWrapperDom)}static transitionendEvent(e){e.target.style.height=""}static bindDomOffsetHeight(e){e.offsetHeight&&e.setAttribute("data-height",e.offsetHeight)}static getDomOffsetHeight(e){return e.getAttribute("data-height")}static changeActiveClass(e){let r=document.getElementsByClassName("active");Array.from(r).forEach((e=>{e.classList.remove("active")})),e.classList.add("active")}static changeUlHeight(e){e.style.height=h.getDomOffsetHeight(e)+"px"}static changeTagExtendStatus(e,r){("A"!==e.tagName||e.parentNode.classList.contains("active"))&&(h.changeUlHeight(r),r.classList.contains("collapse-hide")?setTimeout((()=>{r.classList.remove("collapse-hide"),e.classList.remove("collapse-menu-hide")})):setTimeout((()=>{r.classList.add("collapse-hide"),e.classList.add("collapse-menu-hide")})))}static ulClickEvent(e){let r=e.target.nextElementSibling,t=h.findLI(e.target);"UL"===r?.tagName&&(h.bindDomOffsetHeight(r),h.changeTagExtendStatus(e.target,r)),t&&h.changeActiveClass(t)}}class f{static install(e,r){e.doneEach((function(){let e=document.getElementsByClassName("sidebar-nav")[0].querySelector("ul").querySelector(".active");f.initRoot(),f.ergodicLI(e),f.addRootDir(),f.generateBreadcrumb(),f.appendBreadcrumbRoot2Body()}))}static breadcrumbList=[];static breadcrumbRoot=null;static intervalText="/";static initRoot(){f.breadcrumbList=[],f.breadcrumbRoot=document.createElement("div"),f.breadcrumbRoot.classList.add("breadcrumb")}static addRootDir(){let e=f.getRootBreadcrumbText();e&&f.breadcrumbList.length&&f.breadcrumbList.unshift(e)}static getRootBreadcrumbText(){return document.getElementsByClassName("sidebar-nav")[0].querySelector("#root-breadcrumb")?.innerHTML}static ergodicLI(e){if(e)for(;!e.classList.contains("sidebar-nav");){if("LI"===e.tagName){let r=e.firstElementChild.innerText;f.breadcrumbList.unshift(r)}e=e.parentNode}}static createSubTitle(e){let r=document.createElement("span");return r.classList.add("breadcrumb-title"),r.innerText=e,r}static generateBreadcrumb(){f.breadcrumbList.forEach(((e,r)=>{let t=f.createSubTitle(e);f.insertSubDom2Root(t),f.breadcrumbList[r+1]&&f.insertBeforeInterval()}))}static insertSubDom2Root(e){f.breadcrumbRoot.appendChild(e)}static insertBeforeInterval(){let e=document.createElement("span");e.innerText=f.intervalText,e.classList.add("breadcrumb-interval"),f.insertSubDom2Root(e)}static appendBreadcrumbRoot2Body(){let e=document.querySelector(".app-nav");e.insertBefore(f.breadcrumbRoot,e.firstElementChild)}}const g="张魁堡的笔记",x={name:g,loadSidebar:!0,loadNavbar:"docsify/assets/_navbar.md",alias:{".*/_navbar.md":"docsify/assets/_navbar.md","/_sidebar.md":"技术笔记/编程基础/_sidebar.md",[encodeURI("/技术笔记/编程基础/.*/_sidebar.md")]:"技术笔记/编程基础/_sidebar.md",[encodeURI("/技术笔记/底层知识/.*/_sidebar.md")]:"技术笔记/底层知识/_sidebar.md",[encodeURI("/技术笔记/解决方案/.*/_sidebar.md")]:"技术笔记/解决方案/_sidebar.md",[encodeURI("/技术笔记/开发工具/.*/_sidebar.md")]:"技术笔记/开发工具/_sidebar.md",[encodeURI("/技术笔记/代码库/.*/_sidebar.md")]:"技术笔记/解决方案/_sidebar.md"},auto2top:!0,formatUpdated:"{YYYY}-{MM}-{DD} {HH}:{mm}",notFoundPage:"docsify/assets/_404.md",topMargin:70,sidebarDisplayLevel:3,search:{placeholder:"搜索",noData:"找不到结果"},copyCode:{buttonText:"复制",errorText:"复制失败",successText:"复制成功"},customPageTitle:{prefix:g,seprator:"|"},toc:{tocMaxLevel:6,target:"H2, H3, H4, h5, h6"},progress:{position:"top",color:"var(--theme-color,#42b983)",height:"3px"}};function y(e){x.plugins?x.plugins.push(e.install):x.plugins=[e.install]}window.$docsify=x,y(v),y(h),y(f),function(e){let r={[e.name]:e};x.vueComponents?Object.assign(x.vueComponents,r):x.vueComponents=r}({name:"author-info",template:'\n  <div style="color: #567;">\n    <p v-if="false">作者：{{author}}</p>\n    <p>最后更新日期：{{date}}</p>\n  </div>',props:["date"],data:()=>({author:"张魁堡"})}),void 0!==navigator.serviceWorker&&navigator.serviceWorker.register("docsify/assets/sw.js")})()})();