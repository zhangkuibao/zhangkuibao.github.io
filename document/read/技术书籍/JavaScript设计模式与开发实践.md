<author-info date="1646037555952"></author-info>

# JavaScript 设计模式与开发实践

作者：曾探

出版社：人民邮电出版社

出版日期：2015 年 5 月

## 基础知识

### 闭包和内存管理

[闭包和内存管理](http://127.0.0.1:5501/index.html#/document/%E6%8A%80%E6%9C%AF%E7%AC%94%E8%AE%B0/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/JavaScript/%E9%97%AD%E5%8C%85%E5%92%8C%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86?id=%e9%97%ad%e5%8c%85%e5%92%8c%e5%86%85%e5%ad%98%e7%ae%a1%e7%90%86)

## 设计模式

### 单例模式

单例模式要求每次调用都返回同一个对象，惰性单例模式则是只在有调用的情况下才创建单例对象。

**例子：登录弹窗。**

只在按钮点击的时候创建弹窗的 `DOM`，之后 `createLogLayer` 方法返回的都是同一个对象。

- 单例工厂函数

```js
function singleFactory(fn) {
  let result = null;
  return function () {
    if (!result) {
      result = fn.apply(this, arguments);
    }
    return result;
  };
}
```

- 业务逻辑代码

```js
function createLogLayer() {
  var div = document.createElement("div");
  div.innerHTML = "我是登录浮窗";
  div.style.display = "none";
  document.body.appendChild(div);
  return div;
}

var createSingleLoginLayer = singleFactory(createLogLayer);

btn.onclick = () => {
  let loginLayer = createSingleLoginLayer();
  loginLayer.style.display = "block";
};
```

### 策略模式

> 在函数作为一等对象的语言中，策略模式是隐形的。`strategy` 就是值为函数的变量。 ——Peter Norvig

策略模式是指通过封装一系列的算法，根据不同的策略调用对应的算法。

和 `编写可维护的JavaScript` 中提出的[隔离应用逻辑](http://127.0.0.1:5501/index.html#/document/%E9%98%85%E8%AF%BB%E7%AC%94%E8%AE%B0/%E6%8A%80%E6%9C%AF%E4%B9%A6%E7%B1%8D/%E7%BC%96%E5%86%99%E5%8F%AF%E7%BB%B4%E6%8A%A4%E7%9A%84JavaScript?id=%e9%9a%94%e7%a6%bb%e5%ba%94%e7%94%a8%e9%80%bb%e8%be%91)有些相似。行为是对指令和处理函数进行分离；目的都是提高 `策略` 也就是具体处理函数的复用性以及可扩展性。

**例子：Angular 的表单校验。**

```js
class HeroForm {
  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i), // <-- Here's how you pass in the custom validator.
      ]),
      alterEgo: new FormControl(this.hero.alterEgo),
      power: new FormControl(this.hero.power, Validators.required),
    });
  }
}
```

### 代理模式

代理模式可以让目标保持单一职责原则，比如一个求乘积函数应该专注于求乘积，添加缓存的操作可以通过添加一个缓存代理来实现。

代理模式就是通过一个中间对象去访问目标对象，而不是直接操作目标对象。

- 保护代理：控制不同权限的对象对目标对象的访问。
- 虚拟代理：理把一些开销很大的对象，延迟到真正需要它的时候才去创建。

`Vue Store` 中对修改数据的操作就是一种保护代理：用户只能通过定义 `mutations` 和 `actions` 方法去修改 `state` 中的数据。

**例子：使用代理缓存求乘积函数。**

```js
// 求乘积函数
function mult() {
  var result = 1;
  for (var i = 0, l = arguments.length; i < l; i++) {
    result = result * arguments[i];
  }
  return result;
}

// 缓存代理函数
var catchProxy = function () {
  var cache = {};
  return function () {
    var args = Array.prototype.join.call(arguments, ",");
    if (args in cache) {
      return cache[args];
    }
    return (cache[args] = mult.apply(this, arguments));
  };
};

let proxyMult = catchProxy(mult);

proxyMult(1, 2, 3, 4); // 输出：24
proxyMult(1, 2, 3, 4); // 输出：24
```

#### 保证代理和本体接口的一致性

对于代理对象的使用者而言，代理接收请求的过程应该是透明的，这样做有两个好处。

- 用户可以放心地请求代理，他只关心是否能得到想要的结果。
- 在任何使用本体的地方都可以替换成使用代理。

### 发布-订阅模式

发布—订阅模式又叫观察者模式，它定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。

`Vue 的事件总线模式` 就是一种发布-订阅模式。
