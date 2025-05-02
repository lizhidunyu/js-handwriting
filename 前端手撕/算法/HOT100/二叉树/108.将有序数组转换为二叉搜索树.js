var sortedArrayToBST = function (nums) {
  const dfs = (nums, left, right) => {
    if (left > right) return null;
    let mid = left + Math.floor((right - left) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = dfs(nums, left, mid - 1);
    node.right = dfs(nums, mid + 1, right);
    return node;
  };
  return dfs(nums, 0, nums.length - 1);
};
