var uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];
var count = {};
uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1;});
console.log(count);

