---
date: 2021-09-30 17:01:18
title: 【Nginx】启动、停止和重新加载配置
tags:
  - Nginx
---

## 启动

要启动 nginx，需要运行可执行文件。

也可以执行 `start nginx`;

在 windows 操作系统中需要进入 nginx 安装目录根目录下运行 nginx.exe。

## nginx 命令

nginx 的命令语法为：`nginx -s <command>`

如需重启则执行`nginx -s reload`。

windows 操作系统中如果提示 `nginx.exe : 无法将“nginx.exe”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。`则需要指定目录，即 `./nginx.exe -s reload`

其他可执行命令包括：

- stop：快速关机
- quit：优雅关机
- reload：重新加载配置文件
- reopen：重新打开日志文件
