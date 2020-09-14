var arr = [1,2,0,0,3,0,0,4,5];


// 

// 1,2,4,5,3,0,0,0,0

// Time complexity - O(n^2)

// function abc (arr) {
//   for(var i=0;i<arr.length;i++) {
//       for(var j=i;j<arr.length;j++) {
//         if(arr[i] >= arr[j] && arr[i]!=0) {
//             var temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//       }
//   }
//   return arr;
// }

// O(n)
function sortArr(a, b) {
    return a-b;
}

// function abc (arr) {
//   var counter = arr.length;
  
// }
// console.log(arr.sort(sortArr));

function sortArr(arr) {
    var res = '';
    for(var i=0;i<arr.length;i++) {
        if(i === (arr.length-1)) {
            res =+ arr[i];
        } else {
            res =+ arr[i]+ ",";
        }
    }
    return res;
}
console.log(sortArr(arr));