var titleToNumber = function (s) {
  let res = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    res += (s[i].charCodeAt() - 64) * 26 ** (len - i - 1);
  }
  return res;
};
console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ABC"));
