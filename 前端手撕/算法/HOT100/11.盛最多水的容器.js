var maxArea = function (heights) {
  let ans = 0;
  let left = 0,
    right = heights.length - 1;
  while (left < right) {
    let area = (right - left) * Math.min(heights[left], heights[right]);
    ans = Math.max(ans, area);
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};

const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(heights));
