---
date: 2022-05-23 18:12:04
title: 【Log4js】Log4js使用手册
tags:
  - JavaScript
  - Node
  - Log4js
---

`log4js` 不同版本 `api` 也各不相同，这里使用的版本为：`6.5.0`。

## 日志分类

`log4js` 有两个不同的维度去区分日志，分别是**日志等级**和**日志类别**。

### 日志等级

将日志分为不同等级对日志进行分类。

默认级别：`ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF`。

### 日志类别

将日志分为不同类别对日志进行分类。

`getLogger` 方法的参数就代表获取 `logger` 的类别。

`const consoleLogger = log4js.getLogger("console");` 表示获取了一个 `logger`，这个 `logger` 会使用 `categories.console` 配置来控制日志输出。

## 配置

使用 `log4js.configure` 方法为 `log4js` 注入配置，一个简单的配置如下。

```js
import * as log4js from "log4js";

log4js.configure({
  appenders: {
    // 定义输出程序
    console: {
      type: "console",
    },
    logToFile: { type: "file", filename: "./logs/all-the-logs.log" },
  },
  categories: {
    // 定义日志类别及使用的输出程序
    default: { appenders: ["logToFile"], level: "all" },
    console: {
      appenders: ["console"],
      level: "error",
    },
  },
  pm2: true, // 使用 pm2 运行时需要开启此选项，否则日志不生效
  pm2InstanceVar: "NODE_APP_INSTANCE", // pm2 NODE_APP_INSTANCE 变量的默认名称。
});

const logger = log4js.getLogger();
const consoleLogger = log4js.getLogger("console");
logger.debug("将所有等级的日志都写入 all-the-logs.log");
consoleLogger.info("不会被打印，因为info等级低于error");
consoleLogger.error("打印一条error日志");
```

这个例子中创建了两个 `appenders`，并且定义了两个类型：

1.  `logger` 在 `default` 类型时使用 `logToFile` 输出所有 `all` 级别及`all`以上级别日志。
2.  `logger` 在 `console` 类型时使用 `console` 输出所有 `error` 级别及`error`以上级别日志。

### appenders

`appenders` 定义日志的输出方式，这里配置的内容需要在 `categories` 中的 `appenders` 选项中添加才会生效。

`appenders` 的 `type` 属性定义了输出的类型，不同的类型有不同的配置项。

