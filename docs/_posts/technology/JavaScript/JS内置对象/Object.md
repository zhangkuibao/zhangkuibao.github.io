---
date: 2021-09-08 18:04:46
title: Object
tags:
  - JavaScript
  - JS内置对象
---

## 静态方法

### Object.assign(target, ...sources)

将所有**可枚举属性**的值从一个或多个源对象分配到 `target` ，返回合并后的 `target`

1. 同名属性后面覆盖前面
2. 只会拷贝源对象自身的并且**可枚举**的属性到目标对象
3. 方法使用源对象的`[[Get]]`和目标对象的`[[Set]]`，所以它会调用相关 `getter` 和 `setter`。
4. 浅拷贝
5. 无法拷贝继承属性和不可枚举属性

### Object.defineProperty(obj, prop, descriptor)

修改对象的某个属性的描述符，属性不存在时创建，省略某些字段时会使用默认值

#### descrioptor 可配置属性

1. configurable，能否修改该属性的描述符，默认为 `false`
2. enumerable，能否被枚举，默认 false
3. value，该属性的值，默认为 `undefined`
4. writable，值可否被修改
5. get，属性的 getter
6. set，属性的 setter

#### 继承属性

如果访问者的属性是被继承的，它的 `get` 和 `set` 方法会在子对象的属性被访问或者修改时被调用。如果这些方法用一个变量存值，该值会被所有对象共享

```js
function myclass() {}

var value;
Object.defineProperty(myclass.prototype, "x", {
  get() {
    return value;
  },
  set(x) {
    value = x;
  },
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x); // 1
```

### Object.defineProperties(obj, props)

同上，可同时修改对象的多个属性，可配置属性与 `Object.defineProperty()` 一致

```js
var obj = {};
Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
  },
  property2: {
    value: "Hello",
    writable: false,
  },
  // etc. etc.
});
```

### Object.create(proto, [propertiesObject])

可在创建对象时设置属性及属性的属性描述符

```js
Object.create(
  {},
  {
    property1: {
      value: true,
      writable: true,
    },
    property2: {
      value: "Hello",
      writable: false,
    },
    // etc. etc.
  }
);
```

### Object.freeze(obj)

冻结对象，冻结后的对象无法被修改，包括添加、删除属性，不能修改属性的属性描述符，不能修改原型

返回值为**源对象**

如果一个属性的值是个对象，则这个对象中的属性是可以修改的，除非它也是个冻结对象

### Object.isFrozen(obj)

判断对象是否冻结

### Object.getOwnPropertyDescriptor(obj, prop)

获取对象指定属性的属性描述符状态

返回值为对象。没有 `getter` 和 `setter` 时返回对象上没有这两个属性

```js
Object.getOwnPropertyDescriptor({ a: 1 }, "a");
/*{
    configurable: true
    enumerable: true
    value: 1
    writable: true
}*/
```

### Object.entries(obj)

获取一个给定对象自身**可枚举属性**的键值对数组

返回值为二维数组

```js
Object.entries({
  age: 1,
  name: 2,
});
// [[age,1],['name',1]]
```

### Object.getOwnPropertyNames(obj)

返回对象**自身**的属性名数组（包括不可枚举属性），不包括原型链上的属性

### Object.keys(obj)

返回对象**自身**属性名数组（不包括不可枚举属性），不包括原型链上的属性

### Object.values(obj)

返回对象**自身**所有可枚举属性值的数组

### Object.getPrototypeOf(obj)

获取对象的原型对象

### Object.setPrototypeOf(obj, prototype)

设置对象原型

---

### 不常用但感觉有用的方法

1. `Object.getOwnPropertySymbols(obj)` 获取对象自身所有 `Symbol` 属性的数组

### 其他方法

1. `Object.is(value1, value2)` 见《相似性判断》文章
2. `Object.prototype.valueOf()` 和`Object.prototype.toString()` 见 《关于 valueOf 方法和 toString 方法》文章

## 原型方法

### obj.hasOwnProperty(prop)

判断对象**自身**是否有指定的属性

### obj.propertyIsEnumerable(prop)

判断对象上的指定属性是否可枚举

### obj1.isPrototypeOf(obj2)

判断 obj1 是否存在于 obj2 的原型链上

## 对象的状态

只有自身的原始属性值受影响，引用类型值不受影响

### 扩展

不可扩展的对象不能添加新属性，但是可以**修改和删除**已有属性

用 `Object.preventExtensions(obj)` 将对象变为不可扩展，`Object.isExtensible(obj)` 方法判断对象是否可扩展

### 密封

被密封的对象不能添加和删除属性，可以**修改**已有属性

用 `Object.seal(obj)` 将对象变为密封，`Object.isSealed(obj)` 方法判断对象是否密封

### 冻结

被冻结的对象不能做任何操作

用 `Object.freeze(obj)` 将对象冻结，`Object.isFrozen(obj)` 方法判断对象是否冻结
