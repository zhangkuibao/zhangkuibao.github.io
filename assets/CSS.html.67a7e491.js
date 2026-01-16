import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as p}from"./app.382dc3cd.js";const e={},t=p(`<h2 id="\u6587\u672C\u4E24\u7AEF\u5BF9\u9F50" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u4E24\u7AEF\u5BF9\u9F50" aria-hidden="true">#</a> \u6587\u672C\u4E24\u7AEF\u5BF9\u9F50</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> justify<span class="token punctuation">;</span>
  <span class="token property">text-align-last</span><span class="token punctuation">:</span> justify<span class="token punctuation">;</span>
  <span class="token property">text-justify</span><span class="token punctuation">:</span> distribute-all-lines<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u591A\u884C\u6587\u672C\u8D85\u51FA\u6253\u70B9" tabindex="-1"><a class="header-anchor" href="#\u591A\u884C\u6587\u672C\u8D85\u51FA\u6253\u70B9" aria-hidden="true">#</a> \u591A\u884C\u6587\u672C\u8D85\u51FA\u6253\u70B9</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span> //\u884C\u6570
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="png-\u5C0F\u56FE\u6807\u8D4B\u8272" tabindex="-1"><a class="header-anchor" href="#png-\u5C0F\u56FE\u6807\u8D4B\u8272" aria-hidden="true">#</a> png \u5C0F\u56FE\u6807\u8D4B\u8272</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 20px \u5904\u4E3A\u5BBD\u5EA6\uFF0C30px \u5904\u4E3A\u9AD8\u5EA6\uFF0C\u5728 filter \u4E2D\u8BBE\u7F6E\u989C\u8272 */</span>
<span class="token selector">.demo:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;./image/top.png&quot;</span><span class="token punctuation">)</span></span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> 20px 30px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -20px<span class="token punctuation">;</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> 20px solid transparent<span class="token punctuation">;</span>
  <span class="token comment">/* \u5728 filter \u4E2D\u8BBE\u7F6E\u989C\u8272 */</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span> 20px 0px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[t];function i(o,l){return s(),a("div",null,c)}const d=n(e,[["render",i],["__file","CSS.html.vue"]]);export{d as default};
