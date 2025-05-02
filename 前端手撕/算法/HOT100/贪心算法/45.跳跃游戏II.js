// var jump = function (nums) {
//   const len = nums.length;
//   const dp = new Array(len).fill(Infinity);
//   dp[0] = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let cover = 0;
//     while (cover <= nums[i] && i + cover <= len - 1) {
//       dp[i + cover] = Math.min(dp[i + cover], (dp[i] || 0) + 1);
//       cover++;
//     }
//   }
//   return dp[len - 1];
// };

var jump = function (nums) {
  const len = nums.length;
  const dp = new Array(len).fill(Infinity);
  // dp数组的第一个元素是0
  dp[0] = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 1; j <= nums[i]; j++) {
      if (i + j < len) {
        dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
      }
    }
  }
  return dp[len - 1];
};

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));
console.log(jump([1, 1, 1, 1]));
