import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as u,c as l,a as n,e as a,w as p,g as s,f as i,h as e}from"./app.cb0a7cdb.js";const k={},r=n("code",null,"async/await",-1),d=s(" \u662F "),v=s("Generator \u51FD\u6570"),m=s("\u7684\u8BED\u6CD5\u7CD6\u3002"),b=i(`<h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;data: &quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> data2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;data2: &quot;</span><span class="token punctuation">,</span> data2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8FD9\u6837\u7684\u4E00\u4E2A\u51FD\u6570 \u5E94\u8BE5\u518D1\u79D2\u540E\u6253\u5370data \u518D\u8FC7\u4E00\u79D2\u6253\u5370data2 \u6700\u540E\u6253\u5370success</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7528-generator-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u7528-generator-\u5B9E\u73B0" aria-hidden="true">#</a> \u7528 Generator \u5B9E\u73B0</h2><p>\u5BF9\u4E8E\u4E0A\u9762\u793A\u4F8B\uFF0C\u5982\u679C\u7528 Generator \u6765\u5B9E\u73B0\uFF0C\u53EF\u4EE5\u6539\u5199\u4E3A\u4EE5\u4E0B\u5F62\u5F0F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">testGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;data: &quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> data2 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;data2: &quot;</span><span class="token punctuation">,</span> data2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Generator \u51FD\u6570\u9700\u8981\u8C03\u7528 <code>.next()</code> \u65B9\u6CD5\u624D\u80FD\u5F80\u4E0B\u6267\u884C\uFF0C\u6240\u4EE5\u9700\u8981\u5C01\u88C5\u4E00\u4E2A\u81EA\u52A8\u6267\u884C\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token function">asyncToGenerator</span><span class="token punctuation">(</span>testGen<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u601D\u8003\u4E4B\u540E\u5B8C\u6210\u5982\u4E0B\u5B9E\u73B0\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">asyncToGenerator</span><span class="token punctuation">(</span><span class="token parameter">gen</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> iterator <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">exec</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> done <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>exec<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>asyncToGenerator()</code> \u65B9\u6CD5\uFF1A <ul><li>\u63A5\u6536\u4E00\u4E2A Generator \u51FD\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6267\u884C\u5668\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u5F02\u6B65\u6267\u884C\u6BCF\u4E00\u4E2A yield \u8BED\u53E5\uFF0C\u6700\u7EC8\u8FD4\u56DE\u4E00\u4E2A Promise\u3002</li></ul></li><li><code>asyncToGenerator()</code> \u5185\u90E8\u7684 <code>exec()</code> \u65B9\u6CD5: <ul><li>\u63A5\u6536 Generator \u51FD\u6570\u751F\u6210\u7684\u8FED\u4EE3\u5668\uFF0C\u4E0D\u65AD\u8C03\u7528 <code>.next()</code> \u65B9\u6CD5\u76F4\u81F3\u5B8C\u6210\u6240\u6709 yield \u4EFB\u52A1\u3002</li><li><code>exec()</code> \u65B9\u6CD5\u5728 <code>done === true</code> \u540E\u7ACB\u5373 resolve\uFF0C\u4E0D\u9700\u8981\u5173\u6CE8 Generator \u51FD\u6570\u6700\u540E\u7684 return \u503C\u7C7B\u578B\uFF0C\u56E0\u4E3A\u6700\u540E\u7684 return \u503C\u4F1A\u7531\u5916\u90E8\u7684 then \u65B9\u6CD5\u5904\u7406\uFF08test().then()\uFF09\u3002</li></ul></li></ul><h2 id="\u5B8C\u6574\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6574\u4F8B\u5B50" aria-hidden="true">#</a> \u5B8C\u6574\u4F8B\u5B50</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">asyncToGenerator</span><span class="token punctuation">(</span><span class="token parameter">gen</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> iterator <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">exec</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> done <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>value <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>exec<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">exec</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">testGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;data: &quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> data2 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;data2: &quot;</span><span class="token punctuation">,</span> data2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">122</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">asyncToGenerator</span><span class="token punctuation">(</span>testGen<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,13),f={href:"https://juejin.cn/post/6844904102053281806",target:"_blank",rel:"noopener noreferrer"},g=s("\u624B\u5199 async await \u7684\u6700\u7B80\u5B9E\u73B0\uFF0820 \u884C\uFF09"),y=s("babel \u5982\u4F55\u7F16\u8BD1 async \u8BED\u6CD5");function h(w,_){const t=e("RouterLink"),o=e("ExternalLinkIcon");return u(),l("div",null,[n("p",null,[r,d,a(t,{to:"/posts/technology/JavaScript/JSAPI/Generator%E5%87%BD%E6%95%B0.html"},{default:p(()=>[v]),_:1}),m]),b,n("p",null,[n("a",f,[g,a(o)])]),n("p",null,[a(t,{to:"/posts/technology/JavaScript/babel/babel%E5%A6%82%E4%BD%95%E7%BC%96%E8%AF%91async%E8%AF%AD%E6%B3%95.html"},{default:p(()=>[y]),_:1})])])}const G=c(k,[["render",h],["__file","\u7528Generator\u51FD\u6570\u5B9E\u73B0async\u8BED\u6CD5.html.vue"]]);export{G as default};
