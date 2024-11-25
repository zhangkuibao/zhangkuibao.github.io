import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as t,a as e,e as a,f as r,g as i,h as l}from"./app.cb0a7cdb.js";const c={},p=r(`<p>npm \u4ECE 5.2 \u7248\u5F00\u59CB\uFF0C\u589E\u52A0\u4E86 npx \u547D\u4EE4\u3002npx \u662F\u4E00\u4E2A\u5DE5\u5177\uFF0C\u4E00\u4E2A npm \u5305\u6267\u884C\u5668\uFF0C\u65E8\u5728\u63D0\u9AD8\u4ECE npm \u6CE8\u518C\u8868\u4F7F\u7528\u8F6F\u4EF6\u5305\u65F6\u7684\u4F53\u9A8C\u3002</p><h2 id="\u8C03\u7528\u9879\u76EE\u5B89\u88C5\u7684\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528\u9879\u76EE\u5B89\u88C5\u7684\u6A21\u5757" aria-hidden="true">#</a> \u8C03\u7528\u9879\u76EE\u5B89\u88C5\u7684\u6A21\u5757</h2><p>\u5728 npx \u4E4B\u524D\uFF0C\u5982\u679C\u5728\u9879\u76EE\u4E2D\u5B89\u88C5\u4E86\u4E00\u4E2A\u6A21\u5757\uFF0C\u4E00\u822C\u53EA\u80FD\u5728\u9879\u76EE\u811A\u672C\u548C package.json \u7684 script \u5B57\u6BB5\u91CC\u9762\u4F7F\u7528\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npm install -D mocha
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u60F3\u5728\u547D\u4EE4\u884C\u4F7F\u7528 mocha \u5FC5\u987B\u9879\u4E0B\u9762\u8FD9\u6837\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u6267\u884C
$ node-modules/.bin/mocha --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>npx \u5C31\u662F\u60F3\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u8BA9\u9879\u76EE\u5185\u90E8\u5B89\u88C5\u7684\u6A21\u5757\u7528\u8D77\u6765\u66F4\u65B9\u4FBF\uFF0C\u53EA\u8981\u50CF\u4E0B\u9762\u8FD9\u6837\u8C03\u7528\u5C31\u884C\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npx mocha --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>npx \u7684\u539F\u7406\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u8FD0\u884C\u7684\u65F6\u5019\uFF0C\u4F1A\u5230 node_modules/.bin \u8DEF\u5F84\u548C\u73AF\u5883\u53D8\u91CF$PATH \u91CC\u9762\uFF0C\u68C0\u67E5\u547D\u4EE4\u662F\u5426\u5B58\u5728\u3002</p><p>\u7531\u4E8E npx \u4F1A\u68C0\u67E5\u73AF\u5883\u53D8\u91CF$PATH\uFF0C\u6240\u4EE5\u7CFB\u7EDF\u547D\u4EE4\u4E5F\u53EF\u4EE5\u8C03\u7528\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u7B49\u540C\u4E8E ls
$ npx ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0CBash \u5185\u7F6E\u7684\u547D\u4EE4\u4E0D\u5728$PATH \u91CC\u9762\uFF0C\u6240\u4EE5\u4E0D\u80FD\u7528\u3002\u6BD4\u5982\uFF0Ccd \u662F Bash \u547D\u4EE4\uFF0C\u56E0\u6B64\u5C31\u4E0D\u80FD\u7528 npx cd\u3002</p><h2 id="\u907F\u514D\u5168\u5C40\u5B89\u88C5\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u907F\u514D\u5168\u5C40\u5B89\u88C5\u6A21\u5757" aria-hidden="true">#</a> \u907F\u514D\u5168\u5C40\u5B89\u88C5\u6A21\u5757</h2><p>\u4E34\u65F6\u5B89\u88C5\u53EF\u6267\u884C\u4F9D\u8D56\u5305\uFF0C\u4E0D\u7528\u5168\u5C40\u5B89\u88C5\uFF0C\u4E0D\u7528\u62C5\u5FC3\u957F\u671F\u7684\u6C61\u67D3\u3002</p><p>\u4E0B\u9762\u4EE3\u7801\u8FD0\u884C\u65F6\uFF0Cnpx \u5C06 create-react-app \u4E0B\u8F7D\u5230\u4E00\u4E2A\u4E34\u65F6\u76EE\u5F55\uFF0C\u4F7F\u7528\u4EE5\u540E\u518D\u5220\u9664\u3002\u6240\u4EE5\uFF0C\u4EE5\u540E\u518D\u6B21\u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4\uFF0C\u4F1A\u91CD\u65B0\u4E0B\u8F7D create-react-app\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npx create-react-app my-react-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EA\u8981 npx \u540E\u9762\u7684\u6A21\u5757\u65E0\u6CD5\u5728\u672C\u5730\u53D1\u73B0\uFF0C\u5C31\u4F1A\u4E0B\u8F7D\u540C\u540D\u6A21\u5757\u3002</p><h3 id="\u81EA\u52A8\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5B89\u88C5" aria-hidden="true">#</a> \u81EA\u52A8\u5B89\u88C5</h3><p>npx \u53EF\u4EE5\u6267\u884C\u4F9D\u8D56\u5305\u4E2D\u7684\u547D\u4EE4\uFF0C\u5B89\u88C5\u5B8C\u6210\u81EA\u52A8\u8FD0\u884C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npx @vue/cli -V

# \u7B49\u4EF7\u4E8E

$ npm install @vue/cli -g
$ vue -V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="no-install-\u53C2\u6570\u548C-ignore-existing-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#no-install-\u53C2\u6570\u548C-ignore-existing-\u53C2\u6570" aria-hidden="true">#</a> --no-install \u53C2\u6570\u548C--ignore-existing \u53C2\u6570</h3><p>\u5982\u679C\u60F3\u8BA9 npx \u5F3A\u5236\u4F7F\u7528\u672C\u5730\u6A21\u5757\uFF0C\u4E0D\u4E0B\u8F7D\u8FDC\u7A0B\u6A21\u5757\uFF0C\u53EF\u4EE5\u4F7F\u7528--no-install \u53C2\u6570\u3002\u5982\u679C\u672C\u5730\u4E0D\u5B58\u5728\u8BE5\u6A21\u5757\uFF0C\u5C31\u4F1A\u62A5\u9519\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npx --no-install http-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u5FFD\u7565\u672C\u5730\u7684\u540C\u540D\u6A21\u5757\uFF0C\u5F3A\u5236\u5B89\u88C5\u4F7F\u7528\u8FDC\u7A0B\u6A21\u5757\uFF0C\u53EF\u4EE5\u4F7F\u7528--ignore-existing \u53C2\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npx --ignore-existing create-react-app my-react-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6307\u5B9A-node-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A-node-\u7248\u672C" aria-hidden="true">#</a> \u6307\u5B9A node \u7248\u672C</h2><p>\u5229\u7528 npx \u53EF\u4EE5\u4E0B\u8F7D\u6A21\u5757\u8FD9\u4E2A\u7279\u70B9\uFF0C\u53EF\u4EE5\u6307\u5B9A\u67D0\u4E2A\u7248\u672C\u7684 Node \u8FD0\u884C\u811A\u672C\u3002\u5B83\u7684\u7A8D\u95E8\u5C31\u662F\u4F7F\u7528 npm \u7684 node \u6A21\u5757\u3002</p><p>\u8FD9\u4E2A\u7279\u6027\u89E3\u51B3\u4E86\u4E0D\u540C\u9879\u76EE\u4F7F\u7528\u4E0D\u540C node \u7248\u672C\u7684\u547D\u4EE4\u7684\u95EE\u9898\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npx node@0.12.8 -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6267\u884C-github-\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C-github-\u6E90\u7801" aria-hidden="true">#</a> \u6267\u884C GitHub \u6E90\u7801</h2><p>npx \u8FD8\u53EF\u4EE5\u6267\u884C GitHub \u4E0A\u9762\u7684\u6A21\u5757\u6E90\u7801\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u6267\u884C Gist \u4EE3\u7801
$ npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32

# \u6267\u884C\u4ED3\u5E93\u4EE3\u7801
$ npx github:piuccio/cowsay hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u8FDC\u7A0B\u4EE3\u7801\u5FC5\u987B\u662F\u4E00\u4E2A\u6A21\u5757\uFF0C\u5373\u5FC5\u987B\u5305\u542B package.json \u548C\u5165\u53E3\u811A\u672C\u3002</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,34),o={href:"https://www.ruanyifeng.com/blog/2019/02/npx.html",target:"_blank",rel:"noopener noreferrer"},u=i("npx \u4F7F\u7528\u6559\u7A0B\u2014\u2014\u962E\u4E00\u5CF0"),v={href:"https://www.zhihu.com/question/327989736/answer/787995048",target:"_blank",rel:"noopener noreferrer"},x=i("npm \u548C npx \u6709\u4EC0\u4E48\u533A\u522B\uFF1F");function h(m,g){const n=l("ExternalLinkIcon");return d(),t("div",null,[p,e("p",null,[e("a",o,[u,a(n)])]),e("p",null,[e("a",v,[x,a(n)])])])}const f=s(c,[["render",h],["__file","npx.html.vue"]]);export{f as default};