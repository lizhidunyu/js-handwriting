var findRepeatedDnaSequences = function (s) {
  // 关键是对于题目的理解，之前对于题目的理解是错误的
  let map = new Set();
  let hash = new Set();
  let L = s.length - 9;
  for (let i = 0; i < L; i++) {
    let temp = s.substring(i, i + 10);
    if (map.has(temp)) {
      hash.add(temp);
    } else {
      map.add(temp);
    }
  }
  return Array.from(hash);
};
