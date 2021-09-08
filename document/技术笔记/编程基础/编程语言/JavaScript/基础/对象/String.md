<author-info date="1631095530159"></author-info>

# String

## 原型方法

### 字符串截取、拆分

#### str.slice(startIndex[, endIndex])

从 `startIndex` 开始截取到 `endIndex`，没有二参时提取到末尾，无参时提取整个字符串，`endIndex` 小于等于 `startIndex`时返回空串

### str.substring(index1, index2)

行为与 `slice` 一致，区别在于 `slice` 接收参数为开始索引和结束索引，`substring` 以接收参数较小的为开始索引，较大的为结束索引

### str.substr(startIndex[, length])

从 `startIndex` 开始截取指定长度，没有二参时提取到末尾，无参时提取整个字符串

### str.split([separator[, limit]])

二参 `limit` 限制返回数组的长度

用空串分割时会将每一位字符都插入到数组中

参数为正则时行为见 `RegExp` 文章

### 其他方法

### str1.concat(str12, str3)

### str.includes(subStr)

### str.repeat(3)

返回将 str 重复 3 次的新字符串

### str.toLowerCase()

### str.toUpperCase()

### str.trim()

### str.trimStart()

### str.trimEnd()
