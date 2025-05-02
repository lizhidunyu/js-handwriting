function getNewFetch(limit) {
  // let count = 0;
  // const queue = [];

  // async function run(taskFn, resolve, reject) {
  //   count++;
  //   try {
  //     const result = await taskFn();
  //     resolve(result);
  //   } catch (e) {
  //     reject(e);
  //   } finally {
  //     count--;
  //     if (queue.length > 0) {
  //       const { taskFn, resolve, reject } = queue.shift();
  //       run(taskFn, resolve, reject);
  //     }
  //   }
  // }

  // return function limitedFetch(taskFn) {
  //   return new Promise((resolve, reject) => {
  //     if (count < limit) {
  //       run(taskFn, resolve, reject);
  //     } else {
  //       queue.push({ taskFn, resolve, reject });
  //     }
  //   });
  // };

  let count = 0,
    queue = [];

  async function run(taskFn, resolve, reject) {
    count++;
    try {
      const res = await taskFn();
      resolve(res);
    } catch (e) {
      reject(e);
    } finally {
      count--;
      if (queue.length > 0) {
        const { taskFn, resolve, reject } = queue.shift();
        run(taskFn, resolve, reject);
      }
    }
  }

  return function limitedFetch(taskFn) {
    return new Promise((resolve, reject) => {
      if (count < limit) {
        run(taskFn, resolve, reject);
      } else {
        queue.push({ taskFn, resolve, reject });
      }
    });
  };
}

const limitedFetch = getNewFetch(2);

const promise1 = () => new Promise((res) => setTimeout(() => res(1), 1000));
const promise2 = () => new Promise((res) => setTimeout(() => res(2), 500));
const promise3 = () => new Promise((res) => setTimeout(() => res(3), 1500));

limitedFetch(promise1).then(console.log);
limitedFetch(promise2).then(console.log);
limitedFetch(promise3).then(console.log);

// 持续添加任务（不限数量、随时添加）

// 比如：上传多个文件，每点击一个就触发一个上传任务
