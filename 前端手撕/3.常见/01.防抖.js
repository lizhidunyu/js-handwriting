function debounce(fn, delay, immediate = false, callback) {
  let timer = null, isInvoked = false
  const _debounce = (...args) => {
    return new Promise((resolve, reject) => {
      if (timer) {
        clearTimeout(timer)
      }
      if (!isInvoked  && immediate) {
        const res = fn(...args)
        callback && callback(res)
        resolve(res)
        isInvoked = true
      }
      timer = setTimeout(() => {
        const res = fn(...args)
        resolve(res)
        callback && callback(res)
      }, delay)
    })
  }
  _debounce.cancel = () => {
    timer = null;
    isInvoked = false;
  }
  return _debounce
}

const fn = (a, b) => {
  console.log(a, b)
}
const debounceFn = debounce(fn, 1000, true)
debounceFn(1,2)
debounceFn(1,2)
debounceFn(1,2)
debounceFn(1,2)
debounceFn(1,2)
setTimeout(() => {
  debounceFn(1,2)
}, 1500)
setTimeout(() => {
  debounceFn(1,2)
}, 2500)


 