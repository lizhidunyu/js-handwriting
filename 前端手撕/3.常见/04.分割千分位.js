// @todo: 后续可以继续优化
const formatNum = (num) => {
  const resArr = [];
  let count = 0;
  const str = `${num}`;
  for (let i = str.length - 1; i >= 0; i--) {
    if (count % 3 === 0 && count !== 0) {
      resArr.unshift(",");
    }
    count++;
    resArr.unshift(str[i]);
  }
  return resArr.join("");
};

console.log(formatNum(1123456789));

// 2.
function formatThousand(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(formatThousand(1234567890)); // 1,234,567,890

//3.
function formatThousand(num) {
  return new Intl.NumberFormat().format(num);
}

// 4.
function formatThousand(num) {
  return num.toLocaleString();
}

console.log(formatThousand(1234567890)); // 1,234,567,890
