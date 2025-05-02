var lengthOfLIS = function (nums) {
  const len = nums.length;
  const dp = new Array(len).fill(1);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]));
