const getCommonPrefix = (arr) => {
  let prefix = arr[0];
  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) != 0) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }
  return prefix === "" ? -1 : prefix;
};
console.log(getCommonPrefix(["ccabb", "ccaac", "ccbba", "cacac", "abccc"]));
