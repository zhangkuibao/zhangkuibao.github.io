import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,f as e}from"./app.cb0a7cdb.js";const t={},o=e(`<h2 id="\u9759\u6001\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5" aria-hidden="true">#</a> \u9759\u6001\u65B9\u6CD5</h2><h3 id="object-assign-target-sources" tabindex="-1"><a class="header-anchor" href="#object-assign-target-sources" aria-hidden="true">#</a> Object.assign(target, ...sources)</h3><p>\u5C06\u6240\u6709<strong>\u53EF\u679A\u4E3E\u5C5E\u6027</strong>\u7684\u503C\u4ECE\u4E00\u4E2A\u6216\u591A\u4E2A\u6E90\u5BF9\u8C61\u5206\u914D\u5230 <code>target</code> \uFF0C\u8FD4\u56DE\u5408\u5E76\u540E\u7684 <code>target</code></p><ol><li>\u540C\u540D\u5C5E\u6027\u540E\u9762\u8986\u76D6\u524D\u9762</li><li>\u53EA\u4F1A\u62F7\u8D1D\u6E90\u5BF9\u8C61\u81EA\u8EAB\u7684\u5E76\u4E14<strong>\u53EF\u679A\u4E3E</strong>\u7684\u5C5E\u6027\u5230\u76EE\u6807\u5BF9\u8C61</li><li>\u65B9\u6CD5\u4F7F\u7528\u6E90\u5BF9\u8C61\u7684<code>[[Get]]</code>\u548C\u76EE\u6807\u5BF9\u8C61\u7684<code>[[Set]]</code>\uFF0C\u6240\u4EE5\u5B83\u4F1A\u8C03\u7528\u76F8\u5173 <code>getter</code> \u548C <code>setter</code>\u3002</li><li>\u6D45\u62F7\u8D1D</li><li>\u65E0\u6CD5\u62F7\u8D1D\u7EE7\u627F\u5C5E\u6027\u548C\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027</li></ol><h3 id="object-defineproperty-obj-prop-descriptor" tabindex="-1"><a class="header-anchor" href="#object-defineproperty-obj-prop-descriptor" aria-hidden="true">#</a> Object.defineProperty(obj, prop, descriptor)</h3><p>\u4FEE\u6539\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u7684\u63CF\u8FF0\u7B26\uFF0C\u5C5E\u6027\u4E0D\u5B58\u5728\u65F6\u521B\u5EFA\uFF0C\u7701\u7565\u67D0\u4E9B\u5B57\u6BB5\u65F6\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u503C</p><h4 id="descrioptor-\u53EF\u914D\u7F6E\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#descrioptor-\u53EF\u914D\u7F6E\u5C5E\u6027" aria-hidden="true">#</a> descrioptor \u53EF\u914D\u7F6E\u5C5E\u6027</h4><ol><li>configurable\uFF0C\u80FD\u5426\u4FEE\u6539\u8BE5\u5C5E\u6027\u7684\u63CF\u8FF0\u7B26\uFF0C\u9ED8\u8BA4\u4E3A <code>false</code></li><li>enumerable\uFF0C\u80FD\u5426\u88AB\u679A\u4E3E\uFF0C\u9ED8\u8BA4 false</li><li>value\uFF0C\u8BE5\u5C5E\u6027\u7684\u503C\uFF0C\u9ED8\u8BA4\u4E3A <code>undefined</code></li><li>writable\uFF0C\u503C\u53EF\u5426\u88AB\u4FEE\u6539</li><li>get\uFF0C\u5C5E\u6027\u7684 getter</li><li>set\uFF0C\u5C5E\u6027\u7684 setter</li></ol><h4 id="\u7EE7\u627F\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F\u5C5E\u6027" aria-hidden="true">#</a> \u7EE7\u627F\u5C5E\u6027</h4><p>\u5982\u679C\u8BBF\u95EE\u8005\u7684\u5C5E\u6027\u662F\u88AB\u7EE7\u627F\u7684\uFF0C\u5B83\u7684 <code>get</code> \u548C <code>set</code> \u65B9\u6CD5\u4F1A\u5728\u5B50\u5BF9\u8C61\u7684\u5C5E\u6027\u88AB\u8BBF\u95EE\u6216\u8005\u4FEE\u6539\u65F6\u88AB\u8C03\u7528\u3002\u5982\u679C\u8FD9\u4E9B\u65B9\u6CD5\u7528\u4E00\u4E2A\u53D8\u91CF\u5B58\u503C\uFF0C\u8BE5\u503C\u4F1A\u88AB\u6240\u6709\u5BF9\u8C61\u5171\u4EAB</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">var</span> value<span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>myclass<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&quot;x&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    value <span class="token operator">=</span> x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">myclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">myclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-defineproperties-obj-props" tabindex="-1"><a class="header-anchor" href="#object-defineproperties-obj-props" aria-hidden="true">#</a> Object.defineProperties(obj, props)</h3><p>\u540C\u4E0A\uFF0C\u53EF\u540C\u65F6\u4FEE\u6539\u5BF9\u8C61\u7684\u591A\u4E2A\u5C5E\u6027\uFF0C\u53EF\u914D\u7F6E\u5C5E\u6027\u4E0E <code>Object.defineProperty()</code> \u4E00\u81F4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">property1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">property2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// etc. etc.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-create-proto-propertiesobject" tabindex="-1"><a class="header-anchor" href="#object-create-proto-propertiesobject" aria-hidden="true">#</a> Object.create(proto, [propertiesObject])</h3><p>\u53EF\u5728\u521B\u5EFA\u5BF9\u8C61\u65F6\u8BBE\u7F6E\u5C5E\u6027\u53CA\u5C5E\u6027\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">property1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">property2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// etc. etc.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-freeze-obj" tabindex="-1"><a class="header-anchor" href="#object-freeze-obj" aria-hidden="true">#</a> Object.freeze(obj)</h3><p>\u51BB\u7ED3\u5BF9\u8C61\uFF0C\u51BB\u7ED3\u540E\u7684\u5BF9\u8C61\u65E0\u6CD5\u88AB\u4FEE\u6539\uFF0C\u5305\u62EC\u6DFB\u52A0\u3001\u5220\u9664\u5C5E\u6027\uFF0C\u4E0D\u80FD\u4FEE\u6539\u5C5E\u6027\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26\uFF0C\u4E0D\u80FD\u4FEE\u6539\u539F\u578B</p><p>\u8FD4\u56DE\u503C\u4E3A<strong>\u6E90\u5BF9\u8C61</strong></p><p>\u5982\u679C\u4E00\u4E2A\u5C5E\u6027\u7684\u503C\u662F\u4E2A\u5BF9\u8C61\uFF0C\u5219\u8FD9\u4E2A\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u662F\u53EF\u4EE5\u4FEE\u6539\u7684\uFF0C\u9664\u975E\u5B83\u4E5F\u662F\u4E2A\u51BB\u7ED3\u5BF9\u8C61</p><h3 id="object-isfrozen-obj" tabindex="-1"><a class="header-anchor" href="#object-isfrozen-obj" aria-hidden="true">#</a> Object.isFrozen(obj)</h3><p>\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u51BB\u7ED3</p><h3 id="object-getownpropertydescriptor-obj-prop" tabindex="-1"><a class="header-anchor" href="#object-getownpropertydescriptor-obj-prop" aria-hidden="true">#</a> Object.getOwnPropertyDescriptor(obj, prop)</h3><p>\u83B7\u53D6\u5BF9\u8C61\u6307\u5B9A\u5C5E\u6027\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26\u72B6\u6001</p><p>\u8FD4\u56DE\u503C\u4E3A\u5BF9\u8C61\u3002\u6CA1\u6709 <code>getter</code> \u548C <code>setter</code> \u65F6\u8FD4\u56DE\u5BF9\u8C61\u4E0A\u6CA1\u6709\u8FD9\u4E24\u4E2A\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*{
    configurable: true
    enumerable: true
    value: 1
    writable: true
}*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-entries-obj" tabindex="-1"><a class="header-anchor" href="#object-entries-obj" aria-hidden="true">#</a> Object.entries(obj)</h3><p>\u83B7\u53D6\u4E00\u4E2A\u7ED9\u5B9A\u5BF9\u8C61\u81EA\u8EAB<strong>\u53EF\u679A\u4E3E\u5C5E\u6027</strong>\u7684\u952E\u503C\u5BF9\u6570\u7EC4</p><p>\u8FD4\u56DE\u503C\u4E3A\u4E8C\u7EF4\u6570\u7EC4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [[age,1],[&#39;name&#39;,1]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-getownpropertynames-obj" tabindex="-1"><a class="header-anchor" href="#object-getownpropertynames-obj" aria-hidden="true">#</a> Object.getOwnPropertyNames(obj)</h3><p>\u8FD4\u56DE\u5BF9\u8C61<strong>\u81EA\u8EAB</strong>\u7684\u5C5E\u6027\u540D\u6570\u7EC4\uFF08\u5305\u62EC\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\uFF09\uFF0C\u4E0D\u5305\u62EC\u539F\u578B\u94FE\u4E0A\u7684\u5C5E\u6027</p><h3 id="object-keys-obj" tabindex="-1"><a class="header-anchor" href="#object-keys-obj" aria-hidden="true">#</a> Object.keys(obj)</h3><p>\u8FD4\u56DE\u5BF9\u8C61<strong>\u81EA\u8EAB</strong>\u5C5E\u6027\u540D\u6570\u7EC4\uFF08\u4E0D\u5305\u62EC\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\uFF09\uFF0C\u4E0D\u5305\u62EC\u539F\u578B\u94FE\u4E0A\u7684\u5C5E\u6027</p><h3 id="object-values-obj" tabindex="-1"><a class="header-anchor" href="#object-values-obj" aria-hidden="true">#</a> Object.values(obj)</h3><p>\u8FD4\u56DE\u5BF9\u8C61<strong>\u81EA\u8EAB</strong>\u6240\u6709\u53EF\u679A\u4E3E\u5C5E\u6027\u503C\u7684\u6570\u7EC4</p><h3 id="object-getprototypeof-obj" tabindex="-1"><a class="header-anchor" href="#object-getprototypeof-obj" aria-hidden="true">#</a> Object.getPrototypeOf(obj)</h3><p>\u83B7\u53D6\u5BF9\u8C61\u7684\u539F\u578B\u5BF9\u8C61</p><h3 id="object-setprototypeof-obj-prototype" tabindex="-1"><a class="header-anchor" href="#object-setprototypeof-obj-prototype" aria-hidden="true">#</a> Object.setPrototypeOf(obj, prototype)</h3><p>\u8BBE\u7F6E\u5BF9\u8C61\u539F\u578B</p><hr><h3 id="\u4E0D\u5E38\u7528\u4F46\u611F\u89C9\u6709\u7528\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u5E38\u7528\u4F46\u611F\u89C9\u6709\u7528\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u4E0D\u5E38\u7528\u4F46\u611F\u89C9\u6709\u7528\u7684\u65B9\u6CD5</h3><ol><li><code>Object.getOwnPropertySymbols(obj)</code> \u83B7\u53D6\u5BF9\u8C61\u81EA\u8EAB\u6240\u6709 <code>Symbol</code> \u5C5E\u6027\u7684\u6570\u7EC4</li></ol><h3 id="\u5176\u4ED6\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u65B9\u6CD5" aria-hidden="true">#</a> \u5176\u4ED6\u65B9\u6CD5</h3><ol><li><code>Object.is(value1, value2)</code> \u89C1\u300A\u76F8\u4F3C\u6027\u5224\u65AD\u300B\u6587\u7AE0</li><li><code>Object.prototype.valueOf()</code> \u548C<code>Object.prototype.toString()</code> \u89C1 \u300A\u5173\u4E8E valueOf \u65B9\u6CD5\u548C toString \u65B9\u6CD5\u300B\u6587\u7AE0</li></ol><h2 id="\u539F\u578B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u65B9\u6CD5" aria-hidden="true">#</a> \u539F\u578B\u65B9\u6CD5</h2><h3 id="obj-hasownproperty-prop" tabindex="-1"><a class="header-anchor" href="#obj-hasownproperty-prop" aria-hidden="true">#</a> obj.hasOwnProperty(prop)</h3><p>\u5224\u65AD\u5BF9\u8C61<strong>\u81EA\u8EAB</strong>\u662F\u5426\u6709\u6307\u5B9A\u7684\u5C5E\u6027</p><h3 id="obj-propertyisenumerable-prop" tabindex="-1"><a class="header-anchor" href="#obj-propertyisenumerable-prop" aria-hidden="true">#</a> obj.propertyIsEnumerable(prop)</h3><p>\u5224\u65AD\u5BF9\u8C61\u4E0A\u7684\u6307\u5B9A\u5C5E\u6027\u662F\u5426\u53EF\u679A\u4E3E</p><h3 id="obj1-isprototypeof-obj2" tabindex="-1"><a class="header-anchor" href="#obj1-isprototypeof-obj2" aria-hidden="true">#</a> obj1.isPrototypeOf(obj2)</h3><p>\u5224\u65AD obj1 \u662F\u5426\u5B58\u5728\u4E8E obj2 \u7684\u539F\u578B\u94FE\u4E0A</p><h2 id="\u5BF9\u8C61\u7684\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7684\u72B6\u6001" aria-hidden="true">#</a> \u5BF9\u8C61\u7684\u72B6\u6001</h2><p>\u53EA\u6709\u81EA\u8EAB\u7684\u539F\u59CB\u5C5E\u6027\u503C\u53D7\u5F71\u54CD\uFF0C\u5F15\u7528\u7C7B\u578B\u503C\u4E0D\u53D7\u5F71\u54CD</p><h3 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h3><p>\u4E0D\u53EF\u6269\u5C55\u7684\u5BF9\u8C61\u4E0D\u80FD\u6DFB\u52A0\u65B0\u5C5E\u6027\uFF0C\u4F46\u662F\u53EF\u4EE5<strong>\u4FEE\u6539\u548C\u5220\u9664</strong>\u5DF2\u6709\u5C5E\u6027</p><p>\u7528 <code>Object.preventExtensions(obj)</code> \u5C06\u5BF9\u8C61\u53D8\u4E3A\u4E0D\u53EF\u6269\u5C55\uFF0C<code>Object.isExtensible(obj)</code> \u65B9\u6CD5\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u53EF\u6269\u5C55</p><h3 id="\u5BC6\u5C01" tabindex="-1"><a class="header-anchor" href="#\u5BC6\u5C01" aria-hidden="true">#</a> \u5BC6\u5C01</h3><p>\u88AB\u5BC6\u5C01\u7684\u5BF9\u8C61\u4E0D\u80FD\u6DFB\u52A0\u548C\u5220\u9664\u5C5E\u6027\uFF0C\u53EF\u4EE5<strong>\u4FEE\u6539</strong>\u5DF2\u6709\u5C5E\u6027</p><p>\u7528 <code>Object.seal(obj)</code> \u5C06\u5BF9\u8C61\u53D8\u4E3A\u5BC6\u5C01\uFF0C<code>Object.isSealed(obj)</code> \u65B9\u6CD5\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u5BC6\u5C01</p><h3 id="\u51BB\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u51BB\u7ED3" aria-hidden="true">#</a> \u51BB\u7ED3</h3><p>\u88AB\u51BB\u7ED3\u7684\u5BF9\u8C61\u4E0D\u80FD\u505A\u4EFB\u4F55\u64CD\u4F5C</p><p>\u7528 <code>Object.freeze(obj)</code> \u5C06\u5BF9\u8C61\u51BB\u7ED3\uFF0C<code>Object.isFrozen(obj)</code> \u65B9\u6CD5\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u51BB\u7ED3</p>`,64),p=[o];function c(r,i){return a(),s("div",null,p)}const u=n(t,[["render",c],["__file","Object.html.vue"]]);export{u as default};
