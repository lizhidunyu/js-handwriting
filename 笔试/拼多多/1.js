function getTagetChar(index, number) {
  if (!((index >= 97 && index <= 122) || (index >= 65 && index <= 90)))
    return false;
  let targetIndex = index + number;
  if (index >= 97 && index <= 122) {
    if (targetIndex >= 122) {
      targetIndex = targetIndex - 122 + 96;
    }
  }
  if (index >= 65 && index <= 90) {
    if (targetIndex >= 90) {
      targetIndex = targetIndex - 90 + 65;
    }
  }
  return targetIndex;
}

function encrytString(string, number) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    let originCharCode = (string[i] + "").charCodeAt();
    let targetCharCode = getTagetChar(originCharCode, number);
    if (!targetCharCode) {
      arr.push(string[i]);
    } else {
      arr.push(String.fromCharCode(targetCharCode));
    }
  }
  return arr.join("");
}

console.log(encrytString("Hello, World! 123", 1));
