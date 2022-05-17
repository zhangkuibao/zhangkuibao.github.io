<author-info date="1652779228833"></author-info>

# Mongoose 使用手册

除第一部分 `基础示例` 代码可完整运行外，其他部分代码只记录每个操作的关键代码，不可直接执行。

## 基础示例

```js
import mongoose from "mongoose";

// 与数据库建立连接
mongoose.connect("mongodb://localhost:27017/test");

// 创建 Schema（模式）
const kittySchema = new mongoose.Schema({
  name: String,
});

// 为 Schema（模式）添加成员方法，该 Schema 的所有 document（文档）都会继承该方法
kittySchema.methods.speak = function () {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};

// 为 Schema（模式）添加静态方法，该 Schema 的所有 Model 都拥有该静态方法
kittySchema.statics.showAllDocs = async function () {
  const all = await this.find();
  console.log(999, all);
};

// 将 Schema（模式） 编译为 Model（模型），需注意不传第三个参数时 mongoose 会将 collection 名称设定为一参的复数形式
const Kitten = mongoose.model("Kitten", kittySchema, "Kitten");

// Model 调用静态方法
Kitten.showAllDocs();

// 创建一个 document（文档）
const silence = new Kitten({ name: "Silence" });

// document 调用 speak 成员方法
silence.speak();

// 将 document 保存到数据库中
silence.save();
```

## 连接数据库

调用 `mongoose.connect(uri, options)` 方法让 `mongoose` 连接到数据库。

`mongoose` 会缓存操作，在连接到数据库之后才进行实际操作。

第一次链接数据库失败时将发出一个 `error` 事件，不会尝试重新连接，重连的逻辑需要自己实现。

### 选项

[完整选项](https://mongoosejs.com/docs/connections.html#options)

```js
mongoose.connect("mongodb://localhost:27017", {
  user: "", // 用户名
  pass: "", // 密码
  autoIndex: true, // 是否自动构建索引，生产环境应该设置为 false
  dbName: "", // 指定要连接的数据库名称
});
```

## 数据库操作

### 插入

```js
// 插入多条数据
await Kitten.insertMany([
  {
    name: "zhangkb",
  },
  {
    name: "ny",
  },
]); // 返回插入的文档
```

### 查询

```js
const Kitten = mongoose.model("Kitten", kittySchema);

// 查询所有文档，find() 方法总是返回数组，未查询到数据时为空数组
await Kitten.find();

// 条件查询
await Kitten.find({
  name: "zhangkb",
  age: 19,
});

// 用 where 多条件查询，与上面的方法等价
await Kitten.find({
  name: "zhangkb",
}).where({
  age: 19,
});

// 找到第一个匹配的文档，成功则返回对应文档，否则返回null
await Kitten.findOne({
  name: "zhangkb",
});

// 找到第一个匹配的文档并删除它，成功则返回对应文档，否则返回null
await Kitten.findOneAndDelete({
  name: "zhangkb",
});

// 找到第一个匹配的文档并更新它，成功则返回对应文档，否则返回null
await Kitten.findOneAndUpdate({
  name: "zhangkb",
});

// 根据 id 查找
await Kitten.findById(id); // doc || null

// 根据 id 查找并删除文档，成功则返回对应文档，否则返回null
await Kitten.findByIdAndDelete(id);

// 根据 id 查找并修改文档，成功则返回对应文档，否则返回null
await Kitten.findByIdAndUpdate(id, data);
```

### 删除

```js
const Kitten = mongoose.model("Kitten", kittySchema);

// 删除多个文档，参数为查询对象
await Kitten.deleteOne({
  name: "zhangkb",
}); // returns {deletedCount: x}

// 删除一个文档
await Kitten.deleteOne({
  name: "zhangkb",
}); // returns {deletedCount: x}
```

### 修改

```js
const Kitten = mongoose.model("Kitten", kittySchema);

// 更新指定文档
await Kitten.updateOne(
  {
    name: "zhangkb",
  },
  { name: "T-90" }
);

// 替换指定文档
await Kitten.replaceOne({ name: "zhangkb" }, { name: "Jean-Luc Picard" });
```
