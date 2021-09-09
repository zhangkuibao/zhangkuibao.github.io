<author-info date="1631153704181"></author-info>

# 深入理解 Vue

## 生命周期

### 初始化阶段

> 触发的生命周期钩子: `beforeCreate`，`created`

```js
initLifecycle(vm); // 初始化生命周期
initEvents(vm); // 初始化事件
initRender(vm); // 初始化渲染
callHook(vm, "beforeCreate"); // 调用生命周期钩子函数
initInjections(vm); //初始化injections
initState(vm); // 初始化props,methods,data,computed,watch
initProvide(vm); // 初始化 provide
callHook(vm, "created"); // 调用生命周期钩子函数
```

### 模板编译阶段

只在 `完整版` 有该阶段，会根据传入的 `el` 或 `template` 来生成模板

在使用 `vue-cli` 或 `webpack` 运行 `vue` 项目时，会在代码编译阶段通过 `vue-loader` 处理 `.vue` 文件

### 挂载阶段

> 触发的生命周期钩子: `beforeMount`，`mounted`

这个阶段会将模板渲染到视图中，同时开启对模板中数据（状态）的监控，当数据（状态）发生变化时通知其依赖进行视图更新（触发 `beforeUpdate`，`updated`钩子）

### 销毁阶段

> 触发的生命周期钩子: `beforeDestroy`，`destroyed`

调用实例的 `$destroy` 方法后就进入该实例的销毁阶段

1. 将当前 `vue` 实例从其父级实例中删除
2. 移除自身的依赖追踪和事件监听
3. 标记自身状态为已销毁

## 对于设计模式的应用

### 发布订阅

`$on`、`$emit`，定义一个事件中心，通过 `$on` 订阅事件，将事件存储在事件中心里面，然后通过\$emit 触发事件中心里面存储的订阅事件

## DOM 更新策略

`Vue` 在更新 `DOM` 时是异步执行的。只要侦听到数据变化，`Vue` 将开启一个事件队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 `watcher` 被多次触发，只会被推入到事件队列中一次。这样可以减少重新渲染的频率。然后，在下一个的事件循环“`tick`”中，`Vue` 刷新事件队列并执行实际 (已去重的) 工作。
