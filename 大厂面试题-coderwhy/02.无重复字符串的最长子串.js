var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  let maxLen = 0;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      deleteUpToKey(map, s[i]);
      map.set(s[i], i);
      maxLen = Math.max(maxLen, map.size);
      console.log("map:", map);
    } else {
      map.set(s[i], i);
      maxLen = Math.max(maxLen, map.size);
    }

    console.log(map);
  }
  //   maxLen = Math.max(maxLen, map.size);
  return maxLen;
};

console.log(lengthOfLongestSubstring("pwwkewabc"));

function deleteUpToKey(map, key) {
  let hasFoundKey = false;

  // 创建一个新的Iterator来遍历Map
  const iterator = map.entries();

  // 使用for...of循环遍历Map的键值对
  for (const [k, v] of iterator) {
    // 如果找到了键，设置标记为true
    if (k === key) {
      hasFoundKey = true;
      map.delete(k);
    }

    // 如果找到了键或之前，就删除当前键
    if (!hasFoundKey) {
      map.delete(k);
    }
  }
}
