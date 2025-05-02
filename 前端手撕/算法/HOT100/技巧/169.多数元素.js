const majorityElement = (nums) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  for (const [key, value] of map) {
    if (value > nums.length / 2) {
      return key;
    }
  }
};
console.log(majorityElement([3, 2, 3]));
