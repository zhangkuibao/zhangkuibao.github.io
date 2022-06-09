<author-info date="1633750345856"></author-info>

# ios 滚动问题

## 快速滑动会带动整个 webview 移动

### 场景

在顶部下滑出现空白时快速上划，这时页面没有正常向下滚动而是在底部出现空白。

### 解决方案

去掉顶级元素（html、body）的 overflow 属性。
