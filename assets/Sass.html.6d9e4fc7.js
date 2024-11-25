import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as p}from"./app.cb0a7cdb.js";const e={},t=p(`<h2 id="\u591A\u884C\u6587\u672C\u8D85\u51FA\u6253\u70B9" tabindex="-1"><a class="header-anchor" href="#\u591A\u884C\u6587\u672C\u8D85\u51FA\u6253\u70B9" aria-hidden="true">#</a> \u591A\u884C\u6587\u672C\u8D85\u51FA\u6253\u70B9</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// \u591A\u884C\u6587\u672C\u8D85\u51FA\u6253\u70B9, \u53C2\u6570\u4E3A\u884C\u6570</span>
<span class="token keyword">@mixin</span> <span class="token function">textOver</span><span class="token punctuation">(</span><span class="token variable">$num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> <span class="token variable">$num</span><span class="token punctuation">;</span> <span class="token comment">//\u884C\u6570</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EDD\u5BF9\u5B9A\u4F4D\u6C34\u5E73\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u7EDD\u5BF9\u5B9A\u4F4D\u6C34\u5E73\u5C45\u4E2D" aria-hidden="true">#</a> \u7EDD\u5BF9\u5B9A\u4F4D\u6C34\u5E73\u5C45\u4E2D</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// \u7EDD\u5BF9\u5B9A\u4F4D \u6C34\u5E73\u5C45\u4E2D \u53C2\u6570\u4E3A\u9AD8\u5EA6</span>
<span class="token keyword">@mixin</span> <span class="token function">absHorizontalCenter</span><span class="token punctuation">(</span><span class="token variable">$top</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> <span class="token variable">$top</span><span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6587\u672C\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D" aria-hidden="true">#</a> \u6587\u672C\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// \u6587\u672C\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D \u53C2\u6570\u4E3A\u9AD8\u5EA6</span>
<span class="token keyword">@mixin</span> <span class="token function">textCenter</span><span class="token punctuation">(</span><span class="token variable">$height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$height</span><span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token variable">$height</span><span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="png-\u5C0F\u56FE\u6807\u8D4B\u8272" tabindex="-1"><a class="header-anchor" href="#png-\u5C0F\u56FE\u6807\u8D4B\u8272" aria-hidden="true">#</a> png \u5C0F\u56FE\u6807\u8D4B\u8272</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// png\u5C0F\u56FE\u6807\u8D4B\u8272 \u53C2\u6570\u4F9D\u6B21\u4E3A:\u56FE\u6807\u5730\u5740,\u989C\u8272,\u5BBD\u5EA6,\u9AD8\u5EA6</span>
<span class="token keyword">@mixin</span> <span class="token function">changePngColor</span><span class="token punctuation">(</span><span class="token variable">$url</span><span class="token punctuation">,</span> <span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$width</span><span class="token punctuation">,</span> <span class="token variable">$height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$height</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:before </span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token variable">$url</span><span class="token punctuation">)</span> no-repeat<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> <span class="token variable">$width</span> <span class="token variable">$height</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$height</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -<span class="token variable">$width</span><span class="token punctuation">;</span>
    <span class="token property">border-right</span><span class="token punctuation">:</span> <span class="token variable">$width</span> solid transparent<span class="token punctuation">;</span>
    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span><span class="token variable">$color</span> <span class="token variable">$width</span> 0px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// \u793A\u4F8B</span>
<span class="token selector">.icon </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">changePngColor</span><span class="token punctuation">(</span><span class="token string">&quot;./icon.png&quot;</span><span class="token punctuation">,</span> red<span class="token punctuation">,</span> 25px<span class="token punctuation">,</span> 25px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[t];function o(i,l){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","Sass.html.vue"]]);export{d as default};