// var permute = (nums) => {
//   nums.sort((a, b) => a - b);
//   let path = [],
//     res = [],
//     len = nums.length;
//   const backTracking = (nums, len, startIndex) => {
//     res.push([...path]);
//     for (let i = startIndex; i < len; i++) {
//       path.push(nums[i]);
//       backTracking(nums, len, startIndex + 1);

//       path.pop(nums[i]);
//     }
//   };
//   backTracking(nums, len, 0);
//   return res;
// };

var permute = (nums) => {
  let res = [],
    path = [];

  function backTracking(nums, usedNums) {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!usedNums[i]) {
        usedNums[i] = true;
        path.push(nums[i]);
        backTracking(nums, usedNums);
        path.pop();
        usedNums[i] = false;
      }
    }
  }
  backTracking(nums, []);
  return res;
};

const nums = [1, 2, 3];
console.log(permute(nums));
