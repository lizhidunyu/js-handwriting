function Ispalindrome(s) {
  // write code here
  let arr = s.split("").map((item) => (item + "").toLocaleLowerCase());
  console.log(arr);

  arr = arr.filter(
    (item) =>
      (item.charCodeAt() >= 48 && item.charCodeAt() <= 57) ||
      (item.charCodeAt() >= 97 && item.charCodeAt() <= 122)
  );
  console.log(arr);

  let originStr = arr.join("");
  return originStr.split("").reverse().join("") === originStr;
}

console.log(Ispalindrome("A man, a plan, a canal: Panama"));

console.log("0".charCodeAt());
console.log("9".charCodeAt());
console.log("a".charCodeAt());
console.log("m".charCodeAt());
console.log(":".charCodeAt());
