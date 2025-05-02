var maxAreaOfIsland = function (grid) {
  let m = grid.length,
    n = grid[0].length;
  let maxArea = 0;

  const dfs = (i, j) => {
    // 判断边界条件，递归的出口
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] !== 1) {
      return 0;
    }
    // 记录访问足迹
    if (grid[i][j] === 2) {
      return 0;
    }
    grid[i][j] = 2;
    // 递归抛出的值
    return 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1);
  };

  // 遍历二维数组，找到入口
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(i, j));
      }
    }
  }
  return maxArea;
};
