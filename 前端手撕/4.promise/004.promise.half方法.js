Promise.half = function (promises) {
  return new Promise((resolve) => {
    let success = [];
    let completed = 0;

    promises.forEach((p) => {
      Promise.resolve(p)
        .then((res) => {
          success.push(res);
        })
        .catch(() => {}) // 忽略失败
        .finally(() => {
          completed++;
          if (completed === promises.length) {
            // 成功一半（向下取整）
            const half = Math.floor(promises.length / 2);
            resolve(success.slice(0, half));
          }
        });
    });
  });
};

// 示例
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.reject("C");
const p4 = Promise.resolve("D");
const p5 = Promise.reject("E");

Promise.half([p1, p2, p3, p4, p5]).then(console.log); // 可能输出 ['A', 'B']

/*******************/
// Promise.halfRetry = function (promises, maxRetries = 2) {
//   function retry(promiseFactory, retries) {
//     return promiseFactory().catch((err) => {
//       if (retries > 0) {
//         return retry(promiseFactory, retries - 1);
//       }
//       throw err;
//     });
//   }

//   const wrapped = promises.map((p) => {
//     const factory = () => Promise.resolve(p);
//     return retry(factory, maxRetries);
//   });

//   return new Promise((resolve) => {
//     let success = [];
//     let completed = 0;

//     wrapped.forEach((p) => {
//       p.then((res) => {
//         success.push(res);
//       })
//         .catch(() => {})
//         .finally(() => {
//           completed++;
//           if (completed === wrapped.length) {
//             const half = Math.floor(promises.length / 2);
//             resolve(success.slice(0, half));
//           }
//         });
//     });
//   });
// };
