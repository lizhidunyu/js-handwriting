async function async1() {
  console.log("async1"); //2
  await async2();
  console.log("async1 end"); //6
}

async function async2() {
  console.log("async2"); //3
}

console.log("script start"); //1

setTimeout(() => {
  console.log("setTimeOut"); //10
}, 0);

async1();

new Promise((resolve) => {
  console.log("promise"); //4
  resolve("promise2");
})
  .then((data) => {
    console.log(data); //7
    return "promise3";
  })
  .then((data) => {
    console.log(data); //8
  })
  .then((data) => {
    console.log(data); //9
  });

console.log("script end"); //5
