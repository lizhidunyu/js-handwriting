function Person(name, age) {
  let _name = name;
  let _age = age;
  this.getName = function () {
    return _name;
  };
  this.getAge = function () {
    return _age;
  };
  this.setName = function (newName) {
    _name = newName;
  };
  this.setAge = function (newAge) {
    _age = newAge;
  };
}

Person.prototype.sayHello = function () {
  console.log(
    `hello, my name is ${this.getName()} and I am ${this.getAge()} years old`
  );
};

Person.createAdult = function (name) {
  return new Person(name, 18);
};
