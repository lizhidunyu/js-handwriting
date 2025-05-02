function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(4);
node1.next = node2;
node2.next = node3;

const nodea = new ListNode(1);
const nodeb = new ListNode(3);
const nodec = new ListNode(4);
nodea.next = nodeb;
nodeb.next = nodec;

var mergeTwoLists = function (list1, list2) {
  let cur1 = list1,
    cur2 = list2;
  let dummy = new ListNode(0);
  let newListNode = dummy;
  while (cur1 && cur2) {
    if (cur1.val <= cur2.val) {
      newListNode.next = new ListNode(cur1.val);
      cur1 = cur1.next;
    } else {
      newListNode.next = new ListNode(cur2.val);
      cur2 = cur2.next;
    }
    newListNode = newListNode.next;
  }

  if (cur1) {
    newListNode.next = cur1;
  }

  if (cur2) {
    newListNode.next = cur2;
  }

  return dummy.next;
};

console.log(mergeTwoLists(node1, nodea));
