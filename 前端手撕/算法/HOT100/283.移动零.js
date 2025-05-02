var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = i;
    while (j >= 0) {
      if (nums[j - 1] === 0) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      }
      j--;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 0, 3, 12, 0, 0]));
