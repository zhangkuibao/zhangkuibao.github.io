import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,e as s,g as e,f as r,h as i}from"./app.cb0a7cdb.js";const l={},p=e("js \u80FD\u591F\u51C6\u786E\u8868\u793A\u7684\u6574\u6570\u8303\u56F4\u4E3A "),d=n("code",null,"(-2^53, 2^53)",-1),u=e(" \uFF0CECMAScript standard, chapter*"),_={href:"https://www.ecma-international.org/ecma-262/#sec-ecmascript-language-types-number-type",target:"_blank",rel:"noopener noreferrer"},h=e("6.1.6 The Number Type"),m=e("*"),k=n("h2",{id:"\u9759\u6001\u65B9\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9759\u6001\u65B9\u6CD5","aria-hidden":"true"},"#"),e(" \u9759\u6001\u65B9\u6CD5")],-1),v=n("code",null,"Number.isInteger",-1),b=e(" \u5224\u65AD\u503C\u662F\u5426\u4E3A\u6574\u6570\uFF0C\u6CE8\u610F "),f={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"NaN",-1),N=e(" \u548C\u6B63\u8D1F "),x={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"Infinity",-1),w=e(" \u4E0D\u662F\u6574\u6570\u3002"),I=r(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Number<span class="token punctuation">.</span>isInteger <span class="token operator">=</span>
  Number<span class="token punctuation">.</span>isInteger <span class="token operator">||</span>
  <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span> <span class="token operator">&amp;&amp;</span>
      <span class="token function">isFinite</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
      Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">===</span> value
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u539F\u578B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u65B9\u6CD5" aria-hidden="true">#</a> \u539F\u578B\u65B9\u6CD5</h2><ol><li><code>toFixed(digits)</code>\uFF0C\u53C2\u6570\u4E3A\u5C0F\u6570\u70B9\u540E\u6570\u5B57\u7684\u4E2A\u6570\uFF0C\u591A\u5219\u56DB\u820D\u4E94\u5165\uFF0C\u5C11\u5219\u540E\u9762\u8865 0\uFF0C\u8FD4\u56DE\u503C\u4E3A <code>String</code> \u7C7B\u578B</li></ol><h2 id="\u7528-number-\u8F6C\u6362\u5176\u4ED6\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7528-number-\u8F6C\u6362\u5176\u4ED6\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u7528 Number()\u8F6C\u6362\u5176\u4ED6\u6570\u636E\u7C7B\u578B</h2><ol><li><code>Number(new Date())</code> \u7B49\u540C\u4E8E <code>new Date().getTime()</code></li></ol>`,5);function j(S,z){const a=i("ExternalLinkIcon");return o(),c("div",null,[n("p",null,[p,d,u,n("a",_,[h,s(a)]),m]),k,n("ol",null,[n("li",null,[v,b,n("a",f,[g,s(a)]),N,n("a",x,[y,s(a)]),w])]),I])}const T=t(l,[["render",j],["__file","Number.html.vue"]]);export{T as default};
