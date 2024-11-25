import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,f as t}from"./app.cb0a7cdb.js";const e={},p=t(`<h2 id="\u7ED1\u5B9A\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7ED1\u5B9A\u65B9\u5F0F" aria-hidden="true">#</a> \u7ED1\u5B9A\u65B9\u5F0F</h2><p><code>[]</code> \u8FDB\u884C\u5C5E\u6027\u7ED1\u5B9A\uFF0C<code>()</code> \u8FDB\u884C\u4E8B\u4EF6\u7ED1\u5B9A</p><ul><li>\u6570\u636E\u7ED1\u5B9A\u7ED1\u5B9A\u7684\u662F\u5143\u7D20\u7684 <code>property</code><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;Sarah&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>\u5F53\u7528\u6237\u5728 <code>&lt;input&gt;</code> \u4E2D\u8F93\u5165 <code>Sally</code> \u65F6\uFF0C<code>DOM \u5143\u7D20</code>\u7684 <code>value Property</code> \u5C06\u53D8\u4E3A <code>Sally</code>\u3002 \u4F46\u662F\uFF0C\u5982\u679C\u4F7F\u7528 <code>input.getAttribute(&#39;value&#39;</code>) \u67E5\u770B <code>HTML</code> \u7684 <code>Attribute value</code>\uFF0C\u5219\u53EF\u4EE5\u770B\u5230\u8BE5 <code>attribute</code> \u4FDD\u6301\u4E0D\u53D8 \u2014\u2014 \u5B83\u8FD4\u56DE\u4E86 <code>Sarah</code>\u3002</li></ul><table><thead><tr><th>\u7ED1\u5B9A\u7C7B\u578B</th><th>\u7ED1\u5B9A\u76EE\u6807</th><th>\u8BED\u6CD5</th><th>\u6570\u636E\u6D41\u5411</th></tr></thead><tbody><tr><td>Property</td><td>\u5143\u7D20\u5C5E\u6027<br>\u7EC4\u4EF6\u5C5E\u6027<br>\u6307\u4EE4\u5C5E\u6027</td><td><code>[ngClass]=&quot;{&#39;special&#39;: isSpecial}&quot;</code><br> <code>[target]=&quot;expression&quot;</code><br> <code>bind-target=&quot;expression&quot;</code></td><td>\u5355\u5411\u7ED1\u5B9A</td></tr><tr><td>\u539F\u751F\u4E8B\u4EF6</td><td>\u5143\u7D20\u4E8B\u4EF6<br>\u7EC4\u4EF6\u4E8B\u4EF6<br>\u6307\u4EE4\u4E8B\u4EF6</td><td><code>(target)=&quot;statement&quot;</code><br> <code>on-target=&quot;statement&quot;</code></td><td>\u5355\u5411\u7ED1\u5B9A</td></tr><tr><td>Attribute</td><td>\u5143\u7D20 Attribute</td><td><code>[attr.aria-label]=&quot;help&quot;</code></td><td>\u5355\u5411\u7ED1\u5B9A</td></tr><tr><td>\u7C7B</td><td>\u5143\u7D20 class \u5C5E\u6027</td><td><code>[class.special]=&quot;isSpecial&quot;</code></td><td>\u5355\u5411\u7ED1\u5B9A</td></tr><tr><td>\u6837\u5F0F</td><td>\u5143\u7D20 style \u5C5E\u6027</td><td><code>[style.color]=&quot;isSpecial ? &#39;red&#39; : &#39;green&#39;&quot;</code></td><td>\u5355\u5411\u7ED1\u5B9A</td></tr><tr><td>\u53CC\u5411\u7ED1\u5B9A</td><td>\u4E8B\u4EF6\u4E0E\u5C5E\u6027</td><td><code>[(target)]=&quot;expression&quot;</code><br><code>bindon-target=&quot;expression&quot;</code><br><code>[([ngModel]=&quot;name&quot;</code></td><td>\u53CC\u5411\u7ED1\u5B9A</td></tr></tbody></table><h3 id="\u81EA\u5B9A\u4E49\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u4E8B\u4EF6" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u4E8B\u4EF6</h3><p>\u7236\u7EC4\u4EF6\u5728\u5B50\u7EC4\u4EF6\u4E0A\u7ED1\u5B9A\u4E8B\u4EF6\u5E76\u7528 <code>$event</code> \u63A5\u6536\u5B50\u7EC4\u4EF6\u4F20\u6765\u7684\u6570\u636E\uFF0C\u5B50\u7EC4\u4EF6\u9700\u8981\u521B\u5EFA\u4E00\u4E2A <code>EventEmitter</code> \u7684\u5B9E\u4F8B\u6765\u89E6\u53D1\u4E8B\u4EF6</p><ul><li>\u7236\u7EC4\u4EF6</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-hero-detail</span> <span class="token attr-name">(myClick)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clickChild($event)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-hero-detail</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">parent</span> <span class="token punctuation">{</span>
  <span class="token function">clickChild</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5B50\u7EC4\u4EF6</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> EventEmitter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@angular/core&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">child</span> <span class="token punctuation">{</span>
  @<span class="token function">Output</span><span class="token punctuation">(</span><span class="token punctuation">)</span> myClick <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>myClick<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;here is child&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53CC\u5411\u6570\u636E\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u53CC\u5411\u6570\u636E\u7ED1\u5B9A" aria-hidden="true">#</a> \u53CC\u5411\u6570\u636E\u7ED1\u5B9A</h3><p>\u4E0E <code>Vue</code> \u7C7B\u4F3C\uFF0C\u7236\u7EC4\u4EF6\u7ED9\u5B50\u7EC4\u4EF6\u4F20\u9012\u4E00\u4E2A\u503C\uFF0C\u5B50\u7EC4\u4EF6\u5728\u503C\u53D1\u751F\u53D8\u5316\u65F6\u901A\u8FC7\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u901A\u77E5\u7236\u7EC4\u4EF6\u4FEE\u6539</p><ul><li><p>\u5982\u679C\u5728\u7EC4\u4EF6\u4E0A\u58F0\u660E\u53D8\u91CF\uFF0C\u8BE5\u53D8\u91CF\u5C31\u4F1A\u5F15\u7528\u8BE5\u7EC4\u4EF6\u5B9E\u4F8B\u3002</p></li><li><p>\u5982\u679C\u5728\u6807\u51C6\u7684 HTML \u6807\u8BB0\u4E0A\u58F0\u660E\u53D8\u91CF\uFF0C\u8BE5\u53D8\u91CF\u5C31\u4F1A\u5F15\u7528\u8BE5\u5143\u7D20\u3002</p></li><li><p>\u5982\u679C\u4F60\u5728 <code>&lt;ng-template&gt;</code> \u5143\u7D20\u4E0A\u58F0\u660E\u53D8\u91CF\uFF0C\u8BE5\u53D8\u91CF\u5C31\u4F1A\u5F15\u7528\u4E00\u4E2A TemplateRef \u5B9E\u4F8B\u6765\u4EE3\u8868\u6B64\u6A21\u677F\u3002</p></li><li><p>\u5982\u679C\u8BE5\u53D8\u91CF\u5728\u53F3\u4FA7\u6307\u5B9A\u4E86\u4E00\u4E2A\u540D\u5B57\uFF0C\u6BD4\u5982 #var=&quot;ngModel&quot; \uFF0C\u90A3\u4E48\u8BE5\u53D8\u91CF\u5C31\u4F1A\u5F15\u7528\u6240\u5728\u5143\u7D20\u4E0A\u5177\u6709\u8FD9\u4E2A exportAs \u540D\u5B57\u7684\u6307\u4EE4\u6216\u7EC4\u4EF6\u3002</p></li></ul><h3 id="\u6A21\u677F\u5F15\u7528\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u5F15\u7528\u53D8\u91CF" aria-hidden="true">#</a> \u6A21\u677F\u5F15\u7528\u53D8\u91CF</h3><p>\u5728\u6A21\u677F\u4E2D\uFF0C\u8981\u4F7F\u7528\u4E95\u53F7 <code>#</code> \u6765\u58F0\u660E\u4E00\u4E2A\u6A21\u677F\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5728<strong>\u7EC4\u4EF6\u6A21\u677F</strong>\u4E2D\u7684\u4EFB\u4F55\u5730\u65B9\u5F15\u7528\u67D0\u4E2A\u6A21\u677F\u53D8\u91CF</p><h3 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips</h3><ol><li>\u6A21\u677F\u7ED1\u5B9A\u4F7F\u7528\u7684\u662F <code>Property</code> \u548C\u4E8B\u4EF6,\u800C\u4E0D\u662F <code>Attribute</code>\uFF0C\u5728 <code>Angular</code> <code>\u4E2D\uFF0CHTML Attribute</code> \u7684\u552F\u4E00\u4F5C\u7528\u662F\u521D\u59CB\u5316\u5143\u7D20\u548C\u6307\u4EE4\u7684\u72B6\u6001\u3002</li><li>\u5F53\u8868\u8FBE\u5F0F\u89E3\u6790\u4E3A <code>null</code> \u65F6\uFF0C<code>Angular</code>\u4F1A\u5B8C\u5168\u5220\u9664\u8BE5 <code>Attribute</code>\u3002</li></ol><h2 id="\u7BA1\u9053" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u9053" aria-hidden="true">#</a> \u7BA1\u9053</h2><h3 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ name | UpperCasePipe }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u7BA1\u9053\u4F20\u53C2</li></ul><p>\u7D27\u8DDF\u5728\u7BA1\u9053\u540D\u79F0\uFF08 currency \uFF09\u540E\u9762\u7684\u662F\u5192\u53F7\uFF08:\uFF09\u548C\u53C2\u6570\u503C\uFF08&#39;EUR&#39;\uFF09\u3002</p><p>\u591A\u53C2\u65F6\u7528\u5192\u53F7\u5206\u9694</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ price | currency:&#39;EUR&#39; }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u4E32\u8054\u7BA1\u9053</li></ul><p>\u591A\u4E2A\u7BA1\u9053\u4E32\u8054\u65F6\u4ECE\u5DE6\u5F80\u53F3\u6267\u884C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ birthday | date | uppercase}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u81EA\u5B9A\u4E49\u7BA1\u9053" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7BA1\u9053" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u7BA1\u9053</h3><ul><li>\u521B\u5EFA\u7BA1\u9053\u6587\u4EF6 <code>exponential-strength.pipe.ts</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Pipe<span class="token punctuation">,</span> PipeTransform <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@angular/core&quot;</span><span class="token punctuation">;</span>

@<span class="token function">Pipe</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;exponentialStrength&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ExponentialStrengthPipe</span> <span class="token keyword">implements</span> <span class="token class-name">PipeTransform</span> <span class="token punctuation">{</span>
  <span class="token function">transform</span><span class="token punctuation">(</span>value<span class="token operator">:</span> number<span class="token punctuation">,</span> exponent<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token function">isNaN</span><span class="token punctuation">(</span>exponent<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> exponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u7BA1\u9053</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ 2 | exponentialStrength: 10 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5F15\u7528\u7C7B\u578B\u503C" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u7C7B\u578B\u503C" aria-hidden="true">#</a> \u5F15\u7528\u7C7B\u578B\u503C</h3><blockquote><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u7BA1\u9053\u4F1A\u5B9A\u4E49\u6210<strong>\u7EAF\u7684(pure)</strong>\uFF0C\u8FD9\u6837 <code>Angular</code> \u53EA\u6709\u5728\u68C0\u6D4B\u5230<strong>\u8F93\u5165\u503C\u53D1\u751F\u4E86\u7EAF\u53D8\u66F4</strong>\u65F6\u624D\u4F1A\u6267\u884C\u8BE5\u7BA1\u9053\u3002\u7EAF\u53D8\u66F4\u662F\u5BF9\u539F\u59CB\u8F93\u5165\u503C\uFF08\u6BD4\u5982 String\u3001Number\u3001Boolean \u6216 Symbol \uFF09\u7684\u53D8\u66F4\uFF0C\u6216\u662F\u5BF9<strong>\u5BF9\u8C61\u5F15\u7528</strong>\u7684\u53D8\u66F4\uFF08\u6BD4\u5982 Date\u3001Array\u3001Function\u3001Object\uFF09\u3002</p></blockquote><ul><li><p>\u7528\u65B0\u5BF9\u8C61\u66FF\u6362\u65E7\u5BF9\u8C61 \u4FEE\u6539\u5BF9\u8C61\u7684 <strong>\u5F15\u7528</strong> \u6765\u89E6\u53D1\u53D8\u66F4\u68C0\u6D4B</p></li><li><p>\u4F7F\u7528<strong>\u975E\u7EAF</strong>\u7684\u7BA1\u9053</p></li></ul><p>\u5728\u88C5\u9970\u5668\u4E2D\u5C06 <code>pure</code> \u5C5E\u6027\u8BBE\u7F6E\u4E3A <code>false</code> \uFF0C\u5BF9\u8C61\u5185\u7684\u5C5E\u6027\u53D1\u751F\u53D8\u5316\u65F6\u5C31\u4F1A\u89E6\u53D1\u7BA1\u9053\u6267\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>@<span class="token function">Pipe</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;flyingHeroesImpure&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pure</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5185\u7F6E\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u6807\u7B7E" aria-hidden="true">#</a> \u5185\u7F6E\u6807\u7B7E</h2><h3 id="ng-template-\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#ng-template-\u5143\u7D20" aria-hidden="true">#</a> <code>&lt;ng-template&gt;</code> \u5143\u7D20</h3><p>\u5982\u679C\u6CA1\u6709\u4F7F\u7528<strong>\u7ED3\u6784\u578B\u6307\u4EE4</strong>\uFF0C\u800C\u4EC5\u4EC5\u628A\u4E00\u4E9B\u522B\u7684\u5143\u7D20\u5305\u88C5\u8FDB <code>&lt;ng-template&gt;</code> \u4E2D\uFF0C\u90A3\u4E9B\u5143\u7D20\u5C31\u662F\u4E0D\u53EF\u89C1\u7684</p><h3 id="ng-container-\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#ng-container-\u5143\u7D20" aria-hidden="true">#</a> <code>&lt;ng-container&gt;</code> \u5143\u7D20</h3><p>\u76F8\u5F53\u4E8E <code>Vue</code> \u7684 <code>&lt;template&gt;</code>\uFF0C\u672C\u8EAB\u4E0D\u4F1A\u88AB\u6E32\u67D3\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u7EC4\u5143\u7D20\u7684\u6839\u5143\u7D20\u8FDB\u884C\u6761\u4EF6\u6E32\u67D3</p>`,43),o=[p];function c(l,i){return a(),s("div",null,o)}const u=n(e,[["render",c],["__file","\u6A21\u677F\u8BED\u6CD5.html.vue"]]);export{u as default};
