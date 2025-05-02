// 实现点击按钮后发送12345个请求，并按照请求顺序渲染页面，要求渲染速度最快
async function sendRequest(promises) {
  let l = 0;
  while (l < promises.length) {
    let promise = promises[l];
    const res = await promise;
    console.log("渲染页面：", res);

    l++;
  }
}

const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(1);
  }, 1000);
});

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res(2);
  }, 5000);
});

const promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res(3);
  }, 3000);
});

const promise4 = new Promise((res, rej) => {
  setTimeout(() => {
    res(4);
  }, 4000);
});

const promise5 = new Promise((res, rej) => {
  setTimeout(() => {
    res(5);
  }, 5000);
});

sendRequest([promise1, promise2, promise3, promise4, promise5]);

function limitConcurrency(
  tasks, // 每个任务是一个返回 Promise 的函数
  limit
) {
  const results = new Array(tasks.length);
  let current = 0;
  let active = 0;

  return new Promise((resolve, reject) => {
    function next() {
      if (current >= tasks.length) {
        if (active === 0) resolve(results);
        return;
      }

      const index = current++;
      active++;

      tasks[index]()
        .then((res) => {
          results[index] = res;
        })
        .catch(reject)
        .finally(() => {
          active--;
          next();
        });
    }

    for (let i = 0; i < limit && i < tasks.length; i++) {
      next();
    }
  });
}

const delay = (time, value) => () =>
  new Promise((resolve) => setTimeout(() => resolve(value), time));

const taskList = [
  delay(1000, 1),
  delay(500, 2),
  delay(300, 3),
  delay(700, 4),
  delay(600, 5),
];

limitConcurrency(taskList, 2).then((res) => {
  console.log(res); // [1, 2, 3, 4, 5]
});
