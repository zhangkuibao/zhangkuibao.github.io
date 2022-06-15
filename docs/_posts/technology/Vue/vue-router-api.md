---
date: 2021-09-09 10:11:34
title: Vue Router API
tags:
  - Vue
---

## router-link 标签

1. `tag`: 生成指定标签,默认`<a>`标签
2. `to` : 目标路由的链接,被点击后内部会把 `to` 的值传递给 `route.push()` , 可以传入字符串或描述目标位置的对象
3. `replace` 默认 false,设置该属性跳转时会用 `router.replace()` 替换 `route.push()`,不会留下`history记录`
4. `append` 默认 false,设置该属性跳转时相当于一个相对路径跳转(把这个 url 拼接到当前 url 后面), 不设置时为绝对路径
5. `event` 默认为 `click`, 设置用来触发导航的事件类型,可以是一个字符串或包含字符串的数组
6. `exact` 默认 false,是否使用'精确匹配模式', 默认情况下只要当前 url 包含 link 标签的路径就会被设置`active-class`类名
7. `active-class` 默认 `router-link-active` ,链接激活时的 class,可在路由配置中通过 `linkActiveClass` 属性来设置
8. `exact-active-class` 默认 `router-link-exact-active` ,路由被精确匹配时激活的 class,可在路由配置中的`linkExactActiveClass`属性配置

   两个 class 属性的区别:

   `linkActiveClass` 这个属性定义的是只要匹配到的路由`(to.matched 中有记录的)`都会添加一个 class

   `linkExactActiveClass` 定义的是给匹配到的最后一个路由`(to.matched 中最后一个记录)`添加一个 class

   ```html
   <router-link id="root" to="/"
     >to root<router-link>
       <router-link id="login" to="/login"
         >to login<router-link></router-link></router-link></router-link
   ></router-link>
   ```

   ```js
   // html中的两个链接分别记为 #root 和 #login
   // 定义一个带子路由的路由
   // 访问 '/' 时,可以匹配的路由只有一个, 此时 #root 的class为: 'iActive iExact'
   // 访问 '/login' 时,匹配的路由有两个, 此时 #root 的class为: 'iActive', #login 的class 为'iActive iExact'

   // 可以看出
   // linkActiveClass 这个属性定义的是只要匹配到的路由(to.matched 中有记录的)都会添加一个class, 如果给<router-link>标签设置exact属性会开启精确匹配模式
   // linkExactActiveClass 定义的是给匹配到的最后一个路由(to.matched 中最后一个记录)添加一个class
   const router = new VueRouter({
     linkActiveClass: "iActive",
     linkExactActiveClass: "iExact",
     routes: [
       {
         path: "/",
         children: [
           {
             path: "/login",
           },
         ],
       },
     ],
   });
   ```

## router-view 标签

> `<router-view>` 用于渲染路由匹配到的组件  
> 非`<router-view>`使用的属性会传给渲染的组件  
> 可以配合 `<transition>` 和 `<keep-alive>` 使用,如果两个结合一起用,要确保在内层使用 `<keep-alive>`  
>  `name` 默认 `default`,定义视图的名字,在 components 中定义每个视图要渲染的组件

## Router 对象

### 构建 Router 对象

用 `VueRouter` 构造函数 `new` 一个新的路由对象

```js
const router = new VueRouter({
    // mode 默认 [hash (浏览器环境) | abstract (nodeJS环境)], 可选值: hash |  abstract | history(利用history.pushState)
    mode: 'hash',

    // 默认 `/`, 设置基路径
    base: '/',

    // 活动class(默认 router-link-active )和精准匹配class(默认 router-link-exact-active )
    linkActiveClass: 'iActive',
    linkExactActiveClass:'iExact',

    // 控制滚动行为
    scrollBehavior: (to,from,savedPosition) => {x:0,y:0},

    // 默认为true, 不支持history模式时是否回退到hash模式
    fallback: true,

    // routes 中的每一项都是一个路由对象
    routes: [{
        // 路由地址
        path: '/',

        // 路由匹配后的渲染组件
        component: {template:'<div>root</div>'},

        // 命名路由
        name: 'root',

        // 重定向
        redirect: '/login',

        // props替代$route.params解耦
        props: {},

        // 别名
        alias: '/index',

        // 嵌套路由
        children: [],

        // 局部导航守卫
        beforeEnter: (to, from, next) => void 0,

        // 路由元信息,裹挟一些属性,可做校验用
        meta: {},

        //2.6.0+
        // 匹配规则是否大小写敏感,默认false
        caseSensitive: false,

        // 编译正则
        pathToRegexpOptions: {}
    }]
})
```

### Router 实例属性

1. `router.app` 挂载 router 的 Vue 根实例
2. `router.mode` 路由使用的模式
3. `router.currentRoute` 当前路由的路由对象

### Router 实例方法

1. 守卫, 在 `2.5.0+` 这三个方法都返回一个移除已注册的守卫/钩子的函数
   `router.beforeEach((to, from, next) => {})`
   `router.beforeResolve((to, from, next) => {})`
   `router.afterEach((to, from) => {})`

2. 导航
   `router.push('/')` 跳转到指定链接并在 `history` 栈中添加一条记录, 点击`<router-link>`时默认调用该方法
   `router.replace('/')` 同上,不会添加记录
   `router.go(1)` 在 `history` 栈中前进/回退指定数
   `router.back()` 在`history`栈中回退一步
   `router.forward()` 在`history`栈中前进一步
3. `router.addRoutes()` 动态添加一条路由信息
4. `router.getMatchedComponents('/')` 返回目标位置或当前位置(不传参)匹配到的组件数组
5. `router.resolve('/')` 解析目标位置,参数必填
6. `router.onReady()` 在路由完成初始导航时调用
7. `router.onError()` 在路由导航过程中出错时被调用,可被触发的错误如下:
   错误在一个路由守卫函数中被同步抛出；
   错误在一个路由守卫函数中通过调用 next(err) 的方式异步捕获并处理；
   渲染一个路由的过程中，需要尝试解析一个异步组件时发生错误。

## \$route 路由对象属性

1. `$route.path` 路由对象的绝对路径
2. `$route.params` 路由对象包含的参数对象
3. `$route.query` 路由对象的 url 查询参数解析后的对象
4. `$route.hash` 路由对象的 `hash` 值(带#)
5. `$route.fullPath` 完成解析后的完整 url,包含查询参数和 `hash`
6. `$route.matched` 所有匹配路由的路由记录数组,每个记录都是一个路由对象
7. `$route.name` 路由的名称
8. `$route.redirectedFrom` 路由重定向前的 url 地址

## 其他

在 Vue 根实例的 router 配置传入 router 实例,会在每个子组件中注入两个属性

1. `this.$router` router 实例
2. `this.$route` 当前路由对象

```js
new Vue({
  router: new VueRouter(),
});
```