仅介绍部分内容，全部类别可在[官网](https://log4js-node.github.io/log4js-node/appenders.html)查看。

```js
log4js.configure({
  appenders: {
    consoleLogger: {
      type: "console", // 打印到控制台
      layout: "", // 日志的打印格式，见下文
    },
    dateFileLogger: {
      type: "dateFile", // 按日期保存文件
      filename: "./logs/logs.log", // 保存文件名
      pattern: "yyyy-MM-dd-hh-mm-ss", // 日志模式
      layout: "",
      // 以下参数都将传递给底层的 streamroller 实现
      keepFileExt: true, // 保存文件时文件会根据 pattern 携带额外的扩展名，开启后文件名为 logs.2022-05-23.log 而不是 logs.log
      alwaysIncludePattern: true, // 在当前日志文件的名称中包含模式，默认会将模式添加到文件末尾，如：logs.log.2022-05-23，开启 keepFileExt 后保存为 all-the-logs.2022-05-23.log
      daysToKeep: 14, // 日志保留时长，单位为天
    },
    logLevelFilterLooger: {
      type: "logLevelFilter", // 日志级别过滤器
      appender: "dateFileLogger", // 要过滤的 appenders 名称
      level: "error", // 允许通过过滤器的最小级别 error 及以上等级会触发
      maxLevel: "fatal", // 允许通过过滤器的最大级别
    },
    noLogFilterLogger: {
      type: "noLogFilter", // 日志内容过滤器
      exclude: ["no"], // 需要过滤的日志规则，可传 string 也可传 Array<string>，不区分大小写
      appender: "console", // 要过滤的 appenders 名称
    },
  },
});
```

#### logLevelFilter

> 日志级别过滤器，当您希望将大多数日志转到一个文件，但将错误作为电子邮件发送时，这很有用。

以下配置将使 `logger` 打印所有级别的日志，但只将 `error` 及以上级别的日志写入 `/logs/logs.log`。

```js
log4js.configure({
  appenders: {
    consoleLogger: {
      type: "console",
    },
    dateFileLogger: {
      type: "dateFile", // 按日期保存文件，
      filename: "./logs/logs.log", // 保存文件名
    },
    logLevelFilterLooger: {
      type: "logLevelFilter",
      appender: "dateFileLogger",
      level: "error",
    },
  },
  categories: {
    default: {
      appenders: ["consoleLogger", "logLevelFilterLooger"],
      level: "all",
    },
  },
});

const logger = log4js.getLogger();
logger.info("I will not be logged.");
logger.debug("I will be logged in all-the-logs.log");
logger.error("I will not be logged.");
return "htllo world";
```

#### multiFile

下列配置将日志按照 `categoryName` 输出到分别输出到 `./logs/default.log` 和 `./logs/cheese.log`。

将 `property` 修改为 `level` 时日志按照级别写入到对应的文件，如： `/logs/DEBUG.log`。

```js
log4js.configure({
  appenders: {
    multi: {
      type: "multiFile", // 将日志输出到多个文件
      base: "./logs/", // 根目录
      property: "categoryName", // 用于区分日志的属性，此属性值
      extension: ".log",
    },
  },
  categories: {
    default: { appenders: ["multi"], level: "debug" },
  },
});

const logger = log4js.getLogger();
logger.debug("I will be logged in logs/default.log");
const otherLogger = log4js.getLogger("cheese");
otherLogger.info("Cheese is cheddar - this will be logged in logs/cheese.log");
```

#### noLogFilter

下列配置将过滤掉带有 `not` 字符串的日志。

```js
log4js.configure({
  appenders: {
    console: {
      type: "console",
    },
    noLogFilterLogger: {
      type: "noLogFilter",
      exclude: ["not"],
      appender: "console",
    },
  },
  categories: {
    default: { appenders: ["noLogFilterLogger"], level: "debug" },
  },
});
const logger = log4js.getLogger();
logger.debug("I will be logged in all-the-logs.log");
logger.debug("I will be not logged in all-the-logs.log");
```

### categories

`categories` 定义不同 `category`（类别）的 `logger` 实例应该使用的输出配置。

调用 `log4js.getLogger()` 方法时传入的字符串就是 `logger` 的类别。

#### categories 的继承

如果没有为类别 `myapp.submodule` 定义任何附加程序，则类别 `myapp.submodule` 中的日志事件将使用 `myapp` 的配置。

## layout

仅介绍部分内容，全部类别可在[官网](https://log4js-node.github.io/log4js-node/layouts.html)查看。

### 内置 pattern

使用模式字符串来定义日志格式。

全部的特殊字符串见[官网](https://log4js-node.github.io/log4js-node/layouts.html)下面的**图案格式**部分。

用 `%x{prototypeName}` 可以在日志中注入一些自定义信息，`prototypeName` 属性值存储在 `tokens` 中，也可通过 `logger.addContext('user', 'charlie');` 方法添加。

`%[ %]` 使用的颜色是对应日志等级的颜色。

```js
log4js.configure({
  appenders: {
    consoleLogger: {
      type: "console",
      layout: {
        type: "pattern", // 使用内置布局
        pattern: "%[%d{yyyy-MM-dd hh:mm:ss} %p %c %x{user}%] %m",
        tokens: {
          user: function () {
            return "admin";
          },
        },
      },
    },
  },
  categories: {
    default: {
      appenders: ["consoleLogger"],
      level: "all",
    },
  },
});

const logger = log4js.getLogger();
logger.debug("is log");
logger.info("is log");
logger.error("is log");
```

### 自定义布局类型

调用 `log4js.addLayout(layoutName, callback)` 方法可以添加自定义布局。

注意 `log4js.addLayout()` 方法需要在 `log4js.configure()` 之前调用，否则会报错。

`callback` 函数接收当前的布局定义对象作为参数。

```js
log4js.addLayout("json", function (config) {
  // config: {type: "json", separator: ","}
  return function (logEvent) {
    // logEvent:
    // {
    //   startTime: "2022-05-23T09:56:26.740Z",
    //   categoryName: "default",
    //   data: ["is log"],
    //   level: { level: 10000, levelStr: "DEBUG", colour: "cyan" },
    //   context: {}, // 上下文对象，logger.addContext() 方法添加的属性保存在这里
    //   pid: 14692,
    // };
    return JSON.stringify(logEvent) + config.separator;
  };
});

log4js.configure({
  appenders: {
    consoleLogger: {
      type: "console",
      layout: {
        type: "json", // 使用内置布局
        separator: ",",
      },
    },
  },
  categories: {
    default: {
      appenders: ["consoleLogger"],
      level: "all",
    },
  },
});

const logger = log4js.getLogger();
logger.debug("is log");
logger.info("is log");
logger.error("is log");
```

## 参考

[log4js](https://log4js-node.github.io/log4js-node/index.html)
