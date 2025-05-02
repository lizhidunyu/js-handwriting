const getMinIndex = (n, arr) => {
  let min = Infinity,
    res = [];
  //   arr.forEach((item, index) => {
  //     if (item < min) {
  //       min = item;
  //       res = [];
  //       res.push(index + 1);
  //     } else if (item === min) {
  //       res.push(index + 1);
  //     }
  //   });
  for (let index in arr) {
    const item = arr[index];
    if (item < min) {
      min = item;
      res = [];
      res.push(Number(index) + 1);
    } else if (item === min) {
      res.push(Number(index) + 1);
    }
  }
  let end;
  if (res.length === 1) {
    end = [res[0], res[0]];
  } else {
    end = [res[0], res[res.length - 1]];
  }
  return end.join(" ");
};

console.log(getMinIndex(4, [0, -1, 0]));
console.log(getMinIndex(5, [-1, 2, 0]));
