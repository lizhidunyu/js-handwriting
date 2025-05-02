var minDistance = function (word1, word2) {
  const m = word1.length,
    n = word2.length;
  const dp = new Array(m + 1).fill(0).map((item) => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let i = 1; i <= n; i++) {
    dp[0][i] = i;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // 注意这里的i-1实际上对应的就是i
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 来自于三个方向的最小值+1
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
      }
    }
  }
  //   console.log(dp);
  return dp[m - 1][n - 1];
};

console.log(minDistance("horse", "ros"));
