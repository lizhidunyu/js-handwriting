var exist = function (board, word) {
  let m = board.length,
    n = board[0].length;
  // 二维矩阵，存放bool值
  const usedNums = Array.from({ length: m }, () => Array(n).fill(false));

  // canFind判断当前点是否是目标路径上的点
  const canFind = (row, col, k) => {
    if (k === word.length) {
      //递归的出口，i越界了就返回true
      return true;
    }
    if (row < 0 || col < 0 || row >= m || col >= n) {
      //当前点越界，返回false
      return false;
    }
    if (usedNums[row][col] || board[row][col] != word[k]) {
      // 在一次检索中，当前点已经访问过了，或非目标点
      return false;
    }
    // 记录一下当前访问点
    usedNums[row][col] = true;
    // 基于当前选择的点[row,col]，能否找到剩余字符的路径
    const canFindRes =
      canFind(row + 1, col, k + 1) ||
      canFind(row - 1, col, k + 1) ||
      canFind(row, col - 1, k + 1) ||
      canFind(row, col + 1, k + 1);

    //基于当前点[row,col]，可以为剩下的字符找到路径
    if (canFindRes) {
      return true;
    }

    //不能为剩下字符找到路径，返回false，撤销当前点的访问状态
    usedNums[row][col] = false;
    return false;
  };

  //遍历找起点，作为递归入口
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 递归的入口
      if (board[i][j] === word[0] && canFind(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const word = "ABCCED";
console.log(exist(board, word));
