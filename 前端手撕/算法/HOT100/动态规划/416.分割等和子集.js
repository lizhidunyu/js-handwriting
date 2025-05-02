var canPartition = function (nums) {
  const sum = nums.reduce((cur, acc) => cur + acc, 0);
  if (sum % 2 !== 0) return false;
  const dp = new Array(sum / 2 + 1).fill(0);
  for (let i = 0; i <= nums.length; i++) {
    for (let j = sum / 2; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }
  console.log(dp);

  return false;
};

console.log(canPartition([1, 5, 11, 5]));
