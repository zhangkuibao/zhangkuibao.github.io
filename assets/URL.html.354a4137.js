import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,a as s,e as p,f as a,g as r,h as c}from"./app.cb0a7cdb.js";const l={},i=a('<p>URL \u63A5\u53E3\u7528\u4E8E\u89E3\u6790\uFF0C\u6784\u9020\uFF0C\u89C4\u8303\u5316\u548C\u7F16\u7801 URLs\u3002</p><p>\u4E00\u4E2A\u5B8C\u6574\u7684 url \u5305\u62EC\uFF1A<code>{\u534F\u8BAE}://{\u7528\u6237\u540D}:{\u5BC6\u7801}@{\u4E3B\u673A\u540D\uFF08\u57DF\u540D\uFF09}:{\u7AEF\u53E3}#{hash}?{query}</code></p><h2 id="\u6784\u9020\u5668" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u5668" aria-hidden="true">#</a> \u6784\u9020\u5668</h2><p>\u53EF\u4EE5\u4F7F\u7528 new URL() \u6765\u6784\u5EFA\u4E00\u4E2A URL \u5BF9\u8C61\u3002</p><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h2><p>\u4E00\u4E2A url \u5BF9\u8C61 <code>new URL(&#39;http://zkb:123@localhost:3000/zhangkb?name=zkb&amp;age=18#/escript/url&#39;)</code>\uFF0C\u5305\u542B\u5982\u4E0B\u5C5E\u6027\u3002</p>',6),u={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams",target:"_blank",rel:"noopener noreferrer"},d=r("URLSearchParams \u5BF9\u8C61"),k=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">URL</span> <span class="token operator">=</span>  <span class="token punctuation">{</span>
    <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token string">&quot;#/escript/url&quot;</span>       <span class="token comment">// \u8DDF\u5728 # \u4E4B\u540E\u7684\u5B57\u7B26\u4E32</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;localhost:3000&quot;</span>      <span class="token comment">// \u57DF\u540D+\u7AEF\u53E3</span>
    <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span>       <span class="token comment">// \u4EC5\u57DF\u540D</span>
    <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&quot;http://zkb:123@localhost:3000/#/escript/url&quot;</span>     <span class="token comment">// \u5B8C\u6574 url</span>
    <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:3000&quot;</span> <span class="token comment">// \u534F\u8BAE+\u57DF\u540D+\u7AEF\u53E3</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span>             <span class="token comment">// \u5BC6\u7801</span>
    <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&quot;/zhangkb&quot;</span>        <span class="token comment">// \u8D44\u6E90\u8DEF\u5F84</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">&quot;3000&quot;</span>
    <span class="token literal-property property">protocol</span><span class="token operator">:</span> <span class="token string">&quot;http:&quot;</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">&quot;?name=zkb&amp;age=18&quot;</span>  <span class="token comment">// \u8DDF\u5728 ? \u540E\u7684\u53C2\u6570\u5B57\u7B26\u4E32\uFF0C\u9700\u8981\u5728 # \u4E4B\u524D</span>
    <span class="token literal-property property">searchParams</span><span class="token operator">:</span> URLSearchParams <span class="token punctuation">{</span><span class="token punctuation">}</span>    <span class="token comment">// search \u4E2D\u952E\u503C\u5BF9\u7684\u4E8C\u7EF4\u6570\u7EC4\u8FED\u4EE3\u5668\uFF0C[..searchParams] \u53EF\u5F97\u5230 [[&quot;name&quot;, &quot;zkb&quot;],[&quot;age&quot;, &quot;18&quot;]]</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;zkb&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9759\u6001\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5" aria-hidden="true">#</a> \u9759\u6001\u65B9\u6CD5</h2><p>URL \u7C7B\u5305\u542B\u4E24\u4E2A\u9759\u6001\u65B9\u6CD5\u3002</p><h3 id="createobjecturl-object" tabindex="-1"><a class="header-anchor" href="#createobjecturl-object" aria-hidden="true">#</a> createObjectURL(object)</h3><blockquote><p>\u6CE8\u610F\uFF1A\u6B64\u7279\u6027\u5728 Service Worker \u4E2D\u4E0D\u53EF\u7528\uFF0C\u56E0\u4E3A\u5B83\u6709\u53EF\u80FD\u5BFC\u81F4\u5185\u5B58\u6CC4\u6F0F\u3002</p></blockquote><p>\u6839\u636E\u53C2\u6570\u521B\u5EFA\u4E00\u4E2A\u552F\u4E00\u7684 blob \u94FE\u63A5\uFF08\u8BE5\u94FE\u63A5\u534F\u8BAE\u4E3A\u4EE5 blob:\uFF0C\u540E\u8DDF\u552F\u4E00\u6807\u8BC6\u6D4F\u89C8\u5668\u4E2D\u7684\u5BF9\u8C61\u7684\u63A9\u7801\uFF09\u3002\u901A\u5E38\u7528\u6765\u6839\u636E\u56FE\u7247\u7684\u4E8C\u8FDB\u5236\u6570\u636E\u6765\u521B\u5EFA\u56FE\u7247\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;flower.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> myBlob <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">blob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> objectURL <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>myBlob<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myImage <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myImage<span class="token punctuation">.</span>src <span class="token operator">=</span> objectURL<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u53C2\u6570</p><p>\u53C2\u6570\u53EF\u4EE5\u662F File \u5BF9\u8C61\u3001Blob \u5BF9\u8C61\u6216\u8005 MediaSource \u5BF9\u8C61\u3002\u200B</p></li><li><p>blob \u94FE\u63A5\u7684\u751F\u547D\u5468\u671F</p><p>\u8FD9\u4E2A\u65B0\u7684 URL \u5BF9\u8C61\u8868\u793A\u6307\u5B9A\u7684 File \u5BF9\u8C61\u6216 Blob \u5BF9\u8C61\u3002\u5B83\u7684\u751F\u547D\u5468\u671F\u548C\u521B\u5EFA\u5B83\u7684\u7A97\u53E3\u4E2D\u7684 document \u7ED1\u5B9A\u3002</p></li><li><p>\u5185\u5B58\u7BA1\u7406</p><p>\u5728\u6BCF\u6B21\u8C03\u7528 createObjectURL() \u65B9\u6CD5\u65F6\uFF0C\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 URL \u5BF9\u8C61\uFF0C\u5373\u4F7F\u4F60\u5DF2\u7ECF\u7528\u76F8\u540C\u7684\u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\u521B\u5EFA\u8FC7\u3002</p><p>\u5F53\u4E0D\u518D\u9700\u8981\u8FD9\u4E9B URL \u5BF9\u8C61\u65F6\uFF0C\u6BCF\u4E2A\u5BF9\u8C61\u5FC5\u987B\u901A\u8FC7\u8C03\u7528 URL.revokeObjectURL() \u65B9\u6CD5\u6765\u91CA\u653E\u3002</p><p>\u6D4F\u89C8\u5668\u5728 document \u5378\u8F7D\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u91CA\u653E\u5B83\u4EEC\u3002</p></li></ul><h3 id="revokeobjecturl" tabindex="-1"><a class="header-anchor" href="#revokeobjecturl" aria-hidden="true">#</a> revokeObjectURL()</h3><p>\u9500\u6BC1\u4E4B\u524D\u4F7F\u7528 URL.createObjectURL()\u65B9\u6CD5\u521B\u5EFA\u7684 URL \u5B9E\u4F8B\u3002</p>`,10);function m(h,b){const n=c("ExternalLinkIcon");return t(),o("div",null,[i,s("p",null,[s("a",u,[d,p(n)])]),k])}const y=e(l,[["render",m],["__file","URL.html.vue"]]);export{y as default};
