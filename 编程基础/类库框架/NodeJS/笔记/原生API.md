# API

## 一、Buffer（二进制数据块）

`NodeJs` 提供一个与 `String` 对等的全局构造函数 `Buffer` 来提供对二进制数据的操作

`String` 字符串是只读的, 对字符串的修改得到的都是一个新的字符串, 对 `Buffer` 的操作类似c语言的指针

1. 构造一个二进制数据

`var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f])`

2. 操作与 `string` 类似但不同

获取字节长度 `new Buffer([0x68, 0x65]).length`

获取指定位字节 `new Buffer([0x68, 0x65])[1]]`

以指定编码方式转为字符串 `new Buffer([0x68, 0x65]).toString('utf-8')`

slice方法返回的不是新的Buffer对象, 而是原数据的引用

拷贝一份 `Buffer`

```js
var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
var dup = new Buffer(bin.length);

bin.copy(dup);
```

## 二、Stream（数据流）

`Stream` 基于事件机制工作, 所有 `Stream` 实例都继承与 `EventEmitter`



## 三、process

process 用于感知和控制NodeJS自身进程的方方面面

1. `process.argv` 

作用: 获取命令行参数, 一二位固定为 `执行程序路径` 和 `主模块文件路径`, 第一个命令行参数从 `argv[2]` 开始

示例: `const params = process.argv.slice(2)`

2. `process.exit()`

作用: 退出程序并指定状态码,参数为状态码

示例: `process.exit(1)`