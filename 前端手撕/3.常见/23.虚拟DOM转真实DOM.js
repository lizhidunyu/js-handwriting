function getRealNode(vnode) {
    // 创建节点
    const { tag, data, value, type, children } = vnode
    let _node = null
    // 判断当前节点是文本节点还是标签节点
    if (type === 1) {
      _node = document.createElement(tag) //创建节点
      for (let key in data) {
        // 设置节点属性
        _node.setAttribute(key, data[key])
      }
      // 追加子节点
      for (let i = 0; i < children.length; i++) {
        // 设置节点属性
        _node.appendChild(getRealNode(children[i]))
      }
    } else if (type === 3) {
      _node = document.createTextNode(value)
    }
    return _node
  }
  