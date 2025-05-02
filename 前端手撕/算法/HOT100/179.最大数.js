var largestNumber = function (nums) {
  nums.sort((a, b) => {
    var strb = b.toString() + a.toString(),
      stra = a.toString() + b.toString();
    console.log("stra", stra, "strb", strb);

    if (stra > strb) {
      return -1;
    } else {
      return 1;
    }
  });
  // 之后的也都是0，所以输出一个0就可以了
  if (nums[0] == 0) return "0";
  return nums.join("");
};

const arr = [3, 30, 34, 5, 9];

console.log(largestNumber(arr));
