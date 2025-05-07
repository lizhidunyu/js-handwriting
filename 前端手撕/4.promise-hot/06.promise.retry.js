const promiseRetry = (fun, retryTimes, delay) => {
  return new Promise((resolve, reject) => {
    const run = async (leftTimes) => {
        try {
          const res = await fun()
          resolve(res)
        } catch(e) {
          if (leftTimes>0) {
            setTimeout(() => {
              run(leftTimes-1)
              console.log(`还有${leftTimes}次尝试机会`);
            }, delay)
          } else {
            reject(e)
            return
          }
        }
    }
    // 构造一个带有回调次数的函数，不断调用判断
    run(retryTimes)
  })
} 

//test函数
const getData = () => {
  return new Promise((reoslve, reject) => {
    const random = Math.random() * 10
    if (random > 9) {
      reoslve(random)
      console.log('fullfilled:', random);
    } else {
      reject(random)
      console.log('rejected:', random);
    }
  })
}

promiseRetry(getData, 5, 2000).then(res => {
  console.log("res:",res)
}).catch(e => {
  console.log('error:',e)
})
