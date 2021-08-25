## API
### 一、全局
1. `Vue.nextTick()` 在下次**dom更新结束后**执行回调,没有回调函数时返回的是一个promise对象
2. `Vue.set(target, propertyName/index, value)` 给响应式对象添加属性
3. `Vue.delete(target,propertyName/index)` 删除一个对象的属性并更新视图
4. `Vue.directive(id,{config})` 全局指令,只穿id返回对应的配置
5. `Vue.filter(id,{config})` 过滤器
6. `Vue.component(id,{config})` 组件
7. `Vue.use(plugin)` 使用插件
8. `Vue.mixin({config})` 混入对象

### 二、数据
1. `computed` 计算属性的结果会被缓存,依赖的**响应式属性**变化才会重新计算
2. `watch` 键是需要观察的表达式,值是回调函数
3. `el` &　`vm.$mount()` 提供一个**已存在**的dom作为vue实例的挂载目标
4. `provide/inject` 定义父组件向子组件注入的依赖和子组件接收的依赖

### 三、生命周期钩子
1. `beforeCreate` 实例初始化后,数据观测 (data observer) 和 event/watcher 事件配置之前被调用
2. `created` 实例创建完成后,此时已完成数据观测,属性和方法的运算,事件回调,此时还未挂载,$el为空
3. `beforeMount` 挂载之前, SSR期间不被调用
4. `mounted` 挂载完成后调用,此时已完成vm.$el的替换,但是此阶段不一定所有子元素都挂载完毕,使用 `vm.$nextTick` 可等到所有视图渲染完毕,SSR期间不被调用
4. `beforeUpdate` 数据更新时调用,发生在虚拟dom打补丁之前,SSR期间不被调用
5. `updated` 数据更新之后, 此时dom已经更新(不包括子组件),用 `vm.$nextTick` 等到整个视图重绘完毕, SSR期间不被调用
6. `activated` keep-alive缓存的组件被激活时调用, SSR期间不被调用
7. `deactivated` keep-alive缓存的组件停用时调用,SSR期间不被调用
8. `beforeDestroy` 实例销毁前,此时实例仍可使用,SSR期间不被调用
9. `destroyed` 实例销毁后,此时所有的子实例都被销毁,SSR期间不被调用
10. `errorCaptured` 捕获到来自子孙组件的错误时被调用,函数收到三个参数:错误对象,组件vue实例,包含错误来源信息的字符串,返回false以阻止该错误继续向上传播

### 四、实例属性
1. `vm.$props` 当前组件接收到的props对象
2. `vm.$options` 展示当前实例上的选项,可用来读取自定义属性
```js
new Vue({
    myName: 'twgdh',
    created() {console.log(this.$options.myName)} // 'twgdh'
})
```
3. `vm.$root` 当前组件的根实例, 没有父实例时返回自己
4. `vm.$parent` 当前组件的父实例
5. `vm.$chldren` 当前实例的**直接**子组件,不保证顺序,也不是响应式的
6. `vm.$slots` 访问插槽
7. `vm.$scopedSlots` 访问作用域插槽
8. `vm.$refs` 访问注册过ref属性的所有dom元素和组件实例

### 五、实例方法
1. `vm.$watch(expOrFn,cb,{option})` 相当于扩展watch监听器, 该方法返回一个函数,执行后停止监听该属性
2. `vm.$set()` 全局Vue.set方法的别名
3. `vm.$delete()` 全局Vue.delete方法的别名
4. `vm.$on()` 监听实例上的自定义事件,可由子组件通过vm.$emit触发
5. `$once()` 监听事件,触发一次后移除
6. `vm.$off()`  移除事件监听, 无参时移除所有,只提供事件名则移除该事件的所有监听器,如果同时提供事件与回调则只移除这个回调
7. `vm.$emit` 触发当前实例上的事件,附加参数都会传给对应事件的回调函数
8. `vm.$forceUpdate()` 强制重绘组件, 仅影响实例本身和插入插槽内容的子组件,而不是所有子组件
9. `vm.$nextTick()` 与全局Vue.nextTick一样,this自动绑定到调用它的实例上
10. `vm.$destroy()` 完全销毁一个实例, 会触发 `beforeDestroy` 和 `destroyed` 的钩子

### 六、指令
1. `v-pre` 跳过这个元素的编译过程,显示原本的内容,跳过大量没有指令的节点会加快编译
2. `v-cloak` 与style属性配合用来隐藏未编译完全的模板
3. `v-once` 只渲染元素和组件一次, 之后的重新渲染会跳过此内容,可用于性能优化

### 七、特性
1. `key` key用于对比新旧dom,不用key时vue会最大限度的复用元素,vue会移除key不存在的元素,可利用该特性刷新组件
2. `is` 用于动态组件