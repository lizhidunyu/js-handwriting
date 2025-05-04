const fn = (url) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ url, date: new Date() });
    }, 1000 * Math.random());
  });
};

function limitQueue(urls, limit) {
  return new Promise((resolve) => {
    if (urls.length === 0) {
      resolve([]);
      return;
    }
    let index = 0;
    let count = 0;
    const result = [];
    for (let i = 0; i < limit; i++) {
      run();
    }
    async function run() {
      if (index >= urls.length) return;
      const url = urls[index++];
      try {
        const res = await fn(url);
        result.push(res);
      } catch (err) {
        result.push(err);
      } finally {
        if (++count === urls.length) {
          console.log(result);
        } else {
          run();
        }
      }
    }
  });
}

const urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

(async (_) => await limitQueue(urls, 4))();
