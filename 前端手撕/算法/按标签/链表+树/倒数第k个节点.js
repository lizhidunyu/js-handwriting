class ListNode {
  constructor(val) {
    this.val = val;
    this.next = undefined;
  }
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
console.log(node1);

var removeNthFromEnd = (head, n) => {
  const dummy = new ListNode(0, head);
  let slow = (fast = dummy);
  let count = 0;
  while (++count <= n) {
    fast = fast.next;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;

  return dummy.next;
};
