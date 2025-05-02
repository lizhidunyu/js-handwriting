// 约瑟夫环
// function josephus(n, k) {
//   let arr = new Array(n).fill(0).map((i, index) => index);
//   let num = 0;
//   while (arr.length != 1) {
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//       num++;
//       console.log(i, k, num);
//       if (num === k) {
//         arr.splice(i, 1);
//         num = 1;
//       }
//     }
//   }
//   return arr;
// }

function josephus(n, k) {
  let arr = Array.from({ length: n }, (_, index) => index); // 初始数组从0开始编号
  let index = 0; // 当前索引

  while (arr.length > 1) {
    // 模拟报数过程，直到找到需要移除的元素
    for (let count = 1; count < k; count++) {
      index = (index + 1) % arr.length; // 环形计数
      console.log("index:", index);
    }

    // 移除元素
    console.log("Removed:", arr[index]);
    arr.splice(index, 1);

    // 因为已经移除了一个元素，所以下一次从index位置继续报数（即不需要额外加1）
    // 但是index在数组长度改变后依然是有效的，因为我们在上面使用了取模操作
  }

  // 返回最后一个元素
  return arr[0];
}

// console.log(josephus(2, 1)); // 应该输出 1
console.log(josephus(5, 3)); // 应该输出最后一个存活的人的编号
