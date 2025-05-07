
class LazyMangenerator {
  constructor(name) {
    this.name = name
    this.queue = []

    const fn = () => {
      console.log(`Hi! I am ${this.name}`);
      this.next()
    }
    this.queue.push(fn)

    // 核心是setTime变成异步调度的一系列任务，欧耶！！
    setTimeout(() => {
      this.next()
    }, 0)
  }

  next() {
    const task = this.queue.shift()
    task?.()
  }

  sleepFirst(time) {
    const fn = () => {
      console.log(`先睡${time}s`);
      setTimeout(() => {
        console.log(`${time}s后，醒来了`);
        this.next()
      }, 1000*time)
    }
    this.queue.unshift(fn)
    return this
  }

  sleep(time) {
    const fn = () => {
      console.log(`再睡${time}s`);
      setTimeout(() => {
        console.log(`${time}s后，醒来了`);
        this.next()
      }, 1000*time)
    }
    this.queue.push(fn)
    return this
  }

  eat(someThing) {
    const fn = () => {
      console.log(`吃${someThing}啦`);
      this.next()
    }
    this.queue.push(fn)
    return this
  }

}

const lazyMan = (name) => {
  return new LazyMangenerator(name)
}

lazyMan("Hank").sleep(5).eat('dinner').sleepFirst(2)