// 1.原型链的继承
function Person(name, age) {
  this.name = "yucuiwen";
  this.age = [];
}

Person.prototype.eating = function () {
  console.log(this.name + "is eating");
};

function Stu() {
  this.sno = 2019303460;
}

var p = new Person("yucuiwen");
Stu.prototype = p;

Stu.prototype.studying = function () {
  console.log(this.name + "is studying");
};

var stu = new Stu();
console.log(stu.name);

// 2.借用构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.eating = function () {
  console.log(this.name + "is eating");
};

function Stu(sno, name, age) {
  Person.call(this, name, age);
  this.sno = sno;
}

var p = new Person();
Stu.prototype = p;

Stu.prototype.studying = function () {
  console.log(this.name + "is studying");
};

var stu = new Stu(2019303460, "余翠雯", 20);

// 3.继承 - 父类原型直接赋值给子类原型
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.eating = function () {
  console.log(this.name + "is eating");
};

function Stu(sno, name, age) {
  Person.call(this, name, age);
  this.sno = sno;
}

Stu.prototype = Person.prototype;

Stu.prototype.studying = function () {
  console.log(this.name + "is studying");
};

var stu = new Stu(2019303460, "余翠雯", 20);

// 4.原型链继承函数
// 4.1
// function createObjByPrototype(o) {
//   var newObj = {};
//   Object.setPrototypeOf(newObj, o); //以o为原型对象设置对象
//   return newObj;
// }

var obj = {
  name: "yucuiwen",
  age: 19,
};
// const o = createObjByPrototype(obj);
console.log(o.__proto__ === obj); //true

// 4.2
function createObjByPrototype(o) {
  function Foo() {}
  Foo.prototype = o;
  var f = new Foo();
  f.__proto__ = o;
  return f;
}
var obj = {
  name: "yucuiwen",
  age: 19,
};
// const o = createObjByPrototype(obj);
console.log(o.__proto__ === obj); //true

// 4.3
// const o = Object.create(obj);
console.log(o.__proto__);

// 5.寄生式继承 -- 把新对象的属性和方法寄生在父类的实例对象身上
var obj = {
  name: "yucuiwen",
  age: 19,
};

function createPerson(name) {
  var newObj = Object.create(obj);
  newObj.name = name;
  newObj.studying = function () {
    console.log(this.name + " is studying");
  };
  return newObj;
}

var o = createPerson("yucuiwen");
o.studying();

// 6.寄生组合式继承
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.eating = function () {
  console.log(this.name + " is eating");
};

function Stu(sno, name, age) {
  Person.call(this, name, age);
  this.sno = sno;
}

function createObj(o) {
  function Fun() {}
  Fun.prototype = o;
  return new Fun();
}

function extendsFather(SuperFun, SonFun) {
  var SonFunPrototype = createObj(SuperFun.prototype);
  SonFun.prototype = SonFunPrototype;
  Object.defineProperty(SonFunPrototype, "constructor", {
    enumerable: false,
    writable: true,
    configurable: true,
    value: SonFun,
  });
}

extendsFather(Person, Stu);

Stu.prototype.studying = function () {
  console.log(this.name + " is studying");
};
var stu = new Stu(2019303460, "yucuiwen", 20);
console.log(stu);
stu.eating();
stu.studying();
