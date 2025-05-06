const arrayToTree = (array) => {
  const root = [], map = new Map()
  array.map((item => {
    map.ser(item.id, {...item})
  }))
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    if (!item.parentId) {
      root.push(map.get(item.id))
    } else {
      const parentNode = map.get(item.parentId)
      parentNode.children || (parentNode.children = [])
      parentNode.children.push(map.get(item.id))
    }
  }
  return root
}


// 使用示例
const array = [
  { id: 1, name: "A", parentId: null },
  { id: 2, name: "B", parentId: 1 },
  { id: 3, name: "C", parentId: 1 },
  { id: 4, name: "D", parentId: 2 },
  { id: 5, name: "E", parentId: 2 },
  { id: 6, name: "F", parentId: 3 },
  { id: 7, name: "G", parentId: null },
];

const tree = arrayToTree(array);
console.log(tree);
