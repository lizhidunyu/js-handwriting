var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let maxLen = 0;
  let l = (r = 0);
  while (r < s.length) {
    if (map.has(s[r]) && l <= map.get(s[r])) {
      l = map.get(s[r]) + 1;
    }
    map.set(s[r], r);
    console.log("map:", map, "l:", l, "r:", r);
    maxLen = Math.max(maxLen, r - l + 1);
    r++;
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring("abba"));
console.log(lengthOfLongestSubstring("bbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
