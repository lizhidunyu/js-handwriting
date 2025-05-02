let res = null;
const getValue = (obj, str, path = "") => {
  console.log("obj", obj, "key", "path", path);
  if (path.slice(1) === str) {
    // console.log("****");
    // return obj;
    res = obj;
  } else {
    if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        getValue(item, str, path + `.[${index}]`);
      });
    } else if (typeof obj === "object") {
      for (const key in obj) {
        getValue(obj[key], str, path + `.${key}`);
      }
    }
  }
  return res;
};

const obj = {
  a: {
    b: {
      c: [
        { d1: 1, d2: 2 },
        { d3: 3, d4: 4 },
      ],
    },
  },
};
const str = "a.b.c.[0].d2";
console.log(getValue(obj, str));
