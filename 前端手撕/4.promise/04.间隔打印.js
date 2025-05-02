function printHelloWorld() {
  let timer = null;
  let startFlag = false;
  let endFlag = false;

  function execute() {
    console.log(startFlag, endFlag);

    if (startFlag && !endFlag) {
      // 注意定时器一旦开启只有通过timer标识清除，所以必须要赋值一个timer值
      timer = setInterval(() => {
        console.log("hello world");
      }, 5000);
    }
  }

  function _start() {
    startFlag = true;
    execute();
  }

  function _end() {
    endFlag = true;
    clearInterval(timer);
  }

  return [_start, _end];
}

const [startFn, endFn] = printHelloWorld();
startFn();
setTimeout(() => {
  endFn();
}, 20000);
