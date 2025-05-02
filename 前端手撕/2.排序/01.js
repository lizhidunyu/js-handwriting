function interval() {
  setTimeout(() => {
    console.log("1");
    interval();
  }, 1000);
}

interval();

setInterval(() => {
  console.log("2");
}, 1000);
