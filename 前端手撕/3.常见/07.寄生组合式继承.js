function Parent(name, age) {
  this.name = name;
  this.age = age;
}

function Son(name, age, skills) {
  Parent.call(this, name, age);
  this.skills = skills;
}

Son.prototype = Object.create(Parent.prototype);
Son.prototype.constructor = Son;
