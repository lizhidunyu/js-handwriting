var threeSumClosest = function (nums, target) {
  const addSumArr = [];
  let slow = 0,
    fast = 1;
  while (fast < nums.length - 1) {
    let p = fast + 1;
    while (p < nums.length) {
      addSumArr.push(nums[slow] + nums[fast] + nums[p]);
      p++;
    }
    slow++;
    fast++;
  }
  let nearestNum = -Infinity;
  let targetIndex;
  addSumArr.forEach((item, index) => {
    if (nearestNum > item - target) {
      nearestNum = item - target;
      targetIndex = index;
    } else {
    }
  });
  return nums[targetIndex];
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));

[-1, 1, 1, 2, -4];
