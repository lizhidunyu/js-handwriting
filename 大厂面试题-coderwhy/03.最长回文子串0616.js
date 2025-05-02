var longestPalindrome = function (s) {
  let maxStr = "";
  for (let i = 0; i < s.length; i++) {
    let curStr = "";
    let len1 = expandStr(s, i, i).length;
    let len2 = expandStr(s, i, i + 1).length;
    curStr = len1 > len2 ? expandStr(s, i, i) : expandStr(s, i, i + 1);
    maxStr = maxStr.length > curStr.length ? maxStr : curStr;
  }
  return maxStr;
};

var expandStr = (s, l, r) => {
  while (l >= 0 && r < s.length) {
    if (s[l] === s[r]) {
      --l;
      ++r;
    } else {
      break;
    }
  }
  return s.slice(l + 1, r);
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
