// let reactiveFn = null;

// /* 3.设置依赖类数据结构 */
// class Dep {
//   constructor() {
//     this.deps = new Set();
//   }
//   addDep() {
//     if (reactiveFn) {
//       this.deps.add(reactiveFn);
//     }
//   }
//   notify() {
//     this.deps.forEach((reactiveFn) => {
//       reactiveFn();
//     });
//   }
// }

// /* 2.设计数据结构 */
// var weakMap = new WeakMap();
// function getDep(targetObj, targetKey) {
//   let map = weakMap.get(targetObj);
//   if (!map) {
//     map = new Map();
//     weakMap.set(targetObj, map);
//   }
//   let dep = map.get(targetKey);
//   if (!dep) {
//     dep = new Dep();
//     map.set(targetKey, dep);
//   }
//   return map.get(targetKey);
// }

// /* 1.设置响应函数 */
// function watchFn(fn) {
//   reactiveFn = fn;
//   fn();
//   reactiveFn = null;
// }

// /* 4.实现数据响应式 */
// function becProxy(obj) {
//   Object.keys(obj).forEach((key) => {
//     let val = obj[key];
//     Object.defineProperty(obj, key, {
//       get() {
//         const dep = getDep(obj, key);
//         dep.addDep();
//         return val;
//       },
//       set(newVal) {
//         val = newVal;
//         const dep = getDep(obj, key);
//         dep.notify();
//       },
//     });
//   });
//   return obj;
// }

// // 测试对象
// let obj = {
//   name: "yucuiwen",
//   age: 18,
//   foo: function () {
//     return "foo";
//   },
// };

// let newObj = becProxy(obj);

// watchFn(function bar() {
//   console.log(newObj.name, "name");
// });
// watchFn(function baz() {
//   console.log(newObj.age, "age");
// });

// newObj.age = 21;
// newObj.name = "212121";

newObj.age = 100;

//********************************************************** */

/* 记录当前活跃的函数 */
let reactiveFn = null


/*设计dep依赖数据结构*/
class Dep {
  constructor() {
    this.dep = new Set()
  }
  addDep() {
    if (reactiveFn) {
      this.dep.add(reactiveFn)
    }
  }
  notify() {
    this.dep.forEach((reactiveFn) => {
      reactiveFn()
    })
  }
} 


/*设计响应函数*/
function watchFn(fn) {
  reactiveFn = fn
  fn()
  reactiveFn = null
}


/* 设计数据结构，拿到dep依赖 */
let ovalMap = new WeakMap()
function getDep(targetObj, targetKey) {
  let map = ovalMap.get(targetObj) || new Map()
  ovalMap.set(targetObj, map)
  let dep = map.get(targetKey) || new Dep()
  map.set(targetKey, dep)
  return map.get(targetKey)
}

/*设计响应式对象 */
function becProxy(obj) {
  return new Proxy(obj, {
    get(target, key) {
      const dep = getDep(target, key)
      dep.addDep()
      return Reflect.get(target, key)
    },
    set(target, key, newVal) {
      Reflect.set(target, key, newVal)
      const dep = getDep(target, key)
      dep.notify()
    }
  })
}

const originObj = {name:'ycw',age:18}
const obj = becProxy(originObj)
watchFn(function foo1() {
  console.log('obj的依赖函数1',obj.name);
})
watchFn(function foo2() {
  console.log('obj的依赖函数2', obj.age);
})
obj.name = 'kobe'
obj.age = 100