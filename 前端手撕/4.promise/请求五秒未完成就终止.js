// 创建一个返回在指定时间后拒绝的 Promise 的函数
const timingOut = (ms) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("请求超时");
    }, ms);
  });
};

// 终止实际上也就是抛出一个失败的promise
function apiWithTimeout(apiFunc, timeoutMs = 5000) {
  const apiPromise = apiFunc();
  const timeoutPromise = timingOut(timeoutMs);
  return Promise.race([apiPromise, timeoutPromise]);
}

/******test*******/
const api = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("数据请求成功");
    }, 6000);
  });
};

apiWithTimeout(api)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
