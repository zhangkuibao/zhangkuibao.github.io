import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c,a as e,e as d,g as r,f as t,h as i}from"./app.cb0a7cdb.js";const l={},h={href:"https://appp8tlckwa5126.h5.xiaoeknow.com/v1/course/video/v_608277a7e4b09890f0e651dd?type=2&pro_id=p_61ae1375e4b0dabb65a2508f",target:"_blank",rel:"noopener noreferrer"},s=r("\u738B\u9053\u8BFE\u7A0B\u5730\u5740"),_=t('<p>\u7B80\u79F0\u5E73\u8861\u6811\uFF08AVL \u6811\uFF09\uFF0C\u6307\u6811\u4E0A\u4EFB\u4E00\u7ED3\u70B9\u7684\u5DE6\u5B50\u6811\u548C\u53F3\u5B50\u6811\u7684\u9AD8\u5EA6\u4E4B\u5DEE\uFF08\u5E73\u8861\u56E0\u5B50\uFF09\u4E0D\u8D85\u8FC7 1\u3002</p><h2 id="\u6458\u8981" tabindex="-1"><a class="header-anchor" href="#\u6458\u8981" aria-hidden="true">#</a> \u6458\u8981</h2><ol><li>\u63D2\u5165\u64CD\u4F5C\u5BFC\u81F4\u4E0D\u5E73\u8861\u65F6\u53EA\u9700\u8981\u8C03\u6574\u6700\u5C0F\u4E0D\u5E73\u8861\u5B50\u6811\u5C31\u53EF\u4EE5\u8BA9\u6811\u6062\u590D\u5E73\u8861\u3002</li><li>\u542B\u6709 n \u4E2A\u7ED3\u70B9\u7684\u5E73\u8861\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6\u4E3A <code>O(log2n)</code>\uFF0C\u5E73\u5747\u67E5\u627E\u957F\u5EA6\u4E3A<code>O(log2n)</code>\u3002</li><li>\u7528<code>n{h}</code>\u8868\u793A\u9AD8\u5EA6\u4E3A <code>h</code> \u7684\u5E73\u8861\u4E8C\u53C9\u6811<strong>\u6700\u5C11</strong>\u7ED3\u70B9\u6570\uFF0C\u5219 <code>n{h} = n{h-1} + n{h-2} + 1</code>\uFF0C\u5176\u4E2D <code>n{0} == 0</code>\uFF0C<code>n{1} == 1</code>\uFF0C<code>n{2} = 2</code>\u3002</li></ol><h2 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h2><h3 id="\u7ED3\u70B9\u7684\u5E73\u8861\u56E0\u5B50" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u70B9\u7684\u5E73\u8861\u56E0\u5B50" aria-hidden="true">#</a> \u7ED3\u70B9\u7684\u5E73\u8861\u56E0\u5B50</h3><p>\u7ED3\u70B9\u7684\u5DE6\u5B50\u6811\u9AD8\u5EA6-\u53F3\u5B50\u6811\u9AD8\u5EA6</p><h2 id="\u8C03\u6574\u6700\u5C0F\u4E0D\u5E73\u8861\u5B50\u6811" tabindex="-1"><a class="header-anchor" href="#\u8C03\u6574\u6700\u5C0F\u4E0D\u5E73\u8861\u5B50\u6811" aria-hidden="true">#</a> \u8C03\u6574\u6700\u5C0F\u4E0D\u5E73\u8861\u5B50\u6811</h2><p>\u63D2\u5165\u5BFC\u81F4\u6811\u4E0D\u5E73\u8861\u7684\u6240\u6709\u53EF\u80FD\u5982\u4E0B\uFF1A</p><ul><li>LL\uFF1A\u5728\u6811\u7684\u5DE6\u5B69\u5B50\u7684\u5DE6\u5B50\u6811\u4E2D\u63D2\u5165\u5BFC\u81F4\u4E0D\u5E73\u8861\u3002 \u6811\u7684\u5DE6\u5B50\u6811\u53F3\u65CB\uFF0C\u4FDD\u6301\u5E73\u8861\u53CA\u6392\u5E8F\u3002</li><li>RR\uFF1A\u5728\u6811\u7684\u53F3\u5B69\u5B50\u7684\u53F3\u5B50\u6811\u4E2D\u63D2\u5165\u5BFC\u81F4\u4E0D\u5E73\u8861\u3002 \u6811\u7684\u53F3\u5B50\u6811\u5DE6\u65CB\uFF0C\u4FDD\u6301\u5E73\u8861\u53CA\u6392\u5E8F\u3002</li><li>LR\uFF1A\u5728\u6811\u7684\u5DE6\u5B69\u5B50\u7684\u53F3\u5B50\u6811\u4E2D\u63D2\u5165\u5BFC\u81F4\u4E0D\u5E73\u8861\u3002 \u6811\u7684\u5DE6\u5B69\u5B50\u7684\u53F3\u5B69\u5B50\u5148\u5DE6\u65CB\u518D\u53F3\u65CB\u3002</li><li>RL\uFF1A\u5728\u6811\u7684\u53F3\u5B69\u5B50\u7684\u5DE6\u5B50\u6811\u4E2D\u63D2\u5165\u5BFC\u81F4\u4E0D\u5E73\u8861\u3002 \u6811\u7684\u53F3\u5B69\u5B50\u7684\u5DE6\u5B50\u6811\u5148\u53F3\u65CB\u518D\u5DE6\u65CB\u3002</li></ul>',9);function p(f,u){const o=i("ExternalLinkIcon");return n(),c("div",null,[e("p",null,[e("a",h,[s,d(o)])]),_])}const b=a(l,[["render",p],["__file","\u6811-\u5E73\u8861\u4E8C\u53C9\u6811.html.vue"]]);export{b as default};
