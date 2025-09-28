exports = {};

class LRUCache {
    lruMap: any;
    capacity: any;
    constructor(capacity: number) {
        this.lruMap = new Map();
        this.capacity = capacity;
    }

    get(key: number): number {
        if(!this.lruMap.has(key)) return -1;
        let value = this.lruMap.get(key);
        this.lruMap.delete(key);
        this.lruMap.set(key, value);
        return value;
    }

    put(key: number, value: number): void {
      if(this.lruMap.has(key)) {
        this.lruMap.delete(key);
        this.lruMap.set(key, value);
        return;
      } 
      
      if(this.lruMap.size >= this.capacity) {
        let element = this.lruMap.keys().next().value as number;
        this.lruMap.delete(element);
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