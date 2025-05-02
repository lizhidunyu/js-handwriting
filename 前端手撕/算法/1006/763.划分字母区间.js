// 不要怕，你可以的！！！
var partitionLabels = function (s) {
  const map = new Map();
  //首先记录一遍所有字母最远的距离
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }
  let l = 0,
    r = 0;
  let res = [];
  let maxIndex = 0;
  while (r < s.length) {
    const char = s[r];
    // 当前如果超过了所有字母的最远距离，就可以进行收割
    maxIndex = Math.max(maxIndex, map.get(char));
    if (r >= maxIndex) {
      res.push(r - l + 1);
      maxIndex = 0;
      l = r + 1;
    }
    r++;
  }
  return res;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));
console.log(partitionLabels("eccbbbbdec"));
