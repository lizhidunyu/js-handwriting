const longestCommonPrefix = (arr) => {
  let prefix = arr[0],
    len = arr.length;
  for (let i = 1; i < len; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }

  return prefix;
};

strs = ["flower", "flow", "floight"];

console.log(longestCommonPrefix(strs));
