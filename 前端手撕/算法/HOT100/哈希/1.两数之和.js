var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const char = nums[i];
    if (map.has(target - char)) {
      return [map.get(target - char), i];
    }
    map.set(char, i);
  }
};

console.log(twoSum([3, 3], 6));
