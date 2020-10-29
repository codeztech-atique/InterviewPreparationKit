var uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];
// var count = {};
// uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1;});
// console.log(count);


var count = {};
uniqueCount.forEach(function(i) {
    count[i] = (count[i]||0)+1;
})
console.log(count)

// var sum = (a) => {
//     return (b) => {
//         if(b) {
//           return sum(a+b)
//         } else {
//             return a;
//         }
       
//     }
// }

var sum = a => (b) => b ? sum(a+b) : a;

console.log(sum(2)(4)(6)());