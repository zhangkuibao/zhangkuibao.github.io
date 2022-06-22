---
date: '2021-09-08 18:17:13'
title: 【JSAPI】编解码函数
tags:
  - JavaScript
  - JSAPI
---

## encodeURI() 和 decodeURI()

编码 `encodeURI()` 对应解码函数 `decodeURI()`，特殊符号`; / ? : @ & = + $ , #` 不会被转换。

## encodeURIComponent() 和 decodeURIComponent()

编码 `encodeURIComponent()` 对应解码函数 `decodeURIComponent()`，可以转换特殊符号，会转换除 `A-Z a-z 0-9 - _ . ! ~ * ' ( )` 之外的所有字符。
