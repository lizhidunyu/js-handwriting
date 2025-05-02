// 父类：公共的属性和方法
function Person() {
  this.name = "yucuiwen";
  this.friends = [];
}
Person.prototype.eating = function () {
  console.log(this.name + " eating");
};

// 子类：特有的属性和方法
function Student() {
  this.sno = 111;
}

const p = new Person();
Student.prototype = p;

Student.prototype.studying = function () {
  console.log(this.name + " studying");
};

var stu = new Student();
stu.eating();
stu.studying();
