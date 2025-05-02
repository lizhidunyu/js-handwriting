// 字符串转数组
//     '[11, 22, [ 13, [24], 11], 23]' 转成 array

// 9.14 我的思路：
// const strToArray = (str) => {
//   const arrRes = strTransformToArray(
//     str.split(",").map((item) => item.trim()),
//     (arr = [])
//   );
//   return arrRes;
// };

// const strTransformToArray = (strArr, arr = []) => {
//   const levelArr = [];
//   const isEnd = false;
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i].startsWith("[")) {
//       levelArr.push(strArr[i].slice(1));
//       while (!isEnd) {
//         strTransformToArray(strArr.slice(i), arr);
//       }
//     } else if (levelArr.endsWith("]")) {
//       isEnd = true;
//       levelArr.push(strArr[i].slice(0, strArr[i].length - 1));
//       arr.push(...levelArr);
//     } else {
//       levelArr.push(strArr[i].slice(1));
//     }
//   }
//   return arr;
// };

function parseStr2Array(str) {
  let current = [];
  let stack = [];
  let numBuffer = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === "[") {
      stack.push(current);
      current = [];
    } else if (char === "]") {
      if (numBuffer.length > 0) {
        current.push(Number(numBuffer));
        numBuffer = "";
      }
      let parent = stack.pop();
      parent.push(current);
      current = parent;
    } else if (char === ",") {
      if (numBuffer.length > 0) {
        current.push(Number(numBuffer));
        numBuffer = "";
      }
    } else if (!isNaN(char) && char != " ") {
      numBuffer += char;
    }
  }

  if (numBuffer.length > 0) {
    current.push(Number(numBuffer));
  }

  return current[0];
}

const inputString = "[  [11,[13]]    , 23]";
const resultArray = parseStr2Array(inputString);
console.log(resultArray);
