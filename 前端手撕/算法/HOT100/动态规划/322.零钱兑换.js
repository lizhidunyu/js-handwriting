var coinChange = function (coins, amount) {
  // 数组长度都是容量+1
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  // 先背包后物品
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      i - coins[j] >= 0 && (dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1));
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
