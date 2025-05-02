const obj = {
  a: {
    b: {
      c: 11,
      d: 1,
    },
  },
  e: {
    f: 1,
  },
};

const transformToObj = (obj, parentKey, resObj = {}) => {
  for (const key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      transformObj(value, newKey, resObj);
    } else {
      resObj[newKey] = value;
    }
  }
  return resObj;
};

console.log(transformToObj(obj));
