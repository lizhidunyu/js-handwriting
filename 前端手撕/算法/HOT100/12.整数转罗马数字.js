const R = [
  ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // 个位
  ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // 十位
  ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // 百位
  ["", "M", "MM", "MMM"], // 千位
];

var intToRoman = function (num) {
  return (
    R[3][Math.floor(num / 1000)] +
    R[2][Math.floor(num / 100) % 10] + // 3490 / 100 = 34.90 % 10 = 3 ... 4
    R[1][Math.floor(num / 10) % 10] + // 3490 / 10 = 349.0 % 10 = 34 ... 9
    R[0][num % 10]
  );
};
