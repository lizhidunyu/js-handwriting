var formatSr = (str) => {
  const arr = str.split("");
  arr.sort((a, b) => a.charCodeAt() - b.charCodeAt());
  return arr.join("");
};

var groupAnagrams = function (strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const key = formatSr(strs[i]);
    map.set(key, map.has(key) ? [...map.get(key), strs[i]] : [strs[i]]);
  }

  return [...map.values()];
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs));
