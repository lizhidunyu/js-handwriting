var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const ans = [];
  let pre = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    if (cur[0] <= pre[1]) {
      pre[1] = Math.max(cur[1], pre[1]);
    } else {
      ans.push(pre);
      pre = cur;
    }
  }
  ans.push(pre);
  return ans;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);
