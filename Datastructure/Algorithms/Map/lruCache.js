class LRUCache {
  constructor(capacity) {
      this.lruMap = new Map();
      this.capacity = capacity;
  }

  get(key) {
     if(!this.lruMap.has(key)) return -1;
     let value = this.lruMap.get(key);
     this.lruMap.delete(key);
     this.lruMap.set(key, value);
     return value;
  }

  put(key, value) {
      if(this.lruMap.has(key)) {
          this.lruMap.delete(key);
          this.lruMap.set(key, value);
          return;
      } if(this.lruMap.size >= this.capacity) {
          let elementKey = this.lruMap.keys().next().value;
          this.lruMap.delete(elementKey);
      }
      this.lruMap.set(key, value);
  }
}

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/