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

var reverseList = function (head) {
  let l = null,
    r = head;
  while (r) {
    let temL = r,
      tempR = r.next;
    r.next = l;
    l = temL;
    r = tempR;
  }
  return l;
};

var reverseList = function (head) {
  let l = null;
  r = head;
  while (r) {
    let temL = r;
    let tempR = r.next;
    r.next = l;
    l = temL;
    r = tempR;
  }
  return l;
};
