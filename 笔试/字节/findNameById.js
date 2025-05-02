const findNameById = (data, id) => {
  for (const item of data) {
    if (item.id === id) {
      return item.name;
    }
    if (item.children) {
      // return findNameById(item.children, id); //
      const res = findNameById(item.children, id);
      if (res) {
        return res;
      }
    }
  }
  return null;
};

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
