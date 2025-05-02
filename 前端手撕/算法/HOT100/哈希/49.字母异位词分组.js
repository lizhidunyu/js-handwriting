const formatStr = (str) => {
  return str.split("").sort().join("");
};
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let item of strs) {
    const key = formatStr(item);
    map.set(key, [...(map.get(key) || []), item]);
  }
  return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(formatStr("eat"), formatStr("tea"));
