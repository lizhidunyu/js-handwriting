const findNum = (nums, target) => {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
};
console.log(findNum([1, 2, 3, 4, 5, 6, 7], 3));
