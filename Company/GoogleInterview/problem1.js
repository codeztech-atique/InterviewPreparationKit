// For Google Asked Me 

const arr = [
    ["I", "am", "Sam"],
    ["I", "like", "green", "eggs", "and", "ham"],
    ["Sam", "I", "am"],
  ]
  
//   [
//     ["I"],
//   ]
  
//   "I" -> "am"
  
//   {
//      "I"
//   }
  
  class Cache {
     constructor() {
        this.children = new Map();
     }
  }
  
  class Node {
     constructor() {
        this.children = new Map();
     }
  }
  
  class Main {
     constructor() {
        this.root = new Node();
        this.cache = new Cache();
     }
    
     cache(key) {
        console.log("I am coming")
        if(this.cache.children.has(key)) {
            return this.cache.children.get(key);
        }
        return false;
     } 
    
     getValue(key) {
        let curr = this.root;
        let result = "";
        for(const entry of curr.children.entries()) {
            let word = entry[1];
            curr = entry[2];

            if(word == key) {
             //   this.cache.children.set(key, curr.children.get(key));
              result  = curr.children.get(key);
            } 
            //search(node, key);
        }
        return result;
     }
      
     insert(arr) {
        let curr = this.root;
        for(let i = 0; i < arr.length; i++) {
          for(let j = 0; j < arr[i].length; j++) {
              if(!curr.children.has(arr[i][j]) && j != arr[i].length - 1)
              {
                  curr.children.set(arr[i][j], arr[i][j+1]);
              }
              //curr = curr.children.get(arr[i][j]);
           }
        }
     }
     
  }
  
  const main = new Main();
  
  main.insert(arr);
  
  main.getValue("I");
  
  main.getValue("I");
  
