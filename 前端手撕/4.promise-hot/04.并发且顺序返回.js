const limitQueue = (promiseArr, limit) => {
  return new Promise((resolve, reject) => {
    if (!promiseArr.length) {
      resolve([])
      return
    }
    // 这些变量要定义要循环的外部，不能定义到了循环的内部哦~
    const values = [];
    let count = [], index = 0;
    const run = async () => {
      if (index === promiseArr.length) return;
      let i = index
      const task = promiseArr[index++]
      try {
        const res = await task
        values[i] = res
      } catch (err) {
        values[i] = err
      } finally {
        if (++count === promiseArr.length) {
          resolve(values)
        } else {
          run()
        }
      }
    }
    for (let i = 0; i < Math.min(promiseArr.length, limit); i++) {
      run()
    }
  })
}

const promise1 = new Promise((res) => setTimeout(() => res(1), 1000))
const promise2 = new Promise((res) => setTimeout(() => res(2), 500))
const promise3 = new Promise((res, rej) => setTimeout(() => res(3), 1500))
const promise4 = new Promise((res) => setTimeout(() => res(4), 700))
const promise5 = new Promise((res, rej) => setTimeout(() => res(5), 600))

limitQueue([promise1, promise2, promise3, promise4, promise5], 2).then(res => {
  console.log(res)
})
 