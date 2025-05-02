function limitQueue(promisesArr, limit) {
  return new Promise((resolve, reject) => {
    if (!promisesArr.length) {
      resolve([]);
      return;
    }
    let index = 0,
      count = 0;
    const result = [];
    async function run() {
      if (index === promisesArr.length) {
        return;
      }
      let i = index;
      const promise = promisesArr[index++];
      try {
        const res = await promise;
        result[i] = res;
      } catch (err) {
        result[i] = err;
      } finally {
        if (++count === promisesArr.length) {
          resolve(result);
        } else {
          run();
        }
      }
    }

    for (let i = 0; i < Math.min(promisesArr.length, limit); i++) {
      run();
    }
  });
}

const promise1 = new Promise((res) => setTimeout(() => res(1), 1000));
const promise2 = new Promise((res) => setTimeout(() => res(2), 500));
const promise3 = new Promise((res) => setTimeout(() => res(3), 1500));

limitQueue([promise1, promise2, promise3], 2).then((resp) => {
  console.log(resp);
});
