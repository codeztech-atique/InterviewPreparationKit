function findDistinctElement(data) {
    var result = [];
    for(var i=0;i<data.length;i++) {
       if(result.indexOf(data[i])===-1) {
           result.push(data[i]);
           break;
       }
    }
    return result;
}

function Distinct(data) {
   var result = [];
   data.forEach(element => {
       if(result.indexOf(element) === -1) {
           result.push(element);
       }
   });
   return result;
}


// var arr = [1,2,3,4,1,2,4,3,5,6];
var arr = [4,1,2,1,2];
console.log("Find Distinct Element from Array:", Distinct(arr));
// console.log("Find Distinct Element from Array:", Distinct(arr));
console.log("Find Duplicateds Element from Array:", findDistinctElement(arr));