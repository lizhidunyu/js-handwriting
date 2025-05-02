var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let prefix = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prefix = Math.max(nums[i], prefix + nums[i]);
    maxSum = Math.max(prefix, maxSum);
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
