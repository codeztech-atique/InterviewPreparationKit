var arr1 = ['a', 'b', 'c', 'd'];
var arr2 = ['x', 'y', 'd'];


// O(n^2) Quadratic X not efficiant
function findElement1(arr1, arr2) {
    for(var i=0;i<arr1.length;i++) {
        for(var j=0;j<arr2.length;j++) {
            if(arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
}

// console.log(findElement1(arr1, arr2))
// O ( a + b )
function findElement2(arr1, arr2) {
  var obj1 = {};
  for(var i=0;i<arr1.length;i++) {
      if(!obj1[arr1[i]]) {
          obj1[arr1[i]] = true;
      }
  }
  console.log(obj1);

  for(var i=0;i<arr2.length;i++) {
    if(obj1[arr2[i]]) {
        return true;
    }
  }
  return false;
}
console.log(findElement2(arr1, arr2));

function findElement3(arr1, arr2) {
    return arr1.some(data => arr2.includes(data))
}

// console.log(findElement3(arr1, arr2));

