import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c,a as n,e as t,w as o,g as e,f as p,h as i}from"./app.cb0a7cdb.js";const d={},h=n("p",null,"\u672C\u671F\u76EE\u6807\uFF1A\u6E05\u7A7A inbox\u3002",-1),u=n("h2",{id:"\u524D\u7AEF\u6027\u80FD\u3010\u5DF2\u5B8C\u6210\u3011-2023-07-21",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u524D\u7AEF\u6027\u80FD\u3010\u5DF2\u5B8C\u6210\u3011-2023-07-21","aria-hidden":"true"},"#"),e(" \u524D\u7AEF\u6027\u80FD\u3010\u5DF2\u5B8C\u6210\u3011\uFF082023-07-21\uFF09")],-1),_=e("\u5B8C\u5584\u4E4B\u524D\u7F16\u5199\u7684\u4E24\u7BC7\u6587\u7AE0\uFF1A "),g=e("\u5982\u4F55\u8861\u91CF\u7F51\u7AD9\u6027\u80FD"),m=e("h5 \u9879\u76EE\u4F18\u5316\u5B9E\u8DF5"),k=e("\u65B0\u7F16\u5199\u4E00\u7BC7\u6587\u7AE0\u603B\u7ED3\u7F51\u7AD9\u4F18\u5316\u7684\u5404\u79CD\u7B56\u7565\u3002 "),E=e("\u7F51\u7AD9\u4F18\u5316\u7B56\u7565"),f=p(`<h2 id="postmessage\u3010\u5DF2\u5B8C\u6210\u3011-2023-07-21" tabindex="-1"><a class="header-anchor" href="#postmessage\u3010\u5DF2\u5B8C\u6210\u3011-2023-07-21" aria-hidden="true">#</a> postMessage\u3010\u5DF2\u5B8C\u6210\u3011\uFF082023-07-21\uFF09</h2><p>postMessage \u662F\u5B9E\u73B0\u8DE8\u7AD9\u901A\u4FE1\u7684\u4E00\u79CD\u624B\u6BB5\uFF0C\u901A\u4FE1\u5BF9\u8C61\u53EA\u80FD\u662F\u4ECE\u5F53\u524D\u9875\u9762\u6253\u5F00\u7684\u5B50\u9875\u9762\uFF08iframe\u3001window.open\uFF09\u3002</p><ul><li><p>\u53D1\u9001\u6D88\u606F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>otherWindow<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> targetOrigin<span class="token punctuation">,</span> <span class="token punctuation">[</span>transfer<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>otherWindow \u662F\u4E00\u4E2A\u5176\u4ED6\u7A97\u53E3\u7684\u5F15\u7528\uFF0C\u6BD4\u5982 iframe \u7684 contentWindow \u5C5E\u6027\u3001\u6267\u884C window.open \u8FD4\u56DE\u7684\u7A97\u53E3\u5BF9\u8C61\u3001\u6216\u8005\u662F\u547D\u540D\u8FC7\u6216\u6570\u503C\u7D22\u5F15\u7684 window.frames\u3002</p></li><li><p>\u63A5\u6536\u6D88\u606F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> origin <span class="token operator">=</span> event<span class="token punctuation">.</span>origin <span class="token operator">||</span> event<span class="token punctuation">.</span>originalEvent<span class="token punctuation">.</span>origin<span class="token punctuation">;</span> <span class="token comment">// \u53D1\u9001\u6D88\u606F\u7684\u6E90\u7F51\u7AD9</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u524D\u7AEF\u6D41\u5A92\u4F53" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u6D41\u5A92\u4F53" aria-hidden="true">#</a> \u524D\u7AEF\u6D41\u5A92\u4F53</h2><ul><li>\u662F\u4EC0\u4E48\uFF1F</li><li>\u5E94\u7528\u5728\u54EA\u91CC\uFF1F</li><li>\u600E\u4E48\u7528\uFF1F</li></ul><h2 id="\u5FAE\u524D\u7AEF\u3010\u5DF2\u5B8C\u6210\u3011-2023-07-21" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u524D\u7AEF\u3010\u5DF2\u5B8C\u6210\u3011-2023-07-21" aria-hidden="true">#</a> \u5FAE\u524D\u7AEF\u3010\u5DF2\u5B8C\u6210\u3011\uFF082023-07-21\uFF09</h2>`,6),b=e("\u6307\u5BFC\u6587\u7AE0\uFF1A"),v={href:"https://mp.weixin.qq.com/s/LeVtVFk_nNHNvbIxQWYORQ",target:"_blank",rel:"noopener noreferrer"},B=e("https://mp.weixin.qq.com/s/LeVtVFk_nNHNvbIxQWYORQ"),w=e("\u5FAE\u524D\u7AEF\u5B9E\u73B0\u65B9\u6848"),x=n("h2",{id:"react",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react","aria-hidden":"true"},"#"),e(" react")],-1),A=n("h2",{id:"\u6587\u7AE0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6587\u7AE0","aria-hidden":"true"},"#"),e(" \u6587\u7AE0")],-1),q={href:"https://juejin.cn/post/6844904008679686152",target:"_blank",rel:"noopener noreferrer"},y=e("\u4E0D\u5BB9\u9519\u8FC7\u7684 Babel7 \u77E5\u8BC6"),C={href:"https://github.com/mqyqingfeng/Blog",target:"_blank",rel:"noopener noreferrer"},j=e("mqyqingfeng/Blog"),N={href:"https://blog.appsignal.com/2022/09/28/minimize-heap-allocations-in-nodejs.html",target:"_blank",rel:"noopener noreferrer"},D=e("Node.js \u5982\u4F55\u67E5\u770B\u5185\u5B58\u6CC4\u6F0F"),V=e(" \u8FD9\u7BC7\u957F\u6587\u6709\u4E00\u4E2A\u90E8\u5206\uFF0C\u8BE6\u7EC6\u4ECB\u7ECD\u4E86 Node.js \u67E5\u770B\u5185\u5B58\u5360\u7528\u7684\u51E0\u79CD\u65B9\u6CD5\u3002"),L={href:"https://mp.weixin.qq.com/s/8dkgEtH5r5GgdwaT-DAysw",target:"_blank",rel:"noopener noreferrer"},H=e("https://mp.weixin.qq.com/s/8dkgEtH5r5GgdwaT-DAysw"),R=e("\u7F13\u5B58 CORS \u8BF7\u6C42: "),T={href:"https://httptoolkit.tech/blog/cache-your-cors/",target:"_blank",rel:"noopener noreferrer"},W=e("https://httptoolkit.tech/blog/cache-your-cors/"),F=e("ts \u7C7B\u578B\u6536\u675F "),I={href:"https://blog.csdn.net/xiaoyaoluntian/article/details/126737247",target:"_blank",rel:"noopener noreferrer"},O=e("https://blog.csdn.net/xiaoyaoluntian/article/details/126737247"),Q=e("\u7528\u9E3D\u5B50\u7684\u6545\u4E8B\u89E3\u91CA https\uFF0C\u5F88\u5F62\u8C61\u3002 "),M={href:"https://baida.dev/articles/https-explained-with-carrier-pigeons",target:"_blank",rel:"noopener noreferrer"},S=e("HTTPS explained with carrier pigeons"),G=e("chrome \u5185\u90E8\u5DE5\u4F5C\u539F\u7406\uFF1A"),Y={href:"https://developer.chrome.com/blog/inside-browser-part1",target:"_blank",rel:"noopener noreferrer"},z=e("https://developer.chrome.com/blog/inside-browser-part1");function P(J,K){const a=i("RouterLink"),s=i("ExternalLinkIcon");return l(),c("div",null,[h,u,n("ul",null,[n("li",null,[_,n("ul",null,[n("li",null,[t(a,{to:"/posts/technology/%E4%BC%98%E5%8C%96/%E5%A6%82%E4%BD%95%E8%A1%A1%E9%87%8F%E7%BD%91%E7%AB%99%E6%80%A7%E8%83%BD.html"},{default:o(()=>[g]),_:1})]),n("li",null,[t(a,{to:"/posts/technology/%E4%BC%98%E5%8C%96/h5%E9%A1%B9%E7%9B%AE%E4%BC%98%E5%8C%96%E5%AE%9E%E8%B7%B5.html"},{default:o(()=>[m]),_:1})])])]),n("li",null,[k,n("ul",null,[n("li",null,[t(a,{to:"/posts/technology/%E4%BC%98%E5%8C%96/%E7%BD%91%E7%AB%99%E4%BC%98%E5%8C%96%E7%AD%96%E7%95%A5.html"},{default:o(()=>[E]),_:1})])])])]),f,n("p",null,[b,n("a",v,[B,t(s)])]),n("p",null,[t(a,{to:"/posts/technology/%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/%E5%BE%AE%E5%89%8D%E7%AB%AF%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:o(()=>[w]),_:1})]),x,A,n("p",null,[n("a",q,[y,t(s)])]),n("p",null,[n("a",C,[j,t(s)])]),n("p",null,[n("a",N,[D,t(s)]),V]),n("p",null,[n("a",L,[H,t(s)])]),n("p",null,[R,n("a",T,[W,t(s)])]),n("p",null,[F,n("a",I,[O,t(s)])]),n("p",null,[Q,n("a",M,[S,t(s)])]),n("p",null,[G,n("a",Y,[z,t(s)])])])}const Z=r(d,[["render",P],["__file","\u5B66\u4E60\u8BA1\u5212-2023-06-07.html.vue"]]);export{Z as default};
