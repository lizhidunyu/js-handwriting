var singleNumber = function (nums) {
  let ans;
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i];
  }
  return ans;
};
