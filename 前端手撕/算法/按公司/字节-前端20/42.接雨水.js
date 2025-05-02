// MARK: hard 第一次做

// var trap = function (height) {
//   let ans = 0;
//   const stack = [];
//    debugger;
//   for (let i = 0; i < height.length; i++) {
//     while (stack.length && height[i] >= height[stack.at(-1)]) {
//       const bottomH = height[stack.pop()];
//       if (stack.length === 0) {
//         break;
//       }
//       const left = stack.at(-1);
//       const dH = Math.min(height[left], height[i]) - bottomH;
//       ans += dH * (i - left - 1);
//     }
//     stack.push(i);
//   }
//   return ans;
// };

// var trap = function (height) {
//   let ans = 0;
//   const stack = [];

//   for (let i = 0; i < height.length; i++) {
//     while (stack.length && height[i] >= height[stack.at(-1)]) {
//       const bottomH = height[stack.pop()];
//       if (stack.length === 0) {
//         break;
//       }
//       const left = stack.at(-1);
//       const dH = Math.min(height[left], height[i]) - bottomH;
//       ans += dH * (i - left - 1);
//     }
//     stack.push(i);
//   }

//   return ans;
// };

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// 42.接雨水
// 自己写出来的，使用相向双指针的写法
var trap = function (height) {
  let ans = 0,
    left = 0,
    right = height.length - 1;
  let preSum = 0,
    sufSum = 0;
  while (left <= right) {
    preSum = Math.max(preSum, height[left]);
    sufSum = Math.max(sufSum, height[right]);
    if (preSum < sufSum) {
      ans += preSum - height[left];
      left++;
    } else {
      ans += sufSum - height[right];
      right--;
    }
  }
  return ans;
};

// 11.盛最多水的容器
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let ans = 0;
  while (left <= right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    ans = Math.max(ans, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};
