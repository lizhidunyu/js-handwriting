const ROMAN = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let ans = 0;
  for (let i = 1; i < s.length; i++) {
    const x = ROMAN[s[i - 1]],
      y = ROMAN[s[i]];
    ans += x < y ? -x : x;
  }
  ans += ROMAN[s.at(-1)];
  return ans;
};
