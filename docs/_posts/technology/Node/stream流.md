---
date: 2021-12-07 15:25:49
title: Stream 流
tags:
  - myGit
  - learning-Notes
  - document
  - technology
  - Node
---

在 `unix` 中，我们可以使用管道符号 `|` 来实现流，在 `node` 中则是 `stream` 模块。

在 `node` 中，流可以帮助我们将事情的重点分为几份，因为使用流可以帮助我们将实现接口的部分分割成一些连续的接口，这些接口都是可重用的。接着，你可以将一个流的输出口接到另一个流的输入口，然后使用使用一些库来对流实现高级别的控制。

<!-- 在 `node` 中，一共有四种类型的流：`readable`、`writable`、`transform`、`duplex`。 -->

## object mode （对象模式）

`Node.js API` 创建的所有流都只对字符串和 `Buffer`（或 `Uint8Array`）对象进行操作。 但是，流的实现可以使用其他类型的 `JavaScript` 值（除了 `null`，它在流中具有特殊用途）。 这样的流被认为是在**对象模式**下运行的。

流的实例在创建流时使用 `objectMode` 选项切换到对象模式。 尝试将现有的流切换到对象模式是不安全的。

## 缓存

`Writable` 和 `Readable` 流都将数据存储在内部缓存区中。

调用 `stream.push(chunk)` 时，数据缓存在 `Readable` 流中。 如果流的消费者没有调用 `stream.read()`，则数据会一直驻留在内部队列中，直到被消费。

`stream API` 的一个关键目标，是将数据缓存限制在可接受的水平，以便不同速度的来源和目标不会压倒可用内存。

`Duplex` 和 `Transform` 流都是 `Readable` 和 `Writable`，因此每个流都维护两个独立的内部缓存区，用于读取和写入。

可以使用 `writable.writableBuffer` 或 `readable.readableBuffer` 检索内部的缓存区。

### highWaterMark 最大缓存阈值

可能缓存的数据量取决于传给流的构造函数的 `highWaterMark` 选项。

对于普通的流，`highWaterMark` 选项指定字节的总数。 对于在对象模式下操作的流，`highWaterMark` 指定对象的总数。

一旦内部读取缓存区的总大小达到 `highWaterMark` 指定的阈值，流将停止调用内部的用于填充读取缓存区 `readable._read()` 方法。

`highWaterMark` 选项是阈值，而不是限制：它规定了流在停止请求更多数据之前缓存的数据量。 它通常不强制执行严格的内存限制。 特定的流实现可能会选择实施更严格的限制，但这样做是可选的。

## Writable 可写流

可写流是数据写入目标的抽象。

如下代码就创建了一个可写流，所有写入 `write` 的数据都会被保存到 `file.txt.gz` 文件中。

```js
let write = fs.createWriteStream("file.txt.gz");
```

### `drain` 事件

如果对 `stream.write(chunk)` 的调用返回 `false`，则 `drain` 事件将在可以继续将数据写入流时触发。

### writable.write(chunk[, encoding][, callback])

- chunk `<string> | <Buffer> | <Uint8Array> | <any>` 可选的要写入的数据。

  对于不在对象模式下操作的流，chunk 必须是字符串、Buffer 或 Uint8Array。 对于对象模式的流，chunk 可以是除 null 之外的任何 JavaScript 值。

- encoding `<string>` chunk 为字符串时的编码。

- callback `<Function>` 当刷新此数据块时的回调。

- 返回: `<boolean>` 如果流希望调用代码在继续写入其他数据之前等待 'drain' 事件被触发，则为 `false`；否则为 `true`。

`writable.write()` 方法将一些数据写入流，并在数据完全处理后调用提供的 `callback`。

如果在接纳 `chunk` 后，内部缓存区小于 `highWaterMark` 阈值，则返回值为 `true`。

当流没有排空时，对 `write()` 的调用将缓存 `chunk`，并返回 `false`。此时仍然可以进行写入操作，但是由于 `node` 会缓存所有写入的数据块，可能导致高内存占用，如果缓存一直没有被读取则内存一直无法被释放。当缓存达到最大内存使用量时它将无条件终止。

推荐的操作是当 `write()` 返回 `false` 时等待 `drain` 事件触发后再进行写入：

