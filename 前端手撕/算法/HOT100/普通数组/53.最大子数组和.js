var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let temp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    temp = Math.max(temp + nums[i], nums[i]);
    maxSum = Math.max(maxSum, temp);
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
