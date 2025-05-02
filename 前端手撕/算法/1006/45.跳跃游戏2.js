var jump = function (nums) {
  if (nums.length === 1) return 0;
  // 初始化：[0,0,0,0,0]
  const dp = new Array(nums.length).fill(0);
  console.log(dp);
  for (let i = 0; i < nums.length; i++) {
    if (dp[nums.length - 1] !== 0) {
      // 注意只有维护的最小值数组，才会取得最后一个元素也是最小值
      return dp.at(-1);
    }
    // 还是利用dp数组进行求解规律
    const len = nums[i];
    // [1,1,0,0,0]
    for (let j = i + 1; j <= Math.min(i + len, nums.length - 1); j++) {
      if (dp[j] !== 0) {
        // [1,1,2,2,2]
        // 这里一直维护的是一个最小值的数组
        dp[j] = Math.min(dp[j], dp[i] + 1);
      } else {
        dp[j] = dp[i] + 1;
      }
    }
    console.log("dp:", dp);
  }
};

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 1]));
