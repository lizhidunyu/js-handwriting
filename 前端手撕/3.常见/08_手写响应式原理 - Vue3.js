/* 记录当前活跃的函数 */
let reactiveFn = null

/* 3. 设计dep依赖数据结构 */
class Dep {
  constructor() {
    this.dep = new Set()
  }
  addDep() {
    if (reactiveFn) {
      this.dep.add(reactiveFn);
    }
  }
  notify() {
    this.dep.forEach((reactiveFn) => {
      reactiveFn();
    });
  }
}

/* 2.设计数据结构,拿到dep依赖 */
let ovalMap = new WeakMap()
function getDep(targetObj,targetKey) {
  let map = ovalMap.get(targetObj)
  if (!map) {
    map = new Map()
    ovalMap.set(targetObj,map)
  }
  let dep = map.get(targetKey)
  if (!dep) {
    let dep = new Dep()
    map.set(targetKey,dep)
  }
  return map.get(targetKey)
}

/* 1.设置响应函数 */
function watchFn(fn) {
  reactiveFn = fn
  fn()
  reactiveFn = null
}

/* 4.设计响应式对象 */
function becProxy(obj) {
  return new Proxy(obj, {
    get(target,key) {
      console.log('*****');
      const dep = getDep(target,key)
      dep.addDep()
      return Reflect.get(target,key)
    },
    set(target,key,newVal) {
      Reflect.set(target,key, newVal)
      const dep = getDep(target,key)
      dep.notify()
    }
  })
}

const obj1 = {name:'ycw',age:18}
const obj = becProxy(obj1)

watchFn(function foo1() {
  console.log('obj1的依赖函数1',obj.name);
})

watchFn(function foo2() {
  console.log('obj1的依赖函数2', obj.age);
})

obj.name = 'kobe'
obj.age = 100