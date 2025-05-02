const isTargetStr = (num) => {
  let isFlag = false;
  console.log(num);
  let res = [];
  while (num !== 0) {
    res.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  const oneLen = res.filter((item) => item === 1);
  if (oneLen.length % 2 !== 0) {
    isFlag = true;
  }
  return isFlag;
};

const getTargetNum = (str) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (isTargetStr(i + 1)) {
      res += String.fromCharCode(str[i].charCodeAt() - 32);
    } else {
      res += str[i];
    }
  }
  return res;
};

console.log(getTargetNum("abcdefg"));
console.log(isTargetStr(1));
console.log(isTargetStr(3));
console.log(isTargetStr(4));
