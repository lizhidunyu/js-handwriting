var reverseList = function (head) {
  let l = null,
    r = head;
  while (r) {
    let temL = r;
    let temR = r.next;
    r.next = l;
    l = temL;
    r = temR;
  }
  return l;
};
