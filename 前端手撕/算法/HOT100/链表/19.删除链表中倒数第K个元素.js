var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(null, head);
  let r = (l = head);
  let count = 0;
  while (count++ < n) {
    r = r.next;
  }
  while (r) {
    if (!r.next) {
      let temp = r.next;
      l.next = temp;
    }
    r = r.next;
    l = l.next;
  }
  return dummy.next;
};
