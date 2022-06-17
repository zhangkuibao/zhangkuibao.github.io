---
date: 2022-05-17 17:41:19
title: 【Mongoose】Mongoose概念
tags:
  - Node
  - Mongoose
---

| 名称       | 概念 | 作用                                           | 官方解释                                                                                        |
| ---------- | ---- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `Schema`   | 模式 | 定义文档的数据结构和属性类型                   | 每个 `schema` 都会映射到一个 `MongoDB collection` ，并定义这个 `collection` 里的文档的构成      |
| `Model`    | 模型 | 一个 `Model` 等同于一个 `collection`           | `Models` 是从 `Schema` 编译而来的构造函数，`Models` 的实例是 `documents`                        |
| `document` | 文档 | 一个 `document` 就是 `collection` 中的一条数据 | `mongoose` 文档表示与存储在 `MongoDB` 中的文档的一对一映射。每个文档都是其 `Model` 的一个实例。 |

## Schema

`Schema` 用来定义文档的结构，需要用 `mongoose.model('Test', schema)` 将 `Schema` 编译 为 `Model`。

```js
const schema = new Schema({
  living: Boolean,
  age: { type: Number, min: 18, max: 65, default: 10 },
  array: [],
  ofString: [String],
  ofArrayOfNumbers: [[Number]],
  mapOfString: {
    type: Map,
    of: String,
  },
});
```

**避免使用箭头函数声明方法**。

### SchemaType 选项

[完整选项](https://mongoosejs.com/docs/schematypes.html#schematype-options)

数组拥有隐含的默认值：`[]`（空数组），可以设置 `default: undefined` 来将默认值设为 `undefined`。

```js
const schema = new Schema({
  n: {
    type: String, // 类型
    required: true, // 是否必填
    alias: "name", // 别名
    timestamps: false, // 是否自动添加时间戳：createdAt and updatedAt
  },
});
```

#### timestamps 时间戳

`timestamps` 属性设置为 `true` 后会自动在文档中添加两个 `Date` 类型的属性，`createdAt` 为创建时的时间戳，`updatedAt` 为最后一次更新的时间戳。

会修改 `updatedAt` 的方法：`save()` 、`updateOne()` 、`updateMany()` 、`findOneAndUpdate()` 、`update()` 、`replaceOne()` 、`bulkWrite()`。

这些方法都可以通过设置 `timestamps: false` 不修改 `updatedAt`。

### 实例方法

定义在 `Schema` 上的实例方法可以在 `document` 上调用。

```js
const animalSchema = new Schema({ name: String, type: String });
animalSchema.methods.findSimilarTypes = function (cb) {
  return mongoose.model("Animal").find({ type: this.type }, cb);
};
const Animal = mongoose.model("Animal", animalSchema);
const dog = new Animal({ type: "dog" });
dog.findSimilarTypes((err, dogs) => {
  console.log(dogs); // woof
});
```

### 静态方法

定义在 `Schema` 上的静态方法可以在 `Model` 上调用。

```js
const animalSchema = new Schema({ name: String, type: String });
// 第一种定义方式
animalSchema.statics.findByName = function (name) {
  return this.find({ name: new RegExp(name, "i") });
};
// 第二种定义方式
animalSchema.static("findByBreed", function (breed) {
  return this.find({ breed });
});
const Animal = mongoose.model("Animal", animalSchema);
Animal.findByName();
```

### 查询助手

用于扩展 `mongoose` 的链式查询。

```js
const animalSchema = new Schema({ name: String, type: String });
animalSchema.query.byName = function (name) {
  return this.where({ name: new RegExp(name, "i") });
};
const Animal = mongoose.model("Animal", animalSchema);
Animal.find()
  .byName("fido")
  .exec((err, animals) => {
    console.log(animals);
  });
```

### 虚拟数据

`Virtuals` 是可以获取和设置但不会持久保存到 `MongoDB` 的文档属性。

```js
const personSchema = new Schema({
  name: {
    first: String,
    last: String,
  },
});
personSchema
  .virtual("fullName")
  .get(function () {
    return this.name.first + " " + this.name.last;
  })
  .set(function (v) {
    this.name.first = v.substr(0, v.indexOf(" "));
    this.name.last = v.substr(v.indexOf(" ") + 1);
  });

axl.fullName = "William Rose"; // Now `axl.name.first` is "William"
```

### 别名

为属性设置别名，在开发时保证可读性，同时减少数据库中存储数据的 `size`。

```js
const personSchema = new Schema({
  n: {
    type: String,
    // 现在，访问'name'将获得'n'的值，设置'name'将设置'n'的值`
    alias: "name",
  },
});
```

### 选项

[完整选项](https://mongoosejs.com/docs/guide.html#options)

#### collection

`mongoose` 默认将 `Model` 名称作为 `collection` 名称，这种默认行为会将名称修改为**复数**且**小写**。

通过 `Schema` 的 `collection` 选项可以指定 `collection`，设置后 `mongoose.model()` 一参的名称无效。

```js
const kittySchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    collection: "kitty",
  }
);
```

## Model

一个 `Model` 等同于一个 `collection`。调用 `mongoose.model()` 生成一个模型的同时 `mongoose` 会同步在数据库中创建一个 `collection`。

需注意 `mongoose.model("Kitten", kittySchema)` 方法不传第三个参数时 `mongoose` 会将 `collection` 名称设定为一参的**复数形式**，并且生成的 `collection` 名称都是**小写**。

`.model()` 函数会复制 `schema`。在调用 `.model()` 之前确保你已经添加了所有你想要的东西到 `schema`，包括钩子。

```js
const Kitten = mongoose.model("Kitten", kittySchema);
// collection：kittens
const Kitten = mongoose.model("Ny", kittySchema);
// collection：nies
const Kitten = mongoose.model("Kitten", kittySchema, "Kitten");
// collection：kitten
```
