/**
 * @param {string} s
 * @return {number}
 */

// dp[i] 为组成i所需要的最小完全平方数的数量
var numSquares = function (n) {
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    dp[i] = i; // 最坏的情况，由若干个1组成该数字
    // 能组成i的平方数必然小于sqrt(9)，如：能组成9的完全平方数必然小于3。
    for (let j = 1; i - j * j >= 0; j++) {
      // j * j 是一个完全平方数，则组成 j * j 的最少完全平方数的个数为 1（j）
      // 此时（将 i 分为 i - j * j 和 j * j）组成 i 的最小完全平方数数量等于组成 i - j * j 的最小平方数加 1，则：dp[i] = dp[i - j * j] + 1
      // 如果当前组合的完全平方数个数少于当前记录的数量，则更新dp[i]
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
};

let result = numSquares(999);
console.log(result);
