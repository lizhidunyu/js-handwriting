var uniquePaths = function (m, n) {
  const dp = new Array(m).fill(0).map((item) => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  //   console.log(dp);
  for (let i = 1; i < m; i++) {
    for (j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  //   console.log(dp);
  return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 7));
