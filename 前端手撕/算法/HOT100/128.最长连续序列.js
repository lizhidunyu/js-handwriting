var longestConsecutive = (nums) => {
  nums.sort((a, b) => a - b);
  console.log(nums);
  let res = [];
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    // 要不就加入当前序列
    if (nums[i] === res.at(-1) + 1 || nums[i] === res.at(-1)) {
      res.push(nums[i]);
    } else {
      // 要不就清空，重新开辟新的序列
      maxLen = Math.max(maxLen, new Set(res).size);
      res = [nums[i]];
    }
  }
  maxLen = Math.max(maxLen, new Set(res).size);

  return maxLen;
};

console.log(longestConsecutive([0, 1, 1, 2]));
