import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.cb0a7cdb.js";const t={},p=e(`<h2 id="\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528" aria-hidden="true">#</a> \u4F5C\u7528</h2><p>\u914D\u7F6E webpack \u7684\u4F18\u5316\u7B56\u7565\u3002</p><h2 id="\u53EF\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u53EF\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u53EF\u914D\u7F6E\u9879</h2><h3 id="minimizer" tabindex="-1"><a class="header-anchor" href="#minimizer" aria-hidden="true">#</a> minimizer</h3><p>\u8986\u76D6\u9ED8\u8BA4\u538B\u7F29\u5DE5\u5177</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> TerserPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;terser-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">TerserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">parallel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),i=[p];function o(c,r){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","optimization.html.vue"]]);export{d as default};