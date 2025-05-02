const combineArr = (arr) => {
  arr.sort((a, b) => a[0] - b[0]);
  let res = [],
    temp = [];
  arr.forEach((item) => {
    temp.push([item[0], item[0] + item[1]]);
  });
  arr = temp;
  let pre = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    if (cur[0] <= pre[1]) {
      pre[1] = Math.max(pre[1], cur[1]);
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
  combineArr([
    [0, 2],
    [1, 2],
    [4, 1],
  ])
);
