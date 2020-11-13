## BOM
### 一、window对象
> 在浏览器中 `window` 对象表示浏览器的实例,既是访问浏览器窗口的接口,也是 `ECMAScript` 规定的 `Global` 对象
1. 直接用 `var | let | const` 定义的变量 `[Configurable]` 特性为 `false`, 不可用 `delete` 操作符删除
2. 访问未声明的变量会报错,但是用 `window[]` 的形式访问则不会报错