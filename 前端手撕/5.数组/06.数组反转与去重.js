const arr = [1, 2, 3, 344, 2, 2, 2, 2, 2, 2, 2, 2, 2, 22, 2, 2, 2, 1];
//1.数组去重
//方法一 用set去重
const removeSameItem = (arr) => {
  return Array.from(new Set(arr));
};

//方法2用 indexOf去重
const removeSameItem2 = (arr) => {
  let result = [];
  for (const item of arr) {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  }
  return result;
};
console.log("removeSameItem2:", removeSameItem2(arr));

// 第三种:循环+includes 解决
function unique(obj) {
  let arr = [];
  for (let i in obj) {
    if (!arr.includes(obj[i])) {
      arr.push(obj[i]);
    }
  }
  return arr;
}

//第四种利用Map
function removeSameItem4(arr) {
  let result = [];
  let map = new Map();
  for (const item of arr) {
    if (!map.has(item)) {
      result.push(item);
      map.set(item, item);
    }
  }
  return result;
}

// 2.调整数组使奇数在前偶数在后，保证顺序，不使用额外空间
function reorderOddEven(arr) {
  let i = -1; // 已处理的奇数的最后一个位置
  let j = 0;
  while (j < arr.length) {
    if (arr[j] % 2 === 1) {
      // 当前元素是奇数
      const temp = arr[j];
      // 将i+1到j-1的元素后移一位
      for (let k = j; k > i + 1; k--) {
        arr[k] = arr[k - 1];
      }
      arr[i + 1] = temp; // 插入奇数到正确位置
      i++; // 更新奇数区末尾指针
      j++; // 处理下一个元素
    } else {
      j++; // 偶数则跳过
    }
  }
  return arr;
}

console.log(reorderOddEven([2, 4, 1, 3, 5])); // [1, 3, 5, 2, 4]
console.log(reorderOddEven([1, 2, 3, 4, 5])); // [1, 3, 5, 2, 4]
console.log(reorderOddEven([2, 1, 4, 3, 6, 5])); // [1, 3, 5, 2, 4, 6]
