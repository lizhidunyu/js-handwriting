var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let ans = 0;
  while (left <= right) {
    const area = Math.min(height[right], height[left]) * (right - left);
    ans = Math.max(ans, area);
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
