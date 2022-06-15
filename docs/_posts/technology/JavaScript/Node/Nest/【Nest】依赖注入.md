---
date: 2021-09-06 17:33:58
title: 【Nest】依赖注入
tags:
  - JavaScript
  - Node
  - Nest
---

Nest 的依赖注入用法与 Angular 一样。

用 @Injectable() 装饰器定义一个服务，然后在需要的地方注入。

Nest 的服务要想在 controller 中使用**必须先注册**，即将服务添加到 @Module() 装饰器的 providers 数组中。

## 使用方法

### 定义服务

- app.service.ts

```js
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
}
```

### 注册服务

- app.module.ts

```js
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

### 注入服务

- app.controller.ts

```js
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service'

@Controller('cats')
export class AppController {

  constructor(
    public appSer: AppService
  ) { }

  count: number = 0

  @Get()
  findAll() {
    return this.appSer.getHello();
  }
}
```
