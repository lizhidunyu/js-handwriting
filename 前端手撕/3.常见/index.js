function hardMan(name) {
  this.name = name;
  this.queue = [];

  const fn = () => {
    setTimeout(() => {
      console.log(`Hi! I am ${this.name}`);
      this.next();
    }, 0);
  };

  this.queue.push(fn);

  this.study = (name) => {
    const fn = () => {
      console.log(`I am stydying ${name}`);
      this.next();
    };
    this.queue.push(fn);
    return this;
  };

  this.reset = (second) => {
    const fn = () => {
      setTimeout(() => {
        console.log(`Wait ${second} seconds.`);
        this.next();
      }, second * 1000);
    };
    this.queue.push(fn);
    return this;
  };

  this.restFirst = (second) => {
    const fn = () => {
      setTimeout(() => {
        console.log(`Wait ${second} seconds.`);
        this.next();
      }, second * 1000);
    };
    this.queue.unshift(fn); // 这里使用的是unshift，把任务放在队列最开始
    return this;
  };

  this.next = () => {
    if (this.queue.length === 0) return;
    this.queue.shift()();
  };

  setTimeout(() => {
    this.next();
  }, 0);

  return this;
}

hardMan("122").study("敲代码").sleep(3);
