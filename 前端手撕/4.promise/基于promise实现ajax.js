const getData = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    // 主要是创建xhr对象
    xhr.open("GET", url, true);
    // 以及监听它的onreadystatechange和onerror方法
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return;
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.status));
      }
    };
    xhr.onerror = function () {
      reject(new Error(this.status));
    };
  });
};
