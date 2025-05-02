const isValidArr = (str) => {
  let strSum = "",
    stack = [],
    len = str.length;
  for (let i = 0; i < len; i++) {
    let char = str[i];
    if (char === "[") {
      if (strSum.length !== 0) {
        return `invalid ${i}`;
      } else {
        stack.push(char);
      }
    }
    if (char === "]") {
      stack.push(strSum);
      strSum = "";

      let stackPoint = stack.length - 1;
      while (stackPoint >= 0) {
        if (stack[stackPoint] === "[") {
          stack.pop();
          break;
        }
        stack.pop();
        stackPoint--;
      }
      continue;
    }
    if (![",", "[", "]"].includes(char)) {
      strSum += char;
    }
    if (char === ",") {
      if (strSum.length === 0 && str[i - 1] !== "]") {
        return `invalid ${i}`;
      }
      stack.push(strSum);
      strSum = "";
    }
  }
  return `valid`;
};

console.log(isValidArr("[v1,v2,v3]"));
console.log(isValidArr("[]"));
console.log(isValidArr("[v1,v2,[v3,v4],v5]"));
console.log(isValidArr("[v1,v2,[],v3]"));
console.log(isValidArr("[v1,v2,,v3]"));
console.log(isValidArr("[v1,v2,[,v3]"));
console.log(isValidArr("[v1,v2[v3]]"));

// valid
// valid
// valid
// valid
// invalid 7
// invalid 8
// invalid 6
