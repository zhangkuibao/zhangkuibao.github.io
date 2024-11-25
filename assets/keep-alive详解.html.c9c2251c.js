import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c,a as e,e as a,g as n,f as d,h as r}from"./app.cb0a7cdb.js";const l="/images/keep-alive-1.png",s={},p=n("\u8F6C\u8F7D\u81EA\uFF1ACSDN \u535A\u4E3B\u300C\u5C10\u846E\u963F\u8B7D\u300D\u7684\u539F\u521B\u6587\u7AE0 "),h=e("br",null,null,-1),v=n(" \u539F\u6587\u94FE\u63A5\uFF1A"),T={href:"https://blog.csdn.net/xiaoduanayu/article/details/78386508",target:"_blank",rel:"noopener noreferrer"},u=n("https://blog.csdn.net/xiaoduanayu/article/details/78386508"),k=d('<p><strong>HTTP keep-alive \u662F\u4E3A\u4E86\u8BA9 TCP \u6D3B\u5F97\u66F4\u4E45\u4E00\u70B9\uFF0C\u4EE5\u4FBF\u5728\u540C\u4E00\u4E2A\u8FDE\u63A5\u4E0A\u4F20\u9001\u591A\u4E2A http\uFF0C\u63D0\u9AD8 socket \u7684\u6548\u7387\u3002</strong></p><h2 id="\u4E3A\u4EC0\u4E48\u8981\u6709-connection-keep-alive" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u6709-connection-keep-alive" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u6709 Connection: keep-alive\uFF1F</h2><p>\u5728\u65E9\u671F\u7684 HTTP/1.0 \u4E2D\uFF0C\u6BCF\u6B21 http \u8BF7\u6C42\u90FD\u8981\u521B\u5EFA\u4E00\u4E2A\u8FDE\u63A5\uFF0C\u800C\u521B\u5EFA\u8FDE\u63A5\u7684\u8FC7\u7A0B\u9700\u8981\u6D88\u8017\u8D44\u6E90\u548C\u65F6\u95F4\uFF0C\u4E3A\u4E86\u51CF\u5C11\u8D44\u6E90\u6D88\u8017\uFF0C\u7F29\u77ED\u54CD\u5E94\u65F6\u95F4\uFF0C\u5C31\u9700\u8981\u91CD\u7528\u8FDE\u63A5\u3002\u5728\u540E\u6765\u7684 HTTP/1.0 \u4E2D\u4EE5\u53CA HTTP/1.1 \u4E2D\uFF0C\u5F15\u5165\u4E86\u91CD\u7528\u8FDE\u63A5\u7684\u673A\u5236\uFF0C\u5C31\u662F\u5728 http \u8BF7\u6C42\u5934\u4E2D\u52A0\u5165 <code>Connection: keep-alive</code> \u6765\u544A\u8BC9\u5BF9\u65B9\u8FD9\u4E2A\u8BF7\u6C42\u54CD\u5E94\u5B8C\u6210\u540E\u4E0D\u8981\u5173\u95ED\uFF0C\u4E0B\u4E00\u6B21\u54B1\u4EEC\u8FD8\u7528\u8FD9\u4E2A\u8BF7\u6C42\u7EE7\u7EED\u4EA4\u6D41\u3002\u534F\u8BAE\u89C4\u5B9A HTTP/1.0 \u5982\u679C\u60F3\u8981\u4FDD\u6301\u957F\u8FDE\u63A5\uFF0C\u9700\u8981\u5728\u8BF7\u6C42\u5934\u4E2D\u52A0\u4E0A<code>Connection: keep-alive</code>\uFF0C\u800C HTTP/1.1 \u9ED8\u8BA4\u662F\u652F\u6301\u957F\u8FDE\u63A5\u7684\uFF0C\u6709\u6CA1\u6709\u8FD9\u4E2A\u8BF7\u6C42\u5934\u90FD\u884C\u3002</p><p>\u5F53\u7136\u4E86\uFF0C\u534F\u8BAE\u662F\u8FD9\u6837\u89C4\u5B9A\u7684\uFF0C\u81F3\u4E8E\u652F\u4E0D\u652F\u6301\u8FD8\u5F97\u770B\u670D\u52A1\u5668\uFF08\u6BD4\u5982 tomcat\uFF09\u548C\u5BA2\u6237\u7AEF\uFF08\u6BD4\u5982\u6D4F\u89C8\u5668\uFF09\u7684\u5177\u4F53\u5B9E\u73B0\u3002\u5728\u5B9E\u8DF5\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u8C37\u6B4C\u6D4F\u89C8\u5668\u4F7F\u7528 HTTP/1.1 \u534F\u8BAE\u65F6\u8BF7\u6C42\u5934\u4E2D\u603B\u4F1A\u5E26\u4E0A<code>Connection: keep-alive</code>\uFF0C\u53E6\u5916\u901A\u8FC7 httpclient \u4F7F\u7528 HTTP/1.0 \u534F\u8BAE\u53BB\u8BF7\u6C42 tomcat \u65F6\uFF0C\u5373\u4F7F\u5E26\u4E0A<code>Connection: keep-alive</code>\u8BF7\u6C42\u5934\u4E5F\u4FDD\u6301\u4E0D\u4E86\u957F\u8FDE\u63A5\u3002\u5982\u679C HTTP/1.1 \u7248\u672C\u7684 http \u8BF7\u6C42\u62A5\u6587\u4E0D\u5E0C\u671B\u4F7F\u7528\u957F\u8FDE\u63A5\uFF0C\u5219\u8981\u5728\u8BF7\u6C42\u5934\u4E2D\u52A0\u4E0A <code>Connection: close</code>\uFF0C\u63A5\u6536\u5230\u8FD9\u4E2A\u8BF7\u6C42\u5934\u7684\u5BF9\u7AEF\u670D\u52A1\u5C31\u4F1A\u4E3B\u52A8\u5173\u95ED\u8FDE\u63A5\u3002</p><p>\u4F46\u662F http \u957F\u8FDE\u63A5\u4F1A\u4E00\u76F4\u4FDD\u6301\u5417\uFF1F\u80AF\u5B9A\u662F\u4E0D\u4F1A\u7684\u3002\u4E00\u822C\u670D\u52A1\u7AEF\u90FD\u4F1A\u8BBE\u7F6E keep-alive \u8D85\u65F6\u65F6\u95F4\u3002\u8D85\u8FC7\u6307\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u670D\u52A1\u7AEF\u5C31\u4F1A\u4E3B\u52A8\u5173\u95ED\u8FDE\u63A5\u3002\u540C\u65F6\u670D\u52A1\u7AEF\u8FD8\u4F1A\u8BBE\u7F6E\u4E00\u4E2A\u53C2\u6570\u53EB\u6700\u5927\u8BF7\u6C42\u6570\uFF0C\u6BD4\u5982\u5F53\u6700\u5927\u8BF7\u6C42\u6570\u662F 300 \u65F6\uFF0C\u53EA\u8981\u8BF7\u6C42\u6B21\u6570\u8D85\u8FC7 300 \u6B21\uFF0C\u5373\u4F7F\u8FD8\u6CA1\u5230\u8D85\u65F6\u65F6\u95F4\uFF0C\u670D\u52A1\u7AEF\u4E5F\u4F1A\u4E3B\u52A8\u5173\u95ED\u8FDE\u63A5\u3002</p><h2 id="transfer-encoding-\u548C-content-length" tabindex="-1"><a class="header-anchor" href="#transfer-encoding-\u548C-content-length" aria-hidden="true">#</a> Transfer-Encoding \u548C Content-Length</h2><p>\u8C08\u5230 http \u957F\u8FDE\u63A5\uFF0C\u90FD\u7ED5\u4E0D\u5F00\u8FD9\u4E24\u4E2A\u8BF7\u6C42/\u54CD\u5E94\u5934\u3002\u5176\u4E2D <code>Transfer-Encoding</code> \u4E0D\u5EFA\u8BAE\u5728\u8BF7\u6C42\u5934\u4E2D\u4F7F\u7528\uFF0C\u56E0\u4E3A\u65E0\u6CD5\u77E5\u9053\u670D\u52A1\u7AEF\u80FD\u5426\u89E3\u6790\u8FD9\u4E2A\u8BF7\u6C42\u5934\uFF0C\u800C\u5E94\u8BE5\u5728\u54CD\u5E94\u5934\u4E2D\u4F7F\u7528\uFF0C\u56E0\u4E3A\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u90FD\u80FD\u89E3\u6790\u8FD9\u4E2A\u54CD\u5E94\u5934\u3002<code>Content-Length</code> \u5728\u8BF7\u6C42\u65B9\u6CD5\u4E3A <code>GET</code> \u7684\u65F6\u5019\u4E0D\u80FD\u4F7F\u7528\uFF0C\u5728\u8BF7\u6C42\u65B9\u6CD5\u4E3A <code>POST</code> \u7684\u65F6\u5019\u9700\u8981\u4F7F\u7528\uFF0C\u540C\u65F6\u4E5F\u5E38\u5E38\u51FA\u73B0\u5728\u54CD\u5E94\u5934\u4E2D\u3002\u4E3A\u4E86\u65B9\u4FBF\u63CF\u8FF0\uFF0C\u4E0B\u9762\u53EA\u8BF4\u660E\u54CD\u5E94\u5934\u4E2D\u51FA\u73B0\u8FD9\u4E24\u4E2A\u5C5E\u6027\u7684\u60C5\u51B5\u3002</p><p>\u8981\u5B9E\u73B0\u957F\u8FDE\u63A5\u5F88\u7B80\u5355\uFF0C\u53EA\u8981\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u90FD\u4FDD\u6301\u8FD9\u4E2A http \u957F\u8FDE\u63A5\u5373\u53EF\u3002\u4F46\u95EE\u9898\u7684\u5173\u952E\u5728\u4E8E\u4FDD\u6301\u957F\u8FDE\u63A5\u540E\uFF0C\u6D4F\u89C8\u5668\u5982\u4F55\u77E5\u9053\u670D\u52A1\u5668\u5DF2\u7ECF\u54CD\u5E94\u5B8C\u6210\uFF1F\u5728\u4F7F\u7528\u77ED\u8FDE\u63A5\u7684\u65F6\u5019\uFF0C\u670D\u52A1\u5668\u5B8C\u6210\u54CD\u5E94\u540E\u5373\u5173\u95ED http \u8FDE\u63A5\uFF0C\u8FD9\u6837\u6D4F\u89C8\u5668\u5C31\u80FD\u77E5\u9053\u5DF2\u63A5\u6536\u5230\u5168\u90E8\u7684\u54CD\u5E94\uFF0C\u540C\u65F6\u4E5F\u5173\u95ED\u8FDE\u63A5\uFF08TCP \u8FDE\u63A5\u662F\u53CC\u5411\u7684\uFF09\u3002\u5728\u4F7F\u7528\u957F\u8FDE\u63A5\u7684\u65F6\u5019\uFF0C\u54CD\u5E94\u5B8C\u6210\u540E\u670D\u52A1\u5668\u662F\u4E0D\u80FD\u5173\u95ED\u8FDE\u63A5\u7684\uFF0C\u90A3\u4E48\u5B83\u5C31\u8981\u5728\u54CD\u5E94\u5934\u4E2D\u52A0\u4E0A\u7279\u6B8A\u6807\u5FD7\u544A\u8BC9\u6D4F\u89C8\u5668\u5DF2\u54CD\u5E94\u5B8C\u6210\u3002</p><p>\u4E00\u822C\u60C5\u51B5\u4E0B\u8FD9\u4E2A\u7279\u6B8A\u6807\u5FD7\u5C31\u662F Content-Length\uFF0C\u6765\u6307\u660E\u54CD\u5E94\u4F53\u7684\u6570\u636E\u5927\u5C0F\uFF0C\u6BD4\u5982<code>Content-Length: 120</code>\u8868\u793A\u54CD\u5E94\u4F53\u5185\u5BB9\u6709 120 \u4E2A\u5B57\u8282\uFF0C\u8FD9\u6837\u6D4F\u89C8\u5668\u63A5\u6536\u5230 120 \u4E2A\u5B57\u8282\u7684\u54CD\u5E94\u4F53\u540E\u5C31\u77E5\u9053\u4E86\u5DF2\u7ECF\u54CD\u5E94\u5B8C\u6210\u3002</p><p>\u7531\u4E8E Content-Length \u5B57\u6BB5\u5FC5\u987B\u771F\u5B9E\u53CD\u6620\u54CD\u5E94\u4F53\u957F\u5EA6\uFF0C\u4F46\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u6709\u4E9B\u65F6\u5019\u54CD\u5E94\u4F53\u957F\u5EA6\u5E76\u6CA1\u90A3\u4E48\u597D\u83B7\u5F97\uFF0C\u4F8B\u5982\u54CD\u5E94\u4F53\u6765\u81EA\u4E8E\u7F51\u7EDC\u6587\u4EF6\uFF0C\u6216\u8005\u7531\u52A8\u6001\u8BED\u8A00\u751F\u6210\u3002\u8FD9\u65F6\u5019\u8981\u60F3\u51C6\u786E\u83B7\u53D6\u957F\u5EA6\uFF0C\u53EA\u80FD\u5148\u5F00\u4E00\u4E2A\u8DB3\u591F\u5927\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u7B49\u5185\u5BB9\u5168\u90E8\u751F\u6210\u597D\u518D\u8BA1\u7B97\u3002\u4F46\u8FD9\u6837\u505A\u4E00\u65B9\u9762\u9700\u8981\u66F4\u5927\u7684\u5185\u5B58\u5F00\u9500\uFF0C\u53E6\u4E00\u65B9\u9762\u4E5F\u4F1A\u8BA9\u5BA2\u6237\u7AEF\u7B49\u66F4\u4E45\u3002\u8FD9\u65F6\u5019<code>Transfer-Encoding: chunked</code>\u54CD\u5E94\u5934\u5C31\u6D3E\u4E0A\u7528\u573A\u4E86\uFF0C\u8BE5\u54CD\u5E94\u5934\u8868\u793A\u54CD\u5E94\u4F53\u5185\u5BB9\u7528\u7684\u662F\u5206\u5757\u4F20\u8F93\uFF0C\u6B64\u65F6\u670D\u52A1\u5668\u53EF\u4EE5\u5C06\u6570\u636E\u4E00\u5757\u4E00\u5757\u5730\u5206\u5757\u54CD\u5E94\u7ED9\u6D4F\u89C8\u5668\u800C\u4E0D\u5FC5\u4E00\u6B21\u6027\u5168\u90E8\u54CD\u5E94\uFF0C\u5F85\u6D4F\u89C8\u5668\u63A5\u6536\u5230\u5168\u90E8\u5206\u5757\u540E\u5C31\u8868\u793A\u54CD\u5E94\u7ED3\u675F\u3002</p><p>\u4EE5\u5206\u5757\u4F20\u8F93\u4E00\u6BB5\u6587\u672C\u5185\u5BB9\uFF1A\u201C\u4EBA\u7684\u4E00\u751F\u603B\u662F\u5728\u8FFD\u6C42\u81EA\u7531\u7684\u4E00\u751F So easy\u201D\u6765\u8BF4\u660E\u5206\u5757\u4F20\u8F93\u7684\u8FC7\u7A0B\uFF0C\u5982\u4E0B\u56FE\u6240\u793A</p><p><img src="'+l+`" alt="\u5206\u5757\u4F20\u8F93\u8FC7\u7A0B" loading="lazy"></p><p>\u56FE\u4E2D\u6BCF\u4E2A\u5206\u5757\u7684\u7B2C\u4E00\u884C\u662F\u5206\u5757\u5185\u5BB9\u7684\u5927\u5C0F\uFF0C\u5341\u516D\u8FDB\u5236\u8868\u793A\uFF0C\u540E\u9762\u8DDF CRLF(\\r\\n)\uFF0C\u7B2C\u4E00\u884C\u672C\u8EAB\u4EE5\u53CA\u5206\u5757\u5185\u5BB9\u672B\u5C3E\u7684 CRLF \u4E0D\u8BA1\u5165\u5927\u5C0F\u3002\u7B2C\u4E8C\u884C\u662F\u5206\u5757\u5185\u5BB9\uFF0C\u540E\u9762\u4E5F\u8DDF CRLF\u3002\u6700\u540E\u4E00\u4E2A\u5206\u5757\u867D\u7136\u5927\u5C0F\u4E3A\u96F6\uFF0C\u4F46\u662F\u5FC5\u4E0D\u53EF\u5C11\uFF0C\u8868\u793A\u5206\u5757\u7684\u7ED3\u675F\uFF0C\u540E\u9762\u4E5F\u8DDF CRLF\uFF0C\u540C\u65F6\u5185\u5BB9\u4E3A\u7A7A\u3002\u6700\u540E\uFF0C\u54CD\u5E94\u4F53\u4EE5 CRLF \u7ED3\u675F\u3002\u5C06\u5B83\u4EEC\u7ED3\u5408\u8D77\u6765\u7684\u54CD\u5E94\u5185\u5BB9\u5C31\u662F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>HTTP/1.1 200 OK
Content-Type: text/plain;charset=utf-8
Connection: keep-alive
Transfer-Encoding: chunked

21\\r\\n
\u4EBA\u7684\u4E00\u751F\u603B\u662F\u5728\u8FFD\u6C42\u81EA\u7531\\r\\n
11\\r\\n
\u7684\u4E00\u751F So easy\\r\\n
0\\r\\n
\\r\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u8FC7\u4EE5\u4E0A\u683C\u5F0F\u7684\u54CD\u5E94\u4F53\u5185\u5BB9\u7528\u6D4F\u89C8\u5668\u81EA\u5E26\u7684\u8C03\u8BD5\u5DE5\u5177\u662F\u770B\u4E0D\u51FA\u6765\u7684\uFF0C\u6D4F\u89C8\u5668\u81EA\u5E26\u8C03\u8BD5\u5DE5\u5177\u5BF9\u5206\u5757\u4F20\u8F93\u548C\u975E\u5206\u5757\u4F20\u8F93\u54CD\u5E94\u4F53\u7684\u663E\u793A\u662F\u4E00\u6837\u7684\uFF0C\u8981\u60F3\u770B\u5230\u533A\u522B\uFF0C\u9700\u8981\u7528 Wireshark\u3001Fiddler \u7B49\u6293\u5305\u5DE5\u5177\u67E5\u770B\u3002</p><h2 id="http-keep-alive-\u548C-tcp-keepalive-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#http-keep-alive-\u548C-tcp-keepalive-\u7684\u533A\u522B" aria-hidden="true">#</a> HTTP keep-alive \u548C TCP keepalive \u7684\u533A\u522B</h2><blockquote><p>TCP keepalive \u6307\u7684\u662F TCP \u4FDD\u6D3B\u8BA1\u65F6\u5668\uFF08keepalive timer\uFF09\u3002\u8BBE\u60F3\u6709\u8FD9\u6837\u7684\u60C5\u51B5\uFF1A\u5BA2\u6237\u5DF2\u4E3B\u52A8\u4E0E\u670D\u52A1\u5668\u5EFA\u7ACB\u4E86 TCP \u8FDE\u63A5\u3002\u4F46\u540E\u6765\u5BA2\u6237\u7AEF\u7684\u4E3B\u673A\u7A81\u7136\u51FA\u6545\u969C\u3002\u663E\u7136\uFF0C\u670D\u52A1\u5668\u4EE5\u540E\u5C31\u4E0D\u80FD\u518D\u6536\u5230\u5BA2\u6237\u53D1\u6765\u7684\u6570\u636E\u3002\u56E0\u6B64\uFF0C\u5E94\u5F53\u6709\u63AA\u65BD\u4F7F\u670D\u52A1\u5668\u4E0D\u8981\u518D\u767D\u767D\u7B49\u5F85\u4E0B\u53BB\u3002\u8FD9\u5C31\u662F\u4F7F\u7528\u4FDD\u6D3B\u8BA1\u65F6\u5668\u3002\u670D\u52A1\u5668\u6BCF\u6536\u5230\u4E00\u6B21\u5BA2\u6237\u7684\u6570\u636E\uFF0C\u5C31\u91CD\u65B0\u8BBE\u7F6E\u4FDD\u6D3B\u8BA1\u65F6\u5668\uFF0C\u65F6\u95F4\u7684\u8BBE\u7F6E\u901A\u5E38\u662F\u4E24\u5C0F\u65F6\u3002\u82E5\u4E24\u5C0F\u65F6\u6CA1\u6709\u6536\u5230\u5BA2\u6237\u7684\u6570\u636E\uFF0C\u670D\u52A1\u5668\u5C31\u53D1\u9001\u4E00\u4E2A\u63A2\u6D4B\u62A5\u6587\u6BB5\uFF0C\u4EE5\u540E\u5219\u6BCF\u9694 75 \u79D2\u53D1\u9001\u4E00\u6B21\u3002\u82E5\u4E00\u8FDE\u53D1\u9001 10 \u4E2A\u63A2\u6D4B\u62A5\u6587\u6BB5\u540E\u4ECD\u65E0\u5BA2\u6237\u7684\u54CD\u5E94\uFF0C\u670D\u52A1\u5668\u5C31\u8BA4\u4E3A\u5BA2\u6237\u7AEF\u51FA\u4E86\u6545\u969C\uFF0C\u63A5\u7740\u5C31\u5173\u95ED\u8FD9\u4E2A\u8FDE\u63A5\u3002 <br> \u2014\u2014\u6458\u81EA\u8C22\u5E0C\u4EC1\u300A\u8BA1\u7B97\u673A\u7F51\u7EDC\u300B</p></blockquote><p>HTTP keep-alive \u662F\u4E3A\u4E86\u8BA9 TCP \u6D3B\u5F97\u66F4\u4E45\u4E00\u70B9\uFF0C\u4EE5\u4FBF\u5728\u540C\u4E00\u4E2A\u8FDE\u63A5\u4E0A\u4F20\u9001\u591A\u4E2A http\uFF0C\u63D0\u9AD8 socket \u7684\u6548\u7387\u3002</p><p>TCP keep-alive \u662F\u4E00\u79CD\u68C0\u6D4B TCP \u8FDE\u63A5\u72B6\u51B5\u7684\u4FDD\u9C9C\u673A\u5236\u3002</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,20),_={href:"https://blog.csdn.net/oceanperfect/article/details/51064574",target:"_blank",rel:"noopener noreferrer"},m=n("http \u7684 keep-alive \u548C tcp \u7684 keepalive \u533A\u522B");function g(C,b){const t=r("ExternalLinkIcon");return i(),c("div",null,[e("blockquote",null,[e("p",null,[p,h,v,e("a",T,[u,a(t)])])]),k,e("p",null,[e("a",_,[m,a(t)])])])}const x=o(s,[["render",g],["__file","keep-alive\u8BE6\u89E3.html.vue"]]);export{x as default};
