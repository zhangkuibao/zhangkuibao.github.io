const l=JSON.parse('{"key":"v-ae6f4b96","path":"/posts/technology/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Gulp/API.html","title":"\u3010Gulp\u3011API","lang":"zh-CN","frontmatter":{"date":"2021-11-30T09:57:55.000Z","title":"\u3010Gulp\u3011API","tag":["Gulp"],"summary":"Vinyl Vinyl \u5BF9\u8C61\u662F gulp \u4E2D\u7528\u6765\u8868\u793A\u6587\u4EF6\u2014\u2014\u5305\u62EC\u8DEF\u5F84\u3001\u5185\u5BB9\u548C\u5176\u4ED6\u5143\u6570\u636E\u7684\u865A\u62DF\u6587\u4EF6\u683C\u5F0F\u3002 Vinyl \u5BF9\u8C61\u53EF\u4EE5\u7531 src() \u65B9\u6CD5\u8FD4\u56DE\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u521B\u5EFA\u3002 src() \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u5C31\u662F\u88AB\u8BFB\u53D6\u6587\u4EF6\u7684\u865A\u62DF\u6587\u4EF6\u3002 vinyl \u6784\u9020\u51FD\u6570 \u81EA\u5DF1\u521B\u5EFA Vinyl \u5BF9\u8C61\u9700\u8981\u5F15\u5165 vinyl \u6A21\u5757\u3002 \u8BED\u6CD5\uFF1Anew Vinyl([options])\\roptions ","head":[["meta",{"property":"og:url","content":"https://zhangkuibao.github.io/posts/technology/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Gulp/API.html"}],["meta",{"property":"og:site_name","content":"ZHANGKB"}],["meta",{"property":"og:title","content":"\u3010Gulp\u3011API"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-07-25T04:09:17.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Gulp"}],["meta",{"property":"article:published_time","content":"2021-11-30T09:57:55.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-25T04:09:17.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Vinyl","slug":"vinyl","link":"#vinyl","children":[{"level":3,"title":"vinyl \u6784\u9020\u51FD\u6570","slug":"vinyl-\u6784\u9020\u51FD\u6570","link":"#vinyl-\u6784\u9020\u51FD\u6570","children":[]},{"level":3,"title":"\u9759\u6001\u65B9\u6CD5","slug":"\u9759\u6001\u65B9\u6CD5","link":"#\u9759\u6001\u65B9\u6CD5","children":[]},{"level":3,"title":"Vinyl \u5B9E\u4F8B\u5C5E\u6027","slug":"vinyl-\u5B9E\u4F8B\u5C5E\u6027","link":"#vinyl-\u5B9E\u4F8B\u5C5E\u6027","children":[]},{"level":3,"title":"\u5B9E\u4F8B\u65B9\u6CD5","slug":"\u5B9E\u4F8B\u65B9\u6CD5","link":"#\u5B9E\u4F8B\u65B9\u6CD5","children":[]},{"level":3,"title":"\u6269\u5C55 Vinyl","slug":"\u6269\u5C55-vinyl","link":"#\u6269\u5C55-vinyl","children":[]}]},{"level":2,"title":"src(globs, [options])","slug":"src-globs-options","link":"#src-globs-options","children":[{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]}]},{"level":2,"title":"dest(directory, [options])","slug":"dest-directory-options","link":"#dest-directory-options","children":[]},{"level":2,"title":"lastRun(task, [precision])","slug":"lastrun-task-precision","link":"#lastrun-task-precision","children":[{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C-1","link":"#\u8FD4\u56DE\u503C-1","children":[]},{"level":3,"title":"\u65F6\u95F4\u6233\u7CBE\u5EA6","slug":"\u65F6\u95F4\u6233\u7CBE\u5EA6","link":"#\u65F6\u95F4\u6233\u7CBE\u5EA6","children":[]}]},{"level":2,"title":"series(...tasks)","slug":"series-tasks","link":"#series-tasks","children":[{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C-2","link":"#\u8FD4\u56DE\u503C-2","children":[]}]},{"level":2,"title":"parallel(...tasks)","slug":"parallel-tasks","link":"#parallel-tasks","children":[]},{"level":2,"title":"watch(globs, [options], [task])","slug":"watch-globs-options-task","link":"#watch-globs-options-task","children":[{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C-3","link":"#\u8FD4\u56DE\u503C-3","children":[]}]},{"level":2,"title":"task([taskName], taskFunction)","slug":"task-taskname-taskfunction","link":"#task-taskname-taskfunction","children":[{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C-4","link":"#\u8FD4\u56DE\u503C-4","children":[]}]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"git":{"createdTime":1664510351000,"updatedTime":1690258157000,"contributors":[{"name":"zhangkuibao","email":"zhangkuibao@haoma.com","commits":4}]},"readingTime":{"minutes":6.84,"words":2051},"filePathRelative":"posts/technology/\u524D\u7AEF\u5DE5\u7A0B\u5316/Gulp/API.md","localizedDate":"2021\u5E7411\u670830\u65E5"}');export{l as data};
