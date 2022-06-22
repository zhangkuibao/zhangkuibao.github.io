---
date: '2021-09-18 17:53:28'
title: 【Java】修饰符
tags:
  - Java
---

## 访问修饰符

### public

定义为 public 的 class、interface 可以被其他任何类访问。

### private

定义为 private 的 field、method 无法被其他类访问。

### protected

protected 作用于继承关系。定义为 protected 的字段和方法可以被子类访问，以及子类的子类。

## final

1. 用 final 修饰 class 可以阻止被继承。
2. 用 final 修饰 method 可以阻止被子类覆写。
3. 用 final 修饰 field 可以阻止被重新赋值。
4. 用 final 修饰局部变量可以阻止被重新赋值。

## 参考

[作用域](https://www.liaoxuefeng.com/wiki/1252599548343744/1260466215676512)
