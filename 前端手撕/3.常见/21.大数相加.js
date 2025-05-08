function addBigNumbers(a, b) {
  let i = a.length - 1, j = b.length - 1;
  let result = '', curry = 0
  while (i >= 0 || j >= 0 || curry > 0) {
    const digitA = i >= 0 ? parseInt(a[i]) : 0
    const digitB = j >= 0 ? parseInt(a[j]) : 0
    const sum = digitA + digitB + curry

    result = (sum % 10 + result)
    curry = Math.floor(sum / 10)

    i--
    j--
  }
  return result
}

console.log(addBigNumbers("999", "99")); // 输出: "1098"
console.log(addBigNumbers("123", "456")); // 输出: "579"
console.log(addBigNumbers("0", "0")); // 输出: "0"
console.log(addBigNumbers("999999999999999", "1")); // 输出: "1000000000000000"
