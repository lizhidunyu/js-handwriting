var swapPairs = function (head) {
  let dummy = new ListNode(null, head);
  let pre = dummy,
    cur = head;
  while (cur && cur.next) {
    let next = cur.next;
    cur.next = next.next;
    next.next = cur;
    pre.next = next;
    pre = cur;
    cur = cur.next;
  }
  return dummy.next;
};
