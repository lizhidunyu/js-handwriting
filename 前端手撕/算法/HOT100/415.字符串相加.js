var addStrings = function (num1, num2) {
  let len1 = num1.length,
    len2 = num2.length;
  let i = len1 - 1,
    j = len2 - 1;
  const resArr = [];
  let padding = 0;
  while (i >= 0 || j >= 0) {
    let total = Number(num1[i] || 0) + Number(num2[j] || 0) + padding;
    resArr.unshift(total % 10);
    padding = total >= 10 ? Math.floor(total / 10) : 0;
    i--;
    j--;
  }
  if (padding != 0) {
    resArr.unshift(padding);
  }
  return resArr.join("");
};
console.log(addStrings("123", "11")); //134
console.log(addStrings("456", "77")); //533
console.log(addStrings("9", "1"));
