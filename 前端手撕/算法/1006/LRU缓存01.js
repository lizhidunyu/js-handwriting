class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    let tmp;
    if (this.cache.has(key)) {
      tmp = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, tmp);
    }
    return tmp ?? -1;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}
