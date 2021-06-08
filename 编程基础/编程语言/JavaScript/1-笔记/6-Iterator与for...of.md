## Iterator（遍历器）

遍历器是一种接口，为各种不同的数据结构提供统一的访问机制；任何数据结构只要部署 `Iterator` 接口，就可以用 `for...of` 进行遍历

### 原生具有 Iterator 接口的数据结构

- Array
- Map
- Set
- String
- TypedArray
- 函数的 arguments 对象
- NodeList 对象

### object 为什么没有 Iterator 接口

`object` 属性的遍历顺序是不确定的，需要开发者自己定义。本质上，遍历器是一种线性处理，对于任何非线性的数据结构，部署遍历器接口，就等于部署一种线性转换。

### 给其他数据结构添加 Iterator 接口

#### 对象

```js
let obj = {
  a: 1,
  b: 2,
  [Symbol.iterator]() {
    let keys = Object.keys(this);
    let index = 0;
    return {
      next: function () {
        return index < keys.length
          ? {
              value: keys[index++],
              done: false,
            }
          : {
              value: undefined,
              done: true,
            };
      },
    };
  },
};
```

#### 类数组

对于类似数组的对象（存在数值键名和 length 属性），`Symbol.iterator` 可以直接引用数组的 `Iterator` 接口

```js
let obj = {
  0: "a",
  1: "b",
  length: "2",
  [Symbol.iterator]: [][Symbol.iterator],
};
```

## for...of

用 `for...of` 遍历数据时会自动去寻找该数据的 `Iterator` 接口
