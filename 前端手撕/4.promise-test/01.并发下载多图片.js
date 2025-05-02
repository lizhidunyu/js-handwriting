// // 模拟的URL数据：url是路径，time是“下载耗时”（单位：毫秒）
// const data = [
//   { url: "/a", time: 200 },
//   { url: "/b", time: 1000 },
//   { url: "/c", time: 100 },
//   { url: "/d", time: 800 },
//   { url: "/e", time: 300 },
// ];

// const loadUrl = (item) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, item.time, item.url);
//   });
// };

// const download = (data, limit) => {
//   const queue = [...data]; // 避免修改原数组
//   const promiseList = queue.splice(0, limit).map((item, index) => {
//     return loadUrl(item).then((res) => {
//       console.log(res);
//       return index; // 返回任务在 promiseList 中的索引
//     });
//   });

//   (async () => {
//     let index = 0; // 指向 queue 中下一个要处理的任务
//     while (index < queue.length) {
//       const completedIndex = await Promise.race(promiseList);
//       const nextItem = queue[index++];
//       promiseList[completedIndex] = loadUrl(nextItem).then((res) => {
//         console.log(res);
//         return completedIndex;
//       });
//     }
//     // 等待所有剩余任务完成
//     await Promise.all(promiseList);
//   })();
// };

// download(data, 2);

const fn = (url) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ url, date: new Date() });
      console.log({ url, date: new Date() });
    }, 1000 * Math.random());
  });
};

function limitQueue(urls, limit) {
  return new Promise((resolve, reject) => {
    if (urls.length === 0) {
      resolve([]);
      return;
    }

    const results = [];
    let index = 0;

    // 并发的请求数限制为 limit
    function run() {
      // 当请求完成后，递归调用下一个请求
      if (index >= urls.length) return;

      fn(urls[index++])
        .then((res) => {
          results.push(res); // 保存结果
          if (index < urls.length) {
            run(); // 如果还有待处理的url，继续处理
          } else if (results.length === urls.length) {
            resolve(results); // 所有请求都完成，返回结果
          }
        })
        .catch((err) => reject(err)); // 错误处理
    }

    // 启动初始的并发请求
    for (let i = 0; i < limit; i++) {
      run();
    }
  });
}

const urls = ["/a", "/b", "/c", "/d", "/e"];

limitQueue(urls, 2).then((result) => {
  console.log("All requests completed:", result);
});
