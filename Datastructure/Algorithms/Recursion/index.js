function print1ToN(n) {
  if (n === 0) return;        // base case
  print1ToN(n - 1);           // solve smaller problem
  console.log(n);             // work after recursion
}


print1ToN(5); // 1 2 3 4 5
