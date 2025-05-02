function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var flatten = function (root) {
  if (!root) return;
  let stack = [root];
  let pre = null;
  while (stack.length) {
    let cur = stack.pop();

    if (pre) {
      pre.left = null;
      pre.right = cur;
    }

    cur.right && stack.push(cur.right);
    cur.left && stack.push(cur.left);

    pre = cur;
  }
  return root;
};
