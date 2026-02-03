// // 1 2 4 5 
// // 6 7 8 9
// // 1 8 0 3
// // 2 5 6 2


// class TwoDimentionalArr {
//     constructor(arr) {
//        this.arr = arr;
//     }
    
//     getOneD() {
//         let res = [];
//         for(let i = 0; i < this.arr.length; i++) {
//             for(let j = 0; j < this.arr[i].length; j++) {
//                 if(i == 0) {
//                     res.push(this.arr[i][j]);
//                 } else if(j == this.arr[i].length - 1) {
//                     res.push(this.arr[i][j]);
//                 } 
//                 else if(i == this.arr.length) {
//                     res.push(this.arr[i][j]);
//                 }  
//             }
//         }
//         return res;
//     }    
// }
  
// const twoDimArr = (arr) => {
//     let twoDArr = new TwoDimentionalArr(arr);
//     return twoDArr.getOneD();
// }

// var arr = [[1, 2, 4, 5],[6, 7, 8, 9],[1, 8, 0, 3],[2, 5, 6, 2]]
// console.log(twoDimArr(arr));

// const a = function() {
//     console.log('a' , this);
//     const b = function() {
//        console.log('b', this);
//        const c =  {
//           hi: function() {
//              console.log('c' , this);
//           }
//          }
//         c.hi();
//        }
//      b();
//     }
//   a();

console.log(this);