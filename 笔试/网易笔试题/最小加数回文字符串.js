const isHuiWenShu = (str) => {
  let len = str.length;
  let middle = Math.floor(len / 2);
  let huiWenShu = "";
  if (len % 2 === 0) {
    let l = middle - 1,
      r = middle;
    let leftHalf = str.slice(0, l) + Math.max(Number(str[l]), Number(str[r]));
    let rightHalf = leftHalf.split("").reverse().join("");
    huiWenShu = leftHalf + rightHalf;
  } else {
    let leftHalf =
      str.slice(0, middle - 1) +
      Math.max(Number(str[middle - 1]), Number(str[middle + 1]));
    let rightHalf = leftHalf.split("").reverse().join("");
    huiWenShu = leftHalf + str[middle] + rightHalf;
  }
  console.log(Number(huiWenShu) - Number(str));
};

console.log(isHuiWenShu("96"));
