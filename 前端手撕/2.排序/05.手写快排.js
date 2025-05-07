function qucickSort(arr) {
  function partition(left, right) {
    if (left >= right) {
      return;
    }
    let l = left,
      r = right - 1,
      pivot = arr[right];
    while (l <= r) {
      while (arr[l] < pivot) {
        l++;
      }
      while (arr[r] > pivot) {
        r--;
      }
      if (l <= r) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
      }
    }
    [arr[l], arr[right]] = [arr[right], arr[l]];
    partition(left, r);
    partition(l + 1, right);
  }
  partition(0, arr.length - 1);
  return arr;
}

console.log(qucickSort([100, -20, 0, 3, -44, 89, 90]));
