Promise.half = (promiseArr, limit, retryTimes = 0) => {
    return new Promise((resolve, reject) => {
        if (!promiseArr.length) {
            resolve({state: 'fullfilled', values: []})
        }
        const len = promiseArr.length, targetNums = Math.floor(len / 2);
        const values = []
        const reasons = []
        let index = 0, fullfilledCount = 0, finishedCount = 0;
        
        const run = () => {
            const task = promiseArr[index++]
            if (index >= len) return
            const attempt = async (leftTimes) => {
                try {
                    const res = await task
                    fullfilledCount++
                    values.push(res)
                } catch(e) {
                    if (leftTimes>0) {
                        attempt(leftTimes--)
                    } else {
                        reasons.push(e)
                    }
                } finally {
                    finishedCount++
                    if (fullfilledCount === targetNums) {
                        resolve({state: 'fullfilled', values})
                    } else if (finishedCount === len) {
                        resolve({state: 'rejected', reasons})
                    } else {
                        run()
                    }
                }
            }
            attempt(retryTimes)
        }

        for (let i = 0; i < Math.min(promiseArr.length, limit); i++) {
            run()
        }

    })
}


const getPromise = (time, value) => {
    return new Promise((resolve, reject) => {
      const random = Math.random() * 10
      if (random > 5) {
        setTimeout(resolve, time, value)
        console.log("resolve:", time, value)
      } else {
        setTimeout(reject, time, value)
        console.log("reject:", time, value)
      }
    })
  }
  
  const tasks = [
    () => getPromise(500, "A"),
    () => getPromise(100, "B"),
    () => getPromise(200, "C"),
    () => getPromise(800, "D"),
  ];
  
  Promise.half(tasks, 3, 2).then(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    }
  );
  