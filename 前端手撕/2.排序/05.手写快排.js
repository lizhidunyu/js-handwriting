// function qucickSort(arr) {
//   function partition(left, right) {
//     let i = left,
//       j = right - 1,
//       privot = arr[right];
//     if (left > right) return;
//     // 注意这里有等号！！
//     while (i <= j) {
//       while (arr[i] < privot) {
//         i++;
//       }
//       while (arr[j] > privot) {
//         j--;
//       }
//       // 注意这里有等号！！
//       if (i <= j) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         i++;
//         j--;
//       }
//     }
//     [arr[i], arr[right]] = [arr[right], arr[i]];
//     partition(left, j);
//     partition(i + 1, right);
//   }
//   partition(0, arr.length - 1);
//   return arr;
// }

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
