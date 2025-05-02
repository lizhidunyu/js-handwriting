const debounce = (
  fn,
  delay,
  options = { isImmediate: false, callback: null }
) => {
  const { isImmediate, callback } = options;
  let timer = null;
  let isInvoked = false;
  const _debounce = (...args) => {
    if (!isInvoked && isImmediate) {
      let res = fn(...args);
      callback && callback(res);
      isInvoked = true;
    }
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      let res = fn(...args);
      callback && callback(res);
    }, delay);
  };
  _debounce.cancel = () => {
    timer = null;
    clearTimeout(timer);
  };
  return _debounce;
};

const fn = (a, b) => {
  console.log("12321", a + b);
};
const debounceFn = debounce(fn, 5000);
setTimeout(() => {
  debounceFn(11, 22);
}, 1000);
setTimeout(() => {
  debounceFn(0, 1);
}, 2000);
setTimeout(() => {
  debounceFn(22, 33);
}, 1000);
