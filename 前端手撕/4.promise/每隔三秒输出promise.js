function print(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(new Date());
      resolve(val);
    }, 3000);
  }).then((value) => {
    console.log(value);
    print(value + "a");
    // 也是一个递归的操作
  });
}

print("123");

// 123
// 123a
// 123aa
// 123aaa
