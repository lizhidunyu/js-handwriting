function limitQueue(urls, limit) {
  return new Promise((resolve) => {
    if (!urls.length) {
      resolve([]);
      return;
    }
    const result = [];
    let index = 0;
    let count = 0;

    async function request() {
      if (index === urls.length) {
        return;
      }
      let i = index;
      const url = urls[index++];
      try {
        const res = await url;
        result[i] = res; // ✅ 修复这里
      } catch (err) {
        result[i] = err; // ✅ 修复这里
      } finally {
        if (++count === urls.length) {
          resolve(result);
        } else {
          request();
        }
      }
    }

    const timer = Math.min(urls.length, limit);
    for (let i = 0; i < timer; i++) {
      request();
    }
  });
}

const promise1 = new Promise((res) => setTimeout(() => res(1), 1000));
const promise2 = new Promise((res) => setTimeout(() => res(2), 500));
const promise3 = new Promise((res) => setTimeout(() => res(3), 1500));

limitQueue([promise1, promise2, promise3], 2).then((resp) => {
  console.log(resp); // 👉 应该输出：[1, 2, 3]
});

// 批量爬虫、批量上传场景，但不适合动态添加任务。
