// const throttle = (
//   fn,
//   interval,
//   options = { leading: true, trailing: true, callback: null }
// ) => {
//   let lastTime = 0;
//   let timer = null;
//   const { leading, trailing, callback } = options;
//   const _throttle = (...args) => {
//     let curTime = Date.now();
//     if (!lastTime && !leading) {
//       // 如果不需要第一次的时候就执行
//       lastTime = curTime;
//     }
//     let remainTime = interval - (curTime - lastTime);
//     if (remainTime <= 0) {
//       if (timer) {
//         timer = null;
//         clearTimeout(timer);
//       }
//       const res = fn(...args);
//       callBack && callBack(res);
//       console.log(res);
//       lastTime = curTime;
//     } else if (trailing && !timer) {
//       timer = setTimeout(() => {
//         timer = null;
//         lastTime = leading ? Date.now() : 0;
//         const res = fn(...args);
//         callback && callback(res);
//       }, remainTime);
//     }
//   };
//   return _throttle;
// };

// const fn = (a, b) => a + b;

// const throttleFn = throttle(fn, 1000);
// throttleFn(1, 2);
// throttleFn(1, 2);
// throttleFn(1, 2);
// throttleFn(1, 2);
// throttleFn(1, 2);
// throttleFn(1, 2);
// setTimeout(() => {
//   throttleFn(1, 2);
// }, 2000);
// setTimeout(() => {
//   throttleFn(1, 2);
// }, 4000);

// const debounce = (fn, delay, isImmediate = false, callback) => {
//   let timer = null;
//   let isInvoked = false;
//   const _debounce = (...args) => {
//     return new Promise((resolve, reject) => {
//       if (!isInvoked && isImmediate) {
//         let res = fn(...args);
//         callback && callback(res);
//         resolve(res);
//         isInvoked = true;
//       }
//       if (timer) {
//         clearTimeout(timer);
//         timer = null;
//       }
//       timer = setTimeout(() => {
//         let res = fn(...args);
//         resolve(res);
//         callback && callback(res);
//       }, delay);
//     });
//   };
//   _debounce.cancel = () => {
//     timer = null;
//     isInvoked = false;
//   };
//   return _debounce;
// };

// function becProxy(obj) {
//   Object.keys(obj).forEach((key) => {
//     let val = obj[key];
//     Object.defineProperty(obj, key, {
//       get() {
//         const dep = getDep(obj, key);
//         dep.addDep();
//         return val;
//       },
//       set(newVal) {
//         val = newVal;
//         const dep = getDep(obj, key);
//         dep.notify();
//       },
//     });
//   });
//   return obj;
// }

// class Scheduler {
//   constructor(limit) {
//     this.queue = [];
//     this.limit = limit;
//     this.doingJobs = 0;
//   }
//   add(promiseCreate) {
//     return new Promise((resolve, reject) => {
//       promiseCreate.resolve = resolve;
//       promiseCreate.reject = reject;
//       this.queue.push(promiseCreate);
//       this.run();
//     });
//   }
//   run() {
//     if (this.doingJobs < this.limit && this.queue.length) {
//       this.doingJobs++;
//       const task = this.queue.shift();
//       task()
//         .then((res) => {
//           task.resolve(res);
//         })
//         .catch((err) => {
//           task.reject(err);
//         })
//         .finally(() => {
//           this.doingJobs--;
//           this.run();
//         });
//     }
//   }
// }

// function limitQueue(urls, limit) {
//   return new Promise((resolve) => {
//     if (!urls.length) {
//       resolve([]);
//       return;
//     }
//     const result = [];
//     let index = 0;
//     let count = 0;
//     async function request() {
//       if (index === urls.length) {
//         return;
//       }
//       let i = index;
//       let url = urls[index++];
//       try {
//         const res = await url;
//         result[i] = res;
//       } catch (err) {
//         result[i] = err;
//       } finally {
//         if (++count === urls.length) {
//           resolve(result);
//         } else {
//           request();
//         }
//       }
//     }

//     const timer = Math.min(urls.length, limit);
//     for (let i = 0; i < timer; i++) {
//       request();
//     }
//   });
// }

// function getNewFetch(limit) {
//   let count = 0,
//     queue = [];

//   async function run(taskFn, resolve, reject) {
//     count++;
//     try {
//       const res = await taskFn();
//       resolve(res);
//     } catch (e) {
//       reject(e);
//     } finally {
//       count--;
//       if (queue.length > 0) {
//         const { taskFn, resolve, reject } = queue.shift();
//         run(taskFn, resolve, reject);
//       }
//     }
//   }

//   return function limitedFetch(taskFn) {
//     return new Promise((resolve, reject) => {
//       if (count < limit) {
//         run(taskFn, resolve, reject);
//       } else {
//         queue.push({ taskFn, resolve, reject });
//       }
//     });
//   };
// }
