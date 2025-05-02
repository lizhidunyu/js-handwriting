var isValidBST = function (root, min = -Infinity, max = Infinity) {
  if (root === null) return true;
  if (max <= root.val || min >= root.val) return false;
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};
