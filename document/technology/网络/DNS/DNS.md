<author-info date="1631169586686"></author-info>

# DNS

## 介绍

DNS（Domain Name System）是互联网的一项服务。它作为将域名和 IP 地址相互映射的一个分布式数据库，能够使人更方便地访问互联网。DNS 使用 UDP 端口 53。当前，对于每一级域名长度的限制是 63 个字符，域名总长度则不能超过 253 个字符。

## DNS 解析

假设浏览器地址栏中输入的 URL 是包含域名的，那肯定会涉及到 DNS 解析。当然，如果 URL 仅仅是 IP，那就不会涉及到 DNS。

DNS 是域名和 IP 地址相互映射的分布式数据库。

### DNS 解析流程

![DNS解析流程](/src/DNS解析流程.png)

### DNS 查询方式

当前 DNS 服务器无法解析出结果时需要去其他 DNS 服务器查询，这时有两种方式：

1. 递归解析：由当前 DNS 服务器向其他 DNS 服务器进行查询，从根域（尾部的句点 .）开始依次向下查询

2. 迭代解析：当前 DNS 服务器把其他 DNS 服务器的 ip 返回给客户端 DNS 程序，由客户端向新的 DNS 服务器发起请求

### DNS 查询流程

1. 在本地域名服务器中根据域名查询 IP 地址。
2. 本地未找到时本地域名服务器会向根域名服务器发送一个请求。
3. 根域名服务器也不存在该域名时，本地域名会向 com 顶级域名服务器（TLD）发送一个请求。
4. 依次类推，层层向上查询，查到域名对应 IP 后保存到本地缓存中。

### 本地缓存位置

- Windows 操作系统

一般在 C:\Windows\System32\Drivers\etc\hosts。

- Linux 操作系统

一般在/etc/hosts 下。

## DNS 负载均衡

DNS 负载均衡是为了降低服务器负载，将同一个服务部署到不同的服务器上，然后用 DNS 将不同的访问分配到不同的服务器上，从而降低单个服务器的负荷。

## DNS Record（记录）

| 记录类型             | 含义简介                                                                   |
| -------------------- | -------------------------------------------------------------------------- |
| A（Address）         | 指定域名对应的 IPv4 地址                                                   |
| AAAA                 | 指定域名对应的 IPv6 地址                                                   |
| NS（Name Server）    | 指定该域名由哪个 DNS 服务器来进行解析                                      |
| MX（Mail Exchanger） | 邮件交换记录，用于电子邮件系统发邮件时根据收信人的地址后缀来定位邮件服务器 |
| CNAME                | 别名记录，多个域名映射到同一台计算机（如同一主机提供 mail 和 www 服务）    |
| TXT                  | 主机名或域名的说明                                                         |
| TTL（Time-To-Live）  | DNS 服务器中保存的时间                                                     |
| PTR                  | 将一个主机地址映射到对应的域名                                             |
| HINFO                | 说明映射到特定 DNS 主机名的 CPU 类型和操作系统类型                         |

### A 记录

A (Address) 记录是用来指定主机名（或域名）对应的 IP 地址记录。域名绑定 A 记录就是告诉 DNS，当你输入域名的时候将你引导至域名绑定的 IP。

### CNAME 记录

可以将一个域名或者子域名指向另外一个主机名。

常用的场景是 CDN。例如公司 A 想把自己的图片放在 Akamai 的 CDN 上，A 的子域名是 img.abc.com, 而 Akamai 的 CDN 服务域名是 img.akaimacdn.com. 但是 A 公司期望用自己的域名，而不是 Akamai 的域名。为了实现这个目标，只需要用 CNAME 将子域名 img.abc.com 指向到 img.akaimacdn.com。注意这个 CNAME 需要在在公司 A 的 DNS server 上设置。

### NS 记录

NS 记录用来解析服务器记录，表明由哪台服务器对该域名进行解析，这里的 NS 记录只对子域名生效。

NS 记录的优先级高于 A 记录如果一个主机地址同时存在 NS 记录和 A 记录，则 A 记录不生效。

## 参考

[深入浅出经典面试题：从浏览器中输入 URL 到页面加载发生了什么 - Part 1](https://www.cnblogs.com/confach/p/10050013.html)

[How the Domain Name System (DNS) Works](https://www.verisign.com/en_US/website-presence/online/how-dns-works/index.xhtml)