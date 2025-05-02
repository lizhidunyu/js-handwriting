var largestNumber = function (nums) {
  nums.sort((a, b) => {
    var stra = b.toString() + a.toString(),
      strb = a.toString() + b.toString();
    // console.log(stra, strb);

    if (stra > strb) {
      return 1;
    } else {
      return -1;
    }
  });
  if (nums[0] == 0) return "0";

  return nums.join("");
};

console.log(largestNumber([1, 2, 12, 8]));
