import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.382dc3cd.js";const o={},p=e(`<h2 id="\u4E0D\u540C\u5904" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u5904" aria-hidden="true">#</a> \u4E0D\u540C\u5904</h2><ol><li><p>\u5B9A\u4E49\u53D8\u91CF: less \u7528 <code>@</code> , Sass \u7528 <code>$</code></p></li><li><p>\u5BFC\u5165\u6587\u4EF6: less \u4E00\u6B21\u53EA\u80FD\u5BFC\u5165\u4E00\u4E2A\u6587\u4EF6, sass \u53EF\u4EE5\u540C\u65F6\u5BFC\u5165\u591A\u4E2A</p></li><li><p>\u6269\u5C55: <code>less</code> \u7528 <code>:extend()</code>, <code>sass</code> \u7528 <code>@extend</code>, <code>sass</code> \u9ED8\u8BA4\u5168\u90E8\u66FF\u6362, \u7B49\u540C\u4E8E<code>less</code> \u7684 <code>:extend(.err all)</code><code>sass</code>\u4E0D\u53EF\u4EE5\u6269\u5C55\u590D\u6742\u9009\u62E9\u5668\u5982 <code>div a</code>, <code>less</code> \u53EF\u4EE5</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// less, sass \u540C\u4E00\u6BB5\u6837\u5F0F</span>
<span class="token selector">.error</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.error.intrusion</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;/image/hacked.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.seriousError</span> <span class="token punctuation">{</span>
  &amp;<span class="token punctuation">:</span><span class="token function">extend</span><span class="token punctuation">(</span>.error<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// less, \u6CA1\u6709\u7528all\u6307\u4EE4, \u8FDB\u884C\u4E25\u683C\u5339\u914D, \u5B8C\u5168\u76F8\u7B49\u624D\u4F1A\u6269\u5C55</span>
  <span class="token variable">@extend</span> .error<span class="token punctuation">;</span> <span class="token comment">// sass, \u66FF\u6362\u6240\u6709\u5339\u914D\u7684\u5730\u65B9, \u7C7B\u4F3Cless \u7684all</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// less \u7F16\u8BD1\u540E</span>
<span class="token selector">.error,
.seriousError</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.error.intrusion</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;/image/hacked.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.seriousError</span> <span class="token punctuation">{</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// sass \u7F16\u8BD1\u540E</span>
<span class="token selector">.error,
.seriousError</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.error.intrusion,
.intrusion.seriousError</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;/image/hacked.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.seriousError</span> <span class="token punctuation">{</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="\u7236\u7EA7\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EA7\u9009\u62E9\u5668" aria-hidden="true">#</a> \u7236\u7EA7\u9009\u62E9\u5668 <code>&amp;</code></h3><p><code>Sass</code>: <code>&amp;</code> \u5FC5\u987B\u4F5C\u4E3A\u9009\u62E9\u5668\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26</p><pre><code>\`\`\`css
div {
    one&amp;two {} // less \u53EF\u4EE5\u5728 &amp; \u524D\u76F4\u63A5\u52A0\u5B57\u7B26, Sass\u4E0D\u80FD\u8FD9\u6837\u7528

    one &amp;two {} // \u8FD9\u6837\u90FD\u662F\u53EF\u4EE5\u7684
    one &amp; two {} // \u8FD9\u6837\u90FD\u662F\u53EF\u4EE5\u7684
}

// \u8F93\u51FA
onedivtwo {
    color: red;
}
\`\`\`
</code></pre><h2 id="\u76F8\u540C\u5904" tabindex="-1"><a class="header-anchor" href="#\u76F8\u540C\u5904" aria-hidden="true">#</a> \u76F8\u540C\u5904</h2><ol><li>\u7236\u7EA7\u9009\u62E9\u5668 <code>&amp;</code></li><li>\u5D4C\u5957\u89C4\u5219, \u5141\u8BB8\u5C06\u4E00\u5957 <code>CSS</code> \u6837\u5F0F\u5D4C\u5957\u8FDB\u53E6\u4E00\u5957\u6837\u5F0F\u4E2D\uFF0C\u5185\u5C42\u7684\u6837\u5F0F\u5C06\u5B83\u5916\u5C42(\u6240\u6709\u800C\u975E\u6700\u8FD1)\u7684\u9009\u62E9\u5668\u4F5C\u4E3A\u7236\u9009\u62E9\u5668</li><li>\u5BFC\u5165\u90FD\u7528 <code>@import</code>, \u90FD\u53EF\u5728\u5D4C\u5957\u4E2D\u4F7F\u7528\u5BFC\u5165\u8BED\u53E5</li></ol>`,7),c=[p];function t(i,l){return s(),a("div",null,c)}const d=n(o,[["render",t],["__file","Sass\u4E0ELess\u7684\u5F02\u540C.html.vue"]]);export{d as default};
