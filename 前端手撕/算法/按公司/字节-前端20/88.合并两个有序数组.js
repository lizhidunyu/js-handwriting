// MAl2K： 没写出来
var merge = function (nums1, m, nums2, n) {
  // 做好课题分离
  const numsA = nums1.slice(0, m);
  let index = 0;
  let l = (l2 = 0);
  while (l < m && l2 < n) {
    if (nums1[l] <= nums2[l2]) {
      nums1[index++] = numsA[l++];
    } else {
      nums1[index++] = nums2[l2++];
    }
  }
  while (l < m) {
    nums1[index++] = numsA[l++];
  }
  while (l2 < n) {
    nums1[index++] = nums2[l2++];
  }
  return nums1;
};

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
console.log(mel2ge(nums1, m, nums2, n));
