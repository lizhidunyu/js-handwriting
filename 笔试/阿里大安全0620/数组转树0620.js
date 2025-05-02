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
  let rootObj = {};
  const map = new Map();
  for (let item of data) {
    map.set(item.id, { ...item, children: [] });
  }

  data.forEach((item) => {
    if (!item.parentId) {
      rootObj = map.get(item.id);
    } else {
      let parent = map.get(item.parentId);
      if (parent) {
        parent.children.push(map.get(item.id));
      }
    }
  });
  return rootObj;
}

const tree = transform(data);
console.log(JSON.stringify(tree, null, 2));
