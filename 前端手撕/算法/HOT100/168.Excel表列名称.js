var convertToTitle = (columnNumber) => {
  let res = "";
  while (columnNumber >= 1) {
    columnNumber--;
    res += String.fromCharCode("A".charCodeAt() + (columnNumber % 26));
    columnNumber /= 26;
  }
  console.log(res.split("").reverse().join(""));
};

console.log(convertToTitle(707));
