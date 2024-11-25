import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as n,e as o,f as s,g as c,h as i}from"./app.cb0a7cdb.js";const l={},u=s(`<p>\u9664\u7B2C\u4E00\u90E8\u5206 <code>\u57FA\u7840\u793A\u4F8B</code> \u4EE3\u7801\u53EF\u5B8C\u6574\u8FD0\u884C\u5916\uFF0C\u5176\u4ED6\u90E8\u5206\u4EE3\u7801\u53EA\u8BB0\u5F55\u6BCF\u4E2A\u64CD\u4F5C\u7684\u5173\u952E\u4EE3\u7801\uFF0C\u4E0D\u53EF\u76F4\u63A5\u6267\u884C\u3002</p><h2 id="\u57FA\u7840\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u793A\u4F8B" aria-hidden="true">#</a> \u57FA\u7840\u793A\u4F8B</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> mongoose <span class="token keyword">from</span> <span class="token string">&quot;mongoose&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E0E\u6570\u636E\u5E93\u5EFA\u7ACB\u8FDE\u63A5</span>
mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;mongodb://localhost:27017/test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u521B\u5EFA Schema\uFF08\u6A21\u5F0F\uFF09</span>
<span class="token keyword">const</span> kittySchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E3A Schema\uFF08\u6A21\u5F0F\uFF09\u6DFB\u52A0\u6210\u5458\u65B9\u6CD5\uFF0C\u8BE5 Schema \u7684\u6240\u6709 document\uFF08\u6587\u6863\uFF09\u90FD\u4F1A\u7EE7\u627F\u8BE5\u65B9\u6CD5</span>
kittySchema<span class="token punctuation">.</span>methods<span class="token punctuation">.</span><span class="token function-variable function">speak</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
    <span class="token operator">?</span> <span class="token string">&quot;Meow name is &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
    <span class="token operator">:</span> <span class="token string">&quot;I don&#39;t have a name&quot;</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E3A Schema\uFF08\u6A21\u5F0F\uFF09\u6DFB\u52A0\u9759\u6001\u65B9\u6CD5\uFF0C\u8BE5 Schema \u7684\u6240\u6709 Model \u90FD\u62E5\u6709\u8BE5\u9759\u6001\u65B9\u6CD5</span>
kittySchema<span class="token punctuation">.</span>statics<span class="token punctuation">.</span><span class="token function-variable function">showAllDocs</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> all <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">999</span><span class="token punctuation">,</span> all<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5C06 Schema\uFF08\u6A21\u5F0F\uFF09 \u7F16\u8BD1\u4E3A Model\uFF08\u6A21\u578B\uFF09\uFF0C\u9700\u6CE8\u610F\u4E0D\u4F20\u7B2C\u4E09\u4E2A\u53C2\u6570\u65F6 mongoose \u4F1A\u5C06 collection \u540D\u79F0\u8BBE\u5B9A\u4E3A\u4E00\u53C2\u7684\u590D\u6570\u5F62\u5F0F</span>
<span class="token keyword">const</span> Kitten <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&quot;Kitten&quot;</span><span class="token punctuation">,</span> kittySchema<span class="token punctuation">,</span> <span class="token string">&quot;Kitten&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Model \u8C03\u7528\u9759\u6001\u65B9\u6CD5</span>
Kitten<span class="token punctuation">.</span><span class="token function">showAllDocs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A document\uFF08\u6587\u6863\uFF09</span>
<span class="token keyword">const</span> silence <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Kitten</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Silence&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// document \u8C03\u7528 speak \u6210\u5458\u65B9\u6CD5</span>
silence<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5C06 document \u4FDD\u5B58\u5230\u6570\u636E\u5E93\u4E2D</span>
silence<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FDE\u63A5\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u6570\u636E\u5E93" aria-hidden="true">#</a> \u8FDE\u63A5\u6570\u636E\u5E93</h2><p>\u8C03\u7528 <code>mongoose.connect(uri, options)</code> \u65B9\u6CD5\u8BA9 <code>mongoose</code> \u8FDE\u63A5\u5230\u6570\u636E\u5E93\u3002</p><p><code>mongoose</code> \u4F1A\u7F13\u5B58\u64CD\u4F5C\uFF0C\u5728\u8FDE\u63A5\u5230\u6570\u636E\u5E93\u4E4B\u540E\u624D\u8FDB\u884C\u5B9E\u9645\u64CD\u4F5C\u3002</p><p>\u7B2C\u4E00\u6B21\u94FE\u63A5\u6570\u636E\u5E93\u5931\u8D25\u65F6\u5C06\u53D1\u51FA\u4E00\u4E2A <code>error</code> \u4E8B\u4EF6\uFF0C\u4E0D\u4F1A\u5C1D\u8BD5\u91CD\u65B0\u8FDE\u63A5\uFF0C\u91CD\u8FDE\u7684\u903B\u8F91\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\u3002</p><h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3>`,8),r={href:"https://mongoosejs.com/docs/connections.html#options",target:"_blank",rel:"noopener noreferrer"},d=c("\u5B8C\u6574\u9009\u9879"),k=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;mongodb://localhost:27017&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u7528\u6237\u540D</span>
  <span class="token literal-property property">pass</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5BC6\u7801</span>
  <span class="token literal-property property">autoIndex</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u81EA\u52A8\u6784\u5EFA\u7D22\u5F15\uFF0C\u751F\u4EA7\u73AF\u5883\u5E94\u8BE5\u8BBE\u7F6E\u4E3A false</span>
  <span class="token literal-property property">dbName</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u8981\u8FDE\u63A5\u7684\u6570\u636E\u5E93\u540D\u79F0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6570\u636E\u5E93\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u64CD\u4F5C" aria-hidden="true">#</a> \u6570\u636E\u5E93\u64CD\u4F5C</h2><h3 id="\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165" aria-hidden="true">#</a> \u63D2\u5165</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u63D2\u5165\u591A\u6761\u6570\u636E\uFF0C\u5982\u679C\u6709\u4E00\u6761\u6570\u636E\u9519\u8BEF\u5219\u63D2\u5165\u5931\u8D25\uFF0C\u6240\u6709\u6587\u6863\u90FD\u4E0D\u4F1A\u88AB\u63D2\u5165\u3002</span>
