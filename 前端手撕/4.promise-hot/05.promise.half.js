Promise.half = function (tasks, limit, retry) {
  const values = [],
    reasons = [];
  let fullfilled = 0,
    index = 0;

  return new Promise((resolve, reject) => {
    async function run(promiseFn, retry) {
      if (!promiseFn) return;
      try {
        const res = await promiseFn();
        values.push(res);
        fullfilled++;
        if (fullfilled >= Math.floor(tasks.length / 2)) {
          resolve(values);
        }
        next();
      } catch (err) {
        if (retry > 0) {
          run(promiseFn, retry - 1);
        } else {
          reasons.push(err);
          next();
        }
      }
    }

    function next() {
      // 在调度下一个的时候不是直接调度，而是先去判断一系列的先决条件
      if (index >= tasks.length) {
        if (fullfilled < Math.floor(tasks.length / 2)) {
          reject({ values, reasons });
        }
        return;
      }
      const promiseFn = tasks[index++];
      run(promiseFn, retry);
    }

    for (let i = 0; i < Math.min(tasks.length, limit); i++) {
      next();
    }
  });
};

const getPromise = (time, value) => {
  return new Promise((resolve, reject) => {
    const random = Math.random() * 10;
    console.log(random, value);
    if (random > 5) {
      setTimeout(resolve, time, value);
    } else {
      setTimeout(reject, time, value);
    }
  });
};

const tasks = [
  () => getPromise(500, "A"),
  () => getPromise(100, "B"),
  () => getPromise(200, "C"),
  () => getPromise(800, "D"),
  () => getPromise(800, "D"),
  () => getPromise(800, "D"),
  () => getPromise(800, "D"),
  () => getPromise(800, "D"),
];

Promise.half(tasks, 3, 2).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
