class Node {
  constructor(val) {
    this.val = val;
  }
}

const node1 = new Node(1);
const node11 = new Node(2);
const node12 = new Node(5);
const node111 = new Node(3);
const node112 = new Node(4);
const node122 = new Node(6);

node1.left = node11;
node1.right = node12;
node11.left = node111;
node11.right = node112;
node12.right = node122;

console.log(node1);

var flatten = function (root) {
  //   if (!root) return;
  //   如果结果是val数组的话，这里返回的就是[]
  //   如果返回的是root节点的话，这里返回的就是直接root

  /* 区别于前序遍历 */
  let pre = null;
  //   const stack = [root];

  while (stack.length) {
    // const cur = stack.pop();
    /* 区别于前序遍历 */
    if (pre) {
      pre.right = cur;
      pre.left = null;
    }
    // cur.right && stack.push(cur.right);
    // cur.left && stack.push(cur.left);
    pre = cur;
  }

  return root;
};

console.log(flatten(node1));
