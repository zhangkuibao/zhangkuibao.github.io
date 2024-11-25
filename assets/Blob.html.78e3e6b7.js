import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as e}from"./app.cb0a7cdb.js";const p={},t=e(`<p>Blob \u5BF9\u8C61\u8868\u793A\u4E00\u4E2A\u4E0D\u53EF\u53D8\u3001\u539F\u59CB\u6570\u636E\u7684\u7C7B\u6587\u4EF6\u5BF9\u8C61\u3002\u5B83\u7684\u6570\u636E\u53EF\u4EE5\u6309\u6587\u672C\u6216\u4E8C\u8FDB\u5236\u7684\u683C\u5F0F\u8FDB\u884C\u8BFB\u53D6\uFF0C\u4E5F\u53EF\u4EE5\u8F6C\u6362\u6210 ReadableStream \u6765\u7528\u4E8E\u6570\u636E\u64CD\u4F5C\u3002</p><p>\u53EF\u4EE5\u4F7F\u7528 Blob() \u6784\u9020\u51FD\u6570\u5C06\u5176\u4ED6\u975E blob \u5BF9\u8C61\u548C\u6570\u636E\u6784\u9020\u6210\u4E00\u4E2A Blob\u3002</p><p>File \u63A5\u53E3\u57FA\u4E8E Blob\uFF0C\u7EE7\u627F\u4E86 blob \u7684\u529F\u80FD\u5E76\u5C06\u5176\u6269\u5C55\u4F7F\u5176\u652F\u6301\u7528\u6237\u7CFB\u7EDF\u4E0A\u7684\u6587\u4EF6\u3002</p><h2 id="\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570</h2><p>Blob(blobParts[, options])</p><ul><li><p>blobParts \u662F\u4E00\u4E2A\u7531 ArrayBuffer, ArrayBufferView, Blob, DOMString \u7B49\u5BF9\u8C61\u6784\u6210\u7684 Array \uFF0C\u6216\u8005\u5176\u4ED6\u7C7B\u4F3C\u5BF9\u8C61\u7684\u6DF7\u5408\u4F53\uFF0C\u5B83\u5C06\u4F1A\u88AB\u653E\u8FDB Blob\u3002DOMStrings \u4F1A\u88AB\u7F16\u7801\u4E3A UTF-8\u3002</p></li><li><p>options \u662F\u4E00\u4E2A\u53EF\u9009\u7684 BlobPropertyBag \u5B57\u5178\uFF0C\u5B83\u53EF\u80FD\u4F1A\u6307\u5B9A\u5982\u4E0B\u4E24\u4E2A\u5C5E\u6027\uFF1A</p><ul><li><p>type\uFF0C\u9ED8\u8BA4\u503C\u4E3A &quot;&quot;\uFF0C\u5B83\u4EE3\u8868\u4E86\u5C06\u4F1A\u88AB\u653E\u5165\u5230 blob \u4E2D\u7684\u6570\u7EC4\u5185\u5BB9\u7684 MIME \u7C7B\u578B\u3002</p></li><li><p>endings\uFF0C\u9ED8\u8BA4\u503C\u4E3A&quot;transparent&quot;\uFF0C\u7528\u4E8E\u6307\u5B9A\u5305\u542B\u884C\u7ED3\u675F\u7B26\\n \u7684\u5B57\u7B26\u4E32\u5982\u4F55\u88AB\u5199\u5165\u3002 \u5B83\u662F\u4EE5\u4E0B\u4E24\u4E2A\u503C\u4E2D\u7684\u4E00\u4E2A\uFF1A &quot;native&quot;\uFF0C\u4EE3\u8868\u884C\u7ED3\u675F\u7B26\u4F1A\u88AB\u66F4\u6539\u4E3A\u9002\u5408\u5BBF\u4E3B\u64CD\u4F5C\u7CFB\u7EDF\u6587\u4EF6\u7CFB\u7EDF\u7684\u6362\u884C\u7B26\uFF0C\u6216\u8005 &quot;transparent&quot;\uFF0C\u4EE3\u8868\u4F1A\u4FDD\u6301 blob \u4E2D\u4FDD\u5B58\u7684\u7ED3\u675F\u7B26\u4E0D\u53D8\u3002</p></li></ul></li></ul><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h2><ul><li><p>Blob.size</p><p>Blob \u5BF9\u8C61\u4E2D\u6240\u5305\u542B\u6570\u636E\u7684\u5927\u5C0F\uFF08\u5B57\u8282\uFF09\u3002</p></li><li><p>Blob.type</p><p>\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8868\u660E\u8BE5 Blob \u5BF9\u8C61\u6240\u5305\u542B\u6570\u636E\u7684 MIME \u7C7B\u578B\u3002\u5982\u679C\u7C7B\u578B\u672A\u77E5\uFF0C\u5219\u8BE5\u503C\u4E3A\u7A7A\u5B57\u7B26\u4E32\u3002</p></li></ul><h2 id="\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5</h2><ul><li><p>Blob.slice([start[, end[, contentType]]])</p><p>\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 Blob \u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u6E90 Blob \u5BF9\u8C61\u4E2D\u6307\u5B9A\u8303\u56F4\u5185\u7684\u6570\u636E\u3002</p></li><li><p>Blob.stream()</p><p>\u8FD4\u56DE\u4E00\u4E2A\u80FD\u8BFB\u53D6 blob \u5185\u5BB9\u7684 ReadableStream\u3002</p></li><li><p>Blob.text()</p><p>\u8FD4\u56DE\u4E00\u4E2A promise \u4E14\u5305\u542B blob \u6240\u6709\u5185\u5BB9\u7684 UTF-8 \u683C\u5F0F\u7684 USVString\u3002</p></li><li><p>Blob.arrayBuffer()</p><p>\u8FD4\u56DE\u4E00\u4E2A promise \u4E14\u5305\u542B blob \u6240\u6709\u5185\u5BB9\u7684\u4E8C\u8FDB\u5236\u683C\u5F0F\u7684 ArrayBuffer</p></li></ul><h2 id="\u4F7F\u7528-blob" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-blob" aria-hidden="true">#</a> \u4F7F\u7528 Blob</h2><h3 id="\u7528-blob-\u521B\u5EFA-url" tabindex="-1"><a class="header-anchor" href="#\u7528-blob-\u521B\u5EFA-url" aria-hidden="true">#</a> \u7528 Blob \u521B\u5EFA url</h3><p>\u9002\u7528 <a href="/%E6%8A%80%E6%9C%AF%E7%AC%94%E8%AE%B0/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/JavaScript/ECMAScript/URL?id=createobjecturlobject">URL.createObjectURL</a> \u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u7684 blob \u94FE\u63A5\uFF0C\u53EF\u4EE5\u50CF\u4F7F\u7528\u666E\u901A URL \u90A3\u6837\u4F7F\u7528\u5B83\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> typedArray <span class="token operator">=</span> <span class="token function">GetTheTypedArraySomehow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>typedArray<span class="token punctuation">.</span>buffer<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;application/octet-stream&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4F20\u5165\u4E00\u4E2A\u5408\u9002\u7684 MIME \u7C7B\u578B</span>
<span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u4F1A\u4EA7\u751F\u4E00\u4E2A\u7C7B\u4F3C blob:d3958f5c-0777-0845-9dcf-2cb28783acaf \u8FD9\u6837\u7684URL\u5B57\u7B26\u4E32</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7528-filereader-\u8BFB\u53D6-blob" tabindex="-1"><a class="header-anchor" href="#\u7528-filereader-\u8BFB\u53D6-blob" aria-hidden="true">#</a> \u7528 FileReader \u8BFB\u53D6 Blob</h3><p><a href="%E6%8A%80%E6%9C%AF%E7%AC%94%E8%AE%B0/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/JavaScript/ECMAScript/FileReader">FileReader API</a></p><p>reader.result \u5305\u542B\u88AB\u8F6C\u5316\u4E3A\u7C7B\u578B\u6570\u7EC4 typed array \u7684 blob\u3002</p><p>\u901A\u8FC7\u4F7F\u7528 FileReader \u7684\u5176\u5B83\u65B9\u6CD5\u53EF\u4EE5\u628A Blob \u8BFB\u53D6\u4E3A\u5B57\u7B26\u4E32\u6216\u8005\u6570\u636E URL\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
reader<span class="token punctuation">.</span><span class="token function">readAsArrayBuffer</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7528-response-\u8BFB\u53D6-blob" tabindex="-1"><a class="header-anchor" href="#\u7528-response-\u8BFB\u53D6-blob" aria-hidden="true">#</a> \u7528 Response \u8BFB\u53D6 Blob</h3><p><a href="/%E6%8A%80%E6%9C%AF%E7%AC%94%E8%AE%B0/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/JavaScript/ECMAScript/fetch?id=response-%E5%AF%B9%E8%B1%A1">Response</a>\u5BF9\u8C61\u4E0E fetch \u4E2D\u7684 Response \u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\u3002</p><p>\u4E0B\u8FF0\u4EE3\u7801\u5C06 Blob \u4E2D\u7684\u5185\u5BB9\u8BFB\u53D6\u4E3A\u6587\u672C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> text <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,23),o=[t];function l(r,c){return n(),s("div",null,o)}const d=a(p,[["render",l],["__file","Blob.html.vue"]]);export{d as default};