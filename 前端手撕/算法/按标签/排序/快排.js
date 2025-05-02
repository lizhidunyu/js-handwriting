const arr = [11, 2, -12, 6];

const quickSort = (arr) => {
  debugger;
  partition(arr, 0, arr.length - 1);

  function partition(arr, left, right) {
    if (left > right) return;

    let i = left,
      j = right - 1,
      pivot = arr[right];

    while (i < j) {
      while (arr[i] < pivot) {
        i++;
      }

      while (arr[j] > pivot) {
        j--;
      }

      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }

    [arr[i], arr[right]] = [arr[right], arr[i]];

    partition(arr, left, j);
    partition(arr, i + 1, right);
  }

  return arr;
};

console.log(quickSort(arr));
