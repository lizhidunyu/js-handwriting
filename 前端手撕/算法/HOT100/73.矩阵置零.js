var setZeroes = function (matrix) {
  const xArr = [];
  const yArr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        xArr.push(i);
        yArr.push(j);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (xArr.includes(i) || yArr.includes(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  //   console.log(xArr, yArr, matrix);
  return matrix;
};
console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
