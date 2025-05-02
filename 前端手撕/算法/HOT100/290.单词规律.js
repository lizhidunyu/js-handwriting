var wordPattern = function (pattern, s) {
  const sArr = s.split(" ");
  if (pattern.length !== sArr.length) return false;
  const map = new Map();
  for (let i = 0; i < pattern.length; i++) {
    const isIncluded = map.has(pattern[i]);
    if (!isIncluded) {
      if ([...map.values()].includes(sArr[i])) {
        return false;
      } else {
        map.set(pattern[i], sArr[i]);
      }
    } else {
      if (map.get(pattern[i]) === sArr[i]) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
