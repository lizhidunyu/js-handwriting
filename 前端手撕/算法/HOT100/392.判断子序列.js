var isSubsequence = function (s, t) {
  const len = s.length,
    tLen = t.length;
  if (tLen < len) return false;
  if ((tLen === len && s == t) || !s) return true;
  const dp = new Array(tLen).fill(0).map((item) => new Array(len).fill(0));
  for (let i = 0; i < tLen; i++) {
    for (let j = 0; j < len; j++) {
      if (s[j] === t[i]) {
        // 二维数组的假值最好用三元运算符加一个判断？如果越界直接给一个固定值
        dp[i][j] = (i >= 1 && j >= 1 ? dp[i - 1][j - 1] : 0) + 1;
      } else {
        dp[i][j] = Math.max(
          i >= 1 ? dp[i - 1][j] : 0,
          j >= 1 ? dp[i][j - 1] : 0
        );
      }
    }
  }
  //   console.log(dp);

  return dp[tLen - 1][len - 1] === len;
};

console.log(isSubsequence("bb", "anbgdc"));
