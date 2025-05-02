var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  const wordDictSet = new Set(wordDict);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (wordDictSet.has(s.slice(j, i)) && dp[j]) {
        dp[i] = true;
        break;
      }
    }
  }
  console.log(dp);
  return dp[s.length];
};

console.log(wordBreak("leetcode", ["leet", "code"]));
