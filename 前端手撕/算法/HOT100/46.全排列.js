var permute = function (nums) {
  const res = [],
    path = [];
  const backTracking = (used) => {
    if (path.length == nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        path.push(nums[i]);
        used[i] = true;
        backTracking(used);
        path.pop();
        used[i] = false;
      }
    }
  };
  backTracking([]);
  return res;
};
