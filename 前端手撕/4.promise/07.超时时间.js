function setOutTime(req, timeout) {
  return new Promise((resolve, reject) => {
    const warnPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("timeout!!");
      }, timeout);
    });

    Promise.race([req, warnPromise]).then(
      (value) => {
        resolve(`请求成功： ${value}`);
      },
      (reason) => {
        reject(`请求失败：${reason}`);
      }
    );
  });
}

const req = new Promise((res, rej) => {
  setTimeout(() => {
    res("okkk");
  }, 2100);
});
setOutTime(req, 2000).then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
