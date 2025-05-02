var diameterOfBinaryTree = function (root) {
  let ans = 0;
  const dfs = (node) => {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    ans = Math.max(ans, left + right + 1);
    return Math.max(left, right) + 1;
  };
  dfs(root);
  return ans - 1;
};
