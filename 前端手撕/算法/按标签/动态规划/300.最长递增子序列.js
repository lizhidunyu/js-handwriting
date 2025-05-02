var lengthOfLIS = function (nums) {
  const len = nums.length;
  const dp = new Array(len).fill(1);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }
  console.log(dp);
  return Math.max(...dp);
};

var lengthOfLTS = function (nums) {
  const len = nums.length;
  const dp = new Array(len).fill(1);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(d[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};
