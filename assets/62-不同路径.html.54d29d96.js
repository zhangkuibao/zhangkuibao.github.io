import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as p}from"./app.cb0a7cdb.js";const t={},e=p(`<p>\u4E00\u4E2A\u673A\u5668\u4EBA\u4F4D\u4E8E\u4E00\u4E2A <code>m</code> x <code>n</code>\xA0 \u7F51\u683C\u7684\u5DE6\u4E0A\u89D2\uFF0Cm \u4E3A y \u8F74\u957F\u5EA6\uFF0Cn \u4E3A x \u8F74\u957F\u5EA6\u3002</p><p>\u673A\u5668\u4EBA\u6BCF\u6B21\u53EA\u80FD\u5411\u4E0B\u6216\u8005\u5411\u53F3\u79FB\u52A8\u4E00\u6B65\u3002\u673A\u5668\u4EBA\u8BD5\u56FE\u8FBE\u5230\u7F51\u683C\u7684\u53F3\u4E0B\u89D2\u3002</p><p>\u95EE\u603B\u5171\u6709\u591A\u5C11\u6761\u4E0D\u540C\u7684\u8DEF\u5F84\uFF1F</p><h2 id="\u56DE\u6EAF\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u56DE\u6EAF\u89E3\u6CD5" aria-hidden="true">#</a> \u56DE\u6EAF\u89E3\u6CD5</h2><h3 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h3><p>\u627E\u51FA\u6240\u6709\u8D70\u6CD5\uFF0C\u5230\u8FBE\u7EC8\u70B9\u8BB0\u4F5C\u4E00\u6B21\u6709\u6548\u8DEF\u5F84\u3002</p><p>\u53EA\u80FD\u5411\u53F3\u6216\u5411\u4E0B\u3002</p><p>\u6BCF\u4E00\u6B65\u7684\u5750\u6807\u8BB0\u4F5C <code>[x,y]</code>\uFF0C\u5230\u8FBE\u7EC8\u70B9 <code>[n,m]</code> \u7684\u8DEF\u5F84\u8BB0\u4F5C\u4E00\u6B21\u6709\u6548\u8DEF\u5F84\u3002</p><p><code>x &gt; n || y &gt; m</code> \u8868\u793A\u8D85\u51FA\u5730\u56FE\u8303\u56F4\uFF0C\u662F\u65E0\u6548\u8DEF\u5F84\u3002</p><p>\u7528 <code>fn(x,y)</code> \u8868\u793A\u8D70\u5230 <code>[x,y]</code>\uFF0C\u4E0B\u4E00\u6B65\u53EF\u8D70\u7684\u4F4D\u7F6E\u4E3A\uFF1A<code>[x+1, y+1]</code>\u3002</p><h3 id="\u590D\u6742\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u590D\u6742\u5EA6" aria-hidden="true">#</a> \u590D\u6742\u5EA6</h3><ul><li>\u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(1)\u3002</li></ul><h3 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">uniquePaths</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">pos</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> n <span class="token operator">&amp;&amp;</span> y <span class="token operator">===</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">pos</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">&lt;</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">pos</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">pos</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">uniquePaths</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u52A8\u6001\u89C4\u5212\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u89C4\u5212\u89E3\u6CD5" aria-hidden="true">#</a> \u52A8\u6001\u89C4\u5212\u89E3\u6CD5</h2><h3 id="\u4EE3\u7801-1" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801-1" aria-hidden="true">#</a> \u4EE3\u7801 1</h3><p>\u7528 <code>f(x, y)</code> \u8868\u793A\u8D70\u5230 <code>(x, y)</code> \u7684\u8DEF\u5F84\u6570\u3002</p><p>\u8981\u8D70\u5230 <code>(x, y)</code> \u5FC5\u987B\u8D70\u5230 <code>(x - 1, y)</code> \u6216 <code>(x, y - 1)</code>\u3002</p><p>\u52A8\u6001\u89C4\u5212\u65B9\u7A0B\uFF1A<code>f(x, y) = f(x - 1, y) + f(x, y - 1)</code>\u3002</p><p><code>1 * 1</code> \u7684\u7A7A\u95F4\u53EA\u6709\u4E00\u6761\u8DEF\uFF0C\u5373 <code>f(1, 1) = 1</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">uniquePaths</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> n <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">uniquePaths</span><span class="token punctuation">(</span>m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">uniquePaths</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">uniquePaths</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4EE3\u7801-2" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801-2" aria-hidden="true">#</a> \u4EE3\u7801 2</h3><h4 id="\u590D\u6742\u5EA6-1" tabindex="-1"><a class="header-anchor" href="#\u590D\u6742\u5EA6-1" aria-hidden="true">#</a> \u590D\u6742\u5EA6</h4><ul><li>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(mn)</li><li>\u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(mn)</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">uniquePaths</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5230\u8FBE\u8FB9\u754C\u4E0A\u7684\u67D0\u70B9\u53EA\u6709\u4E00\u6761\u8DEF\u5F84</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    f<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    f<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> mi <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> mi <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> mi<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> ni <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> ni <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> ni<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      f<span class="token punctuation">[</span>mi<span class="token punctuation">]</span><span class="token punctuation">[</span>ni<span class="token punctuation">]</span> <span class="token operator">=</span> f<span class="token punctuation">[</span>mi <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>ni<span class="token punctuation">]</span> <span class="token operator">+</span> f<span class="token punctuation">[</span>mi<span class="token punctuation">]</span><span class="token punctuation">[</span>ni <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> f<span class="token punctuation">[</span>m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","62-\u4E0D\u540C\u8DEF\u5F84.html.vue"]]);export{k as default};
