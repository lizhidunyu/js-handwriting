const arr = [[1, 2], [[[3]]], [4, 5], 6, 7, 8, [[]], [[], []]];
const arr1 = [1, 2, 3];

const flapArr = (arr) => {
  const res = flap(arr, []);
  return res;
};

const flap = (arr, res = []) => {
  for (const v of arr) {
    if (Array.isArray(v)) {
      flap(v, res);
    } else {
      res.push(v);
    }
  }
  return res;
};

console.log(flapArr(arr));
