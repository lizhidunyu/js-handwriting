// request.js
function getRequest(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 2000);
  });
}

function* getEndRequest() {
  //  res => why
  const res = yield getRequest("why");
  const res1 = yield getRequest(res + "aaa");
  const res2 = yield getRequest(res1 + "bbb");
  console.log(res2);
}

/* 手动执行 */
const generator = getEndRequest();
generator.next().value.then((res) => {
  // res => why
  generator.next(res).value.then((res1) => {
    //   res1 => whyaaa
    generator.next(res1).value.then((res2) => {
      // res2 => whyaaabbb
      generator.next(res2);
    });
  });
});

/* 封装一个自动执行的函数 */
function execGenerator(getFn) {
  const generator = getFn();
  function exec(res) {
    const result = generator.next(res);
    if (res.done) return result.value;
    result.value.then((res) => {
      exec(res);
    });
  }

  exec();
}

/* async/await */
async function getEndRequest() {
  const res = await getRequest("why");
  const res1 = await getRequest(res + "aaa");
  const res2 = await getRequest(res1 + "bbb");
  console.log(res2);
}
console.log(getEndRequest());
