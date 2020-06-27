//Array Sort using JavaSrcipt

function ArraySort(a, b) {
    return b-a;
}

var orginalArr = [4,6,1,2,88,10,111];
var copyArr = [...orginalArr];
console.log("ArraySort Using Javascript Predefined Method:", orginalArr.sort(ArraySort));

//Array Sort using ForLoop

function ArraySortUsingForLoop(data) {
   for(var i=0;i<data.length;i++) {
       for(var j=i+1;j<data.length;j++) {
           if(data[i] >= data[j]) {
               var temp = data[i];
               data[i] = data[j];
               data[j] = temp;
           }
       }
   }
   return data;
}

console.log("ArraySort Using Javascript for Loop:", ArraySortUsingForLoop(copyArr));