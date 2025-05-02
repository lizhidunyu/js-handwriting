// 浅拷贝的几种方案
// 1.引用赋值
// 2.解构
// 3.Object.assign()
let obj = { name: "ycw", age: 20, friends: { name: "lily", age: 24 } };
const obj2 = Object.assign({}, obj);
obj.friends.name = "yucuiwen";
// console.log(obj2);

// 深拷贝
// 1.JSON序列化
const obj3 = JSON.parse(JSON.stringify(obj));
obj.friends.name = "ycw";
// console.log(obj3);
// 2.deepClone函数

const deepClone = (originData, weakMap = new WeakMap()) => {
  if (typeof originData !== "object" && originData !== null) {
    return originData;
  }
  if (typeof originData === "function") {
    return originData;
  }
  if (originData instanceof Map) {
    return new Map(originData);
  }
  if (originData instanceof Set) {
    return new Set(originData);
  }
  const targetData = Array.isArray(originData) ? [] : {};
  if (weakMap.has(originData)) {
    return weakMap.get(originData);
  } else {
    weakMap.set(originData, targetData);
  }
  const symbolKeys = Object.getOwnPropertySymbols(originData);
  for (const key in originData) {
    targetData[key] = deepClone(originData[key], weakMap);
  }
  for (const symbolKey of symbolKeys) {
    targetData[symbolKey] = deepClone(originData[symbolKey], weakMap);
  }
  return targetData;
};

const obj = {
  a: "a",
  b: "b",
  c: {
    cc: "cc",
    ccc: "ccc",
  },
  d: new Map([
    [1, "a"],
    [2, "b"],
  ]),
  e: new Set([11, 22, 33, 44]),
  [Symbol()]: "symbol",
  f: [11, 22, 33, 44],
};
obj.fn = obj;

const newObj = deepClone(obj);
obj.c.cc = "111";
console.log(obj, newObj);
