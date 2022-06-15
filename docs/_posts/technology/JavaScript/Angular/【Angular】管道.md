---
date: 2021-09-09 09:41:16
title: 【Angular】管道
tags:
  - JavaScript
  - Angular
---

## 语法

```html
<p>{{ name | UpperCasePipe }}</p>
```

- 管道传参

紧跟在管道名称（ currency ）后面的是冒号（:）和参数值（'EUR'）。

多参时用冒号分隔

```html
<p>{{ price | currency:'EUR' }}</p>
```

- 串联管道

多个管道串联时从左往右执行

```html
<p>{{ birthday | date | uppercase}}</p>
```

## 自定义管道

- 创建管道文件 `exponential-strength.pipe.ts`

```js
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "exponentialStrength" })
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }
}
```

- 使用管道

```html
<p>{{ 2 | exponentialStrength: 10 }}</p>
```

## 引用类型值

> 默认情况下管道会定义成**纯的(pure)**，这样 `Angular` 只有在检测到**输入值发生了纯变更**时才会执行该管道。纯变更是对原始输入值（比如 String、Number、Boolean 或 Symbol ）的变更，或是对**对象引用**的变更（比如 Date、Array、Function、Object）。

- 用新对象替换旧对象
  修改对象的 **引用** 来触发变更检测

- 使用**非纯**的管道

在装饰器中将 `pure` 属性设置为 `false` ，对象内的属性发生变化时就会触发管道执行

```js
@Pipe({
  name: 'flyingHeroesImpure',
  pure: false
})
```
