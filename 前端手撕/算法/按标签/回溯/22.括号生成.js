var generateParenthesis = function (n) {
  const res = [];
  const dfs = (lRemain, rRemain, str) => {
    if (str.length === n * 2) {
      res.push(str);
      return;
    }

    if (lRemain > 0) {
      dfs(lRemain - 1, rRemain, str + "(");
    }

    if (rRemain > lRemain) {
      dfs(lRemain, rRemain - 1, str + ")");
    }
  };
  dfs(n, n, "");
  return res;
};

console.log(generateParenthesis(3));
