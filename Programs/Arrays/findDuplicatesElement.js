function findDuplicates(data) {
   var result = data.filter((value, index, self) => {
      return self.indexOf(value) !== index;  
   })   
   return result;
}

var arr = [1,2,3,4,1,2,4,3,5,6];
console.log("Find Duplicates Element from Array:", findDuplicates(arr));