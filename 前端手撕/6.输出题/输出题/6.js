// 1.局部作用域与全局作用域
// let val = 1;
// function foo() {
//   console.log(val);
// }
// function bar() {
//   let val = 2;
//   foo();
// }
// bar();

// // 2.this指向
// globalThis.name = "ByteDance";
// function A() {
//   this.name = 123;
// }
// A.prototype.getA = function () {
//   return this.name + 1;
// };
// let a = new A();
// a.getA();
// console.log(funcA());
// 解释完上面答下面这种情况;
// console.log(a.getA());

// // 3.this指向(call)
// const obj = {
//   birth: 1990,
//   getAge(year) {
//     let fn = function (y) {
//       return y - this.birth;
//     };
//     return fn.call({ birth: 2000 }, year);
//   },
// };
// console.log(obj.getAge(2020));

// // 4.执行顺序
async function async1() {
  console.log("async1 start"); //2
  await async2();
  console.log("async1 end"); //6
}
async function async2() {
  console.log("async2"); //3
}
console.log("script start"); //1
setTimeout(() => {
  console.log("setTimeout"); //8
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1"); //4
  resolve();
}).then(function () {
  console.log("promise2"); //7
});
console.log("script end"); //5
