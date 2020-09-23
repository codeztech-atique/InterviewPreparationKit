const factorial = n => {
    let num = n;
  
    if (n === 0) return 1
    for (let i = 0; i < n; i++) {
      num = n * factorial(n - 1);
    };
    return num;
};
// factorial(1); 
console.log(factorial(5)); 
// factorial(10); 
// factorial(12); 

// Time Complexity O(n!)