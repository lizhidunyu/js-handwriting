class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var hasCycle = function (head) {
  let slow = (fast = head);
  // 这里使用的是fast,我本来写的是slow
  while (fast && fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
