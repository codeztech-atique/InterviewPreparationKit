// Find the first repeating element

// First Approach
var arr1 = [2,5,2,1,1,3,44,6,0];

function firtRepeatingElement1(arr) {
   let counter = 0;
   let result; 
   for(let i=0;i<arr.length;i++) {
       for(let j=i+1;j<arr.length;j++) {
           if(arr[i] === arr[j]) {
               result = arr[i];
               counter++;
               break;
           }
       }
       if(counter > 0) {
           break;
       }
   }
   return result;
}

// Second Approach using Hash table
var arr2 = [2,5,1,90,3,44,6,0];

function firtRepeatingElement2(arr) {
   var res = {};
   var rep;
   for(let i=0;i<arr.length;i++) {
       if(Object.values(res).indexOf(arr[i]) > -1) {
           rep = arr[i]; 
           break; // data found in the object
       } else {
           res[i] = arr[i];
       }
   }
   console.log(res);
   return rep;
}


console.log(firtRepeatingElement1(arr1));
console.log(firtRepeatingElement2(arr2));