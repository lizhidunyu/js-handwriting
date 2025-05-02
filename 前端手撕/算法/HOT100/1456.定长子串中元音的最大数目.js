var maxVowels = function (s, k) {
  const targetStr = ["a", "e", "i", "o", "u"];
  let viewl = 0;
  let ans = 0;
  /*
   * 定长滑动窗口：滑进来判断是不是目标字符串
   *              滑出去的是不是目标字符串
   *              用同一个变量来判断
   */
  for (let i = 0; i < s.length; i++) {
    if (targetStr.includes(s[i])) {
      viewl++;
    }
    if (i < k - 1) {
      continue;
    }
    ans = Math.max(ans, viewl);
    // 当前窗口最左边的字符
    let out = s[i - k - 1];
    // 如果该字符是目标字符，那么目标字符数--
    if (targetStr.includes(out)) {
      viewl--;
    }
  }
  return viewl;
};

console.log(maxVowels("weal lloveyo u", 7));
