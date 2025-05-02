const getTargetStr = (str) => {
  const len = str.length;
  let i = 0;
  while (i < len - 1) {
    str = str.slice(0, i) + str.slice(i + 1) + str[i];
    console.log(str);
    i++;
  }
  return str;
};

console.log(getTargetStr("paectc"));
