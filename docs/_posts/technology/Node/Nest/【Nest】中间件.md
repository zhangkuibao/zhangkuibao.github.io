---
date: 2021-09-06 18:13:59
title: 【Nest】中间件
tags:
  - Node
  - Nest
---

中间件是在**路由处理程序之前**调用的函数，路由处理程序相当于当前请求-响应周期的最后一个中间件。

如果当前的中间件函数没有结束请求-响应周期，它必须调用 next() 将控制传递给下一个中间件函数。否则，请求将被挂起。

Nest 中间件实际上等价于 Express 中间件。

包含中间件的模块必须实现 NestModule 接口。

## 定义中间件

- logger.middleware.ts

```js
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Request...");
    next();
  }
}
```

## 使用中间件

中间件在 module 上注册，可以配置应用该中间件的路由、请求方式。

- app.module.ts

```js
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from "@nestjs/common";
import { AppController } from "./app.controller";
import { LoggerMiddleware } from "./middleware/login.middleware";

@Module({
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({
      path: "cats",
      method: RequestMethod.GET,
    });
  }
}
```

## 排除路由

使用 exclude() 来排除指定路由。

- app.module.ts

```js
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from "@nestjs/common";
import { AppController } from "./app.controller";
import { LoggerMiddleware } from "./middleware/login.middleware";

@Module({
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: "cats", method: RequestMethod.GET },
        { path: "cats", method: RequestMethod.POST },
        "cats/(.*)"
      )
      .forRoutes(CatsController);
  }
}
```

## 函数式中间件

对于没有成员，没有额外的方法，没有依赖关系的简单中间件，可以直接使用一个简单函数。

- logger.middleware.ts

```js
export function logger(req, res, next) {
  console.log(`Request...`);
  next();
}
```

- app.module.ts

```js
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from "@nestjs/common";
import { AppController } from "./app.controller";
import { logger } from "./middleware/login.middleware";

@Module({
  imports: [],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes({
      path: "cats",
      method: RequestMethod.GET,
    });
  }
}
```

## 全局中间件

如果我们想一次性将中间件绑定到每个注册路由，我们可以使用由 INestApplication 实例提供的 use()方法：

- main.ts

```js
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const app = await NestFactory.create(AppModule);
app.use(logger);
await app.listen(3000);
```
