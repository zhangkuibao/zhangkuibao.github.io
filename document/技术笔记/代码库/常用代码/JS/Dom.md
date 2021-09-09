<author-info date="1631168608607"></author-info>

# JS 处理 Dom 常用方法

## 获取元素相对于页面的位置

元素相对于页面的位置 = 元素的相对位置与它所有父元素的相对位置的累加之和。

```js
function getOffsetByDom(elem) {
  var left = elem.offsetLeft,
    top = elem.offsetTop;
  while ((elem = elem.offsetParent)) {
    left += elem.offsetLeft;
    top += elem.offsetTop;
  }
  return {
    left,
    top,
  };
}
```
