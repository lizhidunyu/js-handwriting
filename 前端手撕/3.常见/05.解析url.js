const parseUrl = (url) => {
  const paramStr = /(?<=\?).+$/.exec(url)[0];
  const paramArr = paramStr.split("&");
  const paramObj = {};
  paramArr.forEach((item) => {
    let [key, value] = item.split("=");
    value = decodeURIComponent(value);
    if (/\d/.test(value)) {
      value = parseFloat(value);
    }
    paramObj[key] = paramObj.hasOwnProperty(key)
      ? [].concat(paramObj[key], value)
      : value;
  });
  return paramObj;
};

const url =
  "https://www.nowcoder.com/creation/write/dynamic?companyName=xhs&companyId=123&ncPageSource=%E9%9D%A2%E8%AF%95%E7%BB%8F%E9%AA%8C";
console.log(parseUrl(url));
