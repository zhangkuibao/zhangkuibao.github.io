import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.382dc3cd.js";const i={},c=e(`<h2 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h2><p>\u53D8\u91CF\u901A\u8FC7 <code>@</code> \u5B9A\u4E49, \u53D8\u91CF\u6709\u7C7B\u4F3C\u9884\u7F16\u8BD1\u7684\u8FC7\u7A0B, \u65E0\u9700\u5728\u4F7F\u7528\u524D\u58F0\u660E, \u591A\u6B21\u5B9A\u4E49\u65F6\u4EE5\u540E\u5B9A\u4E49\u7684\u4E3A\u51C6, \u6CBF\u4F5C\u7528\u57DF\u5411\u4E0A\u5BFB\u627E</p><h3 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h3><p><code>@link-color: #428bca;</code></p><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><h4 id="\u5C5E\u6027\u503C" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u503C" aria-hidden="true">#</a> \u5C5E\u6027\u503C</h4><ol><li>\u5C5E\u6027\u503C: \u5F53\u505A\u5C5E\u6027\u503C\u4F7F\u7528\u65F6\u76F4\u63A5\u5F15\u7528<code>@color: #fff</code>, <code>color: @color</code></li><li>\u53EF\u4F7F\u7528\u8FD0\u7B97\u7B26\u8BA1\u7B97: <code>background: @color + #111;</code></li></ol><h4 id="\u63D2\u503C" tabindex="-1"><a class="header-anchor" href="#\u63D2\u503C" aria-hidden="true">#</a> \u63D2\u503C</h4><p>\u7528\u4F5C\u63D2\u503C\u65F6\u9700\u8981\u901A\u8FC7 <code>@{}</code> \u7684\u5F62\u5F0F\u5F15\u5165</p><ol><li><p>\u9009\u62E9\u5668: <code>@className: wrapper</code>, <code>.@{className} {}</code></p></li><li><p>\u5730\u5740: <code>@img: &#39;../img&#39;</code>, <code>background: url(&#39;@{img}/bg.png&#39;)</code></p></li><li><p>\u5BFC\u5165\u6587\u4EF6\u8DEF\u5F84: <code>@themes: &#39;../src&#39;</code>, <code>@import &#39;@{themes}/index.less&#39;</code></p></li><li><p>\u5C5E\u6027\u540D: <code>@property: color</code>, <code>* { @{property}: @fff; }</code></p></li><li><p>\u53D8\u91CF\u540D:</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// less \u8BED\u53E5</span>
<span class="token variable">@fnord<span class="token punctuation">:</span></span> <span class="token string">&quot;I am fnord.&quot;</span><span class="token punctuation">;</span>
<span class="token variable">@var<span class="token punctuation">:</span></span> <span class="token string">&quot;fnord&quot;</span><span class="token punctuation">;</span>
<span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">@@var</span><span class="token punctuation">;</span>

