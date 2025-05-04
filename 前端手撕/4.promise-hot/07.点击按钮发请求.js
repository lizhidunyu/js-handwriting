// 实现点击按钮后发送12345个请求，并按照请求顺序渲染页面，要求渲染速度最快

function limitQueue(promises, limit) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
      return;
    }
    const result = [];
    let index = 0;
    let count = 0;
    async function run() {
      if (index >= promises.length) return;
      //   let i = index;
      const promise = promises[index++];
      try {
        const res = await promise();
        // result[i] = res;
        result.push(res);
      } catch (err) {
        // result[i] = err;
        result.push(err);
      } finally {
        if (++count === promises.length) {
          resolve(result);
        } else {
          run();
        }
      }
    }
    for (let i = 0; i < Math.min(promises.length, limit); i++) {
      run();
    }
  });
}

const delay = (time, value) => () =>
  new Promise((resolve) => setTimeout(resolve, time, value));

const taskList = [
  delay(1000, 1),
  delay(500, 2),
  delay(300, 3),
  delay(700, 4),
  delay(600, 5),
];

limitQueue(taskList, 2).then((res) => {
  console.log(res); // [1, 2, 3, 4, 5]
});
