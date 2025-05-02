const data = [
  {
    id: 1,
    name: "i1",
  },
  {
    id: 2,
    name: "i2",
    parentId: 1,
  },
  {
    id: 4,
    name: "i4",
    parentId: 3,
  },
  {
    id: 3,
    name: "i3",
    parentId: 2,
  },
];

function transform(data) {
  let res = {};
  const map = new Map();
  data.forEach((item) => {
    map.set(item.id, { ...item, children: [] });
  });
  for (let item of data) {
    if (!item.parentId) {
      res = map.get(item.id);
    } else {
      const parentNode = map.get(item.parentId);
      if (parentNode) {
        parentNode.children.push(map.get(item.id));
      }
    }
  }
  console.log(map);
  return res;
}

const tree = transform(data);
console.log(JSON.stringify(tree, null, 2));
