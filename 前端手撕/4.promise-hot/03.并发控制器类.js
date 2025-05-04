class Scheduler {
  constructor(limit) {
    this.queue = [];
    this.limit = limit;
    this.doingJobs = 0;
  }
  add(promiseCreate) {
    return new Promise((resolve, reject) => {
      promiseCreate.resolve = resolve;
      promiseCreate.reject = reject;
      this.queue.push(promiseCreate);
      this.run();
    });
  }
  run() {
    if (this.doingJobs < this.limit && this.queue.length > 0) {
      const task = this.queue.shift();
      this.doingJobs++;
      task()
        .then((res) => {
          task.resolve(res);
        })
        .catch((err) => {
          task.reject(err);
        })
        .finally(() => {
          this.doingJobs--;
          this.run();
        });
    }
  }
}

const timeout = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
const scheduler = new Scheduler(1);
const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
