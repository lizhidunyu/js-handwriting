// 8:50
var removeDuplicates = function (nums) {
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index; // 返回数组的长度
};

console.log(removeDuplicates([1, 1, 2]));
