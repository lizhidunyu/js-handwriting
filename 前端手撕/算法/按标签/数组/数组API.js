// let isFlag = false;
// const arr = [11, 22, 33, 44, 55, 66];

// try {
//   arr.forEach((item) => {
//     if (item === 33) {
//       throw new Error("something error");
//     }
//   });
// } catch (err) {
//   console.log("err123", err);
// }

// const item = arr.some((item) => {
//   if (item < 1) {
//     return true;
//   }
// });
// console.log("item:", item);

// arr.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const arr = [11, 22, 33, 44, 55, 66];

Array.prototype.ycwforEach = function (fn, thisArg) {
  const arr = this;
  thisArg = thisArg === null || thisArg === undefined ? {} : Object(thisArg);
  thisArg.fn = fn;
  for (let i = 0; i < arr.length; i++) {
    thisArg.fn(arr[i], i, arr);
  }
  delete thisArg.fn;
};

arr.ycwforEach((item, index, arr) => {
  console.log(item, index, arr);
});
