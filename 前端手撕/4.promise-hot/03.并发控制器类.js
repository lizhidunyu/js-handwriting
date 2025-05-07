class Schedule {
  constructor(limit) {
    this.queue = [];
    this.limit = limit || 1;
    this.doingJob = 0;
  }
  add(promiseCreate) {
    return new Promise((resolve, reject) => {
      promiseCreate.resolve = resolve;
      promiseCreate.reject = reject;
      this.queue.push(promiseCreate);
    });
  }
  start() {
    const run =() => {
      if (this.doingJob++ <= this.limit && this.queue.length > 0) {
        const task = this.queue.shift()
        task().then(res => {
          task.resolve(res)
        }).catch(err => {
          task.reject(err)
        }).finally(() => {
          this.doingJob--
          run()
        })
      } else {
        return 
      }
    }

    for (let i = 0; i < this.limit; i++) {
      run()
    }
  }
}

const timeout = (order, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(order);
      console.log(order);
    }, time);
  });
};

const schedule = new Schedule();
schedule.add(() => timeout(1, 400)) 
schedule.add(() => timeout(2, 100)) 
schedule.add(() => timeout(3, 50)) 
schedule.add(() => timeout(4, 600)) 
schedule.add(() => timeout(5, 70)) 
schedule.add(() => timeout(6, 100)) 

schedule.start()

 