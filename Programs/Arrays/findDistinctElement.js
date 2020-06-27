function findDistinctElement(data) {
    var result = [];
    for(var i=0;i<data.length;i++) {
       if(result.indexOf(data[i])===-1) {
           result.push(data[i]);
       }
    }
    return result;
}

var arr = [1,2,3,4,1,2,4,3,5,6];
console.log("Find Distinct Element from Array:", findDistinctElement(arr));