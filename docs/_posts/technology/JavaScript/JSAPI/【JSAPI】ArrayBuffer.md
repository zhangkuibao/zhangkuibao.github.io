---
title: 【JSAPI】ArrayBuffer
tags:
  - JavaScript
  - JSAPI
---

为了让 JavaScript 与显卡之间进行大量的、实时的数据交换，它们之间的数据通信必须是二进制，而不能是传统的文本格式，ArrayBuffer 就是在这样的背景下 诞生的。

## ArrayBuffer

ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区，它是 JavaScript 操作二进制数据的一个接口。

不能直接操作 ArrayBuffer 的内容，而是要通过类型化数组（TypedArray）或 DataView 对象来操作。

### 构造函数

> new ArrayBuffer(length)

ArrayBuffer 构造函数用来创建一个指定字节长度的 ArrayBuffer 对象，它分配了一段可以存放数据的连续内存区域，参数为内存大小，单位为字节。

- 返回值：返回一个指定大小的 ArrayBuffer 对象， 其内容被初始化为 0。

- 异常：如果 length 大于 Number.MAX_SAFE_INTEGER（>= 2 \*\* 53）或为负数，则抛出一个 RangeError 异常。

需要值得注意的是如果要分配的内存区域很大，有可能分配失败（因为没有那么多的连续空余内存），所以有必要检查是否分配成功。

```js
var bf = new ArrayBuffer(40); // 生成了字节长度为40的内存区域
//通过提供的 byteLength 属性返回分配字节的长度
console.log(bf.byteLength); // 40
```

### 属性

- ArrayBuffer.length

  ArrayBuffer 构造函数的 length 属性，其值为 1。

- ArrayBuffer.prototype.byteLength

  只读属性，表示 ArrayBuffer 的 byte 的大小，在 ArrayBuffer 构造完成时生成，不可改变。

### 静态方法

- ArrayBuffer.isView(arg)

  如果参数是 ArrayBuffer 的视图实例则返回 true，例如 类型数组对象 或 DataView 对象；否则返回 false。

  ```js
  let data = new ArrayBuffer();
  let view = new DataView(data);
  ArrayBuffer.isView(view); // true
  ```

### 原型方法

- ArrayBuffer.ptotorype.slcie(beginIndex, endIndex)

  slice()方法返回一个新的 ArrayBuffer ，它的内容是这个 ArrayBuffer 的字节副本，从 begin（包括），到 end（不包括）。

## TypedArray

一个类型化数组（TypedArray）对象描述了一个底层的二进制数据缓冲区（binary data buffer）的一个类数组视图（view）。

TypedArray 并不是一个全局属性或是构造函数，它代表了一系列不同的全局属性和构造函数。

1 byte = 8 bit（字节），如 Int8Array 每一位字节数为 1，Int16Array 每一位字节数为 2。

TypedArray 其实就是普通数组，语法没有什么不同，只不过它直接针对内存进行操作，而且每个成员都有确定的数据类型。所以，TypedArray 就被叫做“类型化数组”。

用 TypedArray 建立了视图以后，就可以进行各种操作了。

### 具体的 TypedArray 类型

| 类型                                                                                                                      | 单个元素值的范围                | 大小(bytes) | 描述                                              | Web IDL 类型          |
| :------------------------------------------------------------------------------------------------------------------------ | :------------------------------ | :---------- | :------------------------------------------------ | :-------------------- |
| [`Int8Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)                 | `-128` to `127`                 | 1           | 8 位二进制有符号整数                              | `byte`                |
| [`Uint8Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)               | `0` to `255`                    | 1           | 8 位无符号整数（超出范围后从另一边界循环）        | `octet`               |
| [`Uint8ClampedArray`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray) | `0` to `255`                    | 1           | 8 位无符号整数（超出范围后为边界值）              | `octet`               |
| [`Int16Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)               | `-32768` to `32767`             | 2           | 16 位二进制有符号整数                             | `short`               |
| [`Uint16Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)             | `0` to `65535`                  | 2           | 16 位无符号整数                                   | `unsigned short`      |
| [`Int32Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)               | `-2147483648` to `2147483647`   | 4           | 32 位二进制有符号整数                             | `long`                |
| [`Uint32Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)             | `0` to `4294967295`             | 4           | 32 位无符号整数                                   | `unsigned long`       |
| [`Float32Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)           | `1.2`×`10-38` to `3.4`×`1038`   | 4           | 32 位 IEEE 浮点数（7 位有效数字，如 `1.1234567`） | `unrestricted float`  |
| [`Float64Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)           | `5.0`×`10-324` to `1.8`×`10308` | 8           | 64 位 IEEE 浮点数（16 有效数字，如 `1.123...15`)  | `unrestricted double` |
| [`BigInt64Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array)         | `-263` to `263-1`               | 8           | 64 位二进制有符号整数                             | `bigint`              |
| [`BigUint64Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array)       | `0` to `264-1`                  | 8           | 64 位无符号整数                                   | `bigint`              |

