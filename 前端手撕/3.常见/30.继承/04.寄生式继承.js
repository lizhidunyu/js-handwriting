var personObj = {
  name: "why",
  age: 18,
  running: function () {
    console.log("running");
  },
};

function createStudent(name) {
  var stu = Object.create(personObj);
  stu.name = name;
  stu.studying = function () {
    console.log(this.name, this.age);
  };
  return stu;
}

var studentObj = createStudent("why111");
studentObj.studying();
// console.log(studentObj);
