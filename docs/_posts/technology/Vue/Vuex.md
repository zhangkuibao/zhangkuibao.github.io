---
date: 2021-09-09 10:13:45
title: Vuex
tags:
  - Vue
---

> `Vuex` 是 Vue 的统一**状态管理模式**, 采用集中存储管理所有组件的状态(数据), 可以理解为一个全局变量

一个完整的 `Vuex` 实例

```js
const mapState = Vuex.mapState;
const mapGetters = Vuex.mapGetters;
// 定义
const store = new Vuex.Store({
  state: {
    count: 0,
    title: "vuex",
    family: [
      {
        name: "z",
        age: 1,
      },
      {
        name: "x",
        age: 2,
      },
    ],
  },
  getters: {
    ageList: function(state, getters) {
      return function(index) {
        return getters.nameList[index];
      };
    },
    nameList(state) {
      return state.family.map((ele) => ele.name);
    },
  },
  mutations: {
    // 接收state作为第一个参数, 后续参数为commit一参之后的参数
    // 相当于定义一个事件, increment是事件名, 通过 state.commit('increment') 触发
    increment(state, params) {
      state.count++;
    },
  },
  // action 提交的是mutation
  actions: {
    // context 对象与 store 实例具有相同方法和属性但不是store实例本身
    increment(context) {
      context.commit("increment");
    },
  },
});

// 使用
new Vue({
  store,
  computed: {
    // state
    count() {
      return this.$store.state.count;
    },
    ...mapState({
      newCount(state) {
        return state.count + 1;
      },
      // 别名
      myTitle: "title",
    }),
    ...mapState(["family"]),

    // getters
    myAgeList() {
      return this.$store.getters.ageList(0);
    },
    ...mapGetters(["nameList"]),
    ...mapGetters({
      myNameList: "nameList",
    }),
  },
  methods: {
    // mutation, action 语法相同
    add() {
      this.$store.commit("increment");
    },
    // 传入字符串数组会进行同名映射
    ...mapMutations(["increment"]),

    // 传入对象相当于设置别名
    ...mapActions({
      myAdd: "increment",
    }),
  },
  mounted() {
    // 触发mutation
    this.$store.commit("increment", { key: 999 });

    // 触发action
    this.$store.dispatch("increment");
  },
});
```

## state 定义及获取

> 保存所有的状态,是唯一数据源,每个应用使用的是 `store` 实例

### 定义一个 store

```js
const store = new Vuex.Store({
  state: {
    count: 0,
  },
});
```

### 通过 `computed` 计算属性获得 `Vuex` 状态( `state` 数据)

```js
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count() {
      return store.state.count;
    },
  },
};
```

### 通过 `store` 选项获取 `Vuex` 状态

```js
new Vue({
  el: "#app",
  // 把 Vuex 实例提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store: new Vuex.Store({
    state: {
      count: 0,
    },
  }),
  components: {
    Counter,
  },
});

const Counter = {
  computed: {
    count() {
      // 子组件中可以用 this.$store 访问 Vuex实例
      return this.$store.state.count;
    },
  },
};
```

### 通过 `mapState` 函数简化 `computed` 操作

    `mapState` 函数需要提前导入, 如果是直接引用 `Vuex.js` 则函数是 `Vuex.mapState`

    `mapState` 函数返回的是一个对象,可以用展开运算符与原有 `computed` 属性合并

```js
new Vue({
  // 全部用mapState函数的返回值
  computed: mapState({
    count: (state) => state.count,
    countz: "count", // 传字符串时相当于 state => state['count'], 键相当于别名
    countx: function(state) {
      // 如果要对数据进行处理且用到组件内的数据,要用常规函数(箭头函数没有this),接收state作为第一个参数
      return state.count;
    },
  }),

  // 传入字符串数组
  computed: mapState(["count"]), // 计算属性的名称与state状态名称相同时可传一个字符串数组

  // 用展开运算符与原有computed属性合并
  computed: {
    ...mapState(["count"]),
  },
});
```

