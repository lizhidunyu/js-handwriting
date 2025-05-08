class LRUCache {
  constructor(capacity) {
    this.cache = new Map()
    this.capacity = capacity
  }
  get(key) {
    let temp
    if (this.cache.has(key)) {
      temp = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, temp)
    }
    return temp ?? -1
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    }
    this.cache.set(key, value)
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value)
    }
  }
}