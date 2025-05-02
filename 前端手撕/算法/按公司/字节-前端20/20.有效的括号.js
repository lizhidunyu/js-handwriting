var isValid = function (s) {
  if (s.length <= 1) return false;
  let stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (stack.at(-1) === "(" && s[i] === ")") {
      stack.pop();
    } else if (stack.at(-1) === "{" && s[i] === "}") {
      stack.pop();
    } else if (stack.at(-1) === "[" && s[i] === "]") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
