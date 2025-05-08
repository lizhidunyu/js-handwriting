const throttle = (
  fn,
  interval,
  options = { leading: true, trailing: false, callBack: null }
) => {
  let lastTime = 0;
  let timer = null;
  const { leading, trailing, callBack } = options;
  const _throttle = (...args) => {
    let curTime = Date.now();
    // 默认是有trailing的
    // 当需要没有traling的时候，当最后一段执行完已经复位的时候
    if (!leading && !lastTime) {
      lastTime = curTime;
    }
    let remainTime = interval - (curTime - lastTime);
    // 正常执行的时候
    if (remainTime <= 0) {
      // 如果有定时器
      if (timer) {
        timer = null;
        clearTimeout(timer);
      }
      const res = fn(...args);
      callBack && callBack(res);
      lastTime = curTime;
      // 有trailing且定时器失效的时候，开启定时器
    } else if (trailing && !timer) {
      timer = setTimeout(() => {
        timer = null;
        lastTime = leading ? Date.now() : 0;
        const res = fn(...args);
        callBack && callBack(res);
      }, remainTime);
    }
  };
  return _throttle;
};

const fn = (a, b) => {
  console.log("ycw");
  return a + b;
};
const throttleFn = throttle(fn, 1000, { trailing: true, leading: true });
throttleFn();
throttleFn();
throttleFn();
setTimeout(() => {
  throttleFn();
}, 2000);
setTimeout(() => {
  throttleFn();
}, 4000);
throttleFn();
throttleFn();
throttleFn();
throttleFn();
throttleFn();
