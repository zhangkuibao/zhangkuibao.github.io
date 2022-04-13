// dp[i] 和 dp[i - 1] 的关系
// coins = [1, 2, 5];
// amount = 11
// 假设最后一枚硬币取的是1，则dp[i] = dp[11 - 1] + 1 = dp[10] + 1
// 假设最后一枚硬币取的是2，则dp[i] = dp[11 - 2] + 1 = dp[9] + 1
// 假设最后一枚硬币取的是5，则dp[i] = dp[11 - 5] + 1 = dp[6] + 1
// 取最小值作为 dp[i] 的值，dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)

var coinChange = function (coins, amount) {
  if(amount === 0) {
    return 0
  }

  const dp = new Array(amount + 1).fill(Infinity);
  const minCoins = Math.min(...coins);

  if (amount < minCoins) {
    return -1;
  }

  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if(i - coins[j] >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};

let result = coinChange([1, 2, 5], 11);
console.log(result);
