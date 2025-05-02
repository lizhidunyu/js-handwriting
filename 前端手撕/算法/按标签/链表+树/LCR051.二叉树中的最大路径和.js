var maxPathSum = function (root) {
  if (!root) return 0;
  let maxPathSum = -Infinity;
  const dfs = (node) => {
    if (!node) return 0;
    const maxLeftPathSum = Math.max(dfs(node.left), 0);
    const maxRightPathSum = Math.max(dfs(node.right), 0);
    // 维护一个最大的路径和
    maxPathSum = Math.max(
      maxPathSum,
      node.val + maxLeftPathSum + maxRightPathSum
    );
    // 当前节点所能提供的最大值
    return node.val + Math.max(maxLeftPathSum, maxRightPathSum);
  };
  dfs(root);
  return maxPathSum;
};

var maxPathSum = function (root) {
  if (!root) return 0;
  let maxPathSum = -Infinity;
  const dfs = (node) => {
    if (!node) return 0;
    const maxLeftPathSum = Math.max(dfs(node.left), 0);
    const maxRightPathSum = Math.max(dfs(node.right), 0);
    // 路径和是双支的
    maxPathSum = Math.max(
      maxPathSum,
      maxLeftPathSum + maxRightPathSum + node.val
    );
    // 向上提供的只能提供单支
    return node.val + Math.max(maxLeftPathSum, maxRightPathSum);
  };
  dfs(root);
  return maxPathSum;
};
