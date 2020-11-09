// var arr2 = [55,5,1,5,1,90,3,44,6];

var uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];

const countData = (arr) => {
    var obj = {};
    arr.filter(function(i) { 
      obj[i] = (obj[i]||0)+1;
    })
    return obj;
}
console.log(countData(uniqueCount))