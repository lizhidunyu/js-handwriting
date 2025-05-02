var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length,
    n = text2.length;
  const dp = new Array(n).fill(0).map((item) => new Array(m).fill(0));
  dp[0][0] = text1[0] === text2[0] ? 1 : 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (text1[j] === text2[i]) {
        dp[i][j] = (i >= 1 && j >= 1 ? dp[i - 1][j - 1] : 0) + 1;
      } else {
        dp[i][j] = Math.max(
          i >= 1 ? dp[i - 1][j] : 0,
          j >= 1 ? dp[i][j - 1] : 0
        );
      }
    }
  }
  return dp[n - 1][m - 1];
};

console.log(longestCommonSubsequence("bl", "yby"));
