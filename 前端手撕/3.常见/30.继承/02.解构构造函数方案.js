function Person(name, age, friends) {
  this.name = name;
  this.age = age;
  this.friends = friends;
}
Person.prototype.eating = function () {
  console.log(this.name + " is eating");
};

function Student(name, age, friends, sno) {
  Person.call(this, name, age, friends);
  this.sno = sno;
}
var p = new Person();
Student.prototype = p;

var stu = new Student("why", 18, [11, 22], 111);
