function getMax(target, array) {
  let max = -Infinity;

  function dfs(curVal, index) {
    // 更新全局最大值
    max = Math.max(max, curVal);
    // 限制递归深度（与 array.length 等长）
    if (index === array.length) return;

    for (let i = 0; i < array.length; i++) {
      const nextVal = curVal * 10 + array[i];
      // 如果已经 >= target，就剪枝
      if (nextVal >= target) continue;
      // 递归下一位
      dfs(nextVal, index + 1);
    }
  }

  // 从 0 开始，深度 0
  dfs(0, 0);
  return max;
}

// 示例
console.log(getMax(2533, [1, 2, 4, 9])); // 2499
console.log(getMax(2222, [1, 2, 4, 9])); // 2222
console.log(getMax(3, [5, 6])); // -Infinity（拼不出任何 <3 的数）
