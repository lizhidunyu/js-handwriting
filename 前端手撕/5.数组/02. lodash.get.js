/**1.**/
function _get(obj, path, defaultValue) {
  let key = Array.isArray(path)
    ? path
    : path.replace(/(\[(\d)\])/g, ".$2").split(".");
  obj = obj[key[0]];
  if (obj && key.length > 1) {
    return _get(obj, key.slice(1), defaultValue);
  }
  return obj ?? defaultValue;
}

// function _get(obj, path, defaultValue) {
//   let key = Array.isArray(obj)
//     ? path
//     : path.replace(/(\[(\d)\])/g, ".$2").split(".");
//   obj = obj[key[0]];
//   if (obj && key.length > 1) {
//     return _get(obj, key.slice(1), defaultValue);
//   }
//   return obj ?? defaultValue;
// }

function _get(obj, path, defaultValue) {
  let key = Array.isArray(obj)
    ? path
    : path.replace(/(\[(\d)\])/g, ".$2").split(".");
  obj = obj[key[0]];
  if (obj && path.length > 1) {
    return _get(obj, path.slice(1), defaultValue);
  }
  return obj ?? defaultValue;
}

const obj = { a: [{ b: 1 }] };
const obj2 = { a: { b: { c: "11" } } };
console.log(_get(obj, "a[0].b", 3)); // 1
console.log(_get(obj, "a[0].c", 3)); // 3
console.log(_get(obj2, "a.b.c", 3)); // 11
console.log(_get(obj2, "a.d.c", 4)); // 4

/**2.**/
const valBypath = (data, path) => {
  let arr = Array.isArray(path) ? path : path.split(".");
  data = data[arr[0]];
  if (arr.length > 1 && data) {
    console.log(data, arr.slice(1));
    return valBypath(data, arr.slice(1));
  }
  return data;
};

const data = { a: { b: [{}, { c: 0 }] } };
console.log(valBypath(data, "a.b.1.c"));
// 0
