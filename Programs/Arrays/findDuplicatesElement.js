function findDuplicates(data) {
   var result = data.filter((value, index, self) => {
      return self.indexOf(value) !== index;  
   })   
   return result;
}

function Duplicateds(data) {
  var result = data.filter((a, b, c) => {
     return c.indexOf(a) !== b;
  })
  return result
}

var arr = [1,1,1,1];
console.log("Find Duplicates Element from Array:", Duplicateds(arr));