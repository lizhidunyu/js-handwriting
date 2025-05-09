var fib = function (n) {
  const dp = new Array(n).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  if (n < 2) return dp[n];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
