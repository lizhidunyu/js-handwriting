// 1.私有属性
const obj = {
  name: "ycw",
  _age: 100,
  set age(newVal) {
    this._age = newVal;
  },
  get age() {
    return this._age;
  },
};
obj.age = 123;
// console.log(obj.age);
// console.log(Object.getOwnPropertyDescriptor(obj,'_age'));

// 2.创建对象的几种方案
// 2.1 new 创建
let obj1 = new Object({ name: "123" });
console.log(obj1);
// 2.2 工厂函数
// 2.3 构造函数
// 2.4 原型和构造函数
obj1.__proto__.age = 18;
console.log(obj1.age);

// 3.继承
// 3.1 原型链的继承方式
function Person() {
  this.name = "why";
  this.friends = [];
}

Person.prototype.eating = function () {
  console.log(this.name + "eating");
};

function Student() {
  this.sno = 111;
}

var p = new Person();
Student.prototype = p;

Student.prototype.studying = function () {
  console.log(this.name + " studying");
};

// var stu = new Student()
// console.log(stu.name);
// stu.eating()
// stu.studying()
// console.log(stu);
// 弊端:
// 继承的属性是不可见的,只能打印自己身上的属性
// 继承的属性会被多个实例共享,如果是引用类型的话,就会产生问题
// 这个继承的属性不是定制化的,没有办法传递参数

// 3.2 借用构造函数继承(组合继承)
function Person2(name, age, friends) {
  this.name = name;
  this.age = age;
  this.friends = friends;
}
Person2.prototype.eating = function () {
  console.log(this.name + " eating");
};
function Student2(name, age, friends, sno) {
  Person.call(this, name, age, friends);
  this.sno = sno;
}
var p = new Person2();
Student2.prototype = p;
var stu = new Student2("why", 18, [11, 22], 111);
console.log(stu);
// 弊端:
// 父类构造函数至少被调用两次
// 所有的子类实例实际上拥有两份父类属性

// 3.3 父类原型直接赋值给子类
// 不可以。因为如果这样的话，我们加在子类原型上的方法都会被加在父类的原型身上，不利于父类的复用和继承。

// 3.4 原型链继承函数
// 第一种
function createObject(o) {
  var newObj = {};
  Object.setPrototypeOf(newObj, o);
  return newObj;
}

// 第二种
function createObject2(o) {
  function Fn() {}
  Fn.prototype = o;
  // newObj.__proto__ = o
  return new Fn();
}

// 第三种
var info = Object.create(obj);

// 3.5 寄生式继承
var PersonObj = {
  name: "why",
  age: 18,
  running: function () {
    console.log("running");
  },
};

function createStudent(name) {
  var stu = Object.create(PersonObj);
  stu.name = name;
  stu.studying = function () {
    console.log("~~~");
  };
  return stu;
}
// 弊端:
// 函数方法每个实例对象都有一份
// 不能明确创建的实力类型

// 3.6 寄生组合式继承
function Person3(name, age, friends) {
  this.name = name;
  this.age = age;
  this.friends = friends;
}

Person3.prototype.running = function () {
  console.log("running ~~~");
};
Person3.prototype.eating = function () {
  console.log("eating ~~~");
};

function Student3(name, age, frineds, sno, score) {
  Person.call(this, name, age, frineds);
  this.sno = sno;
  this.score = score;
}

function createObject(o) {
  function Fn() {}
  Fn.prototype = o;
  return new Fn();
}

function inheritPrototype(subType, superType) {
  subType.prototype = createObject(superType.prototype);
  Object.defineProperty(subType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: subType,
  });
}

inheritPrototype(Student3, Person3);

Student.prototype.studying = function () {
  console.log(" is studying");
};
