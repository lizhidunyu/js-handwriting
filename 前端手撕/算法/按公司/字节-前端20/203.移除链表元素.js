class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var removeElements = function (head, val) {
  let dummy = new ListNode(0, head);
  let cur = dummy;
  while (cur && cur.next) {
    let next = cur.next;
    if (next.val === val) {
      cur.next = next.next;
    } else {
      //这里注意只有满足条件才能向后移动
      cur = cur.next;
    }
  }
  return dummy.next;
};
