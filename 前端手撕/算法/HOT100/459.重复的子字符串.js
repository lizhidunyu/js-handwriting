var repeatedSubstringPattern = function (s) {
  let p = 0;
  let subStr = "";
  while (p < s.length) {
    subStr += s[p];
    const repeatTime = s.length / subStr.length;
    if (s.length % subStr.length !== 0) {
      p++;
      continue;
    } else {
      console.log(repeatTime);

      const newStr = subStr.repeat(repeatTime);
      if (newStr === s && repeatTime !== 1) {
        return true;
      } else {
        p++;
      }
    }
  }
  return false;
};

console.log(repeatedSubstringPattern("abab"));
