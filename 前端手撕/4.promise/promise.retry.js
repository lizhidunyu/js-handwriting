const promiseRetry = (fn, times, delay) => {
  return new Promise((resolve, reject) => {
    const innerFn = () => {
      fn()
        .then(() => {
          resolve();
        })
        .catch((e) => {
          console.log(`还有${times}次尝试`);
          if (times == 0) {
            reject(e);
          } else {
            times--;
            setTimeout(() => {
              innerFn(); // 在delay秒之后再次去尝试，实际上也就是去递归执行
            }, delay);
          }
        });
    };
    innerFn();
  });
};

//test函数
function getData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var num = Math.ceil(Math.random() * 20); //生成1-10的随机数
      console.log("随机数生成的值：", num);
      if (num <= 10) {
        console.log("符合条件，值为" + num);
        resolve(num);
      } else {
        reject("数字大于10了执行失败");
      }
    }, 2000);
  });
}

promiseRetry(getData, 5, 1000);
