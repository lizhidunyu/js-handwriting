var spiralOrder = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  let top = 0,
    bottom = m - 1,
    left = 0,
    right = n - 1;
  const arr = [];
  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) {
      arr.push(matrix[top][i]);
    }
    for (let i = top; i < bottom; i++) {
      arr.push(matrix[i][right]);
    }
    for (let i = right; i > left; i--) {
      arr.push(matrix[bottom][i]);
    }
    for (let i = bottom; i > top; i--) {
      arr.push(matrix[i][left]);
    }
    top++;
    bottom--;
    left++;
    right--;
  }
  if (top === bottom) {
    for (let i = left; i <= right; i++) {
      arr.push(matrix[bottom][i]);
    }
  } else if (left === right) {
    for (let i = top; i <= bottom; i++) {
      arr.push(matrix[i][left]);
    }
  }
  return arr;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
