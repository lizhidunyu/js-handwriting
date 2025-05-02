Promise.all = (promises) => {
  return new Promise((resolve, reject) => {
    const value = [];
    promises.forEach((promise) => {
      promise.then(
        (res) => {
          value.push(res);
          if (value.length === promises.length) {
            resolve(value);
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
};

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);
const promise4 = Promise.resolve(4);
Promise.all([promise1, promise2, promise3, promise4]).then(
  (res) => {
    console.log("res:", res);
  },
  (err) => {
    console.log("err", err);
  }
);
