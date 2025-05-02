var longestConsecutive = function (nums) {
  nums.sort((a, b) => Number(a) - Number(b));
  if (nums.length <= 1) return nums.length;
  console.log(nums);
  let i = 0;
  let maxLen = 0;
  let curLen = 1;
  while (i < nums.length) {
    if (i >= 1 && nums[i] === nums[i - 1] + 1) {
      curLen++;
    } else if (nums[i] !== nums[i - 1]) {
      curLen = 1;
    }
    maxLen = Math.max(maxLen, curLen);
    i++;
  }
  return maxLen;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([1, 2, 0, 1]));
