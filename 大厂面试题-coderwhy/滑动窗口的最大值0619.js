var maxSlidingWindow = function (nums, k) {
  const deque = [],
    res = [],
    len = nums.length;
  for (let i = 0; i < len; i++) {
    while (nums[i] > nums[deque[deque.length - 1]]) {
      deque.pop();
    }
    deque.push(i);

    while (deque[0] <= i - k) {
      deque.shift();
    }

    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }

  return res;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
