var partitionLabels = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }
  let l = (r = 0),
    maxIndex = 0,
    res = [];
  while (r < s.length) {
    const char = s[r];
    maxIndex = Math.max(maxIndex, map.get(char));
    // maxIndex和r都在移动，万一有一天maxIndex走的比r要慢，那么就是切割的时机
    // 注意这里有个等号
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
