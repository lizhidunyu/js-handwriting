var dailyTemperatures = function (temperatures) {
  let stack = [],
    len = temperatures.length;
  let dp = new Array(len).fill(0);
  for (let i = len - 1; i >= 0; i--) {
    //如果当前元素比栈顶大，则让小项逐个出栈，直到当前元素比栈顶小，停止出栈
    // 注意不是if而是while循环
    while (temperatures[i] >= temperatures[stack.at(-1)]) {
      stack.pop();
    }
    dp[i] = stack.at(-1) - i || 0;
    stack.push(i);
  }
  return dp;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
