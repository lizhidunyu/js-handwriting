function mergeRanges(ranges) {
  ranges.sort((a, b) => a[0] - b[0]);
  let res = { ranges: [], sum: 0 };
  let pre = ranges[0];
  for (let i = 1; i < ranges.length; i++) {
    let cur = ranges[i];
    if (cur[0] <= pre[1]) {
      pre[1] = Math.max(pre[1], cur[1]);
    } else {
      res.ranges.push(pre);
      res.sum += pre[1] - pre[0];
      pre = cur;
    }
  }
  if (pre) {
    res.ranges.push(pre);
    res.sum += pre[1] - pre[0];
  }
  return res;
}

const ranges = [
  [12, 18],
  [8, 12],
  [0, 4],
  [20, 22],
  [2, 5],
  [19, 25],
];
console.log(mergeRanges(ranges));
