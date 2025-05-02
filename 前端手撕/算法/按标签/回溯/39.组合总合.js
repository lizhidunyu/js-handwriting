combinationSum = function (candidates, target) {
  let res = [],
    path = [];
  candidates.sort((a, b) => a - b);
  const backTracking = (candidates, startIndex, sum = 0) => {
    if (sum === target) {
      res.push([...path]);
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      if (candidates[i] > target - sum) break;
      sum += candidates[i];
      path.push(candidates[i]);
      backTracking(candidates, i, sum);
      sum -= candidates[i];
      path.pop();
    }
  };
  backTracking(candidates, 0);
  return res;
};

console.log(combinationSum([8, 7, 4, 3], 7));
