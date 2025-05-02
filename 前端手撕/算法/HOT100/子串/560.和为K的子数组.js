var subarraySum = function (nums, k) {
  const map = new Map([[0, 1]]);
  let prefixSum = 0,
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    const char = nums[i];
    prefixSum += char;
    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }
  return count;
};

console.log(subarraySum([1, 1, 1], 2));
