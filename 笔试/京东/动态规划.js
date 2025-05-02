const getMinPath = (arr, m, n) => {
  const arr = arr.map((item) => item.split(""));
  const dp = new Array(m).fill(0).map((item) => new Array(n).fill(Infinity));
  for (let j = 0; j < n; j++) {
    if (arr[0][j] === "*") {
      dp[0][j] = 1;
    }
  }
  for (let i = 0; i < m; i++) {
    if (arr[i][0] === "*") {
      dp[i][0] = 1;
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (arr[i][j] === "*") {
        const subArr1 = [],
          subArr2 = [];
        for (let m = 0; m <= i; m++) {
          subArr1.push(dp[m][j]);
        }
        for (let n = 0; n <= j; n++) {
          subArr2.push(dp[i][n]);
        }
        dp[i][j] = Math.min(Math.min(...subArr1) + 1, Math.min(...subArr2) + 1);
      }
    }
  }
  return dp[m - 1][n - 1] === Infinity ? -1 : dp[m - 1][n - 1];
};

console.log(getMinPath(["**##", "#***", "*#**"], 3, 4));
console.log(getMinPath(["*#*#", "*#*#", "#*#*"], 3, 4));
