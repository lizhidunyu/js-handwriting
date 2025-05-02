const isPalindrome = (s) => {
  return s.split("").reverse().join("") === s;
};

var partition = function (s) {
  let res = [],
    path = [];
  const backTracking = (s, startIndex) => {
    if (path.join("") === s) {
      res.push([...path]);
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      if (isPalindrome(s.slice(startIndex, i + 1))) {
        path.push(s.slice(startIndex, i + 1));
      } else {
        continue;
      }
      backTracking(s, i + 1);
      path.pop();
    }
  };
  backTracking(s, 0);
  return res;
};

console.log(isPalindrome("aabc"));
console.log(isPalindrome("aabbaa"));
