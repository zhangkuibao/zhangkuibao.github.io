---
date: 2021-09-09 09:35:44
title: 【TypeScript】函数
tags:
  - JavaScript
  - TypeScript
---

## 摘要

1. 定义函数类型包括定义函数参数类型和返回值类型。
2. 给函数提供多个函数类型定义来进行函数重载。

## 定义函数类型

- 定义函数的参数类型和返回值类型

```js
let myAdd = (x: number): number => x;
let myAdd2: (x: number) => number = (x) => x;
```

## 重载

为同一个函数提供多个函数类型定义来进行函数重载。

```js
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
```
