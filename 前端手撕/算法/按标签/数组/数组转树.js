const items = [
  { id: 1, name: "Item 1", parentId: null },
  { id: 2, name: "Item 1.1", parentId: 1 },
  { id: 3, name: "Item 1.2", parentId: 1 },
  { id: 4, name: "Item 2", parentId: null },
  { id: 5, name: "Item 1.1.1", parentId: 2 },
];
const transformToTree = (items) => {
  const itemMap = new Map();
  items.forEach((item) => {
    itemMap.set(
      item.id,
      item.parentId === null ? { ...item, children: [] } : { ...item }
    );
  });

  const tree = [];
  items.forEach((item) => {
    if (!item.parentId) {
      tree.push(itemMap.get(item.id));
    } else {
      itemMap.get(item.parentId).children?.push(itemMap.get(item.id));
    }
  });
  return tree;
};

console.log(transformToTree(items));
