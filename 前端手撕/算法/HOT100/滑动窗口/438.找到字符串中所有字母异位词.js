var findAnagrams = function (s, p) {
  const ans = [];
  const cntP = new Array(26).fill(0);
  const cntS = new Array(26).fill(0);
  for (const c of p) {
    cntP[c.charCodeAt() - "a".charCodeAt()]++;
  }
  for (let right = 0; right < s.length; right++) {
    cntS[s[right].charCodeAt() - "a".charCodeAt()]++;
    const left = right - p.length + 1;
    if (left < 0) {
      continue;
    }
    if (cntP.join("") === cntS.join("")) {
      ans.push(left);
    }
    cntS[s[left].charCodeAt() - "a".charCodeAt()]--;
  }
  return ans;
};

console.log(findAnagrams("abab", "ab"));
