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

console.log(sum(1, 2)(32)());
console.log(sum(1)(2)(32)());
console.log(sum(1)(2)(32)());
console.log(sum(1)(2)());
console.log(sum(1)(2)(3,4)());


const infiniteCurry = (fn, seed) => {
    const reduceValue = (args, seedValue) =>
      args.reduce((acc, a) => {
        return fn.call(fn, acc, a);
      }, seedValue);
    const next = (...args) => {
      return (...x) => {
        if (!x.length) {
          return reduceValue(args, seed);
        }
        return next(...args, reduceValue(x, seed));
      };
    };
    return next();
  };


  
  const iSum = infiniteCurry((x, y) => x + y, 0);
  const iMul = infiniteCurry((x, y) => x * y, 1);
//   console.log(iSum(1)(3, 4)()); // 43
//   console.log(iMul(1)(3, 4)(5, 6)()); // 360
  console.log(iMul(1)(3, 4)); // 12s


  const _sum3 = (x, y) => x * y;

  const _sum4 = (p, q, r, s) => p + q + r + s;
  
  function curry(fn) {
    const N = fn.length;
    function innerFn(n, args) {
      return function actualInnerFn(a) {
        if(n <= 1) {
          return fn(...args, a);
        }
       return innerFn(n - 1, [...args, a]);
      }
    }
    return innerFn(N, [])
  }
  
  const sum2 = curry(_sum3);
  const sum3 = curry(_sum3);
  const sum4 = curry(_sum3);
  
//   console.log(sum3(2)(4)); // 8
//   console.log(sum3(1)(3)); // 3
//   console.log(sum4(1)(5)); // 6
  

