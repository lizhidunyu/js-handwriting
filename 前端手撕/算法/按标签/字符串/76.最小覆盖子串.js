// var minWindow = function (s, t) {
//   const map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     t.indexOf(s[i]) !== -1 &&
//       map.set(s[i], map.get(s[i]) ? [...map.get(s[i]), i] : [i]);
//   }
//   console.log(map);
//   const mapToArr = [];
//   for (const [key, arr] of map) {
//     for (let i = 0; i < arr.length; i++) {
//       mapToArr.push([key, arr[i]]);
//     }
//   }
//   mapToArr.sort((a, b) => a[1] - b[1]);
//   const resArr = mapToArr.map((item) => item[0]);
//   let minLen = Infinity;
//   let l = 0,
//     r = 0;
//   const includeTargetStr = (l, r, resArr, targetStr) => {
//     const arr = resArr.slice(l, r).sort().join("");
//     const target = targetStr.split("").sort().join("");
//     if (arr.indexOf(target) !== -1) {
//       return true;
//     }
//     return false;
//   };
//   let targetL, targetR;
//   while (r <= resArr.length) {
//     if (includeTargetStr(l, r, resArr, t)) {
//       if (mapToArr[r - 1][1] - mapToArr[l][1] <= minLen) {
//         targetL = mapToArr[l][1];
//         targetR = mapToArr[r - 1][1] + 1;
//         minLen = mapToArr[r - 1][1] - mapToArr[l][1];
//         l = r;
//       }
//     }
//     r++;
//   }
//   return s.slice(targetL, targetR);
// };

var minWindow = function (s, t) {};

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("ab", "A"));
