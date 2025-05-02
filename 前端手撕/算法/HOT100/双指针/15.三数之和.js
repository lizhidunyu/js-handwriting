var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let l = 0;
  const res = [];
  while (l <= nums.length - 1) {
    if (l > 0 && nums[l] === nums[l - 1]) {
      l++;
      continue;
    }
    let i = l + 1,
      j = nums.length - 1;
    while (i < j) {
      const sum = nums[l] + nums[i] + nums[j];
      if (sum === 0) {
        res.push([nums[l], nums[i], nums[j]]);
        while (i < j && nums[i] === nums[i + 1]) {
          i++;
        }
        while (i < j && nums[j] === nums[j - 1]) {
          j--;
        }
        i++;
        j--;
      } else if (sum < 0) {
        i++;
      } else if (sum > 0) {
        j--;
      }
    }
    l++;
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
