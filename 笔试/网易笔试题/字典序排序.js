const isRightPlace = (a, b) => {
  let len = Math.min(a.length, b.length);
  for (let i = 0; i < len; i++) {
    let charA = a[i].charCodeAt(),
      charB = b[i].charCodeAt();
    if (charA > charB) {
      return false;
    }
    if (charA <= charB) {
      return true;
    }
  }
  return true;
};

const isValidArr = (str) => {
  let arr = str.split(" ");
  let len = arr.length;
  let resArr = [];
  for (let i = 0; i < len; i++) {
    if (!resArr.includes(arr[i])) {
      resArr.push(arr[i]);
    } else {
      resArr.push(arr[i]);
      console.log("resArr", resArr);
      if (isRightPlace(resArr.at(-2), resArr.at(-1))) {
        const index = resArr.indexOf(arr[i]);
        resArr = [...resArr.slice(0, index), ...resArr.slice(index + 1)];
      }
    }
  }
  return [...new Set(resArr)].join(" ");
};

console.log(
  isValidArr("sort oppppp sort aaaaa tbdsbuh sort tbdsbuh oppppp aaaaa")
);
