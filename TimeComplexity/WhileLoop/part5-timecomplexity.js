let i=0, n =10;

//While Loop
function TimeComplexity_WhileLoop() { 
    while(i<n) {
        console.log(i); // This will take n time
        i++; //this will take n time
    }
    console.log("Example 1 - Maximum Time Complexity because its repeating for N times: O(n)");
}

//For Loop Same like while Loop
function TimeComplexity_SingleForLoop() { 
    for(var i=1;i<=n;i++) {
        console.log(i);
    }
    console.log("Example 2 - Maximum Time Complexity because its repeating for N times: O(n)");
}

TimeComplexity_WhileLoop();
TimeComplexity_SingleForLoop();