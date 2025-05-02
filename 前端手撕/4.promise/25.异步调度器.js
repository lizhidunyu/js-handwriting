/* 
标题
并发请求限制

题目描述
【背景】​
一般浏览器会限制并发请求数，微信小程序之前也限制过最多请求不超过10个。​
现在，让我们来实现一下这个功能。​
【问题描述】​
实现这样一个函数scheduler，函数入参为并发最大次数。​
如下最终输出顺序： 2、3、 1、 4​
一开始，1、2两个任务进入队列​
500ms时，2完成，输出2，任务3进队​
800ms时，3完成，输出3，任务4进队​
1000ms时，1完成，输出1​
1200ms时，4完成，输出4​
*/
// -----------------mock一些请求​

class Scheduler {
  constructor() {
    // 异步调度器会维护一个当前的任务队列
    this.queue = [];
    // 以及当前的工作数
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
    if (this.doingJobs < 2 && this.queue.length) {
      this.doingJobs++;
      const task = this.queue.shift();
      task()
        .then(
          (res) => {
            task.resolve(res);
          },
          (err) => {
            task.reject(err);
          }
        )
        .finally(() => {
          this.doingJobs--;
          this.run();
        });
    }
  }
}

const scheduler = new Scheduler();

const timeout = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const addTask = (time, order) => {
  scheduler
    .add(() => timeout(time))
    .then(() => {
      console.log(order);
    });
};

addTask(1000, "1");
addTask(500, "2");
addTask(200, "3");
addTask(200, "4");
