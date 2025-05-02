var longestValidParentheses = function (s) {
  let maxLen = 0;
  const len = s.length;
  // 以n结尾的可以有多少有效括号
  const dp = new Array(len).fill(0);
  for (let i = 1; i < len; i++) {
    if (s[i] === ")") {
      if (s[i - 1] === "(") {
        if (i - 2 >= 0) {
          dp[i] = dp[i - 2] + 2;
        } else {
          dp[i] = 2;
        }
      } else {
        if (s[i - dp[i - 1] - 1] === "(") {
          if (i - dp[i - 1] - 2 >= 0) {
            dp[i] = dp[i - 1] + dp[i - dp[i - 1] - 2] + 2;
          } else {
            dp[i] = dp[i - 1] + 2;
          }
        }
      }
    }
    maxLen = Math.max(maxLen, dp[i]);
  }
  return maxLen;
};

console.log(longestValidParentheses(")()())"));
