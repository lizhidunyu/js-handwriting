// 混淆了dp和result之间的关系
var generate = function (numRows) {
  const result = [];
  for (let i = 0; i < numRows; i++) {
    const dp = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      dp[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result.push(dp);
  }
  return result;
};
console.log(generate(5));
