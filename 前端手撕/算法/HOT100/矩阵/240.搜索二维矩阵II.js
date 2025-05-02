// var searchMatrix = function (matrix, target) {
//   const m = matrix.length,
//     n = matrix[0].length;
//   let i = 0,
//     j = n - 1;
//   while (i < m && j >= 0) {
//     if (matrix[i][j] === target) {
//       return true;
//     } else if (matrix[i][j] > target) {
//       for (let p = 0; p <= j; p++) {
//         if (matrix[p][i] === target) {
//           return true;
//         }
//       }
//     } else {
//       for (let p = i; p < m; p++) {
//         if (matrix[j][p] === target) {
//           return true;
//         }
//       }
//     }
//     i++;
//     j--;
//   }
//   return false;
// };

var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let i = 0;
  let j = n - 1;

  while (i < m && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] > target) {
      j--; // 移动到更小元素的列
    } else {
      i++; // 移动到更大元素的行
    }
  }
  return false;
};
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    0
  )
);
