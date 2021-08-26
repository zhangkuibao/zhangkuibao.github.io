# JS 方法

## cookie

```js
// 设置cookie值
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

// 获取cookie值
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

// 检测cookie值
function checkCookie() {
  var username = getCookie("username");
  if (username != "") {
    alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}
```

## ip 排序

```js
// ip排序
function ipsSort(ips) {
  // ips =  ["10.10.15.130", "10.10.16.40", "127.0.0.1", "192.168.1.123", "192.168.1.38", "192.168.1.39"];
  // 升序
  ips.sort(function(a, b) {
    a = a.trim(); // 空格会影响排序
    b = b.trim();
    var arr1 = a.split(".");
    var arr2 = b.split(".");
    for (var i = 0; i < 4; i++) {
      if (arr1[i] > arr2[i]) {
        return 1;
      } else if (arr1[i] < arr2[i]) {
        return -1;
      }
    }
  });
  return ips;
}
```

## 获取浏览器信息

```js
// 获取浏览器信息
function getBrowserInfo() {
  var inBrowser = typeof window !== "undefined";
  var inWeex = typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
  var isEdge = UA && UA.indexOf("edge/") > 0;
  var isAndroid =
    (UA && UA.indexOf("android") > 0) || weexPlatform === "android";
  var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === "ios";
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/);
  return {
    inBrowser,
    inWeex,
    weexPlatform,
    UA,
    isIE,
    isIE9,
    isEdge,
    isAndroid,
    isIOS,
    isChrome,
    isPhantomJS,
    isFF,
  };
}
```

## 生成范围内随机数

```js
// 生成范围内的随机数
function getRandom(left, right) {
  if (right < left) return 0;
  if (left >= 0) {
    return Math.random() * (right - left) + left;
  }
}
```

## 获取图片原始宽高

```js
// 获取图片原始宽高
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    var image = new Image();

    image.onload = function() {
      var obj = {
        w: image.naturalWidth,
        h: image.naturalHeight,
      };
      resolve(obj);
    };

    image.onerror = function() {
      reject(new Error("Could not load image at " + url));
    };
    image.src = url;
  });
}
```

## 数字前补零

```js
/*
 *功能: {在数字前以0补全指定位数}
 *输入: {number}    (原数据,指定位数)
 *输出: {string}	"04"
 */
function supNumber(num, x) {
  if ((num + "").length < x) {
    return "0" + num;
  } else {
    return num;
  }
}
```

## 交换字符串中的两个单词

```js
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
// Smith, John
```

## 使用行内函数来修改匹配到的字符

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match) {
    return "-" + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

## 调度器

**题目描述：**实现一个带并发限制的异步调度器，保证同时运行的任务最多有两个。完善下面代码中的 `Scheduler` 类，使得程序能正常输出。

```js
class Scheduler {
  add(promiseCreator) {}
  // ...
}
const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
// 输出：2 3 1 4
// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4
```

**代码实现：**

```js
class Scheduler {
  constructor(maxNum) {
    this.maxNum = maxNum;
    this.taskList = []; // 待执行任务队列
    this.count = 0; // 当前执行数
  }

  async add(promiseCreator) {
    // 入栈函数
    if (this.count >= this.maxNum) {
      await new Promise((resolve) => {
        this.taskList.push(resolve); // 当resolve被执行时才会接着执行
      });
    }
    this.count++;
    const result = await promiseCreator(); // 执行定时器,即() => timeout(time), 返回值也是一个promise对象
    this.count--;
    if (this.taskList.length) {
      this.taskList.shift()(); // 待执行队列中有值的话取出第一个并执行(这里取出来的是上面的resolve,执行之后该resolve对应的函数就开始执行)
    }
    return result;
  }
}
```

## 待整理

```js
/*
 *功能: {在数字前以0补全指定位数}
 *输入: {number}    (原数据,指定位数)
 *输出: {string}	"04"
 */
function supNumber(num, x) {
  if ((num + "").length < x) {
    return "0" + num;
  } else {
    return num;
  }
}

// cookie
// 设置cookie值
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

// 获取cookie值
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

// 检测cookie值
function checkCookie() {
  var username = getCookie("username");
  if (username != "") {
    alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}

// ip排序
function ipsSort(ips) {
  // ips =  ["10.10.15.130", "10.10.16.40", "127.0.0.1", "192.168.1.123", "192.168.1.38", "192.168.1.39"];
  // 升序
  ips.sort(function(a, b) {
    a = a.trim(); // 空格会影响排序
    b = b.trim();
    var arr1 = a.split(".");
    var arr2 = b.split(".");
    for (var i = 0; i < 4; i++) {
      if (arr1[i] > arr2[i]) {
        return 1;
      } else if (arr1[i] < arr2[i]) {
        return -1;
      }
    }
  });
  return ips;
}

// 获取浏览器信息
function getBrowserInfo() {
  var inBrowser = typeof window !== "undefined";
  var inWeex = typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
  var isEdge = UA && UA.indexOf("edge/") > 0;
  var isAndroid =
    (UA && UA.indexOf("android") > 0) || weexPlatform === "android";
  var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === "ios";
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/);
  return {
    inBrowser,
    inWeex,
    weexPlatform,
    UA,
    isIE,
    isIE9,
    isEdge,
    isAndroid,
    isIOS,
    isChrome,
    isPhantomJS,
    isFF,
  };
}

// 生成范围内的随机数
function getRandom(left, right) {
  if (right < left) return 0;
  if (left >= 0) {
    return Math.random() * (right - left) + left;
  }
}

// 获取图片原始宽高
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    var image = new Image();

    image.onload = function() {
      var obj = {
        w: image.naturalWidth,
        h: image.naturalHeight,
      };
      resolve(obj);
    };

    image.onerror = function() {
      reject(new Error("Could not load image at " + url));
    };
    image.src = url;
  });
}
```
