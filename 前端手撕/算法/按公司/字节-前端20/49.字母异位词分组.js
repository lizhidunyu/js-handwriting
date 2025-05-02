const getTargetKey = (str) => {
  const arr = str.split("");
  arr.sort((a, b) => a.charCodeAt() - b.charCodeAt());
  return arr.join("");
};

var groupAnagrams = function (strs) {
  const map = new Map();
  for (let item of strs) {
    const key = getTargetKey(item);
    map.set(key, map.has(key) ? [...map.get(key), item] : [item]);
  }
  return [...map.values(map)];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
