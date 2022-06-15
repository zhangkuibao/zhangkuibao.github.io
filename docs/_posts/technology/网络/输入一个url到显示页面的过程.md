---
date: 2021-09-09 14:44:46
title: 输入一个 url 到显示页面的过程
tags:
  - 网络
---

## 整体步骤

1. DNS 解析
2. TCP 连接
3. 发送 HTTP 请求
4. Server 处理 HTTP 请求并返回 HTTP 报文
5. 浏览器解析并 render 页面
6. HTTP 连接断开

### DNS 解析

假设输入的 URL 是包含域名的，那肯定会涉及到 DNS 解析。当然，如果 URL 仅仅是 IP，那就不会涉及到 DNS。

DNS 是域名和 IP 地址相互映射的分布式数据库。

#### DNS 查询方式

当前 DNS 服务器无法解析出结果时需要去其他 DNS 服务器查询，这时有两种方式：

1. 递归解析：由当前 DNS 服务器向其他 DNS 服务器进行查询，从根域（尾部的句点 .）开始依次向下查询

2. 迭代解析：当前 DNS 服务器把其他 DNS 服务器的 ip 返回给客户端 DNS 程序，由客户端向新的 DNS 服务器发起请求

#### DNS 查询流程

[How the Domain Name System (DNS) Works](https://www.verisign.com/en_US/website-presence/online/how-dns-works/index.xhtml)

1. 在本地域名服务器中根据域名查询 IP 地址。
2. 本地未找到时本地域名服务器会向根域名服务器发送一个请求。
3. 根域名服务器也不存在该域名时，本地域名会向 com 顶级域名服务器（TLD）发送一个请求。
4. 依次类推，层层向上查询，查到域名对应 IP 后保存到本地缓存中。

#### 本地缓存位置

- Windows 操作系统

一般在 C:\Windows\System32\Drivers\etc\hosts。

- Linux 操作系统

一般在/etc/hosts 下。

### TCP 连接

解析出 IP 地址后，根据该 IP 地址和默认端口 80，和服务器建立 TCP 连接;

### 发送 HTTP 请求

### 服务器处理请求，返回 HTTP 报文

### 浏览器解析渲染页面

## 参考

[深入浅出经典面试题：从浏览器中输入 URL 到页面加载发生了什么 - Part 1](https://www.cnblogs.com/confach/p/10050013.html)
