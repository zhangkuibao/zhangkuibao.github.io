---
date: 2021-09-07 14:27:16
title: 【Nest】管道
tags:
  - Node
  - Nest
---

管道实际上就是实现了 PipeTransform 接口的服务。

管道有两个类型:

- 转换：管道将输入数据转换为所需的数据输出。

- 验证：对输入数据进行验证，如果验证成功继续传递; 验证失败则抛出异常。

## 为什么要用管道

在下面例子中，要确保 this.catsService.create() 方法正确执行，必须保证其参数符合方法的要求，这时就需要对参数进行验证。

验证方法写在路由处理程序中会打破单个责任原则（SRP）；创建一个验证器类的话必须在每次方法开始时调用验证器；验证中间件无法做到整个应用程序通用。

这种情况下，应该考虑使用管道。

- cats.controller.ts

```js
class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

@Controller()
export class AppController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
```

## 使用管道

直接在参数装饰器中注册，管道处理函数 transform 第一个参数就是整个参数数据，如下就是整个 query 路由参数对象。

- app.controller.ts

```js
import { Controller, All, Query, Param } from "@nestjs/common";
import { ValidationPipe } from "./pipe/validate.pipe";
@Controller()
export class AppController {
  @All()
  findAll(@Query(ValidationPipe) query) {
    return query;
  }
}
```

如果指定了具体属性则管道接收这个具体参数值，如下只接收 query.name。

- app.controller.ts

```js
@All()
findAll(@Query('name', ValidationPipe) name) {
  return name;
}
```

## 转换管道

在管道中完成数据转换，返回值会覆盖原本的值。

- validate.pipe.ts

```js
import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common";

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
```

## 验证管道

在管道中验证数据，如果数据不符合预期直接抛出异常，后续的程序不会执行。

```js
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
} from "@nestjs/common";

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new HttpException("bad request", 400);
    }
    return value;
  }
}
```
