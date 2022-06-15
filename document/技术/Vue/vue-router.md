<author-info date="1631153564274"></author-info>

# Vue Router

路由的使用步骤是:

1. 引入`Vue`及`Vue Router`
2. 告诉`Vue Router`在哪里渲染`(HTML)`
3. 把组件`(components)`映射到路由上
4. 在`vue`实例上注入路由

## 基础路由配置

> 给同一个路径匹配多个路由时,先定义的路由优先级最高

```html
<div id="app">
  <h1>Hello App</h1>
  <p>
    <!-- router-link标签会被渲染成a标签,to属性指向对应的路径 -->
    <!-- 活动的链接class属性会被设置为.router-link-active -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>

    <!-- 给投传入一个对象以连接到对应的路由,相当于to:/user/999 -->
    <router-link :to="{name:'user',params:{id:999}}">Go to Bar</router-link>
  </p>
  <!-- router-view标签定义的是路由内容位置,路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
```

```js
// 使用VueRouter构造函数创建一个router实例
const router = new VueRouter({
  // 开启history模式,不显示url中的hash值
  mode: "history",

  // routes属性是一个路由数组,定义路由路径及对应组件
  routes: [
    {
      // 路径
      path: "/foo",
      // 对应组件,注意是component
      component: {
        template: `<div>foo</div>`,
      },
    },
    {
      path: "/bar",
      component: {
        template: `<div>bar</div>`,
      },
    },
    {
      // 给路由一个name属性作为命名路由,在<router-link>标签的to属性中传入一个对象,设置name以指向对应路由
      name: "user",
      path: "/user:id",
      component: {
        template: `<div>user{{$route.params.id}}</div>`,
      },
    },
  ],
});

const app = new Vue({
  el: "#app",
  // 注入路由
  router,
});

// 访问路由器
console.log(app.$router);
// 访问当前路由
console.log(app.$route);
```

## 动态路由

当访问的地址不同时也能访问到同一个内容(组件)
如:
`localhost:80/user/99` --- `<user>`组件
`localhost:80/user/50` --- `<user>`组件

1. 动态路由配置

```js
new Vue({
  el: "#app",
  router: new VueRouter({
    routes: [
      {
        // 动态路由的路径参数用冒号标记,该参数在跳转成功后会添加到$route.params中
        path: "/user/:id",
        component: {
          template: `<div>user{{$route.params.id}}</div>`,
        },
      },
      {
        // 一个路径上可以有多个路径参数,对应值都会设置到$route.params中
        path: "/user/:id/:name",
        component: {
          template: `<div>{{$route.params.id + $route.params.name}}</div>`,
        },
      },
    ],
  }),
});
```

2. 监听路由变化

```js
new Vue({
  el: "#app",

  // 1. 用watch监听$route
  watch: {
    // to 和 from分别是目标和来源路径的路由对象
    $route(to, from) {
      console.log(to, from);
    },
  },
  // 2. 导航守卫
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
  },
});
```

3. 通配符捕获所有路由

```js
routes = [
  {
    // 匹配所有路径
    path: "*",
  },
  {
    // 匹配所有/user-开头的路径
    path: "/user-*",
  },
];
```

## 嵌套路由

一个页面通常由多层嵌套的组件组合而成,如:

```
/user/foo/profile                     /user/foo/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```

使用嵌套路由步骤如下:

1. 在父级路径的模板上定义`<router-view>`标签
2. 在父级路由上设置 `children` 属性

```js
routes = [
  {
    // 父级路径,以/开头的嵌套路径会被当做根路径
    path: "/user",
    component: {
      // 在父级的模板中包含一个<router-view>标签作为路由出口
      template: `<div class="user">
				<h2>User</h2><br>
				<router-view></router-view>
		</div>`,
    },
    // 在父级路由上定义children属性,其值和router相同,可以嵌套多次children
    children: [
      {
        // 访问/user/profile时使用此组件
        path: "profile",
        component: {
          template: `<div>profile</div>`,
        },
      },
      {
        // 访问/user/posts时使用此组件
        path: "posts",
        component: {
          template: `<div>posts</div>`,
        },
      },
    ],
  },
];
```

## 编程式导航

通过 `$router` 上的 API 来控制当前路由位置

