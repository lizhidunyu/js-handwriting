var searchMatrix = function (matrix, target) {
  const m = matrix.length,
    n = matrix[0].length;
  let i = 0,
    j = n - 1;
  // 从右上角开始移动
  while (i < m && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    }
    if (matrix[i][j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return false;
};
