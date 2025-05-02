var name = "window";
const obj = {
  name: "obj",
  sayName: function () {
    console.log(this.name);
  },
};
// 如果这里是普通函数，那么就是obj
obj.sayMyName = function () {
  console.log(this.name);
};
const fn1 = obj.sayName;
const fn2 = obj.sayMyName;
fn1(); // window
obj.sayName(); // obj
fn2(); // window
obj.sayMyName(); // obj
