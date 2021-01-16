// let sum = (a) => {
//     return (b) => {
//        if(b) {
//            return sum(a + b);
//        }
//        return a;
//     }
// }

let sum = a => b => b ? sum(a+b) : a ;

// let sum = a => b => b ? sum(a + b) : a;



console.log(sum(1)(2)(32)());
console.log(sum(1)(2)(32)());