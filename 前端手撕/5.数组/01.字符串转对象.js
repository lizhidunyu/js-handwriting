// 递归版本
const transformToObj1 = (str, resObj = {}) => {
  const path = Array.isArray(str) ? str : str.split('.') ;
  if (path.length > 1) {
    resObj[path[0]] = transformToObj(path.slice(1))
  } else {
    resObj[path[0]] = null
  }
  return resObj
}


// 迭代版本
const transformToObj2 = (str) => {
   let resObj = {}
   let current = resObj
   for (let i = 0; i < str.length; i++) {
    if (str[i] !== '.') {
     if (i !== str.length - 1) {
      current[str[i]] = {}
      current = current[str[i]]
     } else {
      current[str[i]] = null
     }
    }
   }
   console.log(resObj);
}


const string = "a.b.c";
console.log(transformToObj(string));
