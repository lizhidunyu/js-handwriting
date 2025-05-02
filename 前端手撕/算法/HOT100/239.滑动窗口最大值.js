// var maxSlidingWindow = function (nums, k) {
//   let right = 0,
//     arr = [];
//   const dp = new Array(nums.length).fill(0);
//   while (right < nums.length) {
//     arr.push(nums[right++]);
//     let left = right - k;
//     if (left < 0) {
//       continue;
//     }
//     if (left == 0) {
//       dp[k - 1] = Math.max(...arr);
//     } else {
//       dp[right - 1] = Math.max(dp[right - 2], nums[right - 1]);
//       console.log("right:", right, "dp", dp);
//     }
//     arr.shift();
//   }
//   return dp.slice(k - 1);
// };

var maxSlidingWindow = function (nums, k) {
  const queue = [],
    res = [],
    len = nums.length;
  for (let i = 0; i < len; i++) {
    while (nums[i] > nums[queue.at(-1)]) {
      queue.pop();
    }
    if (i - k >= queue.at(0)) {
      queue.shift();
    }
    queue.push(i);
    if (i >= k - 1) {
      res.push(nums[queue.at(0)]);
    }
  }
  return res;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1], 1));
