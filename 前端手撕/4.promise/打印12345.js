// 闭包
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i);
// }

// promise
const task = [];

const generatePromise = (i) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = { name: i, time: Date.now() };
      console.log("value:", value);
      resolve(value);
    }, 1000 * i);
  });
};

for (let i = 0; i < 5; i++) {
  task.push(generatePromise(i));
}
console.log(task);

// promise.all并发，但是不同定时器时间
Promise.all(task).then((res) => {
  console.log(res);
});
