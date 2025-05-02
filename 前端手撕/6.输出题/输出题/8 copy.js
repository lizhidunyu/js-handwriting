let value = 1;

function bar() {
  foo();
  function foo() {
    console.log(value);
  }
  var value = 2;
}
bar(); //1