1. `$router.push()` 导航到指定的 `url` ,相当于点击`<router-link>`, 此方法会在 `history` 栈中添加一个记录,点击浏览器后退按钮时回到之前的 `url`, 类似`window.history.pushState()`,参数如下:

```js
params: ''; // 直接传url,不写/时为相对路径,添加到当前路径后
params: {
	// 有path时会忽略params
	path: '',

	// name和params配合,变成 user/999
	name: 'user',
	params: {
		userId: 999,
	},

	// 查询参数, 拼接到url后
	query: {}
}
```

2. `$router.replace()` 作用同上,替换调当前的 `history` 记录,类似 `window.history.replaceState()`
3. `$router.go()` 参数为整数,表示在 `history` 记录中前进或后退多少步,类似 `window.history.go()`

## 命名视图

在一个页面同时展示多个视图而不是嵌套展示时，可以在界面中定义多个 `<router-view>` 标签,没有设置 `name` 时默认为 `default` ,每一个视图都需要使用一个组件渲染

1. 使用命名视图

```html
<!-- 不写name时为default -->
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```

```js
routes: [
  {
    // 当在同一个路径时不同视图会被渲染为不同组件
    path: "/",

    // 注意是components
    components: {
      default: {
        template: "<div>is default</div>",
      },
      a: {
        template: "<div>is a</div>",
      },
      b: {
        template: "<div>is b</div>",
      },
    },
  },
];
```

2. 在嵌套路由中使用命名视图

```js
const userSettings = {
  template: `
	<div>
		<router-view/>
		<router-view name="helper"/>
	</div>
	`,
};
routes: [
  {
    // 根路径下显示userSettings组件,该组件里有两个视图
    path: "/",
    component: userSettings,
    children: [
      {
        // 访问/emails时,渲染userSettings组件内的两个视图
        path: "emails",
        components: {
          default: userProfileSub,
          helper: userEmailsSub,
        },
      },
    ],
  },
];
```

## 重定向和别名

1. 重定向

> 访问 /a 时,url 被替换为 /b,然后匹配路由为/b, 即访问 /a,实际跳转到 /b

```js
routes: [{
	// 原地址
	path: '/notfound',

	// 重定向地址
	// 1.传入url
	redirect: '/',
	// 2.传入一个路由对象,name需要指向一个命名路由
	redirect: {name:'root'},
	// 3.传入一个方法,参数是目标路由,需要返回重定向目标(url或路由对象)
	redirect: to => '/'

	// 定义了重定向后component失效
	component: {
		template: '<div>no found</div>'
	}
}]
```

2. 别名

> 定义一个路由 /a ,给 /a 设置一个别名 /b ,当访问/b 时实际上匹配的是 /a 的路由

张三的外号叫狗蛋,别人叫张三是叫他,叫狗蛋也是叫他

```js
routes: [
  {
    // 定义在根路径上的路由
    path: "/",
    component: A,

    // 给这个路由一个别名, 现在访问 /b 时会显示 A 组件
    alias: "/b",
  },
];
```

## 路由 props 传参

使用 `props` 代替 `$route.params` 访问属性来减少路由与 `$route` 的耦合

```js
routes: [
  {
    // 动态路由,接收一个名为id的参数
    path: "/user/:id",

    // 1.只有一个视图时
    component: {
      // 在component中定义props来接收需要的参数,然后就能直接在模板中使用了
      props: ["id"],
      template: "<div>User{{id}}</div>",
    },
    // 一个视图是用一个值就行
    props: true,

    // 2.使用多个视图时
    // 多视图时需要分别为每个命名视图添加props
    components: {
      default: {
        props: ["id"],
        template: "<div>User{{id}}</div>",
      },
      vii: {
        props: ["id"],
        template: "<div>vii{{id}}</div>",
      },
    },
    // 多视图时props用对象分别定义
    props: {
      default: true,
      vii: false,
    },
  },
];
```

1. props 设置为布尔值: 为 `true` 时, `$route.params` 会被设置为组件属性
2. props 设置为对象: 设置好参数的值,此后的动态路由参数值会被此参数值替代,即静态 `props`

```js
// 单视图下
props: {
	id: 999
}

// 多命名视图下
props: {
	default: {
		id: 999
	},
	vii: {
		id: 888
	}
}
```

