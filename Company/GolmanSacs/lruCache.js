class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
    }
  
    get(key) {
      if (this.cache.has(key)) {
        // Move the accessed key to the end
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
      }
      return -1;
    }
  
    put(key, value) {
      if (this.cache.size >= this.capacity) {
        // Remove the least recently used key (first item in the Map)
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
      }
      this.cache.set(key, value);
    }
  }
  
  // Example usage:
  const lruCache = new LRUCache(3);
  lruCache.put(1, "One");
  lruCache.put(2, "Two");
  lruCache.put(3, "Three");
  
  console.log(lruCache.get(2)); // Output: "Two"
  console.log(lruCache.cache);   // Output: Map { 1 => 'One', 3 => 'Three', 2 => 'Two' }
  