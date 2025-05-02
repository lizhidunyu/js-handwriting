var removeElements = function (head, val) {
  let dummy = new ListNode(null, head);
  let cur = dummy;
  while (cur && cur.next) {
    let nxt = cur.next;
    if (nxt.val === val) {
      cur.next = nxt.next;
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
};
