// 一. 实现柯里化
function curried(fn) {
  return function _curried(...arrArgs) {
    if (arrArgs.length >= fn.length) {
      return fn(...arrArgs);
    } else {
      return function _curried2(...arrArgs2) {
        return _curried(...arrArgs, ...arrArgs2);
      };
    }
  };
}

function add(a, b, c, d, e) {
  return a + b + c + d + e;
}

const curriedFn = curried(add);
console.log(curriedFn(1)(2)(3)(4, 5));

// 二.组合函数的调用
function composedFn(...fnArrs) {
  for (var i = 0; i < fns.length; i++) {
    if (typeof fns[i] !== "function") {
      throw new Error("TypeError: arguments are accepted to be Function");
    }
  }
  return function _composed(...arrArgs) {
    let res = fnArrs[0](...arrArgs);
    for (let i = 1; i < fnArrs.length; i++) {
      res = fnArrs[i](res);
    }
    return res;
  };
}

const fn1 = (a, b) => {
  return a + b;
};
const fn2 = (res) => {
  return res * res;
};
const fn3 = (res) => {
  return res + 10000;
};

const composed = composedFn(fn1, fn2, fn3);
console.log(composed(1, 2));
