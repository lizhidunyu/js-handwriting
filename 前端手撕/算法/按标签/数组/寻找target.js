function findTarget(arr, target) {
  for (let i in arr) {
    if (arr.indexOf(target - arr[i]) != -1) {
      return [Number(i), arr.indexOf(target - arr[i])];
    }
  }
  return [];
}
console.log(findTarget([2, 4, 5, 7], 11));
