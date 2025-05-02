var rotate = function (nums, k) {
  var reverse = (i, j) => {
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  };
  k %= nums.length;
  console.log(k);

  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
};

console.log(rotate([-1], 2));
