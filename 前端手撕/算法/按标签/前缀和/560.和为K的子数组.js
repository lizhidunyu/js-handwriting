var subarraySum = function (nums, k) {
  const map = { 0: 1 };
  let prefixSum = 0,
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    if (map[prefixSum - k]) {
      count += map[[prefixSum - k]];
    }
    map[prefixSum] ? map[prefixSum]++ : (map[prefixSum] = 1);
  }
  return count;
};

const nums = [1, 2, 3],
  k = 3;
console.log(subarraySum(nums, k));
