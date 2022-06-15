---
date: 2021-09-09 14:32:11
title: 【离线缓存】ApplicationCache
tags:
  - 浏览器
  - 缓存
  - 离线缓存
---

## 作用

离线缓存

注意与 `<link rel="manifest" href="./manifest.webmanifest">` 中的 manifest 并不是一个东西。

## 已停止支持

chrome 在 2020 年 8 月删除了这个特性。

## 弊端

1. 一旦你采用了 manifest 之后，你将不能清空这些缓存，只能更新缓存，或者得用户自己去清空这些缓存。一旦缓存了错误的文件修复成本较大。

2. 使用 manifest 需要严格按照它规定的语法，需要注意换行和路径文件名等问题。

3. 如果更新的资源中有一个资源更新失败了，将导致全部更新失败，将用回上一版本的缓存。

4. 二次更新的问题，即在更新新版本过程中，用户需要第一次时访问的还是旧的资源，需要第二次进去才是新的资源。如果此时后台接口发生变化，访问第一次时的旧数据很可能将出现兼容问题。

5. 限制大小问题，一般是最多缓存 5mb，不过一般是够用的。

6. 回滚问题，这个可以参考之前的一篇《慎用 manifest》的文章，大体是从无到有，又想回滚到无的情形。

## 使用方法

- html 中指定缓存配置文件

在 html 标签上用 manifest 属性指定缓存配置文件

```html
<!DOCTYPE html>
<html manifest="test.manifest"></html>
```

- 配置文件

CACHE MANIFEST -文件申明
CACHE- 需要缓存的文件。需要相对路径
NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存
FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）

```conf
CACHE MANIFEST    //文件声明
# 2012-02-21 v1.0.0     //#号后面是注释

CACHE            //要缓存的文件。需要相对路径
/theme.css
/logo.gif
/main.js

NETWORK:         //不缓存的文件。需要与服务器连接时才读取
login.asp         //如果 NETWORK 下面使用 *,表示所有其他文件需要连接服务器读取，不缓存

FALLBACK:        //无法访问时的回退页面
#当html5这个文件夹文件无法访问时，都使用 404 页面
/html5/ /404.html
#当无法访问index这个文件时，都使用 404 页面
/index.js  /404.html
```

### 更新缓存

1. 修改 manifest 文件，修改备注也会触发更新缓存。

2. 通过 js 清除缓存，window.applicationCache.update()。

3. 清除浏览器缓存。

## 其他

1. 站点离线存储的容量限制是 5M
2. 如果 manifest 文件，或者内部列举的某一个文件不能正常下载，整个更新过程将视为失败，浏览器继续全部使用老的缓存
3. 引用 manifest 的 html 必须与 manifest 文件同源，在同一个域下
4. 在 manifest 中使用的相对路径，相对参照物为 manifest 文件
5. CACHE MANIFEST 字符串应在第一行，且必不可少
6. 系统会自动缓存引用清单文件的 HTML 文件
7. manifest 文件中 CACHE 则与 NETWORK，FALLBACK 的位置顺序没有关系，如果是隐式声明需要在最前面
8. FALLBACK 中的资源必须和 manifest 文件同源
9. 当一个资源被缓存后，该浏览器直接请求这个绝对路径也会访问缓存中的资源。
10. 站点中的其他页面即使没有设置 manifest 属性，请求的资源如果在缓存中也从缓存中访问
11. 当 manifest 文件发生改变时，资源请求本身也会触发更新
