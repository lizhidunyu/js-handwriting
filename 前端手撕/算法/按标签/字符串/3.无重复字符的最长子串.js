var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  let l = (r = 0);
  const len = s.length;
  while (r < len) {
    let subStr = s.slice(l, r);
    if (subStr.indexOf(s[r] === -1)) {
      r++;
      maxLen = Math.max(maxLen, r - l);
    } else {
      l = l + subStr.indexOf(s[r]) + 1;
    }
  }
  return maxLen;
};

var lengthOfLongestSubstring2 = function (s) {
  const len = s.length;
  const map = new Map();
  let maxLen = 0;
  let left = 0;
  for (let right = 0; right < len; i++) {
    const rightChar = s[right];
    if (map.has(rightChar) && map.get(rightChar) > left) {
      left = map.get(rightChar) + 1;
    }
    map.set(rightChar, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbb"));
