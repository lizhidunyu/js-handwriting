var maxDepth = function (root) {
  if (!root) return 0;
  let queue = [root],
    depth = 1;
  while (queue.length) {
    let maxLen = queue.length;
    for (let i = 0; i < maxLen; i++) {
      let node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    if (queue.length) {
      depth++;
    }
  }
  return depth;
};
