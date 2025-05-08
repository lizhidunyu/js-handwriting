let reactiveFn = null
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


function watchFn(fn) {
  reactiveFn = fn
  fn()
  reactiveFn = null
}



let overvalMap = new WeakMap()
function getDep(target, key) {
  let map = overvalMap.get(target) || new Map()
  overvalMap.set(target, map)
  let dep = map.get(key) || new Dep()
  map.set(key, dep)
  return map.get(key)
}

function becProxy(obj) {
  return new Proxy(obj, {
    get(target, key) {
      console.log('get____');
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

const originObj = {name: 'yucuiwen', age: 18}
const obj = becProxy(originObj)
watchFn(function foo1() {
  console.log('obj的依赖函数1',obj.name);
})
watchFn(function foo2() {
  console.log('obj的依赖函数2',obj.age);
})
obj.name = 'yyyyy'
obj.age = 100
