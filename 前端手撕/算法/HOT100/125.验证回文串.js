var isPalindrome = function (s) {
  const res = [];
  for (const i of s) {
    if (i.charCodeAt() >= 65 && i.charCodeAt() <= 90) {
      res.push(String.fromCharCode(i.charCodeAt() + 32));
    } else if (
      (i.charCodeAt() >= 97 && i.charCodeAt() <= 122) ||
      (i.charCodeAt() >= 48 && i.charCodeAt() <= 57)
    ) {
      res.push(i);
    }
  }
  return res.join("") === res.reverse().join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

console.log("a".charCodeAt(), "_".charCodeAt());
