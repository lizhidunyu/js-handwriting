var decodeString = function (s) {
   let numStack = [], strStack = [];
   let num = 0, str = '';
   for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      num = num * 10 + Number(s[i])
    } else if (s[i] === '[') {
      numStack.push(num)
      num = 0
      strStack.push(str)
      str = ''
    } else if (s[i] === ']') {
      const repeatTimes = numStack.pop()
      str = strStack.pop() + str.repeat(repeatTimes)
    } else {
      str += s[i]
    }
   }
   return str
};

console.log(decodeString("3[a2[c]]"));
