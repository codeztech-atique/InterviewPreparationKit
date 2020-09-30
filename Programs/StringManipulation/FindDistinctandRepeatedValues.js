function TestingFindDuplicateValue(test) {
  var duplicates= "";
  
  //Find Duplicates
  for(var i=0;i<test.length;i++) {
      if(test.indexOf(test[i]) !== test.lastIndexOf(test[i])) {
        duplicates+=test[i];
      }
  }

  return duplicates;
}

function TestingFindDistinctValue(test) {
    var distincts= "";
    //Find Distinct
    for(var i=0;i<test.length;i++) {
        if(distincts.indexOf(test[i])===-1) {
            distincts+=test[i];
        }
    }
  
    return distincts;
  }
  

var str = "bellla";

// console.log("Find Distinct - ", TestingFindDistinctValue(str));
console.log("Find Duplicates - ", TestingFindDuplicateValue(str));