// 9"07
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const index = nums.indexOf(target - nums[i], i + 1);
    if (index !== -1) {
      return [i, index];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
