import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as l,a as n,e as s,g as e,f as r,h as t}from"./app.382dc3cd.js";const c={},o=n("h2",{id:"\u5B8C\u5168\u4EE3\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B8C\u5168\u4EE3\u7406","aria-hidden":"true"},"#"),e(" \u5B8C\u5168\u4EE3\u7406")],-1),v=e("\u542F\u52A8\u4E00\u4E2A\u672C\u5730\u670D\u52A1\uFF0C\u5C06\u6240\u6709\u8BF7\u6C42\u6620\u5C04\u5230 "),_={href:"http://192.168.8.74:8000",target:"_blank",rel:"noopener noreferrer"},m=e("http://192.168.8.74:8000"),u=e("\u3002"),h=e("\u8BBF\u95EE localhost:8888 \u5C06\u5C55\u793A "),p={href:"http://192.168.8.74:8000",target:"_blank",rel:"noopener noreferrer"},b=e("http://192.168.8.74:8000"),f=e(" \u9875\u9762\u3002"),g=r(`<div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>http {
    server {
        listen       8888;
        server_name  localhost;
        location / {
          proxy_pass http://192.168.8.74:8000;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FC7\u6EE4" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6EE4" aria-hidden="true">#</a> \u8FC7\u6EE4</h2><p>\u8BE5\u670D\u52A1\u5668\u5C06\u8FC7\u6EE4\u4EE5.gif, .jpg, \u6216\u7ED3\u5C3E\u7684\u8BF7\u6C42.png \u5E76\u5C06\u5B83\u4EEC\u6620\u5C04\u5230/data/images \u76EE\u5F55\u3002</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>
http {
    server {
        listen       8888;
        server_name  localhost;
        location / {
          proxy_pass http://192.168.8.74:8000;
        }

        location ~ \\.(gif|jpg|png)$ {
            root /data/images;
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function x(k,N){const i=t("ExternalLinkIcon");return d(),l("div",null,[o,n("p",null,[v,n("a",_,[m,s(i)]),u]),n("p",null,[h,n("a",p,[b,s(i)]),f]),g])}const E=a(c,[["render",x],["__file","\u4EE3\u7406\u670D\u52A1\u5668.html.vue"]]);export{E as default};
