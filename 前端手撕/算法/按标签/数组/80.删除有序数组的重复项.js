var removeDuplicates = function (nums) {
  let slow = (fast = 0);
  let count = 0;
  while (fast < nums.length) {
    // console.log("nums:", nums, "slow:", slow, "fast:", fast);
    while (nums[fast] === nums[fast + 1]) {
      count++;
      fast++;
    }
    if (count >= 1) {
      nums[slow] = nums[slow + 1] = nums[fast];
      count = 0;
      slow += 2;
      fast++;
    } else {
      nums[slow] = nums[fast];
      count = 0;
      slow++;
      fast++;
    }
  }
  while (slow <= nums.length) {
    nums.pop();
    slow++;
  }
  return nums;
};

// console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));

// 题解
var removeDuplicates = function (nums) {
  let slow = 0; // 慢指针
  for (let fast = 0; fast < nums.length; fast++) {
    // 保证每个元素最多出现两次
    if (slow < 2 || nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow; // 返回新长度
};
