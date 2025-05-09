var rob = function (nums) {
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  if (nums.length <= 2) return dp[nums.length - 1];
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    console.log(dp);
  }
  return Math.max(...dp);
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([0]));
