var mirrorTree = function (root) {
  if (!root) return root;
  //  树之类的题目一定要注意提前保留节点
  let left = root.left;
  root.left = mirrorTree(root?.right);
  root.right = mirrorTree(left);
  return root;
};
