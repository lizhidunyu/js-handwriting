var longestPalindrome = function (s) {
  let maxStr = "";
  for (let i = 0; i < s.length; i++) {
    let targetTar = "";
    const str1 = expandStr(s, i, i);
    const str2 = expandStr(s, i, i + 1);
    targetTar = str1.length > str2.length ? str1 : str2;
    maxStr = maxStr.length > targetTar.length ? maxStr : targetTar;
  }
  return maxStr;
};

const expandStr = (str, l, r) => {
  while (l >= 0 && r <= str.length - 1) {
    if (str[l] === str[r]) {
      l--;
      r++;
    } else {
      break;
    }
  }
  return str.slice(l + 1, r);
};

console.log(longestPalindrome("babad"));
