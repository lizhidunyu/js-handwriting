var maxProduct = function (nums) {
  const len = nums.length;
  let res = nums[0];
  // 维护一个当前最大和当前最小的乘积和
  let prevMin = nums[0];
  let prevMax = nums[0];
  let temp1 = 0,
    temp2 = 0;
  // 从1开始
  for (let i = 1; i < len; i++) {
    temp1 = prevMin * nums[i];
    temp2 = prevMax * nums[i];
    prevMin = Math.min(temp1, temp2, nums[i]);
    prevMax = Math.max(temp1, temp2, nums[i]);
    res = Math.max(prevMax, res);
  }
  return res;
};

// console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 3, -4]));
