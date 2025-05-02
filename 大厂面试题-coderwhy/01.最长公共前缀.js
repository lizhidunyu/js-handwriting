var longestCommonPrefix = function (strs) {
  // 边界处理
  if (strs.length === 0) return "";
  // 选取第一个元素作为prefix
  let prefix = strs[0];

  //   循环判断之后的每一个元素
  for (let i = 1; i < strs.length; i++) {
    // 当发现之后的元素的前缀不是prefix
    while (strs[i].indexOf(prefix) != 0) {
      // 对prefix进行切片处理
      prefix = prefix.slice(0, prefix.length - 1);
    }
    if (prefix === "") {
      return "";
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["c", "acc", "ccc"]));
