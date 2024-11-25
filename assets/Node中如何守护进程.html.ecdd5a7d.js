import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as p,a as n,e as o,f as e,g as c,h as u}from"./app.cb0a7cdb.js";const i={},l=e(`<h2 id="\u6355\u83B7\u629B\u5230\u5168\u5C40\u7684\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#\u6355\u83B7\u629B\u5230\u5168\u5C40\u7684\u5F02\u5E38" aria-hidden="true">#</a> \u6355\u83B7\u629B\u5230\u5168\u5C40\u7684\u5F02\u5E38</h2><p>NodeJS \u73AF\u5883\u4E2D\u5982\u679C\u51FA\u73B0\u4E86\u672A\u6355\u83B7\u7684\u5F02\u5E38\u4F1A\u5BFC\u81F4\u8FDB\u7A0B\u5D29\u6E83\uFF0C\u53EF\u4EE5\u7528 process \u7684 uncaughtException \u4E8B\u4EF6\u6765\u6355\u83B7\u8FD9\u4E9B\u5F02\u5E38\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;uncaughtException&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;process error is:&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5728\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4E2D\u91CD\u542F\u5E94\u7528\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;uncaughtException&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;process error is:&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">restartServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u91CD\u542F\u670D\u52A1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u5904\u7406\u65B9\u5F0F\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5185\u5B58\u6CC4\u6F0F\uFF1A\u5F53\u5F02\u5E38\u51FA\u73B0\u65F6\uFF0C\u76F4\u63A5\u4ECE\u5BF9\u5E94\u6267\u884C\u6808\u4E2D\u65AD\uFF0C\u800C\u5230 process \u6355\u83B7\u7684\u5F02\u5E38\u4E8B\u4EF6\u4E0B\uFF0C\u5BFC\u81F4\u4E86 v8 \u5F15\u64CE\u7684\u5783\u573E\u56DE\u6536\u529F\u80FD\u4E0D\u80FD\u6309\u7167\u6B63\u5E38\u6D41\u7A0B\u5DE5\u4F5C\uFF0C\u7136\u540E\u5F00\u59CB\u51FA\u73B0\u5185\u5B58\u6CC4\u6F0F\u95EE\u9898\u3002</p><h2 id="\u5229\u7528-domain-\u6A21\u5757\u6765\u5B88\u62A4\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5229\u7528-domain-\u6A21\u5757\u6765\u5B88\u62A4\u8FDB\u7A0B" aria-hidden="true">#</a> \u5229\u7528 domain \u6A21\u5757\u6765\u5B88\u62A4\u8FDB\u7A0B</h2><p>\u4F7F\u7528 domain \u6A21\u5757\u4E5F\u80FD\u8FBE\u5230\u540C\u6837\u7684\u6548\u679C\uFF0C\u4F46\u662F\u540C\u6837\u4F1A\u51FA\u73B0\u5185\u5B58\u6CC4\u6F0F\u7684\u95EE\u9898\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> domain <span class="token keyword">from</span> <span class="token string">&quot;domain&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> d <span class="token operator">=</span> domain<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> dot <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token operator">++</span><span class="token punctuation">,</span> dot<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> dot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>task<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

d<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;err&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  d<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

d<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u591A\u8FDB\u7A0B\u6A21\u5F0F\u52A0\u5F02\u5E38\u6355\u83B7\u540E\u91CD\u542F" tabindex="-1"><a class="header-anchor" href="#\u591A\u8FDB\u7A0B\u6A21\u5F0F\u52A0\u5F02\u5E38\u6355\u83B7\u540E\u91CD\u542F" aria-hidden="true">#</a> \u591A\u8FDB\u7A0B\u6A21\u5F0F\u52A0\u5F02\u5E38\u6355\u83B7\u540E\u91CD\u542F</h2><p>\u4EE5\u591A\u8FDB\u7A0B\u6A21\u5F0F\u53BB\u90E8\u7F72\u5E94\u7528\uFF0C\u5F53\u67D0\u4E00\u4E2A\u8FDB\u7A0B\u89E6\u53D1\u5168\u5C40\u5F02\u5E38\u6355\u83B7\u540E\uFF0C\u91CD\u542F\u8BE5\u8FDB\u7A0B\u91CA\u653E\u5185\u5B58\uFF0C\u6B64\u65F6\u5176\u4ED6\u8FDB\u7A0B\u53EF\u4EE5\u7EE7\u7EED\u63D0\u4F9B\u670D\u52A1\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> cluster <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;cluster&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> os <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;os&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> domain <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;domain&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> d <span class="token operator">=</span> domain<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>cluster<span class="token punctuation">.</span>isMaster<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cpuNum <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">cpus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cpuNum<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cluster<span class="token punctuation">.</span><span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// fork work log</span>
  cluster<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;fork&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">worker</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> worker</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>worker<span class="token punctuation">.</span>process<span class="token punctuation">.</span>pid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u8FDB\u7A0B\u542F\u52A8\u6210\u529F</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u76D1\u542C\u5F02\u5E38\u9000\u51FA\u8FDB\u7A0B\uFF0C\u5E76\u91CD\u65B0fork</span>
  cluster<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;exit&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">worker<span class="token punctuation">,</span> code<span class="token punctuation">,</span> signal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> worker</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>worker<span class="token punctuation">.</span>process<span class="token punctuation">.</span>pid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u8FDB\u7A0B\u542F\u52A8\u5F02\u5E38\u9000\u51FA</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cluster<span class="token punctuation">.</span><span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  http
    <span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      d<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
      d<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BB0\u5F55\u7684err\u4FE1\u606F&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u51FA\u9519\u7684 work id:&quot;</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>pid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// uploadError(err)  // \u4E0A\u62A5\u9519\u8BEF\u4FE1\u606F\u81F3\u76D1\u63A7</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;\u670D\u52A1\u5668\u5F02\u5E38, \u8BF7\u7A0D\u540E\u518D\u8BD5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5C06\u5F02\u5E38\u5B50\u8FDB\u7A0B\u6740\u6B7B</span>
        cluster<span class="token punctuation">.</span>worker<span class="token punctuation">.</span><span class="token function">kill</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>pid<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      d<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token function">handle</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> req<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>pid <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u51FA\u9519\u4E86</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">response by worker: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>process<span class="token punctuation">.</span>pid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,13),k={href:"http://www.manongjc.com/detail/54-wzeoqgahntbwifv.html",target:"_blank",rel:"noopener noreferrer"},r=c("nodejs \u4E2D\u7684\u5F02\u5E38\u9519\u8BEF\u5904\u7406");function d(v,m){const s=u("ExternalLinkIcon");return t(),p("div",null,[l,n("p",null,[n("a",k,[r,o(s)])])])}const f=a(i,[["render",d],["__file","Node\u4E2D\u5982\u4F55\u5B88\u62A4\u8FDB\u7A0B.html.vue"]]);export{f as default};
