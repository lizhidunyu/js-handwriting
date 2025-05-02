const getTargetStr = (num) => {
  const dp = new Array(num).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  let sum = dp[1];
  for (let i = 2; i <= num; i++) {
    dp[i] = (sum + dp[i - 1]) / (i - 1);
  }
  console.log(dp);

  return Math.floor(dp[num]);
};
console.log(getTargetStr(10));