<span class="token comment">// \u8F93\u51FA</span>
<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;i am fnord&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u5EF6\u4F38-extend" tabindex="-1"><a class="header-anchor" href="#\u5EF6\u4F38-extend" aria-hidden="true">#</a> \u5EF6\u4F38\uFF08extend\uFF09</h2><p>\u7ED9\u5F53\u524D\u9009\u62E9\u5668\u9002\u914D\u5BF9\u5E94\u9009\u62E9\u5668\u7684\u89C4\u5219\u96C6, \u5C06\u5F53\u524D\u9009\u62E9\u5668\u6DFB\u52A0\u5230\u4EE5\u5B9A\u4E49\u7684\u89C4\u5219\u96C6\u4E2D, \u800C\u4E0D\u662F\u5F15\u7528\u6269\u5C55, \u4E5F\u5C31\u662F\u628A\u76EE\u6807\u9009\u62E9\u5668(\u4E25\u683C)\u4E0B\u7684\u89C4\u5219\u7EE7\u627F\u5230\u5F53\u524D\u9009\u62E9\u5668\u4E0A</p><h3 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h3><blockquote><p>\u6269\u5C55\u5FC5\u987B\u5728\u9009\u62E9\u5668\u7684\u6700\u540E\u4E00\u4E2A <code>a:hover:extend(div b).nth-child(odd)</code>, \u8FD9\u662F\u4E0D\u5141\u8BB8\u7684 \u6269\u5C55\u662F\u4E25\u683C\u5339\u914D\u7684, \u6CA1\u6709\u5B9A\u4E49\u7684\u9009\u62E9\u5668\u65E0\u6CD5\u88AB\u6269\u5C55, \u9009\u62E9\u5668 <code>link:hover:visited</code> \u548C<code>link:visited:hover</code>\u5339\u914D\u76F8\u540C\u7684\u5143\u7D20\u96C6\uFF0C\u4F46 extend \u5C06\u5B83\u4EEC\u89C6\u4E3A\u4E0D\u540C\u7684\u5143\u7D20 \u65E0\u6CD5\u5339\u914D\u5E26\u6709\u53D8\u91CF\u7684\u9009\u62E9\u5668</p></blockquote><ol><li><p>\u653E\u5230\u9009\u62E9\u5668\u4E0A, \u4EE5\u4F2A\u7C7B\u5F62\u5F0F\u4F7F\u7528 <code>.a:extend(.b) {}</code></p></li><li><p>\u653E\u5230\u89C4\u5219\u96C6\u4E2D, <code>.a { &amp;:extend(.b) }</code></p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// less\u8BED\u53E5</span>
<span class="token selector">.a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.b</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  &amp;<span class="token punctuation">:</span><span class="token function">extend</span><span class="token punctuation">(</span>.a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u9009\u62E9\u5668\u9002\u914D .a \u7684\u6837\u5F0F</span>
<span class="token punctuation">}</span>
<span class="token selector">.c</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  &amp;<span class="token punctuation">:</span><span class="token function">extend</span><span class="token punctuation">(</span>.b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u8F93\u51FA</span>

<span class="token selector">.a,
.b,
.c</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.b.c</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.c</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5141\u8BB8\u591A\u4E2A\u6269\u5C55, \u7528\u9017\u53F7\u5206\u9694, <code>.a { &amp;:extend(.b, .c) }</code> \u6216 <code>.a { &amp;:extend(.b):extend(.c) }</code></p></li><li><p>\u80FD\u591F\u5339\u914D\u5D4C\u5957\u7684<strong>\u590D\u6742\u9009\u62E9\u5668</strong>, \u5982: <code>a:hover:extend(div b)</code>, \u4F46\u662F\u5FC5\u987B\u5B9A\u4E49\u4EE5 <code>div b</code> \u4E3A\u9009\u62E9\u5668\u7684\u89C4\u5219\u96C6</p></li><li><p>\u6269\u5C55\u5168\u90E8(\u641C\u7D22\u5E76\u66FF\u6362), \u5728\u53C2\u6570\u7684\u6700\u540E\u6307\u5B9A all \u5173\u952E\u5B57\u65F6, \u6548\u679C\u7B49\u540C\u4E8E\u5C06\u5F53\u524D\u9009\u62E9\u5668\u66FF\u6362\u5230\u5BF9\u5E94\u4F4D\u7F6E</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// less\u8BED\u53E5</span>
<span class="token selector">.a.b.test,
.test.c</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.test</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.replacement:extend(.test all)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8F93\u51FA</span>
<span class="token selector">.a.b.test,
.test.c,
.a.b.replacement,
.replacement.c</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.test:hover,
.replacement:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5728 <code>@media</code> \u4E2D\u8FDB\u884C\u6269\u5C55\u65F6\u53EA\u4E0E\u7EDF\u4E00\u5A92\u4F53\u58F0\u660E\u5185\u7684\u9009\u62E9\u5668\u5339\u914D</p></li></ol><h3 id="\u7528\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7528\u4F8B" aria-hidden="true">#</a> \u7528\u4F8B</h3><ol><li><strong>\u907F\u514D\u6DFB\u52A0\u57FA\u7C7B</strong>, \u5982\u679C\u6709\u4E00\u7CFB\u5217\u5143\u7D20\u9700\u8981\u7EDF\u4E00\u6837\u5F0F\u5E76\u4E14\u62E5\u6709\u81EA\u5DF1\u7684\u6837\u5F0F, \u5C31\u53EF\u4EE5\u7528 <code>extend</code> \u5C06\u7EDF\u4E00\u6837\u5F0F\u6269\u5C55\u5230\u72EC\u7279\u5143\u7D20\u4E0A, \u800C\u4E0D\u662F\u5728 <code>html</code> \u4E2D\u901A\u8FC7\u6DFB\u52A0\u76F8\u540C\u7684 <code>class</code> \u6765\u5B9E\u73B0</li><li>\u66FF\u4EE3\u6DF7\u5165, \u5BF9\u4E8E\u9700\u8981\u7EDF\u4E00\u6837\u5F0F\u7684\u5143\u7D20\u6765\u8BF4, \u4E0D\u9700\u8981\u5148\u5B9A\u4E49\u4E00\u4E2A\u6DF7\u5165\u89C4\u5219\u96C6\u518D\u4E00\u4E00\u6DFB\u52A0\u8FDB\u53BB, \u53EA\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A\u9009\u62E9\u5668\u7684\u89C4\u5219\u96C6, \u5176\u4ED6\u9009\u62E9\u5668\u6269\u5C55\u8FD9\u4E2A\u89C4\u5219\u96C6\u5C31\u884C</li></ol><h2 id="\u6DF7\u5165-mixin" tabindex="-1"><a class="header-anchor" href="#\u6DF7\u5165-mixin" aria-hidden="true">#</a> \u6DF7\u5165\uFF08mixin\uFF09</h2><blockquote><p>\u8C03\u7528 <code>mixin</code> \u65F6, \u62EC\u53F7\u662F\u53EF\u9009\u7684 \u521B\u5EFA <code>mixin</code> \u4F46\u53C8\u4E0D\u60F3\u8F93\u51FA\u6539 <code>minxin</code> \u65F6, \u53EF\u4EE5\u5728\u5B9A\u4E49\u65F6\u7684\u9009\u62E9\u5668\u540E\u52A0\u62EC\u53F7 <code>mixin</code> \u4E2D\u7684\u5185\u5BB9\u90FD\u4F1A\u88AB\u52A0\u5165\u5230\u88AB\u8C03\u7528\u7684\u5730\u65B9</p></blockquote><h3 id="\u5B9A\u4E49-1" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49-1" aria-hidden="true">#</a> \u5B9A\u4E49</h3><ol><li><p>\u6DF7\u5408\u4F7F\u7528\u7C7B\u9009\u62E9\u5668\u548C id \u9009\u62E9\u5668</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// less\u8BED\u53E5</span>
<span class="token selector">.a,
#b</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.mixin-class</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.mixin-id</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">#b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u8F93\u51FA</span>
<span class="token selector">.a,
#b</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.mixin-class</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.mixin-id</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5728\u6DF7\u5165\u540E\u4F7F\u7528 <code>!important</code> \u5173\u952E\u5B57\u4F1A\u5C06\u5176\u7EE7\u627F\u7684\u6240\u6709\u5C5E\u6027\u6807\u8BB0\u4E3A <code>!important</code>, <code>.a { .mix2(#000) !important }</code></p></li></ol><h3 id="\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> \u547D\u540D\u7A7A\u95F4</h3><pre><code>\`\`\`less
#outer {
	.inner {
		color: red;
	}
}

