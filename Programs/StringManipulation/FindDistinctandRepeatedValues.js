function TestingFindDistinctValue(test) {
  var duplicates= "";
  
  //Find Duplicates
  for(var i=0;i<test.length;i++) {
      if(test.indexOf(test[i]) !== test.lastIndexOf(test[i])) {
        duplicates+=test[i];
      }
  }

  return duplicates;
}

function TestingFindDuplicateValue(test) {
    var distincts= "";
    //Find Distinct
    for(var i=0;i<test.length;i++) {
        if(distincts.indexOf(test[i])===-1) {
            distincts+=test[i];
        }
    }
  
    return distincts;
  }
  

var str = "A recursive function is a function that calls itself during its execution. This enables the function to repeat itself several times";

console.log("Find Distinct - ", TestingFindDistinctValue(str));
console.log("Find Duplicates - ", TestingFindDuplicateValue(str));