```js
function write(data, cb) {
  if (!stream.write(data)) {
    stream.once("drain", cb);
  } else {
    process.nextTick(cb);
  }
}

// 在执行任何其他写入之前等待回调被调用。
write("hello", () => {
  console.log("Write completed, do more writes now.");
  write("world");
});
```

### writable.end([chunk[, encoding]][, callback])

- chunk `<string> | <Buffer> | <Uint8Array> | <any>` 可选的要写入的数据。

  对于不在对象模式下操作的流，chunk 必须是字符串、Buffer 或 Uint8Array。 对于对象模式的流，chunk 可以是除 null 之外的任何 JavaScript 值。

- encoding `<string>` chunk 为字符串时的编码。

- callback `<Function>` 流结束时的回调。

调用 `writable.end()` 方法表示不再有数据写入 `Writable`。 可选的 `chunk` 和 `encoding` 参数允许在关闭流之前立即写入最后一个额外的数据块。

### writable.setDefaultEncoding(encoding)

为 `Writable` 流设置默认的 `encoding`。

### writable.writable

该值为 `true` 表示流没有被销毁、出错或结束。

## Readable 可读流

我们可以从一个可读流中读取数据。

如下代码创建了一个 `file.txt` 文件的可写流，当 `read` 被消费时可以读取到 `file.txt` 的内容。

```js
const read = fs.createReadStream("file.txt");
```

### Readable 的读取模式

`Readable` 流有两种读取模式：**流动**和**暂停**。

- 在流动模式下，数据会自动从底层系统读取，并通过 `EventEmitter` 接口使用事件尽快提供给应用程序。

- 在暂停模式下，必须显式调用 `stream.read()` 方法以从流中读取数据块。

所有的 `Readable` 流都以暂停模式开始，但可以通过以下方式之一切换到流动模式：

- 添加 `data` 事件句柄（监听 `data` 事件）。

- 调用 `stream.resume()` 方法。

- 调用 `stream.pipe()` 方法将数据发送到 `Writable`。

`Readable` 可以使用以下方法之一切换回暂停模式：

- 如果没有管道目标，则通过调用 `stream.pause()` 方法。

- 如果有管道目标，则删除所有管道目标。 可以通过调用 `stream.unpipe()` 方法删除多个管道目标。

在提供消费或忽略该数据的机制之前，`Readable` 不会产生数据。

如果 `Readable` 处于流动模式并且数据没有被消费时，数据将会丢失。

### Readable 的三种状态

在任何给定的时间点，每个 `Readable` 都处于三种可能的状态之一：

- `readable.readableFlowing === null` 没有消费者，不产生数据。

- `readable.readableFlowing === false` 处于暂停模式。

- `readable.readableFlowing === true` 处于流动模式。

### `data` 事件

每当流将数据块的所有权移交给消费者时，则会触发 `data` 事件。 如：调用 `readable.pipe()`、`readable.resume()`、调用 `readable.read()` 方法并且可以返回数据块时。

将 `data` 事件监听器绑定到尚未**显式暂停的流**，则会将流切换到流动模式。 数据将在可用时立即传入。

如果使用 `readable.setEncoding()` 方法为流指定了默认编码，则监听器回调将把数据块作为字符串传入；否则数据将作为 `Buffer` 传入。

```js
const readable = getReadableStreamSomehow();
readable.on("data", (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});
```

### `end` 事件

当流中的数据被消费完时触发。

### readable.pause()

退出流动模式，停止触发 `data` 事件。

此后任何可用的数据都将保留在内部缓存区中。

如果有 `readable` 事件监听器，则 `readable.pause()` 方法不起作用。

### readable.resume()

将流切换到流动模式，恢复触发 `data` 事件。

`readable.resume()` 方法可用于完全地消费流中的数据，而无需实际处理任何数据：

```js
getReadableStreamSomehow()
  .resume()
  .on("end", () => {
    console.log("Reached the end, but did not read anything.");
  });
```

如果有 `readable` 事件监听器，则 `readable.resume()` 方法不起作用。

### readable.pipe(destination[, options])

- destination `<stream.Writable>` 写入数据的目标。
- options `<Object>` 管道选项。
  - end `<boolean>` 当读取结束时结束写入。 默认值: true。
