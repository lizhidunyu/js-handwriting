const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULLFILLED = "fullfilled";
const PROMISE_STATUS_REJECTED = "rejected";

function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value);
    resolve(result);
  } catch (err) {
    reject(err);
  }
}

class MyPromise {
  constructor(exector) {
    this.state = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFullfilledFns = [];
    this.onRejectedFns = [];

    const resolve = (value) => {
      if (this.state === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.state !== PROMISE_STATUS_PENDING) return;
          this.state = PROMISE_STATUS_FULLFILLED;
          this.value = value;
          this.onFullfilledFns.forEach((fn) => {
            fn(this.value);
          });
        });
      }
    };

    const reject = (reason) => {
      if (this.state === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.state !== PROMISE_STATUS_PENDING) return;
          this.state = PROMISE_STATUS_REJECTED;
          this.reason = reason;
          this.onRejectedFns.forEach((fn) => {
            fn(this.reason);
          });
        });
      }
    };

    try {
      exector(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFullfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.state === PROMISE_STATUS_FULLFILLED && onFullfilled) {
        execFunctionWithCatchError(onFullfilled, this.value, resolve, reject);
      }
      if (this.state === PROMISE_STATUS_REJECTED && onRejected) {
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject);
      }

      if (this.state === PROMISE_STATUS_PENDING) {
        this.onFullfilledFns.push(() => {
          execFunctionWithCatchError(onFullfilled, this.value, resolve, reject);
        });
        this.onRejectedFns.push(() => {
          execFunctionWithCatchError(onRejected, this.reason, resolve, reject);
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  finally(onFinally) {
    this.then(
      () => {
        onFinally();
      },
      () => {
        onFinally();
      }
    );
  }

  static resolve(value) {
    return MyPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return MyPromise((resolve, reject) => reject(reason));
  }

  static all([promises]) {
    let stack = [];
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) =>
        promise.then(
          (value) => {
            stack.push(value);
            if (stack.length === promises.length) {
              resolve(stack);
            }
          },
          (err) => {
            reject(err);
          }
        )
      );
    });
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) =>
        promise.then(
          (val) => {
            if (val) {
              resolve(val);
            }
          },
          (err) => {
            if (val) {
              reject(err);
            }
          }
        )
      );
    });
  }

  static allSettled(promises) {
    let stack = [];
    return new Promise((resolve, reject) => {
      promises.forEach((promise) =>
        promise.then(
          (res) => {
            res.push({ state: PROMISE_STATUS_FULLFILLED, value: res });
            if (stack.length === promise.length) {
              resolve(stack);
            }
          },

          (err) => {
            res.push({ state: PROMISE_STATUS_REJECTED, reason: err });
          }
        )
      );
    });
  }

  static any(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            resolve(res);
          },
          (err) => {
            throw new Error("TYPED ERROR");
          }
        );
      });
    });
  }
}
