/*递归版*/
// const transformToObj = (str, resObj = {}) => {
//   const path = Array.isArray(str) ? str : str.split(".");
//   if (path.length > 1) {
//     resObj[path[0]] = transformToObj(path.slice(1));
//   } else {
//     resObj[path[0]] = null;
//   }
//   return resObj;
// };

// const transformObj = (str, resObj = {}) => {
//   const path = Array.isArray(str) ? str : str.split(".");
//   if (path.length > 1) {
//     resObj[path[0]] = transformObj(path.slice(1));
//   } else {
//     resObj[path[0]] = null;
//   }
//   return resObj;
// };

const transformObj = (str, resObj = {}) => {
  const path = Array.isArray(str) ? str : str.split(".");
  if (path.length > 1) {
    resObj[path[0]] = transformObj(path.slice(1));
  } else {
    resObj[path[0]] = null;
  }
  return resObj;
};

function transformToObj(str) {
  const path = str.split(".");
  const resObj = {};
  let current = resObj;
  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    if (i === path.length - 1) {
      current[key] = null;
    } else {
      current[key] = {};
      current = current[key];
    }
  }
  return resObj;
}

/*非递归版*/
// function transformToObj(str) {
//   const path = str.split(".");
//   const resObj = {};
//   let current = resObj;

//   for (let i = 0; i < path.length; i++) {
//     const key = path[i];
//     if (i === path.length - 1) {
//       current[key] = null; // 最后一层，赋值 null
//     } else {
//       current[key] = {};
//       current = current[key]; // 指向下一层
//     }
//   }

//   return resObj;
// }

const string = "a.b.c";
console.log(transformToObj(string));
