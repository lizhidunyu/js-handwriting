var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const index = nums.indexOf(target - nums[i], i + 1);
    if (index !== -1) {
      return [i, index];
    }
  }
};

const nums = [3, 2, 4],
  target = 6;
console.log(twoSum(nums, target));
