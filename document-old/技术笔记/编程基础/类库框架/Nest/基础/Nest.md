<author-info date="1630999122182"></author-info>

# 简介

## 创建一个 Nest 应用

- main.ts

```js
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

## 对 Nest 的理解

管道、守卫、中间件、拦截器都是用 @Injectable() 装饰的服务，只是根据职能不同需要实现不同的接口。