3. props 设置为函数: 创建一个函数,这样就能操作参数返回想要的值

```js
// 单视图
routes: [
  {
    path: "/user/:id",
    component: {
      props: ["id"],
      template: "<div>User{{id}}</div>",
    },

    // 参数为路由对象
    props: (route) => {
      // 注意返回值不能为布尔值,而是一个对象,对象里需要定义要用到的属性
      return {
        id: route.params.id,
      };
    },
  },
];

// 多视图
routes: [
  {
    path: "/user/:id",
    components: {
      default: {
        props: ["id"],
        template: "<div>User{{id}}</div>",
      },
      vii: {
        props: ["id"],
        template: "<div>vii{{id}}</div>",
      },
    },
    props: {
      // 多视图时需要给每一个命名视图添加对应函数
      default: (route) => {
        return {
          id: route.params.id,
        };
      },
      vii: () => {
        return {
          id: 128,
        };
      },
    },
  },
];
```

## 导航守卫

    完整的导航解析流程:
    1.导航被触发。
    2.在失活的组件里调用离开守卫。
    3.调用全局的 beforeEach 守卫。
    4.在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
    5.在路由配置里调用 beforeEnter。
    6.解析异步路由组件。
    7.在被激活的组件里调用 beforeRouteEnter。
    8.调用全局的 beforeResolve 守卫 (2.5+)。
    9.导航被确认。
    10.调用全局的 afterEach 钩子。
    11.触发 DOM 更新。
    12.用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。

1. `beforeEach` 全局前置守卫
   > 可以创建多个,按照创建顺序调用
   > 守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 **等待中**。

```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
	// 必须调用next方法来resolve钩子
	next();

	// 中断当前导航
	next(false);

	// 跳转到指定地址(注意避免无限循环 --- 跳转后又被该守卫拦截到)
	next('/');

	// 传入一个Error实例是将终止导航并把错误传递给router.onError()注册过的回调
	next(error)
})
```

2. `beforeResolve` 全局解析守卫

   > 在导航被确认前,在**所有组件内守卫**和**异步路由组件**被解析之后被调用

3. `afterEach` 全局后置钩子

   > 这样的钩子函数只能接受 `to` 和 `from`, 不接受 `next` 函数, 也不会改变导航

4. 局部守卫
   > 设定给指定路由的导航守卫

```js
const router = new VueRouter({
  routes: [
    {
      path: "/foo",
      component: Foo,
      beforeEnter: (to, from, next) => {},
    },
  ],
});
```

5. 组件内守卫
   > 在路由组件内直接定义导航守卫

```js
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`, 因为当守卫执行前，组件实例还没被创建
    // 可以通过传一个回调函数给next来访问组件实例, 这是唯一可以给next传递函数的守卫
    next((vm) => {});
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用,可用于防止用户在未保存修改时突然离开
    // 可以访问组件实例 `this`
  },
};
```

## 路由元信息

> 在路由配置中定义 `meta` 属性,在守卫拦截导航时可以根据这个属性来做一些校验操作

在路由匹配中,每一次成功的匹配都会把这个路由记录添加到 `$route.matched` 数组中, 就能通过遍历这
个数组来访问 `mata` 属性

```js
const router = new VueRouter({
  routes: [
    {
      path: "/foo",
      component: Foo,
      children: [
        {
          // 访问 /foo/bar 时,$route.matched中有两条记录,其中的第二条包含有meta属性
          path: "bar",
          component: Bar,
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});
```

## 活动 class

router-link-exact-active 是精确匹配规则，即只有当前点击 router 被匹配

[router-link-active 与 router-link-exact-active 区别](https://blog.csdn.net/qq_42068550/article/details/97392471)

## 其他

1. `<router-view/>` 可以被包裹在 `<transition>` 中实现过渡效果
2. 数据获取有两种方法,用户体验不同
   获取数据后导航, 获取数据时用户会留在当前页面,此时可以展示进度条
   导航完成后获取数据, 获取数据时页面是空白的,此时可以展示 loding
3. `router` 可以控制 `popstate` 导航(浏览器的前进/后退按键触发)时的滚动行为,返回 `{x:0,y:0}` 来控制导航后的滚动条位置
4. `scrollBehavior(to, from, savedPosition)` 设置函数控制滚动行为
