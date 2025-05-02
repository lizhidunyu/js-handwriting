var addBinary = function (a, b) {
  let carry = 0;
  let result = [];
  // 把carry带在变量里面
  for (
    let i = a.length - 1, j = b.length - 1;
    i >= 0 || j >= 0 || carry > 0;
    i--, j--
  ) {
    let sum = carry;
    sum += i >= 0 ? parseInt(a[i]) : 0;
    sum += j >= 0 ? parseInt(b[j]) : 0;
    result.unshift(sum % 2);
    carry = Math.floor(sum / 2);
  }
  return result.join("");
};

console.log(addBinary("1010", "1011"));
