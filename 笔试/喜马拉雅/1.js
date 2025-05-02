const minMax = (a, k, x) => {
  a.sort().reverse();
  let p = 0;
  while (p < a.length && k >= 1) {
    a[p] = a[p] - x;
    const m1 = Math.min(a[p + 1] - x, a[p]);
    const m2 = Math.min(a[p + 1], a[p] - x);
    console.log("a", a, m1, m2, k);

    if (m1 > m2) {
      p++;
    }
    k--;
  }
  return Math.max(...a);
};

console.log(minMax([7, 2, 1], 3, 2));
