var minSubArrayLen = function (target, nums) {
  let sum = 0;
  let minLen = Infinity;
  let right = 0,
    left = 0;
  while (right < nums.length) {
    // 扩展右窗口
    sum += nums[right];
    // 推拉左窗口
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
    right++;
  }
  return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
