// MARK： 没写出来

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  let pre = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    if (cur[0] <= pre[1]) {
      pre[1] = Math.max(cur[1], pre[1]);
    } else {
      res.push([...pre]);
      pre = cur;
    }
  }
  if (pre) {
    res.push([...pre]);
  }
  return res;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