<span class="token comment">// \u5728\u65B9\u6CD5\u9009\u9879\u4E2D\u8BBE\u7F6E ordered:false \u4F1A\u8FDB\u884C\u65E0\u5E8F\u63D2\u5165\uFF0C\u4F46\u53EF\u80FD\u4F1A\u5C06\u6570\u636E\u91CD\u65B0\u6392\u5E8F\u3002</span>
<span class="token comment">// https://www.mongodb.com/docs/manual/reference/method/db.collection.insertMany/#execution-of-operations</span>
<span class="token keyword">await</span> Kitten<span class="token punctuation">.</span><span class="token function">insertMany</span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;zhangkb&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;ny&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">ordered</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE\u63D2\u5165\u7684\u6587\u6863</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2" aria-hidden="true">#</a> \u67E5\u8BE2</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> Kitten <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&quot;Kitten&quot;</span><span class="token punctuation">,</span> kittySchema<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u67E5\u8BE2\u6240\u6709\u6587\u6863\uFF0Cfind() \u65B9\u6CD5\u603B\u662F\u8FD4\u56DE\u6570\u7EC4\uFF0C\u672A\u67E5\u8BE2\u5230\u6570\u636E\u65F6\u4E3A\u7A7A\u6570\u7EC4</span>
<span class="token keyword">await</span> Kitten<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6761\u4EF6\u67E5\u8BE2</span>
<span class="token keyword">await</span> Kitten<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;zhangkb&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u7528 where \u591A\u6761\u4EF6\u67E5\u8BE2\uFF0C\u4E0E\u4E0A\u9762\u7684\u65B9\u6CD5\u7B49\u4EF7</span>
<span class="token keyword">await</span> Kitten<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;zhangkb&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u627E\u5230\u7B2C\u4E00\u4E2A\u5339\u914D\u7684\u6587\u6863\uFF0C\u6210\u529F\u5219\u8FD4\u56DE\u5BF9\u5E94\u6587\u6863\uFF0C\u5426\u5219\u8FD4\u56DEnull</span>
<span class="token keyword">await</span> Kitten<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;zhangkb&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u627E\u5230\u7B2C\u4E00\u4E2A\u5339\u914D\u7684\u6587\u6863\u5E76\u5220\u9664\u5B83\uFF0C\u6210\u529F\u5219\u8FD4\u56DE\u5BF9\u5E94\u6587\u6863\uFF0C\u5426\u5219\u8FD4\u56DEnull</span>
<span class="token keyword">await</span> Kitten<span class="token punctuation">.</span><span class="token function">findOneAndDelete</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;zhangkb&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u627E\u5230\u7B2C\u4E00\u4E2A\u5339\u914D\u7684\u6587\u6863\u5E76\u66F4\u65B0\u5B83\uFF0C\u6210\u529F\u5219\u8FD4\u56DE\u5BF9\u5E94\u6587\u6863\uFF0C\u5426\u5219\u8FD4\u56DEnull</span>
<span class="token keyword">await</span> Kitten<span class="token punctuation">.</span><span class="token function">findOneAndUpdate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;zhangkb&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6839\u636E id \u67E5\u627E</span>
<span class="token keyword">await</span> Kitten<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// doc || null</span>

