// 1.先写一题promise,封装一个工具函数输入一个promiseA返回一个promiseB如果超过1s没返回则抛出异常如果正常则输出正确的值。

function withTimeout(promiseA, timeout = 1000) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Promise timed out"));
    }, timeout);
  });
  // 涉及到超时的都需要使用到：race
  // 把原promise和一个零界点的promise放在一起竞赛
  return Promise.race([timeoutPromise, promiseA]);
}

// 示例使用
const examplePromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Success!");
  }, 2000); // 这个 Promise 将在 2 秒后解决
});

withTimeout(examplePromise, 1000)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error.message);
  });
