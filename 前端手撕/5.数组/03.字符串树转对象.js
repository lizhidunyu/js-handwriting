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
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : `${key}`
    const value = obj[key]
    if (typeof value === 'object' && value !== 'null') {
      transformToObj(value, newKey, resObj)
    } else {
      resObj[newKey] = value
    }
  }
  return resObj
}



console.log(transformToObj(obj));