## `getter` 计算属性

    `getter` 的返回值会被缓存,只有当依赖值发生变化才会重新计算

    拥有 `mapGetters` 函数来简化导入操作

### 定义一个 `getter`

```js
const store = new Vuex.Store({
  state: {
    family: [
      {
        name: "z",
        age: 1,
      },
      {
        name: "x",
        age: 2,
      },
    ],
  },
  // 注意是加s
  getters: {
    // 接收当前模块state作为其第一个参数
    ageList(state) {
      return state.family.map((ele) => ele.age);
    },
    // 接收getters对象作为第二个参数,可用于访问其他getter属性
    // 接收根节点状态作为第三个参数
    nameList(state, getters, rootState) {
      return getters.ageList;
    },
  },
});
```

### 访问 `getter`

1. 属性访问: 以 `store.getters.ageList` 的形式直接访问, 保留缓存
2. 方法访问: getter 的返回值为一个函数, 实现传参, 不保留缓存, 每次访问都是一次函数调用

```js
const store = new Vuex.Store({
  getters: {
    nameList(state) {
      // 返回的函数接收一个参数
      return (index) => {
        return state.ageList(index);
      };
    },
  },
});

// 调用时要以函数形式调用
store.getters.nameList(1);
```

3. `mapGetters` 函数

> `mapGetters` 函数仅仅是把 `store` 中的 `getter` 映射到局部计算属性上

```js
// 直接引入文件则是Vuex.mapGetters
const mapGetters = Vuex.mapGetters;

new Vue({
  computed: {
    // 用展开运算符将 getter 混入 computed 对象中
    // 传入字符串数组会进行同名映射
    ...mapGetters(["nameList"]),

    // 传入对象相当于设置别名
    ...mapGetters({
      newNameList: "nameList",
    }),
  },
});
```

## `mutation` 事件

> 每定义一个 `mutation` 都相当于定义一个事件类型和一个回调函数, 通过 store.commit('事件名') 来触发
> `mutation` 必须是同步函数

### 定义

```js
// 定义
const store = new Vuex.Store({
  mutations: {
    // 接收state作为第一个参数, 后续参数为commit一参之后的参数
    // 相当于定义一个事件, increment是事件名, 通过 state.commit('increment') 触发
    increment(state, params) {
      state.count++;
    },
  },
});
```

### 调用形式

1. `store.commit('increment',{key: 999});` 一参为事件类型, 后续参数作为回调函数的参数( `mutation` 的 载荷 `[payload]` )
2. 对象风格的提交方式

```js
store.commit({
  type: "increment",
  key: 999,
});
```

### `mapMutations` 函数（需要先在根节点注入 store）

把 `mutation` 混入 `methods`

```js
new Vue({
  methods: {
    // 传入字符串数组会进行同名映射
    ...mapMutations(["increment"]),

    // 传入对象相当于设置别名
    ...mapMutations({
      add: "increment",
    }),
  },
});
```

## `action` 异步

> `Action` 提交的是 `mutation`，而不是直接变更状态

> `Action` 可以包含任意异步操作

> 用 `store.dispatch()` 触发, 触发方式与 `mutation` 相同

> `dispatch` 返回值为 `promise` 对象

> 可以与 `async/await` 混合使用

### 定义

```js
const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    // context 对象与 store 实例具有相同方法和属性但不是store实例本身
    increment(context) {
      context.commit("increment");
    },
  },
});

store.dispatch("increment");
```

### `mapActions` 函数（需要先在根节点注入 store）

把 `action` 混入 `methods`

```js
new Vue({
  methods: {
    // 传入字符串数组会进行同名映射
    ...mapActions(["increment"]),

    // 传入对象相当于设置别名
    ...mapActions({
      add: "increment",
    }),
  },
});
```

## `moudule` 模块化

> 将 `store` 分割未模块后每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割

```js
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

### 模块内的状态

1. 对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象(当前模块)
2. 对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState
3. 对于模块内部的 getter，根节点状态会作为第三个参数暴露出来
4. 默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的

### 命名空间

[命名空间](https://vuex.vuejs.org/zh/guide/modules.html#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4)
