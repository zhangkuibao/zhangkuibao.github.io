/**
 * @param {string} s
 * @return {number}
 */

// f(i)表示用了i个字符进行编码的编码方式

// // s[i] 为1和2时考虑有两种编码方式
// if (s[i] === "1" || s[i] === "2") {
//   // 1. s[i]
//   // 2. s[i] + s[i + 1]
// }

// 用 f(i) 表示前i个字符的编码方式数量
// 判断最后一次解码用了s中的几个字符
// 用一个：s[i]，f(i) = f(i - 1)
// 用两个：s[i-1] s[i]，f(i) = f(i - 2)
// f(n) = f(n - 1) + f(n - 2) 

var numDecodings = function (s) {
  const n = s.length;
  const f = new Array(n).fill(0);
  if (s[0] !== "0") {
    f[0] = 1;
  }
  for (let i = 1; i < n; i++) {
    // 一位解码，s[i] 不等于0即可单独解码
    if (s[i] !== "0") {
      f[i] = f[i - 1];
    }
    // 两位解码，与前一位组合小于26即可两位解码
    if (s[i - 1] !== "0" && s[i - 1] + s[i] <= 26) {
        // 避免超出边界
      if (i === 1) {
        f[i] += 1;
      } else {
        f[i] += f[i - 2];
      }
    }
  }
  return f[n - 1];
};

let result = numDecodings("03");
console.log(result);
