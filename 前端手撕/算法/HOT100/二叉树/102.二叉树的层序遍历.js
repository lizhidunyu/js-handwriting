var levelOrder = function (root) {
  const res = [];
  if (!root) return res;
  // 层序遍历使用的是shift\push
  const queue = [root];
  while (queue.length) {
    let len = queue.length;
    let levelArr = [];
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      levelArr.push(cur.val);
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
    res.push([...levelArr]);
  }
  return res;
};
