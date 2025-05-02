var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  let l = 0;
  while (l < nums.length - 2) {
    if (l > 0 && nums[l] === nums[l - 1]) {
      l++;
      continue;
    }
    let i = l + 1,
      j = nums.length - 1;
    while (i < j) {
      let sum = nums[l] + nums[i] + nums[j];
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
      } else if (sum > 0) {
        j--;
      } else if (sum < 0) {
        i++;
      }
    }
    l++;
  }
  return res;
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
