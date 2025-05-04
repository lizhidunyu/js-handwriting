// function getMax(target, array) {
//   let max = -Infinity;
//   const dfs = (curVal, index) => {
//     max = Math.max(max, curVal);
//     if (index === array.length) return;
//     for (let i = 0; i < array.length; i++) {
//       const nextVal = curVal * 10 + array[i];
//       if (nextVal >= target) continue;
//       dfs(nextVal, index + 1);
//     }
//   };
//   dfs(0, 0);
//   return max;
// }

// function getMax(target, array) {
//   let max = -Infinity;
//   const dfs = (curVal, index) => {
//     max = Math.max(max, curVal);
//     if (index === array.length) return;
//     for (let i = 0; i < array.length; i++) {
//       const nextVal = curVal * 10 + array[i];
//       if (nextVal >= target) continue;
//       dfs(nextVal, index + 1);
//     }
//   };
//   dfs(0, 0);
//   return max;
// }

console.log(getMax(2533, [1, 2, 4, 9]));
console.log(getMax(2222, [1, 2, 4, 9]));
console.log(getMax(3, [5, 6]));
