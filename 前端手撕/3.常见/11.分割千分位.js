// @todo: 后续可以继续优化
function formatNum(num) {
  const str = num + ''
  const resArr = []
  let count = 0
  for (let i = str.length - 1; i >= 0; i--) {
    resArr.unshift(str[i])
    if (++count % 3 === 0 && count !== 0) {
      resArr.unshift(',')
    }
  }
  return resArr.join('')
}

console.log(formatNum(1123456789));

// 2.
function formatThousand(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatThousand(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// console.log(formatThousand(1234567890)); // 1,234,567,890

// //3.
// function formatThousand(num) {
//   return new Intl.NumberFormat().format(num);
// }

// // 4.
function formatThousand(num) {
  return num.toLocaleString();
}

console.log(formatThousand(1234567890)); // 1,234,567,890
