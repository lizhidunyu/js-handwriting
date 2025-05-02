// 只存左括号且存储的是序号
var checkValidString = function (s) {
  const starStack = [];
  const strStack = []; // 所以它其实可以叫左括号栈
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      strStack.push(i);
    } else if (s[i] === "*") {
      starStack.push(i);
    } else {
      if (strStack.length) {
        strStack.pop();
      } else if (starStack.length) {
        starStack.pop();
      } else {
        return false;
      }
    }
  }

  while (strStack.length && starStack.length) {
    const strIndex = strStack.pop();
    const starIndex = starStack.pop();
    if (strIndex > starIndex) {
      return false;
    }
  }

  return strStack.length === 0;
};

console.log(
  checkValidString(
    "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"
  )
);
