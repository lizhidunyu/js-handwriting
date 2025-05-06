// //数组扁平化
// const flatArr = (arr) => {
//   return arr.reduce((pre, cur) => {
//     return pre.concat(Array.isArray(cur) ? flatArr(cur) : cur);
//   }, []);
// };
// console.log(flatArr([1, [2, 3], [3, 4], [5, 6, [7, 8]]]));

// // 数组深度1-递归
// const getDepath1 = (arr) => {
//   if (!Array.isArray(arr)) return 0;
//   return 1 + Math.max(0, ...arr.map(getDepath1));
// };

// const getDepth1 = (arr) => {
//   if (!Array.isArray(arr)) return 0;
//   return 1 + Math.max(0, ...arr.map(getDepath1));
// };

// // 数组深度2-迭代
// const getDepth2 = (arr) => {
//   if (!Array.isArray(arr)) return 0;
//   let maxDepth = 0;
//   const stack = [{ value: arr, depth: 1 }];
//   while (stack.length) {
//     const { value, depth } = stack.pop();
//     maxDepth = Math.max(maxDepth, depth);
//     for (const item of value) {
//       if (Array.isArray(item)) {
//         stack.push({ value: item, depth: depth + 1 });
//       }
//     }
//   }
//   return maxDepth;
// };

// const arr = [12, [1, [111, [12], 2222]], [1, [[[1232]]], 2]];
// // console.log(getDepath1(arr));
// console.log(getDepth2(arr));

// // 拍平数组，同时记录每个值当前所在的位置深度
// //1.递归版本
// function flattenWithCurrentDepth(arr, currentDepth = 1) {
//   let result = [];

//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       // 递归子数组，深度 +1
//       result = result.concat(flattenWithCurrentDepth(item, currentDepth + 1));
//     } else {
//       // 记录当前值和所在深度
//       result.push({ value: item, depth: currentDepth });
//     }
//   }

//   return result;
// }

// const arr22 = [1, [2, [3, 4], 5], 6];
// console.log(flattenWithCurrentDepth(arr22));

// // 2.迭代版
// function flattenWithCurrentDepthIterative(arr) {
//   const stack = arr.map((item) => ({ value: item, depth: 1 }));
//   const result = [];

//   while (stack.length) {
//     const { value, depth } = stack.pop();

//     if (Array.isArray(value)) {
//       for (let i = value.length - 1; i >= 0; i--) {
//         stack.push({ value: value[i], depth: depth + 1 });
//       }
//     } else {
//       result.push({ value, depth });
//     }
//   }

//   // 如果要和递归版顺序一致，反转一下
//   return result.reverse();
// }

const getMaxDepath = (arr) => {
  if (!Array.isArray(arr)) return 0;
  return 1 + Math.max(0, ...arr.map(getMaxDepath));
};

// const getMaxDepath = (arr) => {
//   let maxDepth = 0;
//   const queue = [{ node: arr, depth: 1 }];
//   while (queue.length) {
//     let { node, depth } = queue.pop();
//     maxDepth = Math.max(maxDepth, depth);
//     for (const item of node) {
//       if (Array.isArray(item)) {
//         queue.push({ node: item, depth: depth + 1 });
//       }
//     }
//   }
//   return maxDepth;
// };

const arr33 = [1, [2, [3, [2, [1, 2, 3]], 4], 5], 6];
console.log(getMaxDepath(arr33));
