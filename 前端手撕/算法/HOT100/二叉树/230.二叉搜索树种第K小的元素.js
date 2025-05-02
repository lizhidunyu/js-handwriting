var kthSmallest = function (root, k) {
  const res = [];
  const dfs = (node) => {
    if (node === null) return;
    dfs(node.left);
    res.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  return res[k - 1];
};
