// function querySearch(url) {
//   const regex = /\?([^#]+)/;
//   const matches = url.match(regex)[1];
//   const queryArr = matches.split("&");
//   const targetObj = {};
//   for (let item of queryArr) {
//     const [key, value] = item.split("=");
//     console.log("key:", key, "value:", value);
//     if (!value) {
//       targetObj[key] = "";
//     } else {
//       targetObj[key] = value;
//     }
//   }
//   return targetObj;
// }

console.log(querySearch("http://sample.com/?a=1&b=2&c=xx&d#hash"));
function querySearch(url) {
  const regex = /\?([^#]+)/;
  const res = url.match(regex)[1];
  const targetObj = {};
  const resArr = res.split("&");
  for (const item of resArr) {
    const [key, value] = item.split("=");
    targetObj[key] = !value ? "" : value;
  }
  return targetObj;
}
