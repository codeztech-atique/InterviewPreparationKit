let n = 10;
function TimeComplexity_SingleForLoopPlusPlus() { 
    for(var i=1;i<=n;i++) {
        console.log(i);
    }
    console.log("Example 1 - Maximum Time Complexity because its repeating for N times: O(n)");
}

function TimeComplexity_SingleForLoopMinusMinus() { 
    for(var i=n;i>=1;i--) {
        console.log(i);
    }
    console.log("Example 2 - Maximum Time Complexity because its repeating for N times: O(n)");
}

function TimeComplexity_ForLoop() { 
    for(var i=1;i<=n;i++) { //Example 1 O(n)
        console.log(i);
    }
    for(var i=1;i<=n;i++) { //Example 2 O(n)
        console.log(i);
    } // O(n+n) = O(2n) = O(n)
    console.log("Example 3 - Maximum Time Complexity because its repeating for N times: O(n)");
    console.log("Example 4 - Maximum Time Complexity because its repeating for N times: O(n)");
    console.log("Example 5 - Maximum If we combine first 2 forloop time complexity is n+n = 2n its not n square, so again it is: O(n)");
}
TimeComplexity_SingleForLoopPlusPlus();
TimeComplexity_SingleForLoopMinusMinus();
TimeComplexity_ForLoop();



let i=0, m =10;

//While Loop
function TimeComplexity_WhileLoop() { 
    while(i<m) {
        console.log(i); // This will take n time
        i++; //this will take n time
    }
    console.log("Example 6 - Maximum Time Complexity because its repeating for N times: O(n)");
}

//For Loop Same like while Loop
function TimeComplexity_SingleForLoop() { 
    for(var i=1;i<=m;i++) {
        console.log(i);
    }
    console.log("Example 7 - Maximum Time Complexity because its repeating for N times: O(n)");
}

TimeComplexity_WhileLoop();
TimeComplexity_SingleForLoop();