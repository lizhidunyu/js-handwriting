// 超出时间限制
// var canJump = function (nums) {
//   const len = nums.length;
//   const dp = new Array(len).fill(false);
//   dp[0] = true;
//   for (let i = 0; i < len; i++) {
//     if (dp[i] === false) {
//       return false;
//     }
//     let step = 0;
//     while (step <= nums[i]) {
//       dp[i + step] = true;
//       step++;
//     }
//     // console.log(dp);
//   }
//   return dp[len - 1];
// };

// 启发：实际上根本不用维护一个数组，维护一个边界就好
// 像我第一种写法实际上造成很多浪费，还要填充一个dp数组，这样只需要维护一个边界cover
var canJump = function (nums) {
  let cover = 0;
  for (let i = 0; i < nums.length; i++) {
    if (cover < i) {
      return false;
    }
    if (cover >= nums.length - 1) {
      return true;
    }
    cover = Math.max(cover, i + nums[i]);
  }
  return false;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
