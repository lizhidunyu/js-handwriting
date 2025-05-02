var lengthOfLongestSubstring = function (s) {
  const n = s.length;

  const map = new Map();
  let maxLen = 0;
  let left = 0;
  // 右指针不断地往右循环遍历
  for (let right = 0; right < n; right++) {
    const rightChar = s[right];

    if (map.has(rightChar) && map.get(rightChar) >= left) {
      left = map.get(rightChar) + 1;
    }

    // 不断放到map里面
    map.set(rightChar, right);

    const currLen = right - left + 1;
    maxLen = Math.max(currLen, maxLen);

    console.log("map:", map);
    // console.log("left:", left, "right:", right, "maxLen", maxLen);
    // console.log("**********");
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbbpbk"));
