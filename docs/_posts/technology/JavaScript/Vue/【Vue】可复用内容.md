---
date: '2021-09-09 10:06:43'
title: 【Vue】可复用内容
tags:
  - JavaScript
  - Vue
---

## Mixin 混入

实际上就是一个 vue 对象,可以用来提取一些相同的,可能在多个 vue 实例中用到的数据和方法

### 定义及使用

定义一个混入对象和定义普通对象一样,使用时放到 vue 实例或组件中的 minxins 属性中

```js
var myMixin = {
  data: {},
  methods: {},
  created() {},
};

new Vue({
  mixins: [myMixin],
});
```

### 合并规则

1. 数据对象合并发生冲突时,以组件数据优先
2. 同名钩子函数会合并为一个数组,并且全部被调用,混入的钩子函数先执行
3. 值为对象的数据,如 `methods` 、 `components`,合并为一个对象,同名属性冲突时以组件数据优先

```js
var myMixin = {
  data: {
    str: "mix", // 被同名覆盖
    arr: [8], // 混入的数组会被组件的同名属性覆盖
    obj: {
      name: 19, // 被同名覆盖
      boy: true, // 组件中没有的会添加进去
    },
  },
  methods: {
    add() {
      return this.obj.age + this.arr.length; // 被同名覆盖
    },
  },
  created() {
    console.log("is mix"); // 同名钩子函数合并为数组,并且先执行
  },
};

new Vue({
  mixins: [myMixin],
  data: {
    str: "mix",
    arr: [8],
    obj: {
      name: 19,
    },
  },
  methods: {
    add() {
      return this.age++;
    },
  },
  created() {
    console.log("is vue");
  },
});
```

### 全局混入

添加全局混入后,之后创建的 vue 实例都会被影响

```js
Vue.mixin({
  data: {},
  methods: {},
  created() {},
});
```

## 自定义指令

### 注册及内容

```js
// vue会默认给注册的指令添加v-前缀, 使用时直接加入到元素内即可
// 1.全局注册
Vue.directive('focus', {
	// 指令的钩子函数

	// 只调用一次,指令第一次绑定到元素时调用
	bind(el,binding,vnode,oldVnode) {
		// 钩子函数参数
		el						// 绑定元素
		binding = {  	// 包含指令属性的对象
			name 							// 指令名
			value							// 指令的绑定值, v-focus='1 + 1' 的绑定值是 2
			oldValue					// 上一个绑定值, 仅在update和componentUpdated中可用
			expression				// 字符串形式的指令表达式, v-focus='1 + 1' 的值为 '1 + 1'
			arg								// 传给指令的参数, v-focus:foo 中,参数为 'foo'
			modifiers					// 一个包含修饰符的对象, v-focus.bar 中, 为{bar: true}
		}
		vnode					// 当前虚拟节点
		oldVnode			// 上一个虚拟节点, 仅在update和componentUpdated中可用
	}
	// 当被绑定的元素插入到 父节点 时(不一定已被插入到文档中)调用
	inserted() {},
	// 组件的VNode更新时调用
	update() {}

	// 指令所在组件的VNode及其子VNode全部更新后调用
	componentUpdated() {}

	// 指令解绑时调用
	unbind() {}
})

// 2.局部注册
new Vue({
	directives: {
		focus: {
				// 指令的定义
				inserted: function (el) {
				el.focus()
				}
		}
	}
})
```

### 动态指令参数

```html
<input v-dir:[arg]="value" />
```

### 定义指令时用函数代替对象

用这样的简写方式时函数的参数分别是: dom 元素, bind 钩子函数, 虚拟节点, 上一个虚拟节点

```js
Vue.directive("color-swatch", function(el, binding, VNode, oldVNode) {
  el.style.backgroundColor = binding.value;
});
```

## 插件

> 插件对象必须暴露一个 install 方法

```js
// 定义
var plugin = {
  install() {
    Vue.mixin();
    Vue.getSelf = function() {};
    Vue.myName = "jjj";
    Vue.prototype.$fn = function() {};
  },
};

// 使用
Vue.use(plugin);
```

## 过滤器

1. 过滤器可以在插值表达式( {{}} )和 v-bind 表达式里使用,用管道符号( | )指示
2. 全局过滤器和局部过滤器重名时会采用局部过滤器

```js
// 局部定义
new Vue({
  filters: {
    cap(value) {
      // 一参总是待过滤文本,如果通过函数的方式使用,后面的参数为传入函数的参数
      return value + 2;
    },
  },
});

// 全局定义
Vue.filter("cap", function(value) {
  return value;
});
```

```html
<!-- 在插值表达式中使用 -->
<div>{{str | cap}}</div>

<!-- 在v-bind表达式中使用 -->
<div :name="str | cap"></div>

<!-- 可以接收参数 -->
<!-- cap是定义好的一个过滤器函数,其中的参数会跟在msg之后传入过滤器函数 -->
<div>{{msg | cap('zh')}}</div>
<!-- filter 接收到的参数为:　('msg','zh') -->
```

## render 函数

1. render 函数接收一个参数, 这个参数是创建虚拟节点的函数,一般写作 createElement,简写 h
2. h 函数接收三个参数,(标签名,属性对象,子虚拟节点)
3. h 函数返回创建好的虚拟节点,render 函数根据返回的虚拟节点来渲染真实 dom

### createElement 函数的参数

1. 一参可以是 一个标签名, 组件选项对象, resolve 了上述任何一种的一个 async 函数

```js
new Vue({
  render(createElement) {
    createElement("div"); // 直接传入一个表情名
    createElement({
      template: "<div>hello</div>", // 传入一个组件对象
    });
  },
});
```

2. 二参是一个属性对象

```js
new Vue({
  render(createElement) {
    return createElement("div", {
      class: "foo", // 把文本直接添加到class上
      class: ["foo", "bar"], // 把数组内的所有元素都添加到class上
      class: {
        foo: true, // 为true的属性会添加到class上
        bar: false,
      },
      style: {
        color: "red",
        fontSize: "14px",
      },

      // 添加到dom上的属性, setAttrubute
      attrs: {
        id: "foo",
        innerHTML: "<div>234234</div>",
      },

      // 组件prop
      props: {
        myProp: "bar",
      },

      // dom 原生属性 prop属性是直接绑定在dom上的属性,可通过dom[name]直接获取
      domProps: {
        innerHTML: "<div>234234</div>",
      },

      // 事件监听器, 不能加修饰符
      on: {
        click() {},
      },

      // 只能在组件中使用,监听组件的原生事件, 类似于native修饰符
      // 是指组件编译后的元素本身触发事件,  而不是在组件内用 $emit 触发的事件
      nativeOn: {},
    });
  },
});
```
