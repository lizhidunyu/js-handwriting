var uniquePaths = function (m, n) {
  const dp = new Array(m).fill(0).map((item) => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  //   console.log(dp);
  return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 7));
