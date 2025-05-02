var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let count = 0,
    index = g.length - 1,
    isFlag = false;
  for (let i = s.length - 1; i >= 0; i--) {
    isFlag = false;
    while (index >= 0 && !isFlag) {
      if (s[i] >= g[index]) {
        count++;
        isFlag = true;
      }
      index--;
    }
  }
  return count;
};

console.log(findContentChildren([1, 2], [1, 2, 3]));
