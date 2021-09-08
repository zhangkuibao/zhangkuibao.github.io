<author-info date="1631096398874"></author-info>

# Promise 与微任务

[Promise V8 源码分析(一)](https://zhuanlan.zhihu.com/p/264944183)

[从一道让我失眠的 Promise 面试题开始，深入分析 Promise 实现细节](https://juejin.cn/post/6945319439772434469?utm_campaign=sembaidu&utm_medium=sem_baidu_jj_pc_dc01&utm_source=bdpcjj00232)

[【V8 源码补充篇】从一道让我失眠的 Promise 面试题开始，深入分析 Promise 实现细节](https://juejin.cn/post/6953452438300917790)

[深度揭秘 Promise 微任务注册和执行过程](https://juejin.cn/post/6844903987183894535#heading-6)

```js
Promise.resolve()
  .then(() => {
    console.log(0);
    return Promise.resolve(4);
  })
  .then((res) => {
    console.log(res);
  });
Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });
```

上述代码的打印结果为：`0123456`

如果把第一个 `Promise.resolve()` 中的 `return Promise.resolve(4)` 改为 `return 4`，则打印啥结果为：`0142356`
