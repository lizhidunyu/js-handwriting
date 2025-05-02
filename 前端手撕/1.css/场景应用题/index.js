function mySort(nums) {
  let i = 0,
    j = nums.length - 1;
  while (i < j) {
    if (nums[i] === 0 && nums[j] === 0) {
      i++;
    } else if (nums[i] === 1 && nums[j] === 1) {
      j--;
    } else {
      if (nums[i] === 1 && nums[j] === 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
      i++;
      j--;
    }
  }
  console.log(nums);
}
console.log(mySort([1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0]));
