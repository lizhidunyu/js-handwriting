var exist = function (board, word) {
  let m = board.length,
    n = board[0].length;
  const used = new Array(m).fill(0).map((item) => new Array(n).fill(false));

  const canFind = (row, col, k) => {
    if (k === word.length) {
      return true;
    }
    if (row < 0 || row >= m || col < 0 || col >= n) {
      return false;
    }
    if (used[row][col] || board[row][col] !== word[k]) {
      return false;
    }

    used[row][col] = true;
    const canFindRes =
      canFind(row + 1, col, k + 1) ||
      canFind(row - 1, col, k + 1) ||
      canFind(row, col + 1, k + 1) ||
      canFind(row, col - 1, k + 1);

    if (canFindRes) {
      return true;
    }
    used[row][col] = false;
    return false;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
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
