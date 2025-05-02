const makeTask = (index) => {
  return () => {
    return new Promise((res, rej) => {
      return setTimeout(() => {
        return Math.random() > 0.5
          ? res(`task ${index} success`)
          : rej(new Error(`task ${index} failed`));
      }, 100);
    });
  };
};

const tasks = [makeTask(0), makeTask(1), makeTask(2)];

// 串行执行任务，每个在失败之后会尝试执行retries次
// 所有任务按顺序执行
// 返回promise,是所有任务依次执行结果的数组
function executeTasks(tasks = [], retries = 0) {}

executeTasks(tasks, 2).then(console.log).catch(console.error);

// ["task 0 success", "task 1 success", "task 2 success"];
// or
// Error: task 1 failed
