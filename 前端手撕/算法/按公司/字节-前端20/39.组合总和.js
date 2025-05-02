var combinationSum = function (candidates, target) {
  let res = [];
  let path = [];
  function backTracking(startIndex, sum) {
    if (sum === target) {
      res.push([...path]);
    }
    for (let i = startIndex; i < candidates.length; i++) {
      if (sum >= target) {
        continue;
      }
      sum += candidates[i];
      path.push(candidates[i]);
      // i
      backTracking(i, sum);
      path.pop();
      sum -= candidates[i];
    }
  }
  backTracking(0, 0);
  return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));
