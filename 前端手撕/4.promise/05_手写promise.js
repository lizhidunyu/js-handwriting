const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_FULLFILLED = "fullfilled"
const PROMISE_STATUS_REJECTED = "rejected"

// 工具函数,主要是用作错误处理
function execFunctionWithCatchError(execFn, value, resolve, reject) {
    try {
        const result = execFn(value)
        resolve(result)
    } catch(err) {
        reject(err)
    }
}

class MyPromise {
    constructor(excutor) {
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.reason = undefined
        this.onFullfilledFns = []
        this.onRejectedFns = []

        const resolve = (value) => {
            if (this.status === PROMISE_STATUS_PENDING) {
               queueMicrotask(() => {
                if (this.status != PROMISE_STATUS_PENDING) return
                this.status = PROMISE_STATUS_FULLFILLED
                this.value = value
                // this.onFullfilled(this.value)
                // console.log('resolve被调用');
                this.onFullfilledFns.forEach(fn => {
                    fn(this.value)
                })
               })
            }
        }

        const reject = (reason) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    if (this.status != PROMISE_STATUS_PENDING) return
                    this.status = PROMISE_STATUS_REJECTED
                    this.reason = reason
                    // this.onRejected(this.reason)
                    // console.log('reject被调用');
                    this.onRejectedFns.forEach(fn => {
                        fn(this.reason)
                    })
                })
            }
        }
        try {
            excutor(resolve, reject)
        } catch (err) {
            reject(err)
        }
    }

    then(onFullfilled, onRejected) {
        // 如果这里没有处理异常，那么异常会抛出去给后面的函数执行 —— catch
        const defaultOnRejected = err => {throw err}
        onRejected = onRejected ||  defaultOnRejected

        // finally
        const defaultOnFullfilled = value => {return value}
        onFullfilled = onFullfilled ||  defaultOnFullfilled

        // 链式调用
        return new MyPromise((resolve,reject) => {
             // setTimeout()的情况下，如果在then调用的时候，状态已经确定下来了
            if (this.status === PROMISE_STATUS_FULLFILLED && onFullfilled) {
                execFunctionWithCatchError(onFullfilled, this.value, resolve, reject)
            }
            if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
                execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
            }

            // 多次调用，将成功和失败的回调放到数组中
            if (this.status === PROMISE_STATUS_PENDING) {
                this.onFullfilledFns.push(() => {
                    execFunctionWithCatchError(onFullfilled, this.value, resolve, reject)
                })
                this.onRejectedFns.push(() => {
                    execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
                })
            }
        })
    }

    catch(onRejected) {
        return this.then(undefined, onRejected)
    }

    finally(onFinally) {
        this.then(() => {
            onFinally()
        },() => {
            onFinally()
        })
    }

    static resolve(value) {
        return new MyPromise((resolve) => resolve(value))
    }

    static reject(reason) {
        return new MyPromise((resolve,reject) => reject(reason))
    }

    // 见下方实现
    static all() {
        return new MyPromise()
    }
}

// 建议全文背诵
Promise.all = function(promises) {
    return new Promise((resolve, reject) => {
        const values = []
        promises.forEach(promise => {
            promise.then(
                res => {
                    values.push(res)
                    if (values.length === promises.length) {
                        resolve(values)
                    }
                },
                err => {
                    reject(err)
                }
            )
        })
    })
}

const p1 = new Promise((resolve) => {
    resolve(1111)
})

const p2 = new Promise((resolve, reject) => {
    // resolve(2222)
    reject("123")
})

const p3 = new Promise((resolve) => {
    resolve(3333)
})

Promise.all([p1,p2,p3]).then(res => {
    console.log("res:",res);
}).catch(err => {
    console.log("err:",err);
})

// MyPromise.resolve("hello world").then(res => console.log(res))

// MyPromise.reject("hello world bad").then(res => console.log(res), err => console.log(err))

// const promise = new MyPromise((res, rej) => {
//     // res(123)
//     rej(123)
//     // throw new Error(123)
// })

// promise.then(res => {
//     console.log("res1:", res);
//     return "aaa"
// }, err => {
//     console.log("err1",err);
//     return "bbb"
// }).then(res => {
//     console.log("res12:",res);
// },err => {
//     console.log("err12:",err);
// })

// promise.then(res => {
//     console.log("res2:", res);
// },err => {
//     console.log("err2",err);
// })

// setTimeout(() => {
//     promise.then(
//         res => {
//             console.log("res3:", res);
//         },
//         err => {
//             console.log("err3",err);
//         }
//     )
// })

// promise.then(res => {
//     console.log("res:", res);
//     throw '12321'
// }, err => {
//     console.log("err1:",err);
// }).catch(err => {
//     console.log("err2:", err);
// }).finally(() => {
//     console.log('l1');
// })
