// 1.定义一些常量保存状态
const PROMISE_STATE_PENDING = 'pending'
const PROMISE_STATE_FULLFILLED = 'fullfilled'
const PROMISE_STATE_REJECTED = 'rejected'

class MyPromise {
    constructor(exector) {
        // 初始化属性
        this.state = PROMISE_STATE_PENDING
        this.value = undefined
        this.reason = undefined
        this.onFullfilledFns = []
        this.onRejectedFns = []

        // 初始化两个回调函数
        const resolve = (value) => {
            // 只有当状态没有被改变才能执行下一步
            if (this.state === PROMISE_STATE_PENDING) {
                // 加入微任务队列中
                queueMicrotask(() => {
                    // 微任务队列,fullfilled函数执行了之后,rejected函数就不能执行了
                    if (this.state !== PROMISE_STATE_PENDING) return
                    // 修改属性
                    this.state = PROMISE_STATE_FULLFILLED
                    this.value = value
                    // 执行then中的回调函数
                    this.onFullfilledFns.forEach((onFullfilled) => {
                        onFullfilled()
                    })
                })
            }
        }

        const reject = (reason) => {
            // 只有当状态没有被改变才能执行下一步
            if (this.state === PROMISE_STATE_PENDING) {
                queueMicrotask(() => {
                    if (this.state !== PROMISE_STATE_PENDING) return
                    this.state = PROMISE_STATE_REJECTED
                    this.reason = reason
                    this.onRejectedFns.forEach((onRejected) => {
                        onRejected()
                    })
                })
            }
        }

        // 执行exector函数,立即执行的,并且传入两个回调函数作为参数
        try {
            exector(resolve,reject)
            // 异常捕获
        } catch(err) {
            reject(err)
        }
    }

    then(onFullfilled, onRejected) {
        // 设置默认的回调,方便catch和finally使用
        const defaultOnRejected = (err) => {
            throw err
        }
        onRejected = onRejected || defaultOnRejected;

        const defaultFullfilled = (value) => {
            return value;
          };
          onFullfilled = onFullfilled || defaultFullfilled;

        return new MyPromise((resolve,reject) => {
            if (this.state === PROMISE_STATE_PENDING) {
                this.onFullfilledFns.push(() => {
                    // 这样方便拿到执行的结果
                    // 之后进行链式调用
                    try {
                        let thenValue = onFullfilled(this.value)
                        return resolve(thenValue)
                    } catch(err) {
                        return reject(err)
                    }
                })

              
                this.onRejectedFns.push(() => {
                    try {
                        let thenReason = onRejected(this.reason)
                        resolve(thenReason)
                    } catch(err) {
                        reject(err)
                    }
                })
                
            }
        })
    }

    catch(onRejected) {
        return this.then(undefined, onRejected)
    }

    finally(onFinally) {
        return this.then(() => onFinally(), () => onFinally())
    }

    // 实际上就是new Promise reject的语法糖
    static resolve(value) {
        return new MyPromise((resolve) => resolve(value))
    }

    // 实际上就是new Promise resolve的语法糖
    static reject(reason) {
        return new MyPromise((res,reject) => reject(reason))
    }

    static all(promises) {
        // 直接返回一个promise对象
        return new MyPromise((resolve,reject) => {
            const values =  []
            // 遍历数组
            promises.forEach((promise) => {
                // edge case
                if (promise instanceof Promise == false) {
                    promise = MyPromise.resolve(promise)
                }
                // .then()拿到每一个遍历的结果,然后resolve([])返回
                promise.then(
                (res) => {
                    values.push(res)
                    if (values.length === promises.length) {
                        resolve(values)
                    }
                }, (err) => {
                    reject(err)
                })
            })
        })
    }

    static allSettled(promises) {
        return new MyPromise((resolve,reject) => {
            const results = []
            promises.forEach((promise) => {
                if (promise instanceof MyPromise === false) {
                    promise = MyPromise.resolve(promise)
                }
                promise.then(
                    (res) => {
                        results.push({status:'fullfilled', value: res})
                        if (results.length === promises.length) {
                           resolve( results)
                        }
                    },
                    (err) => {
                        results.push({status:'rejected', reason: err})
                        if (results.length === promises.length) {
                            resolve( results)
                        }
                    }
                )
            })
        })
    }

    static race(promises) {
        return new MyPromise((resolve,reject) => {
            promises.forEach(promise => {
                if (promise instanceof MyPromise === false) {
                    promise = MyPromise.resolve(promise)
                }
                promise.then(
                    (res) => {
                        resolve(res)
                    },
                    (err) => {
                        reject(err)
                    }
                )
            })
        })
    }

    static any(promises) {
        const reasons = []
        return new MyPromise((resolve,reject) => {
            promises.forEach(promise => {
                if (promise instanceof MyPromise == false) {
                    promise = MyPromise.resolve(promise)
                }
                promise.then(
                    (val) => {
                        resolve(val)
                    },
                    (err) => {
                        reasons.push(err)
                        if (reasons.length === promises.length) {
                            reject(new AggregateError(reasons))
                        }
                    }
                )
            })
        })
    }
}

// let test = Promise.resolve(123)
// test.then(value => {
//     console.log('value1',value)
//     return '****'
// },reason => {
//     console.log('reason1',reason);
// }).then(value => {
//     console.log('value2',value)
//     throw new Error('abc')
// }).catch(err => {
//     console.log('err2',err);
// })

// test.then(res => {
//     console.log('res2',res)
// })

// const p1 = new MyPromise((res, rej) =>
//   setTimeout(() => {
//     rej(111);
//   }, 1000)
// );
// const p2 = new MyPromise((res, rej) =>
//   setTimeout(() => {
//     rej(222);
//   }, 2000)
// );
// const p3 = new MyPromise((res, rej) =>
//   setTimeout(() => {
//     res(333);
//   }, 3000)
// );

// MyPromise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const arr = [1,2]

// async function foo() {
//     const res = await MyPromise.any(arr)
//     console.log(res);
// }
// foo()
 
  