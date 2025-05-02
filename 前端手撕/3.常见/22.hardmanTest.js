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
      console.log(`I'm studying ${name}`);
      this.next();
    };
    this.queue.push(fn); // push，放到任务队列最末端
    return this;
  };

  this.reset = (second) => {
    const fn = () => {
      setTimeout(() => {
        console.log(`Wait ${second} seconds.`);
        this.next();
      }, second * 1000);
    };
    this.queue.push(fn); // push，放到任务队列最末端
    return this;
  };

  this.resetFirst = (second) => {
    const fn = () => {
      setTimeout(() => {
        console.log(`Wait ${second} seconds.`);
        this.next();
      }, second);
    };
    this.queue.unshift(fn);
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

hardMan("yyyy").study("122");

/*
所有的fn都要调this.next
fn外部函数都要return this以及push/unshift(fn)
*/
