var subsets = function (nums) {
  let res = [],
    path = [],
    len = nums.length;
  const backTracking = (nums, len, startIndex) => {
    res.push([...path]);
    for (let i = startIndex; i < len; i++) {
      path.push(nums[i]);
      backTracking(nums, len, i + 1);
      path.pop();
    }
  };
  backTracking(nums, len, 0);
  return res;
};

console.log(subsets([0]));
