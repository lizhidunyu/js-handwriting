var longestPalindrome = function (s) {
  let maxStr = "";
  for (let i = 0; i < s.length; i++) {
    let targetStr = "";
    const str1 = expendStr(s, i, i);
    const str2 = expendStr(s, i, i + 1);
    console.log(str1, str2);

    targetStr = str1.length > str2.length ? str1 : str2;
    maxStr = maxStr.length > targetStr.length ? maxStr : targetStr;
  }
  return maxStr;
};

const expendStr = (str, l, r) => {
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
