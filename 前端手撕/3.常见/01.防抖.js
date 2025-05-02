const debounce = (fn, delay, isImmediate = false, callback) => {
  let timer = null;
  let isInvoked = false;
  const _debounce = (...args) => {
    return new Promise((resolve, reject) => {
      if (!isInvoked && isImmediate) {
        let res = fn(...args);
        callback && callback(res);
        resolve(res);
        isInvoked = true;
      }
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(() => {
        let res = fn(...args);
        resolve(res);
        callback && callback(res);
      }, delay);
    });
  };
  _debounce.cancel = () => {
    timer = null;
    isInvoked = false;
  };
  return _debounce;
};

const fn = (a, b) => {
  console.log("fn---", a, b);
  return a + b;
};
const debounceFn = debounce(fn, 500, true, (res) => {
  console.log("res:", res);
});
debounceFn(1, 2).then((res) => {
  console.log("promise res:", res);
});
debounceFn();
debounceFn();
debounceFn();
debounceFn();
