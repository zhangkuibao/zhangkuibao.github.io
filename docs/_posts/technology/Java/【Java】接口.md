---
date: '2021-09-18 17:34:30'
title: 【Java】接口
tags:
  - Java
---

## 摘要

使用 interface 关键字定义一个接口。

使用 implements 关键字实现接口。

接口定义的所有方法默认都是 public abstract 的。

## 定义

所谓 interface，就是比抽象类还要抽象的纯抽象接口，因为它连字段都不能有。

因为接口定义的所有方法默认都是 public abstract 的，所以这两个修饰符不需要写出来（写不写效果都一样）。

如果一个抽象类没有字段，所有方法全部都是抽象方法：

```java
abstract class Person {
  public abstract void run();
  public abstract String getName();
}
```

就可以把该抽象类改写为接口：interface。

```java
interface Person {
  void run();
  String getName();
}
```

## 一个类可以实现多个接口

java 中一个类只能继承一个父类，但是可以实现多个接口。

```java
class Student implements Person, Hello { // 实现了两个interface

}
```

## 接口继承

接口之间可以继承，相当于对接口的扩展。

```java
interface Person {

}

interface Student extends Person {

}
```

## 参考

[接口](https://www.liaoxuefeng.com/wiki/1252599548343744/1260456790454816)
