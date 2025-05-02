// 超时
// const minSubArrayLen = (target, nums) => {
//   let len = nums.length,
//     prefixSum = 0,
//     minLen = Infinity;
//   const dp = Array.from({ length: len }, () => 0);
//   //   console.log(dp);
//   for (let i = 0; i < len; i++) {
//     prefixSum += nums[i];
//     dp[i + 1] = prefixSum;
//     console.log(dp, i);
//     if (dp[i + 1] < target) {
//       continue;
//     } else {
//       for (let j = i + 1; j >= 0; j--) {
//         if (dp[i + 1] - dp[j] >= target) {
//           console.log("***");
//           minLen = Math.min(minLen, i + 1 - j);
//           console.log("***");
//           break;
//         }
//       }
//     }
//   }
//   console.log(dp);
//   return minLen === Infinity ? 0 : minLen;
// };

// 滑动窗口
// MARK：没写出来
const minSubArrayLen = (target, nums) => {
  let l = (r = 0),
    // 注意这里是+1
    len = nums.length + 1,
    minLen = len,
    sum = 0;
  while (r < len) {
    sum += nums[r];
    while (sum >= target) {
      minLen = Math.min(minLen, r - l + 1);

      sum -= nums[l];
      l++;
    }
    r++;
  }
  return minLen === len ? 0 : minLen;
};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
