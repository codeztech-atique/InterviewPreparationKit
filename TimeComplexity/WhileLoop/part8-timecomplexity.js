let i=1, n=10, k=1;

//While Loop
function TimeComplexity_WhileLoop() { 
    while(k<n) {
        k=k+i;
        console.log(i);
        i++;
    }
    console.log("Example 1 - Maximum Time Complexity: O(√n)");
}

//For Loop Same like while Loop
function TimeComplexity_SingleForLoop() {
    for(var k=1,i=1;k<n;i++) { // Passed 4 parameters for the for loop
        k=k+i;
        console.log(i);
    }
    console.log("Example 2 - Maximum Time Complexity: O(√n)");
}

TimeComplexity_WhileLoop();
TimeComplexity_SingleForLoop();