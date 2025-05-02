var combinationSum2 = function (candidates, target) {
  let res = [];
  let path = [];
  candidates.sort((a, b) => a - b);
  function backTracking(startIndex, sum) {
    if (sum === target) {
      res.push([...path]);
    }
    for (let i = startIndex; i < candidates.length; i++) {
      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        continue;
      }
      if (sum >= target) {
        break;
      }
      sum += candidates[i];
      path.push(candidates[i]);
      // i+1
      backTracking(i + 1, sum);
      path.pop();
      sum -= candidates[i];
    }
  }
  backTracking(0, 0);
  return res;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
