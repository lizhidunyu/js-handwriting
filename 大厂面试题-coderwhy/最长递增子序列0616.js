// var lengthOfLIS = function (nums) {
//   const lens = nums.length;
//   const dp = new Array(lens).fill(1);
//   let maxLen = dp[0];
//   //   console.log(dp);
//   for (let i = 1; i < lens; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//     maxLen = Math.max(maxLen, dp[i]);
//   }
//   return maxLen;
// };

var lengthOfLIS = function (nums) {
  const lens = nums.length;
  const dp = new Array(lens).fill(1);
  for (let i = 0; i < lens; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
