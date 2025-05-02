function Person(name, age, friends) {
  this.name = name;
  this.age = age;
  this.friends = friends;
}
Person.prototype.eating = function () {
  console.log(this.name + " eating");
};

function Student(name, age, friends, sno) {
  // Person构造函数绑定的是stu对象
  // constructor stealing:借用构造函数
  Person.call(this, name, age, friends);
  this.sno = sno;
}
// 直接将父类的原型赋值给子类，作为子类的原型(错误的)
Student.prototype = Person.prototype;
