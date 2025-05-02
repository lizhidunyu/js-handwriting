var letterCombinations = function (digits) {
  let map = {
    0: "",
    1: "",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let res = [],
    path = [];
  const backTracking = (digits, startIndex) => {
    if (digits === "") return;
    if (path.length === digits.length) {
      res.push([...path].join(""));
      return;
    }
    for (const v of map[digits[startIndex]]) {
      path.push(v);
      backTracking(digits, startIndex + 1);
      path.pop();
    }
  };
  backTracking(digits, 0);
  return res;
};

console.log(letterCombinations("23"));
