var longestPalindrome = function (s) {
  let p = 0;
  const res = [];
  while (p < s.length) {
    console.log(res);
    if (res.includes(p)) {
      p++;
      continue;
    }
    if (s.indexOf(s[p], p + 1) !== -1) {
      res.push(p, s.indexOf(s[p], p + 1));
    }
    p++;
  }
  return res.length < s.length ? res.length + 1 : res.length;
};
console.log(longestPalindrome("abccccdd"));
