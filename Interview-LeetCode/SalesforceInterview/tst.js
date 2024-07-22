

var groupAnagrams = function(strs) {
   const anagrams = new Map();
   for(let i = 0; i < strs.length; i++) {
      let elements = strs[i].split("").sort().join();
      if(!anagrams.has(elements)) {
          anagrams.set(elements, []);
      }
      anagrams.get(elements).push(strs[i]);
   }
   return Array.from(anagrams.values())
}
console.log(groupAnagrams(["ati", "ait", "tia", "dog", "god"]))