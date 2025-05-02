var maxLexicographicalArray = function (nums, k) {
  const n = nums.length;
  // 计算实际需要移动的次数，避免k大于数组长度
  k = k % n;

  // 如果k为0，直接返回原数组，因为没有必要移动
  if (k === 0) return nums;

  // 用于存储所有可能的右移数组
  let maxArr = nums.slice();

  // 枚举所有可能的右移方式
  for (let i = 0; i < n; i++) {
    // 计算当前右移后的数组
    let rotatedArr = [...nums.slice(n - i), ...nums.slice(0, n - i)];

    // 比较字典序，更新最大数组
    if (rotatedArr.join("") > maxArr.join("")) {
      maxArr = rotatedArr;
    }
  }

  return maxArr;
};

// 示例用法
const nums = [3, 1, 4, 1, 5, 9];
const k = 2;

const result = maxLexicographicalArray(nums, k);
console.log(result); // 输出字典序最大的右移数组
