class Node {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
console.log(node1);

var removeNthFromEnd = function (head, n) {
  // 只要是返回链表的，最好设置一个虚拟头节点
  let dummy = new Node();
  dummy.next = head;
  let l = (r = dummy),
    count = 0;
  while (count < k) {
    r = r.next;
    count++;
  }

  // 如果是next到了最后一个节点就不会往下面走
  // 但是如果不写next到了最后一个节点还是会往下面走
  while (r.next) {
    l = l.next;
    r = r.next;
  }
  l.next = l.next.next;
  return dummy.next;
};

console.log(removeNthFromEnd(node1, 2));
