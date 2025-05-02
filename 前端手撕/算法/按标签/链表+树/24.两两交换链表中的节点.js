class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

// var swapPairs = function (head) {
//   let dummy = new ListNode(0, head);
//   let pre = dummy,
//     cur = head;
//   while (cur?.next) {
//     let next = cur.next;
//     cur.next = next.next;
//     next.next = cur;
//     pre.next = next;
//     pre = cur;
//     cur = cur.next;
//   }

//   return dummy.next;
// };

var swapPairs = function (head) {
  let dummy = new ListNode(0, head);
  let pre = dummy,
    cur = head;
  while (cur?.next) {
    let next = cur.next;
    cur.next = next.next;
    next.next = cur;
    pre.next = next;
    pre = cur;
    cur = cur.next;
  }
  return dummy.next;
};

console.log(swapPairs(node1));
