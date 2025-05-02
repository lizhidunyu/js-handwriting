// // MARK: 没写出来，练习次数太少
// var numIslands = function (grid) {
//   let m = grid.length,
//     n = grid[0].length;
//   let count = 0;
//   const used = Array.from({ length: m }, () => Array(n).fill(false));

//   const dfs = (i, j) => {
//     if (
//       i < 0 ||
//       j < 0 ||
//       i >= m ||
//       j <= n ||
//       grid[i][j] === "0" ||
//       used[i][j]
//     ) {
//       return 0;
//     }

//     used[i][j] = true;
//     dfs(i - 1, j);
//     dfs(i + 1, j);
//     dfs(i, j - 1);
//     dfs(i, j + 1);

//     for (let i = 0; i < m; i++) {
//       for (let j = 0; j < n; j++) {
//         if (grid[i][j] === "1" && !used[i][j]) {
//           count++;
//           dfs(i, j);
//         }
//       }
//     }
//     used[i][j] = false;
//   };

//   return count;
// };

var numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        turnZero(i, j, grid);
      }
    }
  }
  return count;
};

function turnZero(i, j, grid) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] === "0"
  )
    return;
  grid[i][j] = "0";
  turnZero(i - 1, j, grid);
  turnZero(i + 1, j, grid);
  turnZero(i, j + 1, grid);
  turnZero(i, j - 1, grid);
}

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
console.log(numIslands(grid));