- 返回: `<stream.Writable>` 目标，如果它是 Duplex 或 Transform 流，则允许使用管道链。

`readable.pipe()` 方法会将 `readable` 切换到流动模式。

`readable.pipe()` 接受一个**可读的流**并将数据输出到一个**可写的流**中。

**如果 `Readable` 流在处理过程中触发错误，此时 `Writable` 目标不会自动关闭，需要手动关闭每个流以防止内存泄漏。**

### readable.unpipe([destination])

- destination `<stream.Writable>` 取消指定流。

`readable.unpipe()` 方法分离先前使用 `stream.pipe()` 方法绑定的 `Writable` 流。

### readable.read([size])

- size `<number>` 指定要读取的数据量，对象模式下无效（固定返回一个条目），必须小于或等于 `1 GiB`，未指定时返回内部缓存区中的所有数据。

- 返回: `<string> | <Buffer> | <null> | <any>`。

`readable.read()` 方法从**内部缓存区**中取出一些数据并返回，有数据时返回数据并触发 `data` 事件；缓存中没有可读数据时返回 `null`，读完所有数据后触发 `end` 事件。

`readable.read()` 方法应该只在处于暂停模式的 `Readable` 流上调用。 在流动模式下，会自动调用 `readable.read()`，直到内部缓存区完全排空。

`readable.read()` 返回的数据块不是串联的，可能会出现已缓存的内容都已被消费但是还有更多数据尚未被缓存的情况。

因此，要从 `readable` 读取文件的全部内容，必须跨越多个 `readable` 事件来收集块：

```js
const chunks = [];

readable.on("readable", () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on("end", () => {
  const content = chunks.join("");
});
```

### readable.push(chunk[, encoding])

- chunk `<Buffer> | <Uint8Array> | <string> | <null> | <any>` 要推入读取队列的数据块。

- encoding `<string>` 字符串块的编码。 必须是有效的 `Buffer` 编码，例如 `utf8` 或 `ascii`。

- 返回: `<boolean>` 如果可以继续推送额外的数据块，则为 `true`；否则为 `false`。

`readable.push()` 方法用于将内容推送到内部缓冲区中。 它可以由 `readable._read()` 方法驱动。

`chunk` 为 `null` 时表示流结束 (EOF)，之后不能再写入数据。

### readable.readable

该值为 `true` 表示流没有被销毁、出错或结束。

### readable.readableFlowing

如果流处于流模式，则返回 `true`，否则返回 `false`。

## Duplex（双工流）与 Transform（转换流）

双工流是同时实现 `Readable` 和 `Writable` 接口的流。

转换流是一种双工流。

双工流需要同时实现 `Readable` 和 `Writable`。

## 为什么应该使用流

在 `node` 中，`I/O` 都是异步的，所以在和硬盘以及网络的交互过程中会涉及到传递回调函数的过程。你之前可能会写出这样的代码：

```js
var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  fs.readFile(__dirname + "/data.txt", function (err, data) {
    res.end(data);
  });
  
});
server.listen(8000);
```

上面的这段代码并没有什么问题，但是在每次请求时，我们都会把整个 `data.txt` 文件读入到内存中，然后再把结果返回给客户端，在响应大量用户的并发请求时，程序会消耗大量的内存，这样很可能会造成用户连接缓慢的问题。

其次，上面的代码可能会造成很不好的用户体验，因为用户在接收到任何的内容之前首先需要等待程序将文件内容完全读入到内存中。

所幸的是，(req,res)参数都是流对象，这意味着我们可以使用一种更好的方法来实现上面的需求：

```js
var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  var stream = fs.createReadStream(__dirname + "/data.txt");
  stream.pipe(res);
});
server.listen(8000);
```

在这里，`.pipe()`方法会自动帮助我们监听 `data` 和 `end` 事件。上面的这段代码不仅简洁，而且 `data.txt` 文件中每一小段数据都将源源不断的发送到客户端。

## 参考

[stream](http://nodejs.cn/api/stream.html)

[stream-handbook](https://github.com/substack/stream-handbook)

[stream-handbook 中文版](https://github.com/jabez128/stream-handbook)
