var findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a);
  console.log(nums);
  //   let rank = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (rank === k) {
  //       return nums[i];
  //     }
  //     rank++;
  //   }
  return nums[k - 1];
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
