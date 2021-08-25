# MongoDB

## MongoDB配置

### 一、下载安装

1. 在官网下载安装包 [MongoDB下载地址](https://www.mongodb.com/download-center/community) 
2. 安装时不要安装图形界面(左下角复选框), 特别慢

### 二、启动服务

假设安装目录为 `E:\mongodb`, `windows` 下的斜杠为 `\`

在 `MongoDB` 安装目录的 `\bin` 目录下执行命令 `mongod --dbpath "e:\mongodb\data"`

### 三、命令行指令

1. `show dbs` 显示所有数据库
2. `db` 显示当前正在使用的数据库
3. `use 要使用的数据库名` 选择使用的数据库
4. `db.getCollectionNames()` 查看当前数据库有哪些表

### 四、其他

1. `--dbpath` 指定数据库地址
2. `\bin\mongod` 是服务端
3. `\bin\mongo` 是客户端
4. 默认端口号为 `27017`
5. 启动客户端: 在 `\bin` 目录下执行 `mongo`
6. [native for mongoDB 中文破解版](http://www.ddooo.com/softdown/130308.htm)


## nodeJS操作

需要先启动 `MongoDB` 服务

### 一、创建数据库

首先创建 `MongoClient` 对象, 然后配置好指定的URL和端口号

```js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/runoob";
 
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  db.close();
});
```

### 二、创建/删除集合(表)

1. 用 `dbs.createCollection()` 方法创建集合, 是 `数据库` 的方法
2. 用 `dbs.drop()` 方法删除集合

```js
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/runoob';
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    var dbs = db.db("runoob"); // 获取数据库
    dbs.createCollection('site', function (err, res) {
        if (err) throw err;
        console.log("创建集合!");
				dbs.collection('site').drop((err,delOK) => {
					if(err) throw err;
					if(delOK) console.log('集合已删除')
					db.close();
				})
    });
});
```

### 三、操作数据库

创建数据库及表, 其他操作均在连接时(`dosomething中`)进行, 后续文档只写具体操作

```js
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbs = db.db("runoob"); // 获取数据库
		var site = dbs.collection("site"); // 获取表
		
		// dosomething...
		
		db.close(); // 关闭数据库
});
```

#### 一）增

1. 使用 `site.insertOne()` 给表添加数据, 是 `表` 的方法

```js
var myobj = { name: "菜鸟教程", url: "www.runoob" }; // 插入一条数据用对象
// 调用集合的 insertOne 方法添加一条数据
site.insertOne(myobj, function(err, res) {
	if (err) throw err;
	console.log("文档插入成功");
	db.close();
});
```

2. 使用 `site.insertMany()` 给表添加多条数据, 是 `表` 的方法

```js
// 插入多条数据用数组
var manyObj =  [
	{ name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
	{ name: 'Google', url: 'https://www.google.com', type: 'en'},
	{ name: 'Facebook', url: 'https://www.google.com', type: 'en'}
 ];
 
 // 调用集合的 insertMany 方法添加多条数据
site.insertMany(manyObj, function(err, res) {
	if (err) throw err;
	
	// res.insertedCount 为插入数据数量
	db.close();
});
```

#### 二）删

1. `deleteOne()` 删除一条数据, 一参为查询条件, 二参为回调函数

```js
var whereStr = {"name":'菜鸟教程'};  // 查询条件
site.deleteOne(whereStr, (err,data) => {})
```

2. `deleteMany()` 删除多条数据, 一参为查询条件, 二参为回调函数

```js
var whereStr = {"name":'菜鸟教程'};  // 查询条件
site.deleteMany(whereStr, (err,res) => {
	// res.result.n 为删除条数
})
```

#### 三）改

1. 使用 `updateOne()` 方法修改一条数据, 一参为查询条件, 二参为修改内容, 三参为回调函数

```js
var whereStr = {"name":'菜鸟教程'};  // 查询条件
var updateStr = {$set: { "url" : "https://www.runoob.com" }}; // 修改内容, 注意数据格式

site.updateOne(whereStr, updateStr, (err,data) => {})
```

2. 使用 `updateMany()` 方法修改多条数据, 一参为查询条件, 二参为修改内容, 三参为回调函数

```js
var whereStr = {"type":'en'};  // 查询条件
var updateStr = {$set: { "url" : "https://www.runoob.com" }}; // 修改内容, 注意数据格式

site.updateMany(whereStr, updateStr, (err,data) => {})
```

#### 四）查

`site.find()`, 按查询条件返回匹配的数据,没有查询条件时返回所有数据, 是 `表` 的方法, 返回 `数据对象`

```js
var whereStr = {"name":"菜鸟教程"}
var data = site.find(whereStr); // 以对象形式设置查询条件, 返回值为数据对象, 需要用toArray方法转为数组
var allData = site.find(); // 不填条件时返回所有数据

data.toArray((err,data) => {console.log(data)}); // find方法的返回值为对象, 该对象有一个toArray方法把数据转换为数组
```

#### 五）排序

`site.find().sort()`, 接收一个参数,规定是升序(1)还是降序(-1), 是 `数据对象` 上的方法

```js
var mysort = { type: 1 }; // 排序参数, 以对象形式传递, 在此为以type为排序参数升序排列

site.find().sort(mysort).toArray((err,data) => {})
```

#### 六）查询分页

1. `site.find().limit()`, 返回指定条数的数据, 接收一个参数,指定返回的条数, 是 `数据对象` 上的方法
2. `site.find().skip()`, 跳过指定条数的数据, 接收一个参数,指定要跳过的条数

```js
site.find().limit(2).toArray((err,data) => {}); // 返回最上面的两条数据

site.find().skip(3).limit(2).toArray((err,data) => {}); // 跳过三条数据, 返回之后的两条数据
```
