import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as p,a as n,e,g as o,f as c,h as i}from"./app.cb0a7cdb.js";const u={},l={href:"https://leetcode-cn.com/problems/house-robber/submissions/",target:"_blank",rel:"noopener noreferrer"},r=o("LeetCode \u539F\u9898\u94FE\u63A5"),k=c(`<p>\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684\u5C0F\u5077\uFF0C\u8BA1\u5212\u5077\u7A83\u6CBF\u8857\u7684\u623F\u5C4B\u3002\u6BCF\u95F4\u623F\u5185\u90FD\u85CF\u6709\u4E00\u5B9A\u7684\u73B0\u91D1\uFF0C\u5F71\u54CD\u4F60\u5077\u7A83\u7684\u552F\u4E00\u5236\u7EA6\u56E0\u7D20\u5C31\u662F\u76F8\u90BB\u7684\u623F\u5C4B\u88C5\u6709\u76F8\u4E92\u8FDE\u901A\u7684\u9632\u76D7\u7CFB\u7EDF\uFF0C\u5982\u679C\u4E24\u95F4\u76F8\u90BB\u7684\u623F\u5C4B\u5728\u540C\u4E00\u665A\u4E0A\u88AB\u5C0F\u5077\u95EF\u5165\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u62A5\u8B66\u3002</p><p>\u7ED9\u5B9A\u4E00\u4E2A\u4EE3\u8868\u6BCF\u4E2A\u623F\u5C4B\u5B58\u653E\u91D1\u989D\u7684\u975E\u8D1F\u6574\u6570\u6570\u7EC4\uFF0C\u8BA1\u7B97\u4F60 \u4E0D\u89E6\u52A8\u8B66\u62A5\u88C5\u7F6E\u7684\u60C5\u51B5\u4E0B \uFF0C\u4E00\u591C\u4E4B\u5185\u80FD\u591F\u5077\u7A83\u5230\u7684\u6700\u9AD8\u91D1\u989D\u3002</p><h2 id="\u52A8\u6001\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u89C4\u5212" aria-hidden="true">#</a> \u52A8\u6001\u89C4\u5212</h2><h3 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h3><p>\u4E00\u6B21\u904D\u5386\u4E2D\u8BB0\u5F55\u5077\u7B2C i \u5BB6\u65F6\u7684\u6700\u5927\u5229\u6DA6\u548C\u4E0D\u5077\u7B2C i \u5BB6\u65F6\u7684\u6700\u5927\u5229\u6DA6\u3002</p><p>\u5077\u7B2C i \u5BB6\u7684\u6700\u5927\u5229\u6DA6\u7B49\u4E8E\u4E0D\u5077\u4E0A\u4E00\u5BB6\u65F6\u7684\u5229\u6DA6\u52A0\u4E0A nums[i]\u7684\u503C\uFF0C<code>iTCountList[i] = iBTCountList[i - 1] + nums[i]</code>\u3002</p><p>\u4E0D\u5077\u7B2C i \u5BB6\u7684\u6700\u5927\u5229\u6DA6\u7B49\u4E8E\u5077\u4E0A\u4E00\u5BB6\u7684\u5229\u6DA6\u4E0E\u4E0D\u5077\u4E0A\u4E00\u5BB6\u5229\u6DA6\u7684\u6700\u5927\u503C\uFF0C<code>iBTCountList[i] = Math.max(iTCountList[i - 1], iBTCountList[i - 1])</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//      2 1 1 2</span>
<span class="token comment">// t:   2 1 3 4</span>
<span class="token comment">// bt:  0 2 2 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u590D\u6742\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u590D\u6742\u5EA6" aria-hidden="true">#</a> \u590D\u6742\u5EA6</h3><ul><li>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A<code>O(n)</code>\u3002</li><li>\u7A7A\u95F4\u590D\u6742\u5EA6\uFF1A<code>O(n)</code>\u3002</li></ul><h3 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">rob</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> iTCountList <span class="token operator">=</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u5077\u7B2Ci\u4F4D\u65F6\u7684\u6700\u5927\u91D1\u989D</span>
  <span class="token keyword">let</span> iBTCountList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u4E0D\u5077\u7B2Ci\u4F4D\u65F6\u7684\u6700\u5927\u91D1\u989D</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> num <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    iTCountList<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> iBTCountList<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> num<span class="token punctuation">;</span>
    iBTCountList<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>iTCountList<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> iBTCountList<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>iTCountList<span class="token punctuation">[</span>nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> iBTCountList<span class="token punctuation">[</span>nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">rob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function d(m,v){const s=i("ExternalLinkIcon");return t(),p("div",null,[n("p",null,[n("a",l,[r,e(s)])]),k])}const _=a(u,[["render",d],["__file","198-\u6253\u5BB6\u52AB\u820D.html.vue"]]);export{_ as default};
