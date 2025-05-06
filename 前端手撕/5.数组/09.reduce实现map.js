// // 用 reduce 实现 map
// const mapWithReduce = (arr, callback) => {
//   return arr.reduce((accumulator, currentValue, index, originalArray) => {
//     // 对当前元素调用回调函数，并将结果添加到累积数组中
//     accumulator.push(callback(currentValue, index, originalArray));
//     return accumulator;
//   }, []); // 初始累积值为空数组
// };

const numbers = [1, 2, 3];

// 示例1：将每个元素乘以2
const doubled = mapWithReduce(numbers, (num) => num * 2);
console.log(doubled); // [2, 4, 6]

// 示例2：生成元素和索引的组合字符串
const indexed = mapWithReduce(numbers, (num, index) => `${index}:${num}`);
console.log(indexed); // ["0:1", "1:2", "2:3"]

const mapWithReduce = (arr, callback) => {
  return arr.reduce((accumulator, currentValue, index, originalArray) => {
    accumulator(callback(currentValue, index, originalArray));
    return accumulator;
  }, []);
};
