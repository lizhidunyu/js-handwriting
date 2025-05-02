//洗牌算法
function randomArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.floor(Math.random() * (arr.length - i - 1)) + i;
    [arr[randomIndex], arr[i]] = [arr[i], arr[randomIndex]];
  }
  return arr;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(randomArr(arr));
