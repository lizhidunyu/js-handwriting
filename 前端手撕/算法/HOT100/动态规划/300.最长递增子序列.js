var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
