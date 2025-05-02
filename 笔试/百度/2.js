// 染色问题
const getTarget = (s, l, r) => {
  const str = s.slice(l - 1, r);
  const arr = str.split("");
  const dp = new Array(r - l + 1).fill(0);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1" && str[i - 1] && str[i - 1] === "1") {
      if (arr[i - 1] !== "2") {
        dp[i] = dp[i - 1];
        arr[i] = "2";
      } else {
        dp[i] = dp[i - 1] + 1;
      }
    } else {
      if (i - 1 >= 0) {
        dp[i] = dp[i - 1] + 1;
      } else {
        dp[i] = 1;
      }
    }
  }
  return dp.at(-1);
};

console.log(getTarget("01011111", 2, 5));
console.log(getTarget("01011111", 1, 8));
