// 监听来自主线程的消息
self.onmessage = function (event) {
  const { task, data } = event.data;

  if (task === "calculate") {
    let result = 0;
    // 执行耗时的计算任务
    for (let i = 0; i < data; i++) {
      result += i;
    }

    // 将计算结果发送回主线程
    self.postMessage(result);
  }
};
