---
title: 【JavaScript】如何正确检测用户的设备
tags:
  - JavaScript
---

## 为什么要检测设备

在浏览器的早期和随后的“浏览器战争”中，无数的浏览器供应商意味着开发人员需要了解哪个供应商开发的哪个客户端连接到他们的网站，然后他们开始根据检测到的浏览器定制和优化响应。从这个意义上说，这是技术上的需要。

## User-Agent 属性

通常用 navigator.userAgent 来获取用户代理（浏览器）信息。

浏览器通常的格式为：

`User-Agent: Mozilla/<version> (<system-information>) <platform> (<platform-details>) <extensions>`

在 PC 端 chrome 浏览器中用 navigator.userAgent 获取到的信息：

`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36`

## User-Agent 的局限性

userAgent 可以被修改，我们无法判断 userAgent 是否真实。

一些跨设备的产品对不同设备提供不同的功能，比如为笔记本电脑和桌面设备提供功能齐全的产品的公司，他们只向移动用户提供有限版本。一些移动端浏览器会给用户提供切换到“电脑版网页”的功能。

这种情况下用 userAgent 就获取到的用户代理信息可能就不准确了。

## 如何获取准确的用户代理信息

既然使用 userAgent 有被欺骗的可能，那就需要更完备的方法进行检测。

**执行一些严重依赖于 userAgent 指定设备的功能来判断 userAgent 信息是否正确。**

### 检测可否触屏

你能想象一款不支持触控的智能手机吗？

```js
var touch_capable =
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;

if (touch_capable) {
  console.log("Supported");
} else {
  console.log("Not Supported");
}
```

### 检测屏幕尺寸

特定于设备的功能和信息是必不可少的。如果你声称你的设备是 Apple iPhone 6，那么你必须了解特定于设备的详细信息，至少是 iPhone 6 的屏幕尺寸。

```js
window.screen.width;

window.screen.windth;
```

### 配合 navigator.platform 信息

你不能声称你同时使用 Max OS X 和 Windows！

```js
navigator.platform;
```

## 参考

[Why mimicking a device is becoming almost impossible](https://multilogin.com/why-mimicking-a-device-is-almost-impossible/)
