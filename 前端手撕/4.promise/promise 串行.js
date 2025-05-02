const p1 = () => {
  return Promise.resolve(1);
};
const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 3000);
  });
};
const p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 2000);
  });
};
const promises = [p1, p2, p3];

// 控制串行，使用promise + async / await
const TimingFn = (promiseFns) => {
  const resArr = [];
  return new Promise(async (resolve, reject) => {
    for (let i = 0; i < promiseFns.length; i++) {
      const res = await promiseFns[i]();
      console.log(res);
      resArr.push(res);
    }
    resolve(resArr);
  });
};

let resultPromise = TimingFn(promises).then((res) => {
  console.log(`全部都串行执行完了${res}`);
});
