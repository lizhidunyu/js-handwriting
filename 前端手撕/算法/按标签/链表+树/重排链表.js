class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
console.log(node1);

// var reverseList = function (head) {
//   let prev = null;
//   let cur = head;
//   while (cur) {
//     let next = cur.next;
//     cur.next = prev;
//     prev = cur;
//     cur = next;
//   }
//   return prev;
// };

// console.log(reverseList(node1));

var reverseList = function (head) {
  let pre = null,
    cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

var reorderList = function (head) {
  let dummy = new ListNode(null, head);
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let secondHalf = reverseList(slow.next);
  slow.next = null;
  let firstHalf = head;
  while (secondHalf) {
    let temp1 = firstHalf.next;
    let temp2 = secondHalf.next;
    firstHalf.next = secondHalf;
    secondHalf.next = temp1;

    firstHalf = temp1;
    secondHalf = temp2;
  }

  //   return firstHalf;
  return dummy.next;
};

reorderList(node1);
console.log(node1);
