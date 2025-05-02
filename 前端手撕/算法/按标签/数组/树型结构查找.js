//树形结构,查找id对应的name
const data = [
  {
    id: 1,
    name: "前端",
    children: [
      {
        id: 1,
        name: "前端",
      },
      {
        id: 111,
        name: "移动端",
        children: [
          {
            id: 112,
            name: "ios",
          },
          {
            id: 113,
            name: "Andriod",
          },
        ],
      },
    ],
  },
];

const searchNameById = (data, id) => {
  for (let item of data) {
    if (item.id === id) {
      return item.name;
    } else if (item?.children) {
      return searchNameById(item?.children, id);
    }
  }
};

console.log(searchNameById(data, 111));
