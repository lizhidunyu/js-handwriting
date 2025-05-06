/***********************************************************************/
const find = (obj, path) => {
  const arr = Array.isArray(path) ? path : path.split(".");
  obj = obj[arr[0]]
    if (obj && arr.length > 1) {
    return find(obj, arr.slice(1));
  }
  return obj ?? -1
}

const obj = {
  a: {
    b: {
      c: {
        d: "124",
      },
      e: {
        f: "1222",
      },
    },
  },
};


console.log(find(obj, "a.b.c.d"));
console.log(find(obj, "a.b.e.f"));
console.log(find(obj, "a.b.f"));

/***********************************************************************/
const findNameById = (data, id) => {
  for (const item of data) {
    if (item.id === id) {
      return item.name
    }  
    if (item?.children?.length) {
      const res = findNameById(item.children, id)
      if (res) return res
    }
  }
  return null
}

const data = [
  {
    id: 1,
    name: "aa",
    children: [
      {
        id: 2,
        name: "aaa",
        children: [
          {
            id: 3,
            name: "aaabbb",
          },
          {
            id: 5,
            name: "dddd",
          },
        ],
      },
      {
        id: 6,
        name: "ccc",
      },
    ],
  },
];

console.log(findNameById(data, 6));
// console.log(findNameById(data, 5));
// console.log(findNameById(data, 1));
// console.log(findNameById(data, 4));
