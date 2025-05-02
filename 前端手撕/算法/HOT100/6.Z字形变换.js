var convert = function (s, numRows) {
  if (numRows === 1 || s.length < numRows) return s;
  const arr = new Array(numRows).fill("");
  let num = 0;
  // plus控制方向
  let plus = true;
  for (let i = 0; i < s.length; i++) {
    arr[num] += s[i];
    if (plus) {
      num++;
    } else {
      num--;
    }

    if (num === numRows - 1) {
      plus = false;
    } else {
      plus = true;
    }
  }
  return arr.join("");
};
console.log(convert("PAYPALISHIRING", 3));
