var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let l = (r = 0);
  let maxLen = 0;
  while (r <= s.length - 1) {
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1;
    }
    map.set(s[r], r);
    maxLen = Math.max(maxLen, r - l + 1);
    r++;
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring("pwwkew"));
