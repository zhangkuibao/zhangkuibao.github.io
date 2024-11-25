import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as s,e as o,f as n,g as a,h as c}from"./app.cb0a7cdb.js";const i="/images/\u5E38\u89C1\u7684\u65F6\u95F4\u590D\u6742\u5EA6.jpg",r="/images/\u5E38\u89C1\u65F6\u95F4\u590D\u6742\u5EA6\u7684\u6548\u7387.png",m={},u=n(`<h2 id="\u5206\u6790\u65F6\u95F4\u590D\u6742\u5EA6\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790\u65F6\u95F4\u590D\u6742\u5EA6\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u5206\u6790\u65F6\u95F4\u590D\u6742\u5EA6\u7684\u65B9\u6CD5</h2><ol><li>\u53EA\u5173\u6CE8\u4EE3\u7801\u4E2D\u6267\u884C\u6B21\u6570\u6700\u591A\u7684\u90E8\u5206\u3002</li><li>\u603B\u590D\u6742\u5EA6\u7B49\u4E8E\u91CF\u7EA7\u6700\u5927\u7684\u90A3\u6BB5\u4EE3\u7801\u7684\u590D\u6742\u5EA6\u3002</li><li>\u5D4C\u5957\u4EE3\u7801\u7684\u590D\u6742\u5EA6\u7B49\u4E8E\u5D4C\u5957\u5185\u5916\u4EE3\u7801\u590D\u6742\u5EA6\u7684\u4E58\u79EF\u3002</li></ol><h3 id="\u53EA\u5173\u6CE8\u4EE3\u7801\u4E2D\u6267\u884C\u6B21\u6570\u6700\u591A\u7684\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#\u53EA\u5173\u6CE8\u4EE3\u7801\u4E2D\u6267\u884C\u6B21\u6570\u6700\u591A\u7684\u90E8\u5206" aria-hidden="true">#</a> \u53EA\u5173\u6CE8\u4EE3\u7801\u4E2D\u6267\u884C\u6B21\u6570\u6700\u591A\u7684\u90E8\u5206</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">total</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u51FD\u6570\u4E2D\u6267\u884C\u6700\u591A\u7684\u90E8\u5206\u4E3A for \u5FAA\u73AF\u4E2D\u7684\u8BED\u53E5\uFF0C\u5171\u6267\u884C\u4E86 n \u6B21\uFF0C\u6240\u4EE5\u8FD9\u6BB5\u4EE3\u7801\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n)\u3002</p><h3 id="\u603B\u590D\u6742\u5EA6\u7B49\u4E8E\u91CF\u7EA7\u6700\u5927\u7684\u90A3\u6BB5\u4EE3\u7801\u7684\u590D\u6742\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u603B\u590D\u6742\u5EA6\u7B49\u4E8E\u91CF\u7EA7\u6700\u5927\u7684\u90A3\u6BB5\u4EE3\u7801\u7684\u590D\u6742\u5EA6" aria-hidden="true">#</a> \u603B\u590D\u6742\u5EA6\u7B49\u4E8E\u91CF\u7EA7\u6700\u5927\u7684\u90A3\u6BB5\u4EE3\u7801\u7684\u590D\u6742\u5EA6</h3><p>\u5982\u679C\u4E00\u6BB5\u4EE3\u7801\u4E2D\u5305\u542B\u591A\u4E2A\u4E0D\u540C\u65F6\u95F4\u590D\u6742\u5EA6\u7684\u4EE3\u7801\uFF0C\u90A3\u4E48\u603B\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u53D6\u6570\u91CF\u7EA7\u6700\u9AD8\u7684\u90A3\u90E8\u5206\uFF0C\u5E76\u4E14\u5FFD\u7565\u5E38\u6570\u9879\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">total</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7B2C\u4E00\u4E2A for \u5FAA\u73AF</span>
  <span class="token keyword">var</span> sum1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sum1 <span class="token operator">=</span> sum1 <span class="token operator">+</span> i <span class="token operator">+</span> j<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u7B2C\u4E8C\u4E2A for \u5FAA\u73AF</span>
  <span class="token keyword">var</span> sum2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum2 <span class="token operator">=</span> sum2 <span class="token operator">+</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u7B2C\u4E09\u4E2A for \u5FAA\u73AF</span>
  <span class="token keyword">var</span> sum3 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum3 <span class="token operator">=</span> sum3 <span class="token operator">+</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),d=s("p",null,[a("\u7B2C\u4E00\u6BB5 for \u5FAA\u73AF\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])]),a("\u3002")],-1),h=s("p",null,"\u7B2C\u4E8C\u6BB5 for \u5FAA\u73AF\u7684\u6267\u884C\u6B21\u6570\u4E0E n \u65E0\u5173\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(1)\u3002",-1),k=s("p",null,"\u7B2C\u4E09\u6BB5 for \u5FAA\u73AF\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n)\u3002",-1),g=s("p",null,[a("\u6240\u4EE5\u603B\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n) + O(1) + "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])]),a("\uFF0C\u53D6\u6700\u5927\u6570\u91CF\u7EA7\u7684\u90E8\u5206\u4E5F\u5C31\u662F"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])]),a("\u3002")],-1),v=n(`<h3 id="\u5D4C\u5957\u4EE3\u7801\u7684\u590D\u6742\u5EA6\u7B49\u4E8E\u5D4C\u5957\u5185\u5916\u4EE3\u7801\u590D\u6742\u5EA6\u7684\u4E58\u79EF" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957\u4EE3\u7801\u7684\u590D\u6742\u5EA6\u7B49\u4E8E\u5D4C\u5957\u5185\u5916\u4EE3\u7801\u590D\u6742\u5EA6\u7684\u4E58\u79EF" aria-hidden="true">#</a> \u5D4C\u5957\u4EE3\u7801\u7684\u590D\u6742\u5EA6\u7B49\u4E8E\u5D4C\u5957\u5185\u5916\u4EE3\u7801\u590D\u6742\u5EA6\u7684\u4E58\u79EF</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> j<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">total</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res <span class="token operator">=</span> res <span class="token operator">+</span> <span class="token function">fn</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8C03\u7528 fn \u51FD\u6570</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>total \u51FD\u6570\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A <code>T1(n) = O(n)</code>\uFF0Cfn \u51FD\u6570\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A <code>T2(n) = O(n)</code>\u3002</p>`,3),y=s("p",null,[a("\u56E0\u4E3A\u5728 total \u51FD\u6570\u4E2D\u8C03\u7528\u4E86 n \u6B21 fn \u51FD\u6570\uFF0C\u6240\u4EE5\u603B\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"T"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"T"),s("mn",null,"1"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",null,"\u2217"),s("mi",null,"T"),s("mn",null,"2"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",null,"\u2217"),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"T(n) = T1(n) * T2(n) = O(n*n) = O(n^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mord"},"1"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"\u2217"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mord"},"2"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"\u2217"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])]),a("\u3002")],-1),b=n('<h2 id="\u5E38\u89C1\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u5206\u6790" aria-hidden="true">#</a> \u5E38\u89C1\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u5206\u6790</h2><p>\u4E0B\u56FE\u4E2D\u65F6\u95F4\u590D\u6742\u5EA6\u7684\u6548\u7387\u662F\u9012\u51CF\u7684\uFF1A</p><p><img src="'+i+'" alt="\u5E38\u89C1\u7684\u65F6\u95F4\u590D\u6742\u5EA6" loading="lazy"></p><p>\u5BF9\u5E94\u7684\u56FE\u8868\u5C55\u793A\u4E3A\uFF1A</p><p><img src="'+r+`" alt="\u5E38\u89C1\u65F6\u95F4\u590D\u6742\u5EA6\u7684\u6548\u7387" loading="lazy"></p><h3 id="o-1" tabindex="-1"><a class="header-anchor" href="#o-1" aria-hidden="true">#</a> O(1)</h3><p>\u4EE3\u7801\u7684\u6267\u884C\u65F6\u95F4\u4E0D\u968F n \u7684\u589E\u5927\u800C\u589E\u957F\uFF0C\u8FD9\u6837\u7684\u4EE3\u7801\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A <code>O(1)</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="o-logn-\u3001o-nlogn" tabindex="-1"><a class="header-anchor" href="#o-logn-\u3001o-nlogn" aria-hidden="true">#</a> O(logn)\u3001O(nlogn)</h3><p>\u5BF9\u6570\u9636\u65F6\u95F4\u590D\u6742\u5EA6\u7684\u5E38\u89C1\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">total1</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
    i <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53D8\u91CF i \u4ECE 1 \u5F00\u59CB\u53D6\u503C\uFF0C\u6BCF\u5FAA\u73AF\u4E00\u6B21\u4E58\u4EE5 2\uFF0C\u5F53\u5927\u4E8E n \u65F6\uFF0C\u5FAA\u73AF\u7ED3\u675F\u3002\u5B9E\u9645\u4E0A\uFF0C<strong>i \u7684\u53D6\u503C\u5C31\u662F\u4E00\u4E2A\u7B49\u6BD4\u6570\u5217</strong>\uFF0C\u5C31\u50CF\u4E0B\u9762\u8FD9\u6837\uFF1A</p>`,12),w=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"0")]),s("mo",{separator:"true"},","),s("msup",null,[s("mn",null,"2"),s("mn",null,"1")]),s("mo",{separator:"true"},","),s("msup",null,[s("mn",null,"2"),s("mn",null,"2")]),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("msup",null,[s("mn",null,"2"),s("mi",null,"x")]),s("mo",null,"="),s("mi",null,"n"),s("mo",{separator:"true"},";")]),s("annotation",{encoding:"application/x-tex"}," 2^0, 2^1, 2^2... 2^x = n; ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0585em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mord"},"..."),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7144em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"x")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mpunct"},";")])])])])],-1),x=s("p",null,[a("\u53EA\u8981\u77E5\u9053 x \u7684\u503C\uFF0C\u5C31\u53EF\u4EE5\u77E5\u9053\u8FD9\u4E24\u4E2A\u51FD\u6570\u7684\u6267\u884C\u6B21\u6570\u4E86\u3002\u7531 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mi",null,"x")]),s("mo",null,"="),s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"2^x = n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6644em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"x")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" \u53EF\u4EE5\u5F97\u51FA "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"x"),s("mo",null,"="),s("mi",null,"l"),s("mi",null,"o"),s("msub",null,[s("mi",null,"g"),s("mn",null,"2")]),s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"x = log_2n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord mathnormal"},"n")])])]),a("\uFF0C\u6240\u4EE5\u4E0A\u9762\u51FD\u6570\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"l"),s("mi",null,"o"),s("msub",null,[s("mi",null,"g"),s("mn",null,"2")]),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(log_2n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a("\u3002")],-1),f=s("p",null,[a("\u4E0B\u9762\u8FD9\u4E2A\u51FD\u6570\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"l"),s("mi",null,"o"),s("msub",null,[s("mi",null,"g"),s("mn",null,"3")]),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(log_3n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"3")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])])],-1),_=n(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">total1</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
    i <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),O=s("p",null,[a("\u7531\u4E8E\u6211\u4EEC\u53EF\u4EE5\u5FFD\u7565\u5E38\u6570\uFF0C\u4E5F\u53EF\u4EE5\u5FFD\u7565\u5BF9\u6570\u4E2D\u7684\u5E95\u6570\uFF0C\u6240\u4EE5\u5728\u5BF9\u6570\u9636\u590D\u6742\u5EA6\u4E2D\uFF0C\u7EDF\u4E00\u8868\u793A\u4E3A O(logn)\uFF1B"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(nlogn)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),a("\u7684\u542B\u4E49\u5C31\u5F88\u660E\u786E\u4E86\uFF1A\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(logn) \u7684\u4EE3\u7801\u6267\u884C\u4E86 n \u6B21\u3002")],-1),z=n(`<h3 id="o-m-n-\u3001o-m-n" tabindex="-1"><a class="header-anchor" href="#o-m-n-\u3001o-m-n" aria-hidden="true">#</a> O(m + n)\u3001O(m * n)</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">total</span><span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> sum1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum1 <span class="token operator">+=</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> sum2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum2 <span class="token operator">+=</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> sum1 <span class="token operator">+</span> sum2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3A\u6211\u4EEC\u65E0\u6CD5\u8BC4\u4F30 m \u548C n \u8C01\u7684\u91CF\u7EA7\u6BD4\u8F83\u5927\uFF0C\u6240\u4EE5\u5C31\u4E0D\u80FD\u5FFD\u7565\u6389\u5176\u4E2D\u4E00\u4E2A\uFF0C\u8FD9\u4E2A\u51FD\u6570\u7684\u590D\u6742\u5EA6\u662F\u6709\u4E24\u4E2A\u6570\u636E\u7684\u91CF\u7EA7\u6765\u51B3\u5B9A\u7684\uFF0C\u6240\u4EE5\u6B64\u51FD\u6570\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(m+n)\uFF1B\u90A3\u4E48 O(m*n) \u7684\u65F6\u95F4\u590D\u6742\u5EA6\u7C7B\u4F3C\u3002</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,4),j={href:"https://juejin.cn/post/6844903750985842695",target:"_blank",rel:"noopener noreferrer"},M=a("JavaScript \u7B97\u6CD5\u4E4B\u590D\u6742\u5EA6\u5206\u6790");function L(T,N){const t=c("ExternalLinkIcon");return e(),p("div",null,[u,d,h,k,g,v,y,b,w,x,f,_,O,z,s("p",null,[s("a",j,[M,o(t)])])])}const E=l(m,[["render",L],["__file","\u5982\u4F55\u5206\u6790\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6.html.vue"]]);export{E as default};
