const subarraySum = (arr, k) => {
  const map = new Map([[0, 1]]);
  let prefix = 0,
    count = 0;
  for (let i = 0; i < arr.length; i++) {
    prefix += arr[i];
    if (map.has(prefix - k)) {
      count += map.get(prefix - k);
    }
    map.set(prefix, map.has(prefix) ? map.get(prefix) + 1 : 1);
  }
  return count;
};

console.log(subarraySum([1, 1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 2));
