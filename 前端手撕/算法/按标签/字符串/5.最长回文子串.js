var longestPalindrome = function (s) {
  let len = s.length,
    maxStr = "";
  for (let i = 0; i < len; i++) {
    let str1 = expandStr(s, i, i);
    let str2 = expandStr(s, i, i + 1);
    const res = str1.length > str2.length ? str1 : str2;
    maxStr = res.length > maxStr.length ? res : maxStr;
  }
  return maxStr;
};

var expandStr = (s, left, right) => {
  while (s[left] === s[right] && left >= 0 && right <= s.length - 1) {
    left--;
    right++;
  }

  return s.slice(left + 1, right);
};

console.log(longestPalindrome("babad"));
// console.log(expandStr("caabaae", 3, 3));
// console.log(expandStr("aabbaa", 2, 3));
