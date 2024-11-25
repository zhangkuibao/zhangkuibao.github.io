import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as n,e as t,f as c,g as s,h as i}from"./app.cb0a7cdb.js";const l={},u=c(`<p>\u4E00\u4E2A\u5BF9\u8C61\u7684 <code>__proto__</code> \u6307\u5411\u7684\u662F\u8FD9\u4E2A\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u7684 <code>prototype</code>\u3002</p><h2 id="prototype-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#prototype-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> prototype \u662F\u4EC0\u4E48</h2><p><code>prototype</code> \u662F<strong>\u51FD\u6570\u7684\u5C5E\u6027</strong>\uFF0C\u662F\u4E00\u4E2A\u7EE7\u627F\u81EA <code>Object</code> \u7684\u5BF9\u8C61\uFF0C\u9ED8\u8BA4\u7684 <code>prototype</code> \u53EA\u6709\u4E00\u4E2A\u5C5E\u6027\uFF0C\u5176\u4E2D\u5305\u542B <code>constructor</code>\uFF0C\u6307\u5411\u5F53\u524D\u51FD\u6570\u81EA\u8EAB\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Ctor</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">constructor</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> Ctor <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u4E2A <code>Function</code> \u5BF9\u8C61\u5728\u4F7F\u7528 <code>new</code> \u8FD0\u7B97\u7B26\u6765\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u65F6\uFF0C\u4F1A\u5C06\u5B83\u7684 <code>prototype</code> \u5C5E\u6027\u4F5C\u4E3A\u65B0\u5BF9\u8C61\u7684\u539F\u578B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Ctor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> inst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ctor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Ctor</span><span class="token punctuation">.</span>prototype <span class="token operator">===</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>inst<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token class-name">Ctor</span><span class="token punctuation">.</span>prototype <span class="token operator">===</span> inst<span class="token punctuation">.</span>__proto__<span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proto-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#proto-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> <code>__proto__</code> \u662F\u4EC0\u4E48</h2><p><code>__proto__</code> \u662F<strong>\u5BF9\u8C61\u7684\u5C5E\u6027</strong>\uFF0C\u662F\u5BF9\u8C61\u7684<strong>\u539F\u578B\u5BF9\u8C61</strong>\uFF0C\u5982\u679C\u5728\u5BF9\u8C61\u4E0A\u6CA1\u6709\u627E\u5230\u67D0\u4E2A\u5C5E\u6027\u5219\u4F1A\u6CBF\u7740\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u67E5\u8BE2\uFF0C\u6240\u6709\u7684\u5BF9\u8C61\u90FD\u7EE7\u627F\u81EA <code>Object</code>\u3002</p><p>\u666E\u901A\u5BF9\u8C61\u7684 <code>__proto__</code> \u5C5E\u6027\u662F\u5BF9\u8C61\uFF0C<a href="#%E4%B8%BA%E4%BB%80%E4%B9%88-function-prototype-%E6%98%AF%E5%87%BD%E6%95%B0">\u51FD\u6570\u7684 <code>__proto__</code> \u662F\u4E00\u4E2A\u5185\u7F6E\u51FD\u6570</a>\u3002</p><p>\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u65F6\u4F1A\u7ED9\u8FD9\u4E2A\u5BF9\u8C61\u4E00\u4E2A <code>__proto__</code> \u5C5E\u6027\uFF0C\u6307\u5411\u5176\u6784\u9020\u51FD\u6570\u7684 <code>prototype</code> \u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Ctor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> inst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ctor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

inst<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Ctor</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// true</span>
inst<span class="token punctuation">.</span><span class="token class-name">__proto__</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Ctor<span class="token punctuation">;</span> <span class="token comment">// true</span>
inst<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Ctor<span class="token punctuation">;</span> <span class="token comment">// true</span>
inst<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&quot;constructor&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false constructor \u662F inst.__proto__ \u4E0A\u7684\u5C5E\u6027</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u672A\u7528 <code>new</code> \u64CD\u4F5C\u7B26\u521B\u5EFA\u7684\u5BF9\u8C61\u9ED8\u8BA4\u6784\u9020\u51FD\u6570\u4E3A <code>Object</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Object<span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570\u7684\u72EC\u7279\u4E4B\u5904" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684\u72EC\u7279\u4E4B\u5904" aria-hidden="true">#</a> \u51FD\u6570\u7684\u72EC\u7279\u4E4B\u5904</h2><p>JavaScript \u4E2D\u4E07\u7269\u7686\u4E3A\u5BF9\u8C61\uFF0C\u51FD\u6570\u4E5F\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u5BF9\u8C61\uFF0C\u6240\u6709\u7684\u51FD\u6570\u90FD\u7EE7\u627F\u81EA <code>Function</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Ctor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

Ctor<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5173\u4E8E <code>Function</code>\uFF1A</p><ul><li><code>Function.constructor</code> \u6307\u5411 <code>Function</code> \u81EA\u8EAB\u3002</li><li><code>Function.prototype</code> \u662F\u4E00\u4E2A\u51FD\u6570\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Function<span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// \u0192 () { [native code] }</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u51FD\u6570\u7EE7\u627F\u81EA <code>Function</code>\uFF0C\u4F46\u662F\u7528\u51FD\u6570\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u521B\u5EFA\u51FA\u7684\u5B9E\u4F8B\u5BF9\u8C61\u662F\u7EE7\u627F\u81EA <code>Object</code> \u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Ctor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> inst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ctor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>tag <span class="token operator">=</span> <span class="token string">&quot;obj&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Function<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// obj</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// obj</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inst<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// obj</span>

<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>tag <span class="token operator">=</span> <span class="token string">&quot;func&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Function<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// func</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// func</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inst<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// obj</span>

<span class="token class-name">Ctor</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>tag <span class="token operator">=</span> <span class="token string">&quot;ctor&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Function<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// func</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// func</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inst<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ctor</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a" aria-hidden="true">#</a> Q&amp;A</h2><h3 id="ctor-prototype-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#ctor-prototype-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> <code>Ctor.prototype</code> \u662F\u4EC0\u4E48</h3><p>\u51FD\u6570\u7684 <code>prototype</code> \u662F\u4E00\u4E2A\u7EE7\u627F\u81EA <code>Object</code> \u7684\u5BF9\u8C61\uFF0C\u9ED8\u8BA4\u7684 <code>prototype</code> \u53EA\u6709\u4E00\u4E2A\u5C5E\u6027\uFF0C\u5176\u4E2D\u5305\u542B <code>constructor</code>\uFF0C\u6307\u5411\u5F53\u524D\u51FD\u6570\u81EA\u8EAB\uFF0C\u53EF\u4EE5\u8FD9\u6837\u5B9A\u4E49\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Ctor</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">constructor</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> Ctor <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ctor-proto-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#ctor-proto-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> <code>Ctor.__proto__</code> \u662F\u4EC0\u4E48</h3><p>js \u4E2D\u7684\u51FD\u6570\u4E5F\u662F\u4E00\u79CD\u5BF9\u8C61\uFF0C\u51FD\u6570\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u662F <code>Function</code>\uFF0C<strong>\u5BF9\u8C61\u7684\u539F\u578B\u6307\u5411\u5176\u6784\u9020\u51FD\u6570\u7684 <code>prototype</code></strong>\uFF0C\u56E0\u6B64\u51FD\u6570\u7684 <code>__proto__</code> \u5C5E\u6027\u6307\u5411 <code>Function.prototype</code>\u3002</p><p>\u6CE8\u610F <code>Function.prototype</code> \u662F\u4E00\u4E2A\u5185\u7F6E\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Ctor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Ctor<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// \u0192 () { [native code] }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ctor-prototype-proto-\u6307\u5411\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#ctor-prototype-proto-\u6307\u5411\u4EC0\u4E48" aria-hidden="true">#</a> <code>Ctor.prototype.__proto__</code> \u6307\u5411\u4EC0\u4E48</h3><p>\u6240\u6709\u5BF9\u8C61\u7684\u9ED8\u8BA4\u6784\u9020\u51FD\u6570\u90FD\u662F <code>Object</code>\uFF0C<code>Ctor.prototype</code> \u7684\u539F\u578B\u5C31\u662F\u5176\u6784\u9020\u51FD\u6570\u7684 <code>prototype</code> \u5373 <code>Object.prototype</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Ctor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">Ctor</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E3A\u4EC0\u4E48-function-prototype-\u662F\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48-function-prototype-\u662F\u51FD\u6570" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48 <code>Function.prototype</code> \u662F\u51FD\u6570</h3>`,33),r=s("\u4E4B\u524D\u8BF4\u8FC7\u51FD\u6570\u7684 "),d=n("code",null,"prototype",-1),k=s(" \u662F\u5BF9\u8C61\uFF0C\u4F46\u662F "),v=n("code",null,"Function.prototype",-1),m=s(" \u5374\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5728 "),_={href:"https://262.ecma-international.org/6.0/#sec-properties-of-the-function-prototype-object",target:"_blank",rel:"noopener noreferrer"},b=s("ECMAScript\xAE 2015 Language Specification"),h=s("\u4E2D\u63CF\u8FF0\u4E86\u8FD9\u6837\u505A\u7684\u539F\u56E0\uFF1A"),g=n("blockquote",null,[n("p",null,"NOTEThe Function prototype object is specified to be a function object to ensure compatibility with ECMAScript code that was created prior to the ECMAScript 2015 specification\u3002")],-1),y=n("blockquote",null,[n("p",null,"\u6CE8\uFF1AFunction \u539F\u578B\u5BF9\u8C61\u88AB\u6307\u5B9A\u4E3A\u51FD\u6570\u5BF9\u8C61\uFF0C\u4EE5\u786E\u4FDD\u4E0E ECMAScript 2015 \u89C4\u8303\u4E4B\u524D\u521B\u5EFA\u7684 ECMAScript \u4EE3\u7801\u517C\u5BB9\u3002")],-1),f=n("blockquote",null,[n("p",null,"Function \u539F\u578B\u5BF9\u8C61\u672C\u8EAB\u5C31\u662F\u4E00\u4E2A\u5185\u7F6E\u51FD\u6570\u5BF9\u8C61\u3002\u5F53\u88AB\u8C03\u7528\u65F6\uFF0C\u5B83\u63A5\u53D7\u4EFB\u4F55\u53C2\u6570\u5E76\u8FD4\u56DE undefined\u3002\u5B83\u6CA1\u6709[[Construct]]\u5185\u90E8\u65B9\u6CD5\uFF0C\u56E0\u6B64\u5B83\u4E0D\u662F\u6784\u9020\u51FD\u6570\u3002")],-1),j=n("h2",{id:"\u53C2\u8003",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003","aria-hidden":"true"},"#"),s(" \u53C2\u8003")],-1),C={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto",target:"_blank",rel:"noopener noreferrer"},F=s("MDN "),x=n("code",null,"Object.prototype.__proto__",-1),O={href:"https://262.ecma-international.org/6.0/#sec-properties-of-the-function-prototype-object",target:"_blank",rel:"noopener noreferrer"},w=s("ECMAScript\xAE 2015 Language Specification");function E(q,S){const a=i("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[r,d,k,v,m,n("a",_,[b,t(a)]),h]),g,y,f,j,n("p",null,[n("a",C,[F,x,t(a)])]),n("p",null,[n("a",O,[w,t(a)])])])}const M=o(l,[["render",E],["__file","\u6DF1\u5EA6\u5256\u6790prototype\u4E0E__proto__\u5230\u5E95\u662F\u4EC0\u4E48\u4EE5\u53CA\u4ED6\u4EEC\u7684\u5173\u7CFB.html.vue"]]);export{M as default};
