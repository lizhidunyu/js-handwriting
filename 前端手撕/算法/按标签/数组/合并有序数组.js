var merge = function (nums1, m, nums2, n) {
  const numsA = nums1.slice(0, m);
  let l1 = (l2 = index = 0);
  while (l1 < m && l2 < n) {
    if (numsA[l1] <= nums2[l2]) {
      nums1[index++] = numsA[l1++];
    } else {
      nums1[index++] = nums2[l2++];
    }
  }
  while (l1 < m) {
    nums1[index++] = numsA[l1++];
  }
  while (l2 < n) {
    nums1[index++] = nums2[l2++];
  }
  return nums1;
};

console.log(merge([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5));
// console.log(merge(nums1, m, nums2, n));

// var merge = function (nums1, m, nums2, n) {
//   let numsA = nums1.slice(0, m);
//   let i = 0,
//     j = 0,
//     index = 0;
//   while (i < m && j < n) {
//     if (numsA[i] <= nums2[j]) {
//       nums1[index++] = numsA[i++];
//     } else {
//       nums1[index++] = nums2[j++];
//     }
//   }

//   while (i < m) {
//     nums1[index++] = numsA[i++];
//   }
//   while (j < n) {
//     nums1[index++] = nums2[j++];
//   }

//   return nums1;
// };
