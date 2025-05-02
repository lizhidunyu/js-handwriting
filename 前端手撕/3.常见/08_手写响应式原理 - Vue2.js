let reactiveFn = null;

/* 3.设置依赖类数据结构 */
class Dep {
  constructor() {
    this.deps = new Set();
  }
  addDep() {
    if (reactiveFn) {
      this.deps.add(reactiveFn);
    }
  }
  notify() {
    this.deps.forEach((reactiveFn) => {
      reactiveFn();
    });
  }
}

/* 2.设计数据结构 */
var weakMap = new WeakMap();
function getDep(targetObj, targetKey) {
  let map = weakMap.get(targetObj);
  if (!map) {
    map = new Map();
    weakMap.set(targetObj, map);
  }
  let dep = map.get(targetKey);
  if (!dep) {
    dep = new Dep();
    map.set(targetKey, dep);
  }
  return map.get(targetKey);
}

/* 1.设置响应函数 */
function watchFn(fn) {
  reactiveFn = fn;
  fn();
  reactiveFn = null;
}

/* 4.实现数据响应式 */
function becProxy(obj) {
  Object.keys(obj).forEach((key) => {
    let val = obj[key];
    Object.defineProperty(obj, key, {
      get() {
        const dep = getDep(obj, key);
        dep.addDep();
        return val;
      },
      set(newVal) {
        val = newVal;
        const dep = getDep(obj, key);
        dep.notify();
      },
    });
  });
  return obj;
}

// 测试对象
let obj = {
  name: "yucuiwen",
  age: 18,
  foo: function () {
    return "foo";
  },
};

let newObj = becProxy(obj);

watchFn(function bar() {
  console.log(newObj.name, "name");
});
watchFn(function baz() {
  console.log(newObj.age, "age");
});

newObj.age = 21;
newObj.name = "212121";

newObj.age = 100;
