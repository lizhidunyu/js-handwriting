// 时间：2025.05.28
// 一面

// 03.并发类Schedule,最大数是1
function timeout(time, order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log(order);
      resolve(order);
    }, time);
  });
}

class Scheduler {
  constructor(limit) {
    this.queue = [];
    this.doingJobs = 0;
    this.maxJobs = limit;
  }
  add(promiseCreate) {
    return new Promise((resolve, reject) => {
      this.queue.push({ task: promiseCreate, resolve, reject });
    });
  }
  start() {
    return new Promise((resolve1, reject) => {
      let index = 0,
        count = 0;
      const values = [];
      const runNext = () => {
        let i = index;
        if (index === this.queue.length || this.doingJobs > this.maxJobs) {
          return;
        }
        const { task, resolve, reject } = this.queue[index++];
        task()
          .then((res) => {
            resolve(res);
            values[i] = res;
          })
          .catch((e) => {
            reject(e);
            values[i] = e;
          })
          .finally(() => {
            if (++count === this.queue.length) {
              resolve1(values);
            } else {
              this.doingJobs--;
              runNext();
            }
          });
      };
      // 最大并发数为1
      // runNext();

      // 改编1：最大并发数为n
      for (let i = 0; i < Math.min(this.maxJobs, this.queue.length); i++) {
        runNext();
      }
    });
  }
}

const scheduler = new Scheduler(3);
scheduler.add(() => timeout(300, 1));
scheduler.add(() => timeout(100, 2));
scheduler.add(() => timeout(50, 3));
scheduler.add(() => timeout(50, 4));
scheduler.add(() => timeout(50, 5));
// scheduler.start();
// 改编2：start拿到所有的结果，按照顺序输出
scheduler.start().then((res) => {
  console.log("res:", res);
});

// 04.多重排序
const arr = [
  { name: "aa", age: 12, price: 100 },
  { name: "aaa", age: 12, price: 90 },
  { name: "bb", age: 38, price: 100 },
  { name: "cc", age: 32, price: 90 },
  { name: "aa", age: 12, price: 89 },
  { name: "ee", age: 2, price: 89 },
];
const rules = [
  { key: "age", asec: false },
  { key: "name", asec: true },
  { key: "price", asec: true },
];

const sortData = (arr, rules) => {
  return arr.sort((a, b) => {
    for (const { key, asec } of rules) {
      if (a[key] === b[key]) {
        continue;
      }
      // 多重排序的核心：后面排序的规则只有在前面相等时候才启用
      if (typeof a[key] === "string") {
        return asec
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key]);
      } else {
        return asec ? a[key] - b[key] : b[key] - a[key];
      }
    }
  });
};

console.log(sortData(arr, rules));

// [
//   { name: "bb", age: 38, price: 100 },
//   { name: "cc", age: 32, price: 90 },
//   { name: "aa", age: 12, price: 89 },
//   { name: "aa", age: 12, price: 100 },
//   { name: "aaa", age: 12, price: 90 },
//   { name: "ee", age: 2, price: 89 },
// ];
