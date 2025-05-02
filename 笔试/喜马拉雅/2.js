function MakeArrayIncrease(a) {
  if (a.length <= 2) {
    return [-1, -1];
  }
  let l = 0,
    r = 1;
  while (r < a.length) {
    if (a[r] < a[r - 1]) {
      l = r - 1;
    }
    if (l && a[r] > a[r - 1]) {
      r--;
      break;
    }
    r++;
  }

  console.log(l, r);

  const newArr = [
    ...a.slice(0, l),
    ...a.slice(l, r + 1).reverse(),
    ...a.slice(r + 1),
  ];

  if (newArr.join("") === a.sort().join("")) {
    return [l, r];
  }
  return [-1, -1];
}
console.log(MakeArrayIncrease([1, 3, 2, 4, 5]));