<span class="token comment">// \u6839\u636E id \u67E5\u627E\u5E76\u5220\u9664\u6587\u6863\uFF0C\u6210\u529F\u5219\u8FD4\u56DE\u5BF9\u5E94\u6587\u6863\uFF0C\u5426\u5219\u8FD4\u56DEnull</span>
<span class="token keyword">await</span> Kitten<span class="token punctuation">.</span><span class="token function">findByIdAndDelete</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6839\u636E id \u67E5\u627E\u5E76\u4FEE\u6539\u6587\u6863\uFF0C\u6210\u529F\u5219\u8FD4\u56DE\u5BF9\u5E94\u6587\u6863\uFF0C\u5426\u5219\u8FD4\u56DEnull</span>
<span class="token keyword">await</span> Kitten<span class="token punctuation">.</span><span class="token function">findByIdAndUpdate</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> Kitten <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&quot;Kitten&quot;</span><span class="token punctuation">,</span> kittySchema<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5220\u9664\u591A\u4E2A\u6587\u6863\uFF0C\u53C2\u6570\u4E3A\u67E5\u8BE2\u5BF9\u8C61</span>
<span class="token keyword">await</span> Kitten<span class="token punctuation">.</span><span class="token function">deleteOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;zhangkb&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns {deletedCount: x}</span>

<span class="token comment">// \u5220\u9664\u4E00\u4E2A\u6587\u6863</span>
<span class="token keyword">await</span> Kitten<span class="token punctuation">.</span><span class="token function">deleteOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;zhangkb&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns {deletedCount: x}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539" aria-hidden="true">#</a> \u4FEE\u6539</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> Kitten <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&quot;Kitten&quot;</span><span class="token punctuation">,</span> kittySchema<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u66F4\u65B0\u6307\u5B9A\u6587\u6863</span>
<span class="token keyword">await</span> Kitten<span class="token punctuation">.</span><span class="token function">updateOne</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;zhangkb&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;T-90&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u66FF\u6362\u6307\u5B9A\u6587\u6863</span>
<span class="token keyword">await</span> Kitten<span class="token punctuation">.</span><span class="token function">replaceOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;zhangkb&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Jean-Luc Picard&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function v(m,b){const a=i("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[n("a",r,[d,o(a)])]),k])}const y=t(l,[["render",v],["__file","Mongoose\u4F7F\u7528\u624B\u518C.html.vue"]]);export{y as default};
