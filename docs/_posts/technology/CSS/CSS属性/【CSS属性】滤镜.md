---
title: 【CSS属性】滤镜
tags:
  - CSS
  - CSS属性
date: '2022-03-08 22:50:04'
---

> `filter` 属性是 `css3` 中新增的，`ie`不支持（`ie`有自己的实现方式）
> `filter` 属性定义了元素的可视效果
> 设置方式 `filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url()`
> 可以在一个 `filter` 下设置多个属性，类似 `transform`，设置**顺序**影响最终效果
> 可设置百分比的值都可用数字代替

## blur(px) 高斯模糊
  > 设定屏幕上多少个像素融在一起，值越大越模糊
  > 默认为0，负值无效

## brightness(%) 亮度
  > 默认为100%，值为0时图像全黑，可以超过100%，会比原来更亮

## contrast(%) 对比度
  > 默认为100%，值为0时图像全灰，可以超过100%，会比原来更鲜艳

## drop-shadow(h-shadow v-shadow blur spread color) 阴影
  > 该函数与已有的box-shadow box-shadow属性很相似；不同之处在于，通过滤镜，一些浏览器为了更好的性能会提供硬件加速

## grayscale(%) 灰度
  > 默认为0，值为100%时完全转为灰度图像，有效取值为 **0%-100%** 

## hue-rotate(deg) 色相旋转
  > 有效取值为 **0-360deg** 

## invert(%) 反转图像
  > 有效取值为 **0%-100%** ，设置为 `50%` 时效果与 `contrast(50%)` 相同

## opacity(%) 透明度
 > 有效取值为 **0%-100%**，与 `opacity` 属性的不同在于一些浏览器会开启硬件加速

## saturate(%) 饱和度
  > 默认为100%，值为0时完全不饱和，与 `grayscale(100%)` 效果相同，有效取值为 **0%-100%** 

## sepia(%) 转为深褐色
  > 有效取值为 **0%-100%**，将图像转为深褐色
