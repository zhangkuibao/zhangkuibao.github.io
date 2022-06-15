---
date: 2021-09-09 14:38:42
title: PWA
tags:
  - myGit
  - learning-Notes
  - document
  - technology
  - 浏览器
  - PWA
---

## 背景

Native App 的体验很好，但是有一些缺点：

- 开发成本高(ios 和安卓)
- 软件上线需要审核
- 版本更新需要将新版本上传到不同的应用商店
- app 必须下载到设备上才能使用，即使只是偶尔使用

而 web 网页开发成本低，网站更新时上传最新的资源到服务器即可，用手机带的浏览器打开就可以使用。但是除了体验上比 Native app 还是差一些，还有一些明显的缺点：

- 手机桌面入口不够便捷，想要进入一个页面必须通过浏览器进入，并且要记住它的 url 或者加入书签
- 没网络就没响应，不具备离线能力
- 不像 APP 一样能进行消息推送

## PWA 介绍

PWA（Progressive Web App），渐进式 WEB 应用。

一个 PWA 应用首先是一个网页, 可以通过 Web 技术编写出一个网页应用. 随后添加上 App Manifest 和 Service Worker 来实现 PWA 的安装和离线等功能。

它解决了 Native App 和 Web 应用的一些问题：

- 可以添加至主屏幕，点击主屏幕图标可以实现启动动画以及隐藏地址栏
- 实现离线缓存功能，即使用户手机没有网络，依然可以使用一些离线功能
- 实现了消息推送

这些特性将使得 Web 应用渐进式接近原生 App。

在 windows 10 操作系统 chrome 浏览器中打开一些网页时地址栏右侧会有一个安装图标，代表该网站可以被安装到桌面。

## PWA 的实现

以下是实现 PWA 的一些技术

- Manifest 将 web 应用添加至主屏幕

详见 `/浏览器/PWA/manifest`

- Service Worker 实现离线缓存

详见 `/浏览器/缓存/ServiceWorder`

可以将一些不经常更改的静态文件放到缓存中，提升用户体验。

使用 HTTP 缓存意味着你要依赖服务器来告诉你何时缓存资源和何时过期。使用 Service Worker 则是将控制权交给前端。

- Service Worker 实现消息推送
  [使用 Service Worker 发送 Push 推送](https://blog.csdn.net/yanghaolong/article/details/82664362)

## 总结

### PWA 的优势

- 可以将 app 的快捷方式放置到桌面上，全屏运行，与原生 app 无异
- 能够在各种网络环境下使用，包括网络差和断网条件下，不会显示 undefind
- 推送消息的能力
- 其本质是一个网页，没有原生 app 的各种启动条件，快速响应用户指令

### PWA 存在的问题

- 支持率不高:现在 ios 手机端不支持 pwa，IE 也暂时不支持
- Chrome 在中国桌面版占有率还是不错的，安卓移动端上的占有率却很低
- 各大厂商还未明确支持 pwa
- 依赖的 GCM 服务在国内无法使用
- 微信小程序的竞争

## 参考

[讲讲 PWA](https://segmentfault.com/a/1190000012353473)
