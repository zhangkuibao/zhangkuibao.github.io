import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.382dc3cd.js";const p={},t=e(`<h2 id="\u6742\u9879" tabindex="-1"><a class="header-anchor" href="#\u6742\u9879" aria-hidden="true">#</a> \u6742\u9879</h2><ol><li><p>\u5C5E\u6027\u5D4C\u5957, \u5982 <code>font-family</code>, <code>font-size</code>, <code>font-weight</code> \u90FD\u4EE5 <code>font</code> \u4F5C\u4E3A\u5C5E\u6027\u7684\u547D\u540D\u7A7A\u95F4</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.funky</span> <span class="token punctuation">{</span>
  <span class="token selector">font:</span> <span class="token punctuation">{</span>
    <span class="token property">family</span><span class="token punctuation">:</span> fantasy<span class="token punctuation">;</span>
    <span class="token property">size</span><span class="token punctuation">:</span> 30em<span class="token punctuation">;</span>
    <span class="token property">weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u547D\u540D\u7A7A\u95F4\u53EF\u4EE5\u5305\u542B\u81EA\u5DF1\u7684\u5C5E\u6027\u503C</span>
  <span class="token selector">font: 20px/24px</span> <span class="token punctuation">{</span>
    <span class="token property">family</span><span class="token punctuation">:</span> fantasy<span class="token punctuation">;</span>
    <span class="token property">weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u63D2\u503C\u8BED\u53E5: <code>#{}</code>, \u7C7B\u4F3C\u4E8E js \u4E2D\u7684\u6A21\u677F\u5B57\u7B26\u4E32, \u53EF\u4EE5\u5728\u9009\u62E9\u5668\u6D3B\u5C5E\u6027\u540D\u4E2D\u4F7F\u7528\u53D8\u91CF</p></li></ol><h2 id="sassscript" tabindex="-1"><a class="header-anchor" href="#sassscript" aria-hidden="true">#</a> SassScript</h2><h3 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h3><ol><li><p>\u5B9A\u4E49: \u7528 <code>$</code> \u5B9A\u4E49\u53D8\u91CF, \u652F\u6301\u5757\u7EA7\u4F5C\u7528\u57DF</p></li><li><p>\u9ED8\u8BA4\u53D8\u91CF: \u5B9A\u4E49\u53D8\u91CF\u65F6\u5982\u679C\u5728\u53D8\u91CF\u540E\u6DFB\u52A0 <code>!default</code> \u4EE3\u8868\u5F53\u524D\u5B9A\u4E49\u7684\u53D8\u91CF\u503C\u662F\u8BE5\u53D8\u91CF\u7684\u9ED8\u8BA4\u503C, \u5982\u679C\u8BE5\u53D8\u91CF\u6CA1\u6709\u91CD\u65B0\u8D4B\u503C\u5219\u7528\u9ED8\u8BA4\u503C,\u5426\u5219\u7528\u4E4B\u540E\u7684\u503C, \u540E\u8D4B\u7684\u503C\u4F1A\u8986\u76D6\u524D\u9762\u7684</p></li></ol><h3 id="\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B</h3><ol><li>\u6570\u5B57, <code>1, 2, 13, 10px</code></li><li>\u5B57\u7B26\u4E32, \u6709\u5F15\u53F7\u5B57\u7B26\u4E32\u4E0E\u65E0\u5F15\u53F7\u5B57\u7B26\u4E32, <code>&quot;foo&quot;, &#39;bar&#39;, baz</code></li><li>\u989C\u8272, <code>blue, #04a3f9, rgba(255,0,0,0.5)</code></li><li>\u5E03\u5C14\u578B, <code>true, false</code></li><li>\u7A7A\u503C, <code>null</code></li><li>\u6570\u7EC4 (list), \u7528\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694\u7684\u5C5E\u6027\u503C, <code>1.5em 1em 0 2em, Helvetica, Arial, sans-serif</code></li><li>maps, \u76F8\u5F53\u4E8E JavaScript \u7684 object, <code>(key1: value1, key2: value2)</code></li></ol><h3 id="\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165" aria-hidden="true">#</a> \u5BFC\u5165</h3><p>\u7528 <code>@import</code> \u8FDB\u884C\u5BFC\u5165</p><ol><li>\u540C\u65F6\u5BFC\u5165\u591A\u4E2A\u6587\u4EF6\u65F6\u7528\u9017\u53F7\u5206\u9694, \u5982: <code>@import &#39;foo.scss&#39;, &#39;foo2.scss&#39;</code></li><li>\u5BFC\u5165\u65F6\u4F7F\u7528\u53D8\u91CF\u53EA\u80FD\u4F5C\u7528\u57DF <code>css</code> \u7684 <code>url()</code> \u5BFC\u5165\u65B9\u5F0F, \u5982: <code>@import url(&quot;http://fonts.googleapis.com/css?{$family}&quot;);</code></li><li>\u5E0C\u671B\u5BFC\u5165\u7684 <code>sass</code>, <code>scss</code> \u6587\u4EF6\u7F16\u8BD1, \u9700\u8981\u7ED9\u88AB\u5BFC\u5165\u6587\u4EF6\u540D\u524D\u52A0\u4E0B\u5212\u7EBF, \u5982: <code>_color.scss</code>, \u5BFC\u5165\u65F6\u4E0D\u9700\u8981\u52A0\u4E0B\u5212\u7EBF <code>@import &#39;color&#39;</code>, \u5B9E\u9645\u4E0A\u5BFC\u5165\u7684\u6587\u4EF6\u662F <code>_color.scss</code>, \u540C\u65F6\u5B58\u5728\u5E26\u4E0B\u5212\u7EBF\u548C\u4E0D\u5E26\u4E0B\u5212\u7EBF\u7684\u540C\u540D\u6587\u4EF6\u65F6, \u4F1A\u5FFD\u7565\u5E26\u4E0B\u5212\u7EBF\u7684</li><li><code>@import</code> \u53EF\u4EE5\u7528\u5728\u89C4\u5219\u96C6\u91CC, \u4E0D\u4E00\u5B9A\u975E\u5F97\u5199\u5728\u5168\u5C40</li><li>\u4E0D\u80FD\u5728\u6DF7\u5165\u4E2D\u4F7F\u7528</li></ol><h4 id="\u4EC5\u4F5C\u4E3A\u666E\u901A-css-\u8BED\u53E5\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u4EC5\u4F5C\u4E3A\u666E\u901A-css-\u8BED\u53E5\u7684\u60C5\u51B5" aria-hidden="true">#</a> \u4EC5\u4F5C\u4E3A\u666E\u901A css \u8BED\u53E5\u7684\u60C5\u51B5</h4><ol><li>\u6587\u4EF6\u62D3\u5C55\u540D\u662F <code>.css</code></li><li>\u6587\u4EF6\u540D\u4EE5 <code>http://</code> \u5F00\u5934</li><li>\u6587\u4EF6\u540D\u662F <code>url()</code></li><li><code>@import</code> \u5305\u542B <code>media queries</code></li></ol><h3 id="\u6269\u5C55-extend" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55-extend" aria-hidden="true">#</a> \u6269\u5C55(@extend)</h3><ol><li><p>\u628A\u76EE\u6807\u9009\u62E9\u5668\u4E0B\u7684\u89C4\u5219\u7EE7\u627F\u5230\u5F53\u524D\u9009\u62E9\u5668\u4E0A <code>@extend .error</code>, <code>sass</code> \u7684\u641C\u7D22\u662F\u6A21\u7CCA\u7684, \u7C7B\u4F3C\u4E8E <code>less</code> \u7684 <code>:extend(.error all)</code>, \u6548\u679C\u7B49\u540C\u4E8E\u5C06\u5F53\u524D\u9009\u62E9\u5668\u66FF\u6362\u5230\u5BF9\u5E94\u4F4D\u7F6E</p></li><li><p><code>sass</code> \u5141\u8BB8\u5EF6\u4F38\u4EFB\u4F55\u5B9A\u4E49\u7ED9<strong>\u5355\u4E2A\u5143\u7D20</strong>\u7684\u9009\u62E9\u5668</p></li><li><p>\u540C\u4E00\u4E2A\u9009\u62E9\u5668\u7684\u89C4\u5219\u96C6\u53EF\u4EE5\u6269\u5C55\u7ED9\u591A\u4E2A\u9009\u62E9\u5668, \u6269\u5C55\u591A\u4E2A\u65F6\u53EF\u7528\u9017\u53F7\u5206\u9694 <code>@extend .error, .attention</code>, \u6709\u76F8\u540C\u5C5E\u6027\u65F6\u540E\u8005\u5C45\u4E0A</p></li><li><p>\u5D4C\u5957\u6269\u5C55</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// sass\u8BED\u53E5</span>
<span class="token selector">.error</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.seriousError</span> <span class="token punctuation">{</span>
  <span class="token variable">@extend</span> .error<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.criticalError</span> <span class="token punctuation">{</span>
  <span class="token variable">@extend</span> .seriousError<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8F93\u51FA</span>
<span class="token selector">.error,
.seriousError,
.criticalError</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.seriousError,
.criticalError</span> <span class="token punctuation">{</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.criticalError</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5360\u4F4D\u7B26\u9009\u62E9\u5668 <code>%</code>, \u5B9A\u4E49\u7684\u89C4\u5219\u96C6\u53EA\u7528\u4E8E\u6269\u5C55, \u8FD9\u6837\u5B9A\u4E49\u7684\u89C4\u5219\u96C6\u4E0D\u4F1A\u88AB\u7F16\u8BD1\u5230 <code>css</code> \u6587\u4EF6\u4E2D</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// sass\u8BED\u53E5</span>
<span class="token selector">#context a %one</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.notice</span> <span class="token punctuation">{</span>
  <span class="token variable">@extend</span> %one<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7F16\u8BD1\u540E</span>
<span class="token selector">#context a .notice</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u53EF\u9009\u6307\u4EE4 <code>!optional</code></p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// sass\u8BED\u53E5</span>
<span class="token selector">a.important</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token variable">@extend</span> .notice<span class="token punctuation">;</span> <span class="token comment">// \u6CA1\u6709\u5B9A\u4E49 .notice , \u7F16\u8BD1\u62A5\u9519</span>
  <span class="token variable">@extend</span> .notice
      !optional<span class="token punctuation">;</span> <span class="token comment">// \u4F7F\u7528\u4E86\u6307\u4EE4\u540E\u4E0D\u4F1A\u62A5\u9519, \u7F16\u8BD1\u7ED3\u679C\u53EA\u5305\u542B\u53EF\u7528\u7684\u6837\u5F0F</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a> \u6307\u4EE4</h3><ol><li><p><code>@at-root</code> \u4F7F\u89C4\u5219\u96C6\u5B9A\u4E49\u5728\u5168\u5C40\u800C\u4E0D\u662F\u5F53\u524D\u7236\u7EA7\u4E0B</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// sass \u8BED\u53E5</span>
<span class="token selector">.parent</span> <span class="token punctuation">{</span>
  ... <span class="token atrule">@at-root .child</span> <span class="token punctuation">{</span>
    ...<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token comment">// \u5305\u542B\u5355\u4E2A\u9009\u62E9\u5668\u7684\u7528\u6CD5</span>

  <span class="token atrule">@at-root</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5305\u542B\u591A\u4E2A\u9009\u62E9\u5668\u7684\u7528\u6CD5</span>
    <span class="token selector">.child1</span> <span class="token punctuation">{</span>
      ...<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.child2</span> <span class="token punctuation">{</span>
      ...<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7F16\u8BD1\u540E</span>
<span class="token selector">.parent</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token selector">.child1</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token selector">.child2</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>@debug</code> \u8C03\u8BD5, <code>@warn</code> \u8B66\u544A, <code>@error</code> \u62A5\u9519</p></li><li><p>\u6D41\u7A0B\u63A7\u5236 <code>@if</code>, <code>@else</code>, <code>@else if</code></p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// sass \u8BED\u53E5</span>
$<span class="token property">type</span><span class="token punctuation">:</span> monster<span class="token punctuation">;</span>
<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token atrule">@if $type==ocean</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule">@else if $type==matador</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule">@else if $type==monster</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule">@else</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5FAA\u73AF <code>@for</code><code>@for $var from &lt;start&gt; through &lt;end&gt;</code> \u4F7F\u7528 <code>through</code> \u4F1A\u5305\u542B <code>&lt;end&gt;</code> \u7684\u503C <code>@for $var from &lt;start&gt; to &lt;end&gt;</code> \u4F7F\u7528 <code>to</code> \u4E0D\u4F1A\u5305\u542B <code>&lt;end&gt;</code> \u7684\u503C \u53D8\u91CF\u540D\u4E0D\u56FA\u5B9A</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// sass \u8BED\u53E5</span>
<span class="token atrule">@for $i from 1 through 3</span> <span class="token punctuation">{</span> <span class="token comment">// \u4F7F\u7528through\u65F6 , \u8C03\u7528\u4E09\u6B21 - 1,2,3</span>
<span class="token selector">.item-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> 2em <span class="token operator">*</span> $i<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule">@for $i from 1 to 3</span> <span class="token punctuation">{</span> <span class="token comment">// \u4F7F\u7528to\u65F6 , \u8C03\u7528\u4E24\u6B21 - 1,2</span>
<span class="token selector">.item-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> 2em <span class="token operator">*</span> $i<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5FAA\u73AF <code>@while</code></p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>$<span class="token property">i</span><span class="token punctuation">:</span> 6<span class="token punctuation">;</span>
<span class="token atrule">@while $i &gt; 0</span> <span class="token punctuation">{</span>
    <span class="token selector">.item-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> 2em <span class="token operator">*</span> $i<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    $<span class="token property">i</span><span class="token punctuation">:</span> $i <span class="token operator">-</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u904D\u5386 <code>@each</code></p><p><code>$var in &lt;list&gt;</code> list \u662F\u503C\u5217\u8868(\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694) \u53EF\u4EE5\u904D\u5386\u5D4C\u5957\u5217\u8868 \u53EF\u4EE5\u904D\u5386 <code>map</code> \u503C</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// sass\u8BED\u53E5</span>
$<span class="token property">list</span><span class="token punctuation">:</span> puma<span class="token punctuation">,</span> sea<span class="token operator">-</span>slug<span class="token punctuation">,</span> egret<span class="token punctuation">,</span> salamander<span class="token punctuation">;</span> <span class="token comment">// list\u662F\u503C\u5217\u8868(\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694)</span>
<span class="token atrule">@each $animal in $list</span> <span class="token punctuation">{</span>
    <span class="token selector">.#</span><span class="token punctuation">{</span>$animal<span class="token punctuation">}</span><span class="token selector">-icon</span> <span class="token punctuation">{</span>
        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;/images/#{$animal}.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5217\u8868\u4E2D\u5305\u542B\u5217\u8868\u7684\u65F6\u5019, \u53EF\u4EE5\u7528\u591A\u4E2A\u53D8\u91CF\u63A5\u6536\u5BF9\u5E94\u7684\u503C</span>
$<span class="token property">list2</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>puma<span class="token punctuation">,</span> black<span class="token punctuation">,</span> default<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>sea<span class="token operator">-</span>slug<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> pointer<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>egret<span class="token punctuation">,</span> white<span class="token punctuation">,</span> move<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token atrule">@each $animal, $color, $cursor in $list2</span> <span class="token punctuation">{</span>
    <span class="token selector">.#</span><span class="token punctuation">{</span>$animal<span class="token punctuation">}</span><span class="token selector">-icon</span> <span class="token punctuation">{</span>
        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;/images/#{$animal}.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 2px solid $color<span class="token punctuation">;</span>
        <span class="token property">cursor</span><span class="token punctuation">:</span> $cursor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u904D\u5386 map</span>
<span class="token atrule">@each $header, $size in <span class="token punctuation">(</span>h1<span class="token punctuation">:</span> 2em, h2<span class="token punctuation">:</span> 1.5em, h3<span class="token punctuation">:</span> 1.2em<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">#</span><span class="token punctuation">{</span>$header<span class="token punctuation">}</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> $size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="\u6DF7\u5165-mixin" tabindex="-1"><a class="header-anchor" href="#\u6DF7\u5165-mixin" aria-hidden="true">#</a> \u6DF7\u5165(@mixin)</h3><ol><li><p>\u57FA\u672C\u7528\u6CD5</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// sass \u8BED\u53E5</span>
<span class="token comment">// \u7528 @mixin \u8BED\u53E5\u5B9A\u4E49</span>
<span class="token atrule">@mixin large-text</span> <span class="token punctuation">{</span>
  <span class="token selector">font:</span> <span class="token punctuation">{</span>
    <span class="token property">family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">;</span>
    <span class="token property">size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7528 @include \u8BED\u53E5\u5F15\u5165</span>
<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token variable">@include<span class="token punctuation">:</span></span> large<span class="token operator">-</span>text<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u53C2\u6570 \u53C2\u6570\u9ED8\u8BA4\u503C \u4E0D\u5B9A\u6570\u91CF\u7684\u53C2\u6570</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// sass\u8BED\u53E5</span>
<span class="token comment">// \u5E26\u53C2\u6570\u7684\u6DF7\u5165</span>
<span class="token atrule">@mixin sexy-border<span class="token punctuation">(</span>$color<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">border:</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5E26\u9ED8\u8BA4\u503C\u7684\u6DF7\u5165, \u53C2\u6570\u53EF\u4EE5\u7528\u5173\u952E\u8BCD</span>
<span class="token atrule">@mixin sexy-border2<span class="token punctuation">(</span>$color<span class="token punctuation">:</span> green<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">border:</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E0D\u5B9A\u6570\u91CF\u7684\u53C2\u6570, \u5B9A\u4E49\u65F6\u5728\u53C2\u6570\u540E\u52A0...</span>
<span class="token atrule">@mixin box-shadow<span class="token punctuation">(</span>$shadows...<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> $shadows<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u56FA\u5B9A\u6570\u91CF\u53C2\u6570\u7684\u6DF7\u5165\u53EF\u4EE5\u5728\u5F15\u7528\u65F6\u6DFB\u52A0...\u6765\u65B9\u4FBF\u5F15\u7528</span>
<span class="token atrule">@mixin padding-box<span class="token punctuation">(</span>$pad1, $pad2, $pad3<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> $pad1 $pad2 $pad3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token variable">@include<span class="token punctuation">:</span></span> <span class="token function">sexy-border</span><span class="token punctuation">(</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6CA1\u6709\u9ED8\u8BA4\u503C\u7684\u6DF7\u5165\u5FC5\u987B\u4F20\u53C2, \u5426\u5219\u62A5\u9519</span>
  <span class="token variable">@include<span class="token punctuation">:</span></span> sexy<span class="token operator">-</span>border2<span class="token punctuation">;</span> <span class="token comment">// \u6709\u9ED8\u8BA4\u503C\u7684\u6DF7\u5165\u53EF\u4EE5\u4E0D\u4F20\u53C2</span>
  <span class="token variable">@include</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span>
    0px 4px 5px #666<span class="token punctuation">,</span>
    2px 6px 10px #999
  <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5B9A\u4E49\u65F6\u53C2\u6570\u540E\u52A0\u4E86...\u5C31\u80FD\u63A5\u6536\u4E0D\u5B9A\u91CF\u7684\u53C2\u6570</span>

  $<span class="token property">list</span><span class="token punctuation">:</span> 0px 4px 5px<span class="token punctuation">;</span>
  <span class="token variable">@include</span> <span class="token function">padding-box</span><span class="token punctuation">(</span>$list...<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5728\u5F15\u7528\u65F6\u4F7F\u7528... \u53EF\u4EE5\u5C06\u53C2\u6570\u5206\u5272\u4F20\u5165</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u63D2\u69FD <code>@chontent</code></p></li></ol><blockquote><p>\u4F20\u9012\u7ED9 mixin \u7684\u5185\u5BB9\u5757\u662F\u5728\u5B9A\u4E49\u5757\u7684\u8303\u56F4\u5185\u800C\u4E0D\u662F mixin \u7684\u8303\u56F4\u5185\u8FDB\u884C\u8BC4\u4F30\u7684\u3002\u8FD9\u610F\u5473\u7740\u65E0\u6CD5\u5728\u4F20\u9012\u7684\u6837\u5F0F\u5757\u5185\u4F7F\u7528 mixin \u5C40\u90E8\u53D8\u91CF\uFF0C\u5E76\u4E14\u53D8\u91CF\u5C06\u89E3\u6790\u4E3A\u5168\u5C40\u503C\uFF1A</p></blockquote><pre><code>\`\`\`less
// sass \u8BED\u53E5
$color: white;
@mixin colors($color: blue) { // \u5B9A\u4E49\u540D\u4E3A $color \u7684\u53C2\u6570\u5E76\u8BBE\u7F6E\u9ED8\u8BA4\u503C
    background-color: $color;
    @content; // @content \u4F5C\u4E3A\u5360\u4F4D\u7B26, \u4F1A\u5C06\u5F15\u5165\u65F6 {} \u4E2D\u7684\u5185\u5BB9\u653E\u5230\u8FD9\u91CC
    border-color: $color;
}

.colors {
    @include colors(red) { // \u53EF\u4EE5\u4F20\u5165\u53C2\u6570
        color: $color; // \u8FD9\u91CC\u7528\u5230\u7684\u53D8\u91CF\u4F1A\u6CBF\u7740\u5F53\u524D\u4F5C\u7528\u57DF\u5411\u4E0A\u627E, \u800C\u4E0D\u662F\u6DF7\u5165\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF
    }
}

// \u7F16\u8BD1\u540E
.colors { background-color: red; color: white; border-color: red; }
\`\`\`
</code></pre><h3 id="\u81EA\u5B9A\u4E49\u51FD\u6570-function" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u51FD\u6570-function" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u51FD\u6570(@function)</h3><p>\u58F0\u660E\u51FD\u6570 <code>@function</code>, \u51FD\u6570\u540D\u52A0\u524D\u7F00\u907F\u514D\u51B2\u7A81, \u65B9\u4FBF\u8FA8\u522B\u662F\u5185\u7F6E\u51FD\u6570\u8FD8\u662F\u81EA\u5B9A\u4E49\u51FD\u6570</p><p>\u8FD4\u56DE\u503C <code>@return</code></p><pre><code>\`\`\`less
// sass \u8BED\u53E5
$grid-width: 40px;
$gutter-width: 10px;

@function z_grid-width($n) {
    @return $n * $grid-width + ($n - 1) * $gutter-width;
}

#sidebar { width: z_grid-width(5); }

// \u7F16\u8BD1\u540E
#sidebar { width: 240px; }

\`\`\`
</code></pre>`,24),c=[t];function i(o,l){return s(),a("div",null,c)}const r=n(p,[["render",i],["__file","\u8BED\u6CD5.html.vue"]]);export{r as default};