### 语法

TypedArray 并不是可用的构造函数，需要替换成如 Int8Array() 这样的构造函数。

```js
// 下面代码是语法格式，不能直接运行，
new TypedArray(); // ES2017中新增
new TypedArray(length);
new TypedArray(typedArray);
new TypedArray(object);
new TypedArray(buffer [, byteOffset [, length]]);
```

### 参数

- length

  当传入 length 参数时，一个内部的数组缓冲区会被创建在内存中。

  该缓存区的大小（类型化数组中 byteLength 属性的值）是传入的 length 乘以数组中每个元素的字节数。

  每个元素的字节数是由具体的构造函数决定的，比如 Int16Array() 的每个元素的字节数为 2，Int32Array() 的每个元素的字节数为 4。

- TypedArray

  当传入一个任意类型化数组对象作为 typedArray 参数时（比如 Int32Array），typedArray 会被复制到一个新的类型数组中。

  typedArray 中的每个值在被复制到新的数组之前，会被转化为相应类型的构造函数。

  新生成的类型化数组对象将会有跟传入的数组相同的**长度**（即元素数量），比如原来的类型化数组的 length 为 2，那么新生成的数组的 length 也是 2，只是数组中的每一项进行了转化。

- object

  当传入一个 object 作为参数时，就像通过 TypedArray.from() 方法创建一个新的类型化数组一样。

- buffer, byteOffset, length

  创建一个类型化数组视图，可用于呈现传入的 ArrayBuffer 实例。byteOffset 表示起始位置，length 表示要占用的长度。

### 属性

- TypedArray.BYTES_PER_ELEMENT

  返回一个数值，代表不同类型的类型化数组对象中，单个元素的字节大小。

  例如：`new Int8Array().BYTES_PER_ELEMENT === 1`。

- TypedArray.length

  类型化数组中元素的个数，例如 `new Int8Array(3).length === 3`。

- TypedArray.name

  返回一个字符串值，代表当前构造器的名称，例如 "Int8Array"。

  注意此方法为静态方法。

### 方法

- TypedArray.from()

  使用类数组(array-like)或迭代对象创建一个新的类型化数组，与 Array.from() 类似。

- TypedArray.of()

  通过可变数量的参数创建新的类型化数组，与 Array.of() 类似。

### 复合视图

由于 TypedArray 的构造函数可以指定起始位置和长度，所以在同一段内存之中，可以依次存放不同类型的数据。

```js
var buffer = new ArrayBuffer(24);

var idView = new Uint32Array(buffer, 0, 1);
var usernameView = new Uint8Array(buffer, 4, 16);
var amountDueView = new Float32Array(buffer, 20, 1);
```

上面代码将一个 24 字节长度的 ArrayBuffer 对象，分成三个部分：

- 字节 0 到字节 3：1 个 32 位无符号整数
- 字节 4 到字节 19：16 个 8 位整数
- 字节 20 到字节 23：1 个 32 位浮点数

## DataView

DataView 是另一种操作 ArrayBuffer 的对象。

[DataView——MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView)

## 内存分配

关于 ArrayBuffer 的内存分配可以看看这篇文章：[谈谈 ArrayBuffer 吧](https://zhuanlan.zhihu.com/p/133491261)

## 应用

### Canvas

网页 Canvas 元素输出的二进制像素数据，就是类型化数组。

```js
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var imageData = ctx.getImageData(0, 0, 200, 100);
var typedArray = imageData.data;
```

需要注意的是，上面代码的 typedArray 虽然是一个类型化数组，但是它的视图类型是一种针对 Canvas 元素的专有类型 Uint8ClampedArray。

这个视图类型的特点，就是专门针对颜色，把每个字节解读为无符号的 8 位整数，即只能取值 0 ～ 255，而且发生运算的时候自动过滤高位溢出。这为图像处理带来了巨大的方便。

## 参考

[JavaScript 之 ArrayBuffer](https://www.cnblogs.com/copperhaze/p/6149041.html)

[ArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

[TypedArray](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
