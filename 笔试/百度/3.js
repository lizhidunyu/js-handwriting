const getTarget = (n, k) => {
  const used = new Array(n).fill(false);
  let res = 0;
  let count = 0;
  const backTracking = (startIndex, used, sum) => {
    if (count === k) {
      res = Math.max(res, sum);
    }
    for (let i = startIndex; i < n; i++) {
      if (count > k) {
        break;
      }
      if (i - 1 && !used[i] && !used[i - 1]) {
        sum += 1;
        used[i] = true;
        count++;
      }
      backTracking(i + 1, used, sum);
      used[i] = false;
      sum -= 1;
    }
  };
  backTracking(0, used, 0);
  //   console.log(res);

  return res;
};

console.log(getTarget(1, 1));
console.log(getTarget(10, 4));
console.log(getTarget(4, 2));
console.log(getTarget(10, 6));
console.log(getTarget(10, 8));
