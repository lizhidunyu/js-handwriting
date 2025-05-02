// 滑动窗口的最大值
var maxSlidingWindow = function (nums, k) {
  const dp = new Array(nums.length).fill(0),
    len = nums.length;
  dp[k - 1] = Math.max(...nums.slice(0, k));
  console.log(dp);
  for (let i = k; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i]);
    // console.log(dp);
  }
  return dp.slice(k - 1);
};

const nums = [1, -1];
const k = 1;
console.log(maxSlidingWindow(nums, k));
