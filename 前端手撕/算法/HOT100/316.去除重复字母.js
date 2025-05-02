// 总体思路：栈
var removeDuplicateLetters = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    // 如果当前的元素在栈里面，已经是最优解
    // 不需要重新入栈
    if (stack.indexOf(ch) !== -1) {
      continue;
    }
    // 每次一个字符的时候入栈的时候，都审视当前栈里面的元素
    // 如果
    // 1.当前栈非空
    // 2.当前栈最后一个元素后续还有出现
    // 3.当前栈的元素大于要入栈的元素
    while (
      stack.length > 0 &&
      stack.at(-1) > ch &&
      s.indexOf(stack.at(-1), i) !== -1
    ) {
      stack.pop();
    }
    // 入栈
    stack.push(ch);
  }
  return stack.join("");
};

console.log(removeDuplicateLetters("bcabc"));

console.log(removeDuplicateLetters("cbacdcbc"));
