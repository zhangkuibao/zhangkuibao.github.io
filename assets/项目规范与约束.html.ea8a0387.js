import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as i}from"./app.382dc3cd.js";const a={},d=i(`<p>\u4E0D\u540C\u7684\u6846\u67B6\u6709\u4E0D\u540C\u7684\u7F16\u7801\u98CE\u683C\uFF0C\u6BD4\u5982 Vue \u4E2D\u5EFA\u8BAE\u5C06\u7EC4\u4EF6\u547D\u540D\u4E3A <code>AddressPicker.vue</code> \uFF0C\u800C Angular \u7684\u7EC4\u4EF6\u547D\u540D\u98CE\u683C\u4E3A <code>address-picker.components.ts</code>\u3002</p><p>\u6CA1\u6709\u4E00\u5957\u7F16\u7801\u98CE\u683C\u53EF\u4EE5\u9002\u914D\u6240\u6709\u9879\u76EE\uFF0C\u4F46\u662F\u5E94\u8BE5<strong>\u786E\u4FDD\u5728\u4E00\u4E2A\u9879\u76EE\u4E2D\u53EA\u6709\u4E00\u79CD\u7F16\u7801\u98CE\u683C</strong>\uFF0C\u5E76\u4E14\u8D2F\u5F7B\u5230\u5E95\u3002</p><h2 id="\u9879\u76EE\u7ED3\u6784\u53CA\u6587\u4EF6\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7ED3\u6784\u53CA\u6587\u4EF6\u547D\u540D" aria-hidden="true">#</a> \u9879\u76EE\u7ED3\u6784\u53CA\u6587\u4EF6\u547D\u540D</h2><p>\u4E0D\u540C\u6846\u67B6\u6709\u4E0D\u540C\u7684\u9879\u76EE\u7ED3\u6784\uFF0C\u8FD9\u91CC\u5217\u51FA\u51E0\u79CD\u3002</p><p>\u9879\u76EE\u4E2D\u7684\u76EE\u5F55\u3001\u6587\u4EF6\u540D\u5927\u5C0F\u5199\uFF0C\u5355\u8BCD\u662F\u5426\u4F7F\u7528\u590D\u6570\u5F62\u5F0F\u90FD\u8981\u4FDD\u6301\u7EDF\u4E00\uFF0C\u907F\u514D\u51FA\u73B0\u591A\u79CD\u98CE\u683C\u3002</p><h3 id="\u4EE5\u4E1A\u52A1\u903B\u8F91\u4F5C\u4E3A\u7EC4\u7EC7\u6807\u51C6" tabindex="-1"><a class="header-anchor" href="#\u4EE5\u4E1A\u52A1\u903B\u8F91\u4F5C\u4E3A\u7EC4\u7EC7\u6807\u51C6" aria-hidden="true">#</a> \u4EE5\u4E1A\u52A1\u903B\u8F91\u4F5C\u4E3A\u7EC4\u7EC7\u6807\u51C6</h3><p>\u4F8B\u5982\u4E00\u4E2A <code>Nest</code> \u9879\u76EE\u3002</p><p>\u5C3D\u53EF\u80FD\u7684\u5C06\u4E00\u4E2A\u4E1A\u52A1\u903B\u8F91\u76F8\u5173\u7684\u5185\u5BB9\u653E\u5230\u4E00\u8D77\uFF0C\u516C\u5171\u5185\u5BB9\u7EDF\u4E00\u653E\u5230 common \u76EE\u5F55\u4E0B\uFF0C\u5168\u5C40\u914D\u7F6E\u76F8\u5173\u7EDF\u4E00\u653E\u5230 config \u76EE\u5F55\u4E0B\u3002</p><p>\u76EE\u5F55\u540D\u7EDF\u4E00\u5C0F\u5199\u3002</p><p>\u6587\u4EF6\u540D\u6DFB\u52A0\u529F\u80FD\u540E\u7F00\u6807\u660E\u6587\u4EF6\u529F\u80FD\uFF0C\u591A\u5355\u8BCD\u6587\u4EF6\u540D\u7528 <code>-</code> \u5206\u9694\uFF0C\u4E0D\u4F7F\u7528\u9A7C\u5CF0\u5F0F\u547D\u540D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- src
  - module    # \u4E1A\u52A1\u6A21\u5757
      - upload
          - upload.controller.ts
          - upload.module.ts
          - upload.service.ts
          - upload.pipe.ts
      - resource
          - resource.module.ts
  - common    # \u901A\u7528\u5185\u5BB9
      - constant
          - router
              - router.constant.ts
      - service
          - config
              - config.service.ts
      - table
          - update
              - update.table.ts
          - resource
              - resource.table.ts
      - util
          - number
              - number.util.ts
          - date
              - date.util.ts
      - middleware
          - front
              - front.middleware.ts
          - user-agent
              - user-agent.middleware.ts
  - config    # \u914D\u7F6E\u4FE1\u606F
      - server
          - server.config.ts
      - database
          - database.config.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4EE5\u6587\u4EF6\u529F\u80FD\u4F5C\u4E3A\u7EC4\u7EC7\u6807\u51C6" tabindex="-1"><a class="header-anchor" href="#\u4EE5\u6587\u4EF6\u529F\u80FD\u4F5C\u4E3A\u7EC4\u7EC7\u6807\u51C6" aria-hidden="true">#</a> \u4EE5\u6587\u4EF6\u529F\u80FD\u4F5C\u4E3A\u7EC4\u7EC7\u6807\u51C6</h3><p>\u4F8B\u5982\u4E00\u4E2A <code>Vue</code> \u9879\u76EE\u3002</p><p>\u5C3D\u53EF\u80FD\u7684\u5C06\u76F8\u540C\u529F\u80FD\u7684\u6587\u4EF6\u653E\u5230\u540C\u4E00\u76EE\u5F55\u4E0B\u3002</p><p>\u76EE\u5F55\u540D\u7EDF\u4E00\u5C0F\u5199\u3002</p><p>\u7EC4\u4EF6\u548C js \u5168\u90E8\u4F7F\u7528\u5927\u9A7C\u5CF0\u98CE\u683C\u547D\u540D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- src
  - pages
      - home
          - index.vue
      - detail
          - index.vue
  - components
      - model
          - Model.vue
      - picker
          - Picker.vue
          - DatePicker.vue
  - images
      - tabbar
          home.jpg
          home-lh.jpg
  - services
      - common
          - router
              - RouterService.js
      - bussiness
          - detail
              - DetailService.js
          - order
              - OrderService.js

  - styles
      - home
          - index.css
      - detail
          - index.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class-\u7C7B" tabindex="-1"><a class="header-anchor" href="#class-\u7C7B" aria-hidden="true">#</a> class \u7C7B</h2><ul><li><p>\u4E0D\u8981\u5BFC\u51FA\u9ED8\u8BA4\u6A21\u5757</p><p>\u5C3D\u91CF\u907F\u514D\u4F7F\u7528 <code>export default</code> \u76F4\u63A5\u5BFC\u51FA\u4E00\u4E2A\u9ED8\u8BA4\u6A21\u5757\uFF0C\u5BFC\u51FA\u9ED8\u8BA4\u6A21\u5757\u65F6\uFF0C\u5BFC\u5165\u65B9\u53EF\u81EA\u5B9A\u4E49\u540D\u79F0\uFF1A</p><ul><li>/module/a.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;zhang&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u6A21\u5757 a.js\uFF0C\u53EF\u4EE5\u7528\u4EE5\u4E0B\u4EFB\u4F55\u547D\u4EE4\u5BFC\u5165\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> a <span class="token keyword">from</span> <span class="token string">&quot;./a.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> b <span class="token keyword">from</span> <span class="token string">&quot;./a.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> c <span class="token keyword">from</span> <span class="token string">&quot;./a.js&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="\u5EFA\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u8BAE" aria-hidden="true">#</a> \u5EFA\u8BAE</h3><ul><li><p>\u5BFC\u51FA\u5177\u4F53\u7684\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;zhang&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,21),l=[d];function r(c,v){return n(),s("div",null,l)}const o=e(a,[["render",r],["__file","\u9879\u76EE\u89C4\u8303\u4E0E\u7EA6\u675F.html.vue"]]);export{o as default};
