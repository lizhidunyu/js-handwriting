async function taskRunner(taskChain) {
  let type = taskChain.taskType;
  let tasks = taskChain.tasks;
  let res;
  switch (type) {
    case 0:
      res = await Promise.allSettled(tasks).catch((e) => console.log(e));
      break;
    case 1:
      res = await Promise.race(tasks).catch((e) => console.log(e));
      break;
    case 2:
      res = await Promise.any(tasks).catch((e) => console.log(e));
      break;
    default:
      break;
  }
  console.log(res);

  taskChain.next && taskRunner(taskChain.next);
  return res;
}

const task1 = new Promise((res, rej) => {
  setTimeout(() => res("1s 成功"), 1000);
});

const task2 = new Promise((res, rej) => {
  setTimeout(() => res("2s 成功"), 2000);
});

const task3 = new Promise((res, rej) => {
  setTimeout(() => rej("1s 失败"), 1000);
});

const task4 = new Promise((res, rej) => {
  setTimeout(() => rej("2s 失败"), 2000);
});

const taskChain = {
  taskType: 0,
  tasks: [task1, task2],
  next: {
    taskType: 1,
    tasks: [task1, task2],
    next: {
      taskType: 2,
      tasks: [task2, task3],
      next: {
        taskType: 0,
        tasks: [task1, task3],
        next: {
          taskType: 1,
          tasks: [task2, task3],
          next: {
            taskType: 2,
            tasks: [task3, task4],
            next: null,
          },
        },
      },
    },
  },
};

taskRunner(taskChain);
