const thenable = {
  then: (cb, err) => {
    err(123);
  },
};
const p = Promise.reject(thenable);
p.then(
  (res) => {
    console.log("res:", res);
  },
  (err) => {
    console.log("err:", err);
  }
);
