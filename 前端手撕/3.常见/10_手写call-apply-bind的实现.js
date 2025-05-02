// 1.手写数组方法-forEach
// Array.prototype.Hyforeach = function (fn, thisArg) {
//   let arr = this;
//   thisArg = thisArg === null || thisArg === undefined ? {} : Object(thisArg);
//   thisArg.fn = fn;
//   for (var i = 0; i < arr.length; i++) {
//     thisArg.fn(arr[i], i, arr);
//   }
//   delete thisArg.fn;
// };

Function.prototype.call = function (thisArg, ...args) {
  let fn = this;
  let thisArg =
    thisArg === null || thisArg === undefined ? window : Object(thisArg);
  thisArg.fn = fn;
  const res = thisArg.fn(...args);
  delete thisArg.fn;
  return res;
};

Array.prototype.forEach = function (fn, thisArg) {
  let arr = this;
  thisArg = thisArg === null || thisArg === undefined ? {} : Object(thisArg);
  thisArg.fn = fn;
  for (let i = 0; i < arr.length; i) {
    thisArg.fn(arr[i], i, arr);
  }
  delete thisArg.fn;
};

// var arr = [1,2,3,4,5]
// arr.Hyforeach((item,index,arr) => {
//     console.log(this);
//     console.log(item,index,arr,this);
// })

// 2.手写数组方法filter
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.Hyfilter = function (fn, thisArg) {
  var arr = this;
  thisArg = thisArg === null || thisArg === undefined ? {} : Object(thisArg);
  thisArg.fn = fn;
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (thisArg.fn(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
};

// 注意绑定的是普通函数的情况下,this指向才会生效
// var arr3 = arr2.filter((item,index,arr) => {
//     console.log(this);
//     return item % 2 == 0
// },{uname:'ycw'})
// console.log('arr3',arr3);

// 3.数组方法map会返回新的数组
Array.prototype.HyReduce = function (fn, initialVal = 0) {
  if (typeof fn !== "function") {
    throw Error("请传入归并函数");
  }
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    initialVal = fn(initialVal, arr[i], i, arr);
  }
  return initialVal;
};
// var arr = [1,2,3]
// console.log(arr.reduce((pre,val) => pre-val));

// 4.call的实现
Function.prototype.Hycall = function (thisArg, ...args) {
  let fn = this;
  thisArg =
    thisArg === null || thisArg === undefined ? window : Object(thisArg);
  thisArg.fn = fn;
  let res = thisArg.fn(...args);
  delete thisArg.fn;
  return res;
};
// function fn(a,b) {
//     console.log(this);
//     return a+b
// }
// fn.Hycall({name:'12'},1,2,3)

// 5.apply的实现
Function.prototype.hyapply = function (thisArg, arrArgs) {
  let fn = this;
  thisArg =
    thisArg === null || thisArg === undefined ? window : Object(thisArg);
  thisArg.fn = fn;
  arrArgs = arrArgs || [];
  let res = thisArg.fn(...arrArgs);
  delete thisArg.fn;
  return res;
};
// fn.apply({},[1,2,3])

// 6.bind的实现
Function.prototype.hybind = function (thisArg, ...args) {
  thisArg =
    thisArg === null || thisArg === undefined ? window : Object(thisArg);
  let fn = this;
  thisArg.fn = fn;
  const proxyFn = function (...args2) {
    const res = thisArg.fn(...args, ...args2);
    delete thisArg.fn;
    return res;
  };

  return proxyFn;
};
// function fn(a,b) {
//     return a+b
// }
// const fn1 = fn.hybind({},1,2)
// console.log(fn1());

// 7. 类数组转数组的几种方法
let argument;
function bar(a, b, c) {
  argument = arguments;
}
bar(1, 2, 3, 4);
console.log(argument);
// 7.1 利用Array.from()方法
console.log(Array.from(argument));

// 7.2 利用数组方法
console.log(Array.prototype.slice.call(argument));

// 7.3 利用for循环遍历类数组
var arrList = [];
for (var i = 0; i < argument.length; i++) {
  arrList.push(argument[i]);
}
console.log(arrList);

// 7.4 扩展运算符
console.log([...argument]);
