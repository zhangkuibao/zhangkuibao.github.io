const e=JSON.parse('{"key":"v-861c247c","path":"/posts/technology/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/webpack/%E5%B8%B8%E7%94%A8webpack%E9%85%8D%E7%BD%AE.html","title":"\u3010webpack\u3011\u5E38\u7528webpack\u914D\u7F6E","lang":"zh-CN","frontmatter":{"title":"\u3010webpack\u3011\u5E38\u7528webpack\u914D\u7F6E","date":"2023-01-06T11:47:46.000Z","update":"2023-08-14T16:52:24.000Z","tag":["webpack"],"summary":"\u901A\u7528 \u533A\u5206\u73AF\u5883\u4E0E\u914D\u7F6E\u6587\u4EF6 \u533A\u5206\u4E0D\u540C\u73AF\u5883\u7684\u914D\u7F6E\u6587\u4EF6 \u5C06\u4E0D\u540C\u73AF\u5883\u7684\u914D\u7F6E\u6587\u4EF6\u62BD\u79BB\u5230\u5355\u72EC\u7684\u6587\u4EF6\u4E2D\uFF1A\\rwebpack.base.config.js \u5B9A\u4E49\u516C\u5171\u7684\u914D\u7F6E\u3002; \\rwebpack.dev.config.js\uFF1A\u5B9A\u4E49\u5F00\u53D1\u73AF\u5883\u7684\u914D\u7F6E\u3002; \\rwebpack.prod.config.js\uFF1A\u5B9A\u4E49\u751F\u4EA7\u73AF\u5883\u7684\u914D\u7F6E\u3002; \u7528 webpack-merge \u5408\u5E76\u914D\u7F6E\uFF1A\\r\u5B89\u88C5; \\r\u914D\u7F6E;","head":[["meta",{"property":"og:url","content":"https://zhangkuibao.github.io/posts/technology/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/webpack/%E5%B8%B8%E7%94%A8webpack%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"ZHANGKB"}],["meta",{"property":"og:title","content":"\u3010webpack\u3011\u5E38\u7528webpack\u914D\u7F6E"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-14T09:04:45.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"webpack"}],["meta",{"property":"article:published_time","content":"2023-01-06T11:47:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-14T09:04:45.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u901A\u7528","slug":"\u901A\u7528","link":"#\u901A\u7528","children":[{"level":3,"title":"\u533A\u5206\u73AF\u5883\u4E0E\u914D\u7F6E\u6587\u4EF6","slug":"\u533A\u5206\u73AF\u5883\u4E0E\u914D\u7F6E\u6587\u4EF6","link":"#\u533A\u5206\u73AF\u5883\u4E0E\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":3,"title":"\u5904\u7406 JS\uFF1Ababel-loader","slug":"\u5904\u7406-js-babel-loader","link":"#\u5904\u7406-js-babel-loader","children":[]},{"level":3,"title":"\u5904\u7406 html\uFF1Ahtml-webpack-plugin","slug":"\u5904\u7406-html-html-webpack-plugin","link":"#\u5904\u7406-html-html-webpack-plugin","children":[]},{"level":3,"title":"\u81EA\u5B9A\u4E49 chunk \u5F15\u5165\u4F4D\u7F6E","slug":"\u81EA\u5B9A\u4E49-chunk-\u5F15\u5165\u4F4D\u7F6E","link":"#\u81EA\u5B9A\u4E49-chunk-\u5F15\u5165\u4F4D\u7F6E","children":[]},{"level":3,"title":"\u591A\u5165\u53E3\u65F6\u6307\u5B9A\u6CE8\u5165\u7684 chunk","slug":"\u591A\u5165\u53E3\u65F6\u6307\u5B9A\u6CE8\u5165\u7684-chunk","link":"#\u591A\u5165\u53E3\u65F6\u6307\u5B9A\u6CE8\u5165\u7684-chunk","children":[]},{"level":3,"title":"\u5904\u7406\u6837\u5F0F","slug":"\u5904\u7406\u6837\u5F0F","link":"#\u5904\u7406\u6837\u5F0F","children":[]},{"level":3,"title":"\u62BD\u79BB css\uFF1Amini-css-extract-plugin","slug":"\u62BD\u79BB-css-mini-css-extract-plugin","link":"#\u62BD\u79BB-css-mini-css-extract-plugin","children":[]},{"level":3,"title":"\u56FE\u7247/\u6587\u4EF6\u5904\u7406\uFF1Aurl-loader","slug":"\u56FE\u7247-\u6587\u4EF6\u5904\u7406-url-loader","link":"#\u56FE\u7247-\u6587\u4EF6\u5904\u7406-url-loader","children":[]},{"level":3,"title":"\u6CE8\u5165\u5168\u5C40\u53D8\u91CF","slug":"\u6CE8\u5165\u5168\u5C40\u53D8\u91CF","link":"#\u6CE8\u5165\u5168\u5C40\u53D8\u91CF","children":[]},{"level":3,"title":"\u591A\u9875\u5E94\u7528\u914D\u7F6E","slug":"\u591A\u9875\u5E94\u7528\u914D\u7F6E","link":"#\u591A\u9875\u5E94\u7528\u914D\u7F6E","children":[]},{"level":3,"title":"\u8DEF\u5F84\u522B\u540D","slug":"\u8DEF\u5F84\u522B\u540D","link":"#\u8DEF\u5F84\u522B\u540D","children":[]},{"level":3,"title":"\u914D\u7F6E\u6A21\u5757\u9ED8\u8BA4\u540E\u7F00","slug":"\u914D\u7F6E\u6A21\u5757\u9ED8\u8BA4\u540E\u7F00","link":"#\u914D\u7F6E\u6A21\u5757\u9ED8\u8BA4\u540E\u7F00","children":[]}]},{"level":2,"title":"\u751F\u4EA7\u73AF\u5883","slug":"\u751F\u4EA7\u73AF\u5883","link":"#\u751F\u4EA7\u73AF\u5883","children":[{"level":3,"title":"\u6253\u5305\u524D\u6E05\u7A7A dist \u76EE\u5F55\uFF1Aclean-webpack-plugin","slug":"\u6253\u5305\u524D\u6E05\u7A7A-dist-\u76EE\u5F55-clean-webpack-plugin","link":"#\u6253\u5305\u524D\u6E05\u7A7A-dist-\u76EE\u5F55-clean-webpack-plugin","children":[]},{"level":3,"title":"\u9759\u6001\u8D44\u6E90\u62F7\u8D1D\uFF1Acopy-webpack-plugin","slug":"\u9759\u6001\u8D44\u6E90\u62F7\u8D1D-copy-webpack-plugin","link":"#\u9759\u6001\u8D44\u6E90\u62F7\u8D1D-copy-webpack-plugin","children":[]},{"level":3,"title":"\u538B\u7F29 css\uFF1Aoptimize-css-assets-webpack-plugin","slug":"\u538B\u7F29-css-optimize-css-assets-webpack-plugin","link":"#\u538B\u7F29-css-optimize-css-assets-webpack-plugin","children":[]}]},{"level":2,"title":"\u5F00\u53D1\u73AF\u5883","slug":"\u5F00\u53D1\u73AF\u5883","link":"#\u5F00\u53D1\u73AF\u5883","children":[{"level":3,"title":"\u642D\u5EFA\u5F00\u53D1\u73AF\u5883\uFF1Awebpack-dev-server","slug":"\u642D\u5EFA\u5F00\u53D1\u73AF\u5883-webpack-dev-server","link":"#\u642D\u5EFA\u5F00\u53D1\u73AF\u5883-webpack-dev-server","children":[]},{"level":3,"title":"\u70ED\u66F4\u65B0","slug":"\u70ED\u66F4\u65B0","link":"#\u70ED\u66F4\u65B0","children":[]},{"level":3,"title":"\u914D\u7F6E\u4EE3\u7406\u5B9E\u73B0\u8DE8\u57DF","slug":"\u914D\u7F6E\u4EE3\u7406\u5B9E\u73B0\u8DE8\u57DF","link":"#\u914D\u7F6E\u4EE3\u7406\u5B9E\u73B0\u8DE8\u57DF","children":[]},{"level":3,"title":"\u914D\u7F6E mock \u6570\u636E\uFF1Amocker-api","slug":"\u914D\u7F6E-mock-\u6570\u636E-mocker-api","link":"#\u914D\u7F6E-mock-\u6570\u636E-mocker-api","children":[]},{"level":3,"title":"\u6620\u5C04\u6E90\u4EE3\u7801","slug":"\u6620\u5C04\u6E90\u4EE3\u7801","link":"#\u6620\u5C04\u6E90\u4EE3\u7801","children":[]}]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"git":{"createdTime":1672977028000,"updatedTime":1692003885000,"contributors":[{"name":"zhangkuibao","email":"zhangkuibao@haoma.com","commits":4}]},"readingTime":{"minutes":8.57,"words":2571},"filePathRelative":"posts/technology/\u524D\u7AEF\u5DE5\u7A0B\u5316/webpack/\u5E38\u7528webpack\u914D\u7F6E.md","localizedDate":"2023\u5E741\u67086\u65E5"}');export{e as data};
