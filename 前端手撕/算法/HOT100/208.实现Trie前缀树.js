var Trie = function () {
  this.children = {};
};

Trie.prototype.insert = (word) => {
  let node = this.children;
  for (const ch of word) {
    if (!node[ch]) {
      node[ch] = {};
    }
    // node不断下移
    node = node[ch];
  }
  // 如果移动到了根节点，设置isEnd属性为true
  node.isEnd = true;
};

Trie.prototype.search = (word) => {
  const node = this.startsWith(word);
  return node != undefined && node.isEnd !== undefined;
};

Trie.prototype.startWith = (word) => {
  let node = this.children;
  for (const ch of word) {
    if (!node[ch]) {
      return false;
    }
    node = node[ch];
  }
  return node;
};