.c {
	#outer &gt; .inner;
}
\`\`\`
</code></pre><h3 id="\u53C2\u6570\u6DF7\u5165" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u6DF7\u5165" aria-hidden="true">#</a> \u53C2\u6570\u6DF7\u5165</h3><ol><li><p>\u63A5\u6536\u53C2\u6570</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.mix1(<span class="token variable">@bg</span>)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5B9A\u4E49\u53D8\u91CF\u540D</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">@bg</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.min2(<span class="token variable">@bg</span>:#333)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8BBE\u7F6E\u9ED8\u8BA4\u503C</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">@bg</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.mix3(<span class="token variable">@bg</span>,<span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token selector">.mix4(<span class="token variable">@border</span>, <span class="token variable">@type</span>, <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@arguments</span><span class="token punctuation">;</span> <span class="token comment">// @arguments \u5728 mixin \u4E2D\u662F\u7279\u6B8A\u53D8\u91CF, \u5305\u542B\u8C03\u7528 mixin \u65F6\u4F20\u9012\u7684\u6240\u6709\u53C2\u6570</span>
<span class="token punctuation">}</span>
<span class="token selector">.mix5(<span class="token variable">@a</span>; <span class="token variable">@rest</span>...)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7528 ... \u6765\u5B9A\u4E49\u53EF\u63A5\u6536\u591A\u4E2A\u53C2\u6570</span>
  <span class="token comment">// @rest is bound to arguments after @a</span>
  <span class="token comment">// @arguments is bound to all arguments</span>
<span class="token punctuation">}</span>
<span class="token selector">.a</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.mix2</span><span class="token punctuation">(</span>#000<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5982\u679C\u5B9A\u4E49\u4E86\u53C2\u6570\u4F1A\u8986\u76D6\u9ED8\u8BA4\u503C</span>
  .<span class="token function">mix3</span><span class="token punctuation">(</span>
    #987<span class="token punctuation">,</span>
    #eee<span class="token punctuation">;</span> 1 1
  <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u591A\u4E2A\u53C2\u6570\u53EF\u4EE5\u7528\u5206\u53F7\u6216\u9017\u53F7\u5206\u9694(\u4E0D\u80FD\u6DF7\u7528), \u4F7F\u7528\u5206\u53F7\u8FDB\u884C\u5206\u9694\u65F6\u53EF\u4EE5\u63A5\u6536\u4EE5\u9017\u53F7\u5206\u9694\u7684\u53C2\u6570\u5217\u8868,</span>
  .<span class="token function">mix3</span><span class="token punctuation">(</span>
    <span class="token variable">@color<span class="token punctuation">:</span></span>#333<span class="token punctuation">,</span>
    3
  <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u53C2\u6570\u53EF\u4EE5\u901A\u8FC7\u540D\u79F0\u4F20\u5165, \u5176\u4ED6\u672A\u547D\u540D\u7684\u53C2\u6570\u5728\u4F20\u5165\u540E\u4F1A\u6309\u7167\u987A\u5E8F\u63A5\u6536(\u4E0D\u5305\u62EC\u547D\u540D\u53C2\u6570), \u6570\u91CF\u5FC5\u987B\u4E0E\u5B9A\u4E49\u65F6\u4E00\u81F4</span>
  .<span class="token function">mix4</span><span class="token punctuation">(</span>1px<span class="token punctuation">;</span> solid<span class="token punctuation">;</span> #000<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6A21\u5F0F\u5339\u914D, \u6839\u636E\u53C2\u6570\u4E0D\u540C\u66F4\u6539\u6DF7\u5165\u7684\u884C\u4E3A</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// less \u8BED\u53E5</span>
<span class="token variable">@switch<span class="token punctuation">:</span></span> light<span class="token punctuation">;</span>
<span class="token selector">.mixin(dark; <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">darken</span><span class="token punctuation">(</span><span class="token variable">@color</span><span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mixin(light; <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">@color</span><span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mixin(<span class="token variable">@_</span>; <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5339\u914D\u6240\u6709\u6A21\u5F0F</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.mixin</span><span class="token punctuation">(</span><span class="token variable">@switch</span><span class="token punctuation">;</span> #888<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5339\u914D\u5BF9\u5E94\u7684\u6DF7\u5165\u5BF9\u8C61</span>
  <span class="token comment">// .mixin(light; #888); // \u76F4\u63A5\u5199\u5165\u5BF9\u5E94\u7C7B\u578B\u4E5F\u53EF\u4EE5</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8F93\u51FA</span>

<span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #a2a2a2<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="\u51FD\u6570\u5F0F\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u5F0F\u8C03\u7528" aria-hidden="true">#</a> \u51FD\u6570\u5F0F\u8C03\u7528</h3><p>\u6DF7\u5165\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\u5728\u6DF7\u5165\u540E\u662F\u53EF\u89C1\u7684, \u53EF\u4EE5\u5728\u8C03\u7528\u8005\u7684\u4F5C\u7528\u57DF\u4E2D\u4F7F\u7528(\u8C03\u7528\u4F5C\u7528\u57DF\u5B9A\u4E49\u540C\u540D\u53D8\u91CF\u65F6\u4E0D\u4F1A\u88AB\u6DF7\u5165\u53D8\u91CF\u8986\u76D6), \u56E0\u6B64\u53EF\u4EE5\u8BA9\u6DF7\u5165\u5BF9\u8C61\u5BF9\u53C2\u6570\u505A\u4E00\u4E9B\u5904\u7406, \u4EE5\u8FBE\u5230\u5C01\u88C5\u529F\u80FD\u7684\u6548\u679C</p><pre><code>\`\`\`less
.average(@x, @y) { // \u63A5\u6536\u4E24\u4E2A\u53C2\u6570
	@average: ((@x + @y) / 2); // \u5904\u7406\u53C2\u6570\u5E76\u5B9A\u4E49\u4E3A\u53D8\u91CF

	.mix1() {  // \u5728 mixin \u4E2D\u5B9A\u4E49\u7684 mixin \u4E5F\u4F1A\u88AB\u5B9A\u4E49\u5728\u8C03\u7528\u8005\u4F5C\u7528\u57DF\u4E2D(\u6CE8\u610F\u4E0D\u52A0\u62EC\u53F7\u7684\u8BDD\u4F1A\u76F4\u63A5\u6DFB\u52A0\u5230css\u4E2D)
		color: red;
	}
}

@average: 50px; // \u7236\u7EA7\u4F5C\u7528\u57DF\u4E2D\u5B9A\u4E49\u7684\u540C\u540D\u53D8\u91CF\u4F1A\u88AB\u8986\u76D6

div {
	.average(16px, 50px);
	padding: @average;    // \u4F7F\u7528\u6DF7\u5165\u5BF9\u8C61\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF
	// @average: 100px; // \u5982\u679C\u5F53\u524D\u4F5C\u7528\u57DF\u4E2D\u6709\u540C\u540D\u53D8\u91CF, \u4EE5\u4F5C\u7528\u57DF\u4E2D\u5B9A\u4E49\u7684\u4E3A\u51C6
}
\`\`\`
</code></pre><h3 id="\u6761\u4EF6\u6DF7\u5165" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u6DF7\u5165" aria-hidden="true">#</a> \u6761\u4EF6\u6DF7\u5165</h3><p>\u53D7\u4FDD\u62A4\u7684 <code>mixin</code>, \u7C7B\u4F3C\u4E8E <code>@media</code> \u7684\u6761\u4EF6\u67E5\u8BE2\u8BED\u53E5, \u6761\u4EF6\u53EF\u4EE5\u5199\u5728\u5B9A\u4E49\u6DF7\u5165\u6216\u5F15\u7528\u6DF7\u5165\u7684\u540E\u9762</p><pre><code>\`\`\`less
	@mode:1;
	@arg: 1;
	// \u5B9A\u4E49\u6DF7\u5165\u65F6\u9650\u5B9A\u6761\u4EF6
	.a() when(@mode=1) { // \u5728@mode\u7B49\u4E8E1\u7684\u65F6\u5019\u624D\u5141\u8BB8\u88AB\u6DF7\u5165
		background: #fff;
	}
	.a() when(default()) { // \u8C03\u7528\u65F6\u6240\u6709\u6761\u4EF6\u90FD\u4E0D\u7B26\u5408\u65F6\u5F15\u7528\u8BE5\u6837\u5F0F, \u7C7B\u4F3C\u4E8E default / else
		color: red;
	}
	.b {
		.a() when (@mode&gt;=1); // \u53EF\u4EE5\u4F7F\u7528\u903B\u8F91\u8FD0\u7B97\u7B26
		.a() when (@mode=1) and (@arg=2); // \u7528 and \u8FDE\u63A5\u6761\u4EF6, \u76F8\u5F53\u4E8E &amp;&amp;
		.a() when (@mode=1), (@arg=2); // \u7528\u9017\u53F7\u6A21\u62DF or , \u76F8\u5F53\u4E8E ||
		.a() when not (@mode=1); // \u7528 not \u5173\u952E\u5B57\u6765\u5426\u5B9A\u6761\u4EF6
	}

\`\`\`
</code></pre><ol><li><p>\u7C7B\u578B\u68C0\u67E5\u51FD\u6570: <code>iscolor()</code><code>isnumber()</code><code>isstring()</code><code>iskeyword()</code><code>isurl()</code></p></li><li><p>\u68C0\u67E5\u503C\u662F\u5426\u662F\u6570\u5B57, \u662F\u5426\u4F7F\u7528\u7279\u5B9A\u5355\u4F4D <code>ispixel()</code><code>ispercentage()</code><code>isem()</code><code>isunit()</code></p></li><li><p>\u9012\u5F52\u8C03\u7528</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// less\u8BED\u53E5</span>
<span class="token selector">.generate-columns(<span class="token variable">@n</span>, <span class="token variable">@i</span>: 1) when (<span class="token variable">@i</span> =&lt; <span class="token variable">@n</span>)</span> <span class="token punctuation">{</span>
  <span class="token selector">.column-@{i}</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">@i</span> <span class="token operator">*</span> 100% <span class="token operator">/</span> <span class="token variable">@n</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  .<span class="token function">generate-columns</span><span class="token punctuation">(</span><span class="token variable">@n</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token variable">@i</span> <span class="token operator">+</span> 1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
.<span class="token function">generate-columns</span><span class="token punctuation">(</span>4<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8F93\u51FA</span>

<span class="token selector">.column-1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 25%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.column-2</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.column-3</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 75%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.column-4</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76" aria-hidden="true">#</a> \u5408\u5E76</h3><p>\u5408\u5E76\u529F\u80FD\u5141\u8BB8\u5C06\u591A\u4E2A\u5C5E\u6027\u4E2D\u7684\u503C\u805A\u5408\u5230\u5355\u4E2A\u5C5E\u6027\u4E0B\u7684\u9017\u53F7\u6216\u7A7A\u683C\u5206\u9694\u7684\u5C5E\u6027\u5217\u8868\u4E2D, \u5BF9\u4E8E\u80CC\u666F\u548C\u53D8\u6362\u7B49\u5C5E\u6027\u5F88\u6709\u7528</p><pre><code>\`\`\`less
.mixin() {
	box-shadow+: inset 0 0 10px #555; // \u5C5E\u6027\u540D\u540E\u9762\u5E26+, \u7F16\u8BD1\u540E\u5C5E\u6027\u503C\u901A\u8FC7\u9017\u53F7\u8FDE\u63A5
	background+_: url(&#39;./img/bg.png&#39;); // \u5C5E\u6027\u540D\u540E\u5E26+_, \u7F16\u8BD1\u540E\u5C5E\u6027\u503C\u901A\u8FC7\u7A7A\u683C\u8FDE\u63A5
}

.myclass {
	.mixin();
	box-shadow+: 0 0 20px black; // \u9017\u53F7\u8FDE\u63A5
	background+_:100%; // \u7A7A\u683C\u8FDE\u63A5
}
\`\`\`
</code></pre><h2 id="\u5BFC\u5165-import" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165-import" aria-hidden="true">#</a> \u5BFC\u5165\uFF08import\uFF09</h2><ol><li><code>@import (keyword) &#39;filename&#39;</code> \u6CE8\u610F<code>@import</code>\u548C <code>keyword</code> \u4E4B\u95F4\u7684\u7A7A\u683C</li><li>\u4E00\u4E2A<code>@import</code> \u8BED\u53E5\u53EA\u80FD\u5BFC\u5165\u4E00\u4E2A\u6587\u4EF6</li><li>\u53EF\u4EE5\u5728\u6DF7\u5165\u4E2D\u4F7F\u7528 <code>@import</code></li></ol><h3 id="\u9009\u9879-keyword" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879-keyword" aria-hidden="true">#</a> \u9009\u9879\uFF08keyword\uFF09</h3><p>\u4F7F\u7528\u591A\u4E2A\u5173\u952E\u5B57\u65F6\u7528\u9017\u53F7\u5206\u9694</p><ol><li><code>reference</code>\uFF1A\u4F7F\u7528\u8F83\u5C11\u7684\u6587\u4EF6\uFF0C\u4F46\u4E0D\u8F93\u51FA</li><li><code>inline</code>\uFF1A\u5728\u8F93\u51FA\u4E2D\u5305\u542B\u6E90\u6587\u4EF6\uFF0C\u4F46\u4E0D\u5BF9\u5176\u8FDB\u884C\u5904\u7406</li><li><code>less</code>\uFF1A\u65E0\u8BBA\u6587\u4EF6\u6269\u5C55\u540D\u662F\u4EC0\u4E48\uFF0C\u90FD\u5C06\u5176\u89C6\u4E3A\u5C11\u6587\u4EF6</li><li><code>css</code>\uFF1A\u65E0\u8BBA\u6587\u4EF6\u6269\u5C55\u540D\u4E3A\u4EC0\u4E48\uFF0C\u90FD\u5C06\u5176\u89C6\u4E3A CSS \u6587\u4EF6</li><li><code>once</code>\uFF1A\u4EC5\u5305\u542B\u4E00\u6B21\u6587\u4EF6\uFF08\u8FD9\u662F\u9ED8\u8BA4\u884C\u4E3A\uFF09</li><li><code>multiple</code>\uFF1A\u591A\u6B21\u5305\u542B\u6587\u4EF6</li><li><code>optional</code>\uFF1A\u627E\u4E0D\u5230\u6587\u4EF6\u65F6\u7EE7\u7EED\u7F16\u8BD1</li></ol><h2 id="\u7236\u7EA7\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EA7\u9009\u62E9\u5668" aria-hidden="true">#</a> \u7236\u7EA7\u9009\u62E9\u5668\uFF08&amp;\uFF09</h2><blockquote><p><code>&amp;</code> \u5728\u9009\u62E9\u5668\u4E2D\u53EF\u4EE5\u51FA\u73B0\u591A\u6B21, \u53EF\u4EE5\u91CD\u590D\u5F15\u7528\u7236\u9009\u62E9\u5668\u800C\u65E0\u9700\u91CD\u590D\u5176\u540D\u79F0 <code>&amp;</code> \u4EE3\u8868\u7684\u662F\u6240\u6709\u7236\u7EA7\u9009\u62E9\u5668\u7D2F\u52A0\u4E0B\u6765\u7684\u9009\u62E9\u5668, \u800C\u4E0D\u662F\u6700\u8FD1\u7684\u7956\u5148 \u53EF\u4EE5\u628A <code>&amp;</code> \u5199\u5728\u5176\u4ED6\u9009\u62E9\u5668\u540E\u9762\u8FBE\u6210\u7279\u6B8A\u6837\u5F0F\u7684\u6548\u679C <code>.no-data &amp;</code> \u5728\u9017\u53F7\u5206\u9694\u7684\u591A\u4E2A\u9009\u62E9\u5668\u4E2D\u591A\u6B21\u4F7F\u7528 <code>&amp;</code>;</p></blockquote><pre><code>\`\`\`less
// less\u8BED\u53E5
p, a, ul, li {
	border-top: 2px dotted #366;
	&amp; + &amp; {  // \u5C06\u4F1A\u6269\u5C55\u4E3A\u6240\u6709\u53EF\u80FD\u7684\u7EC4\u5408
		border-top: 0;
	}
}

// \u8F93\u51FA
p,
a,
ul,
li {
	border-top: 2px dotted #366;
}
p + p,
p + a,
p + ul,
p + li,
a + p,
a + a,
a + ul,
a + li,
ul + p,
ul + a,
ul + ul,
ul + li,
li + p,
li + a,
li + ul,
li + li {
	border-top: 0;
}
\`\`\`
</code></pre>`,43),p=[c];function t(l,o){return s(),a("div",null,p)}const r=n(i,[["render",t],["__file","\u8BED\u6CD5.html.vue"]]);export{r as default};
