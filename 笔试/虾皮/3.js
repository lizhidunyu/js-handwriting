function format(name) {
  // write code here
  let str = "";
  if (name.includes("_")) {
    const arr = name.split("_");
    arr[0].split("").forEach((item, i) => {
      str += (item + "").toLocaleLowerCase();
    });
    arr[1].split("").forEach((item, i) => {
      if (i == 0) {
        str += item.toLocaleUpperCase();
      } else {
        str += item.toLocaleLowerCase();
      }
    });
  } else {
    let mid = 0;
    let index = 0;
    while (index < name.length) {
      let count = 0;
      while (
        index == 0 &&
        name[count].charCodeAt() >= 65 &&
        name[count].charCodeAt() <= 90
      ) {
        count++;
      }

      console.log(count);
      for (let i = count; i < name.length; i++) {
        if (name[i].charCodeAt() >= 65 && name[i].charCodeAt() <= 90) {
          mid = i;
          break;
        }
      }

      break;
    }
    console.log("mid:", mid);

    const left = name
      .slice(0, mid)
      .split("")
      .map((item) => item.toLocaleLowerCase())
      .join("");
    const right = name
      .slice(mid + 1)
      .split("")
      .map((item) => item.toLocaleLowerCase())
      .join("");
    str = left + name[mid] + right;
  }

  return str;
}

// console.log(format("test_Variable")); //"testVariable"
// console.log(format("TEST_VARIABLE")); //"testVariable"
console.log(format("RTEStttVAriable")); //"testVariable"
console.log("A".charCodeAt());
console.log("Z".charCodeAt());
